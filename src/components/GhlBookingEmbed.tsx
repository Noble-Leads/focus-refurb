import { useEffect, useRef, useState } from "react";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import {
  mobileBookingFallbackHeight,
  parseIframeSizerHeight,
  parseWidgetId,
} from "@/lib/ghlEmbedResize";

type GhlBookingEmbedProps = {
  src?: string;
  iframeId?: string;
  title?: string;
  /** Starting height before GHL resize messages arrive */
  initialHeight?: number;
};

const GHL_SCRIPT = domesticBookingEmbed.scriptSrc;
const GHL_SCRIPT_LEGACY = "https://link.nobleleads.uk/js/form_embed.js";
const DEFAULT_HEIGHT = 720;

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

const showIframe = (iframe: HTMLIFrameElement) => {
  iframe.setAttribute("data-initial-iframe-hidden", "false");
  iframe.style.opacity = "1";
  iframe.style.visibility = "visible";
  iframe.style.pointerEvents = "auto";
};

const GhlBookingEmbed = ({
  src = domesticBookingEmbed.src,
  iframeId = domesticBookingEmbed.iframeId,
  title = domesticBookingEmbed.title,
  initialHeight = DEFAULT_HEIGHT,
}: GhlBookingEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetId = parseWidgetId(src) ?? domesticBookingEmbed.bookingId;
  const startingHeight = mobileBookingFallbackHeight(initialHeight);
  const [height, setHeight] = useState(startingHeight);

  const applyHeight = (nextHeight: number) => {
    setHeight((current) => Math.max(current, nextHeight));
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    showIframe(iframe);
    ensureGhlEmbedScripts();

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      const nextHeight = parseIframeSizerHeight(event.data, iframeId, widgetId);
      if (nextHeight) applyHeight(nextHeight);
    };

    const fallbackTimers = [600, 1500, 3000, 5000].map((delay) =>
      window.setTimeout(() => applyHeight(startingHeight), delay),
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        applyHeight(startingHeight);
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
  }, [iframeId, widgetId, startingHeight]);

  return (
    <div className="max-w-full min-w-0 overflow-visible">
      <iframe
        ref={iframeRef}
        src={src}
        id={iframeId}
        title={title}
        scrolling="no"
        data-initial-iframe-hidden="false"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-height={String(startingHeight)}
        data-layout-iframe-id={iframeId}
        data-form-id={widgetId}
        style={{
          width: "100%",
          height,
          border: "none",
          display: "block",
        }}
        onLoad={() => applyHeight(startingHeight)}
      />
    </div>
  );
};

export default GhlBookingEmbed;
