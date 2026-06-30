import { useEffect, useRef, useState } from "react";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";

type GhlBookingEmbedProps = {
  src?: string;
  iframeId?: string;
  title?: string;
};

const DEFAULT_HEIGHT = 680;
const GHL_SCRIPT = domesticBookingEmbed.scriptSrc;
const GHL_SCRIPT_LEGACY = "https://link.nobleleads.uk/js/form_embed.js";

const parseIframeSizerHeight = (data: string, expectedId: string): number | null => {
  if (!data.startsWith("[iFrameSizer]")) return null;
  const [id, height] = data.slice(13).split(":");
  if (id !== expectedId) return null;
  const parsed = Number.parseInt(height ?? "", 10);
  return parsed > 0 ? parsed : null;
};

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
}: GhlBookingEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    showIframe(iframe);
    ensureGhlEmbedScripts();

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      const nextHeight = parseIframeSizerHeight(event.data, iframeId);
      if (nextHeight) setHeight(nextHeight);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [iframeId]);

  return (
    <div className="max-w-full min-w-0" style={{ height }}>
      <iframe
        ref={iframeRef}
        src={src}
        id={iframeId}
        title={title}
        scrolling="no"
        data-initial-iframe-hidden="false"
        style={{
          width: "100%",
          height,
          border: "none",
          overflow: "hidden",
          display: "block",
        }}
      />
    </div>
  );
};

export default GhlBookingEmbed;
