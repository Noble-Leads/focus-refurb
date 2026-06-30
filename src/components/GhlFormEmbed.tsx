import { useEffect, useRef, useState } from "react";
import { ghlFormSrc } from "@/lib/ghlForm";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";

const GHL_SCRIPT = domesticBookingEmbed.scriptSrc;
const GHL_SCRIPT_LEGACY = "https://link.nobleleads.uk/js/form_embed.js";

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

const parseIframeSizerHeight = (data: string, expectedId: string): number | null => {
  if (!data.startsWith("[iFrameSizer]")) return null;
  const [id, height] = data.slice(13).split(":");
  if (id !== expectedId) return null;
  const parsed = Number.parseInt(height ?? "", 10);
  return parsed > 0 ? parsed : null;
};

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
  iframeHeight = "502px",
  minHeightClassName = "min-h-[502px]",
  wrapperClassName = "",
  autoResize = false,
}: GhlFormEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(() => {
    const parsed = Number.parseInt(iframeHeight, 10);
    if (autoResize) return parsed > 0 ? parsed : 520;
    return parsed > 0 ? parsed : 502;
  });

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
      const nextHeight = parseIframeSizerHeight(event.data, iframeId);
      if (nextHeight) setHeight(nextHeight);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [iframeId, autoResize]);

  const wrapperClasses = autoResize
    ? `max-w-full min-w-0 ${wrapperClassName}`.trim()
    : `max-w-full min-w-0 overflow-hidden ${minHeightClassName} ${wrapperClassName}`.trim();

  return (
    <div className={wrapperClasses} style={autoResize ? { height } : undefined}>
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
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        data-initial-iframe-hidden="false"
        title={title}
      />
    </div>
  );
};

export default GhlFormEmbed;
