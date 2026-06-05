import { useEffect, useRef, useState } from "react";

type GhlFormEmbedProps = {
  src: string;
  title: string;
  iframeId: string;
  formName: string;
  formId: string;
  phoneDisplay: string;
  phoneHref: string;
  minHeightClassName?: string;
  /** Used below the md breakpoint when set */
  mobileMinHeightClassName?: string;
  iframeHeight?: string;
  /** Used below the md breakpoint when set */
  mobileIframeHeight?: string;
  wrapperClassName?: string;
  successRedirectPath?: string;
  embedScriptSrc?: string;
  /** Defer iframe src until idle / near-viewport — improves LCP on landing pages */
  deferLoad?: boolean;
};

const FALLBACK_TIMEOUT_MS = 12000;

const containsSuccessKeyword = (value: string) => {
  const normalized = value.toLowerCase();
  return (
    normalized.includes("submitted") ||
    normalized.includes("success") ||
    normalized.includes("form_submit") ||
    normalized.includes("formsubmit") ||
    normalized.includes("submission")
  );
};

const tryParseData = (data: unknown) => {
  if (typeof data !== "string") {
    return data;
  }

  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};

const safeToText = (value: unknown) => {
  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value ?? "");
  } catch {
    return "";
  }
};

const GhlFormEmbed = ({
  src,
  title,
  iframeId,
  formName,
  formId,
  phoneDisplay,
  phoneHref,
  minHeightClassName = "min-h-[600px]",
  mobileMinHeightClassName,
  iframeHeight = "100%",
  mobileIframeHeight,
  wrapperClassName = "",
  successRedirectPath = "/thank-you",
  embedScriptSrc,
  deferLoad = false,
}: GhlFormEmbedProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoadFrame, setShouldLoadFrame] = useState(!deferLoad);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [resolvedIframeHeight, setResolvedIframeHeight] = useState(iframeHeight);
  const [resolvedMinHeightClass, setResolvedMinHeightClass] = useState(minHeightClassName);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateSizing = () => {
      const isDesktop = mediaQuery.matches;
      setResolvedIframeHeight(!isDesktop && mobileIframeHeight ? mobileIframeHeight : iframeHeight);
      setResolvedMinHeightClass(!isDesktop && mobileMinHeightClassName ? mobileMinHeightClassName : minHeightClassName);
    };

    updateSizing();
    mediaQuery.addEventListener("change", updateSizing);
    return () => mediaQuery.removeEventListener("change", updateSizing);
  }, [iframeHeight, mobileIframeHeight, minHeightClassName, mobileMinHeightClassName]);

  useEffect(() => {
    if (!deferLoad || shouldLoadFrame) {
      return;
    }

    const activate = () => setShouldLoadFrame(true);
    const wrapper = wrapperRef.current;

    const onIdle = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(activate, { timeout: 2800 });
      } else {
        window.setTimeout(activate, 1800);
      }
    };

    if (wrapper && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            activate();
            observer.disconnect();
          }
        },
        { rootMargin: "80px 0px", threshold: 0.01 }
      );
      observer.observe(wrapper);
      onIdle();
      return () => observer.disconnect();
    }

    onIdle();
  }, [deferLoad, shouldLoadFrame]);

  useEffect(() => {
    if (!embedScriptSrc || !shouldLoadFrame) {
      return;
    }

    const existingScript = document.querySelector(`script[src="${embedScriptSrc}"]`);
    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = embedScriptSrc;
    script.defer = true;
    document.body.appendChild(script);
  }, [embedScriptSrc, shouldLoadFrame]);

  useEffect(() => {
    if (isLoaded) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setShowFallback(true);
    }, FALLBACK_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    setShowFallback(false);
  };

  const handleError = () => {
    setShowFallback(true);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const parsedData = tryParseData(event.data);
      const sourceText = safeToText(parsedData);
      const hasFormId = sourceText.includes(formId);
      const hasSuccess = containsSuccessKeyword(sourceText);
      const trustedOrigin =
        event.origin.includes("nobleleads.uk") ||
        event.origin.includes("leadconnectorhq.com") ||
        event.origin.includes("gohighlevel.com") ||
        event.origin.includes("focusrefurbishmentltd.com");

      if (!hasSuccess || (!hasFormId && !trustedOrigin)) {
        return;
      }

      window.location.assign(successRedirectPath);
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [formId, successRedirectPath]);

  return (
    <div
      ref={wrapperRef}
      className={`relative ${resolvedMinHeightClass} ${wrapperClassName}`.trim()}
      onPointerDown={() => {
        if (deferLoad && !shouldLoadFrame) {
          setShouldLoadFrame(true);
        }
      }}
    >
      {!shouldLoadFrame && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 px-4 text-center"
          aria-hidden={false}
        >
          <p className="text-sm text-muted-foreground mb-3">Quote form loads in a moment…</p>
          <button
            type="button"
            className="text-sm font-semibold text-gold underline underline-offset-2"
            onClick={() => setShouldLoadFrame(true)}
          >
            Load form now
          </button>
        </div>
      )}
      {shouldLoadFrame && (
      <iframe
        src={src}
        style={{ width: "100%", height: resolvedIframeHeight, border: "none", borderRadius: "8px" }}
        id={iframeId}
        loading="lazy"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        title={title}
        onLoad={handleLoad}
        onError={handleError}
      />
      )}

      {showFallback && !isLoaded && shouldLoadFrame && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-amber-300 bg-amber-100/95 p-6 text-center">
          <p className="text-amber-900 font-medium leading-relaxed">
            Our quote form is taking longer than expected to load. Please call us on{" "}
            <a href={phoneHref} className="underline font-semibold">
              {phoneDisplay}
            </a>{" "}
            and we will help you right away.
          </p>
        </div>
      )}
    </div>
  );
};

export default GhlFormEmbed;
