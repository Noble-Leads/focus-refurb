import { useEffect, useState } from "react";

type GhlFormEmbedProps = {
  src: string;
  title: string;
  iframeId: string;
  formName: string;
  formId: string;
  phoneDisplay: string;
  phoneHref: string;
  minHeightClassName?: string;
  iframeHeight?: string;
  wrapperClassName?: string;
  successRedirectPath?: string;
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
  iframeHeight = "100%",
  wrapperClassName = "",
  successRedirectPath = "/thank-you",
}: GhlFormEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

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
        event.origin.includes("gohighlevel.com");

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
    <div className={`relative ${minHeightClassName} ${wrapperClassName}`.trim()}>
      <iframe
        src={src}
        style={{ width: "100%", height: iframeHeight, border: "none", borderRadius: "8px" }}
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

      {showFallback && !isLoaded && (
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
