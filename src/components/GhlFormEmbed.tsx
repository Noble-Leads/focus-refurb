import { useEffect, useRef, useState } from "react";
import { ghlFormSrc } from "@/lib/ghlForm";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import {
  isMobileViewport,
  parseIframeSizerHeight as parseGhlIframeSizerHeight,
} from "@/lib/ghlEmbedResize";

const GHL_SCRIPT = domesticBookingEmbed.scriptSrc;
const GHL_SCRIPT_LEGACY = "https://link.nobleleads.uk/js/form_embed.js";
const MOBILE_TALL_FORM_BOOST = 180;

const ensureGhlEmbedScripts = () => {
  for (const scriptSrc of [GHL_SCRIPT, GHL_SCRIPT_LEGACY]) {
    if (document.querySelector(`script[src="${scriptSrc}"]`)) continue;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }
};

const isMobileViewportCheck = isMobileViewport;

const mobileFallbackHeight = (initialHeight: number) => {
  if (!isMobileViewportCheck()) return initialHeight;
  if (initialHeight >= 800) return initialHeight + MOBILE_TALL_FORM_BOOST;
  if (initialHeight >= 650) return initialHeight + 80;
  return initialHeight;
};

const parseIframeHeight = (iframeHeight: string, fallback: number) => {
  const parsed = Number.parseInt(iframeHeight, 10);
  return parsed > 0 ? parsed : fallback;
};

const parseIframeSizerHeight = (data: string, iframeId: string, formId: string) =>
  parseGhlIframeSizerHeight(data, iframeId, formId);

type GhlFormEmbedProps = {
  src: string;
  title: string;
  iframeId: string;
  formName: string;
  formId: string;
  /** Maps to GHL's hidden Source field via ?source= */
  source?: string;
  iframeHeight?: string;
  minHeightClassName?: string;
  wrapperClassName?: string;
  /** Grow iframe height with form content — no inner scroll box */
  autoResize?: boolean;
};

const GhlFormEmbed = ({
  src,
  title,
  iframeId,
  formName,
  formId,
  source,
  iframeHeight = "672px",
  minHeightClassName = "min-h-[672px]",
  wrapperClassName = "",
  autoResize = true,
}: GhlFormEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const initialHeight = parseIframeHeight(iframeHeight, 672);
  const [height, setHeight] = useState(() => mobileFallbackHeight(initialHeight));

  const applyHeight = (nextHeight: number) => {
    setHeight((current) => Math.max(current, nextHeight));
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";

    ensureGhlEmbedScripts();

    if (!autoResize) return;

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      const nextHeight = parseIframeSizerHeight(event.data, iframeId, formId);
      if (nextHeight) applyHeight(nextHeight);
    };

    const fallbackTimers = [800, 2000, 4000].map((delay) =>
      window.setTimeout(() => {
        applyHeight(mobileFallbackHeight(initialHeight));
      }, delay),
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        applyHeight(mobileFallbackHeight(initialHeight));
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );
    observer.observe(iframe);

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      fallbackTimers.forEach(window.clearTimeout);
      observer.disconnect();
    };
  }, [iframeId, formId, autoResize, initialHeight]);

  const wrapperClasses = autoResize
    ? `max-w-full min-w-0 overflow-visible ${wrapperClassName}`.trim()
    : `max-w-full min-w-0 overflow-hidden ${minHeightClassName} ${wrapperClassName}`.trim();

  return (
    <div className={wrapperClasses}>
      <iframe
        ref={iframeRef}
        src={ghlFormSrc(src, source)}
        style={{
          width: "100%",
          height: autoResize ? height : iframeHeight,
          border: "none",
          borderRadius: "4px",
          display: "block",
        }}
        scrolling="no"
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(mobileFallbackHeight(initialHeight))}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        data-initial-iframe-hidden="false"
        title={title}
        onLoad={() => applyHeight(mobileFallbackHeight(initialHeight))}
      />
    </div>
  );
};

export default GhlFormEmbed;
