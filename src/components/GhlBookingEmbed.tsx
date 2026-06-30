import { useEffect, useRef } from "react";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";

type GhlBookingEmbedProps = {
  src?: string;
  iframeId?: string;
  scriptSrc?: string;
  title?: string;
  minHeightClassName?: string;
};

const GHL_ORIGINS = [
  "https://app.focusrefurbishmentltd.com",
  "https://link.nobleleads.uk",
];

const parseEmbedHeight = (data: unknown): number | null => {
  if (typeof data === "number" && data > 0) return data;
  if (typeof data !== "object" || data === null) return null;

  const record = data as Record<string, unknown>;
  const candidates = [record.height, record.embedHeight, record["embed-height"], record.scrollHeight];

  for (const value of candidates) {
    if (typeof value === "number" && value > 0) return value;
    if (typeof value === "string") {
      const parsed = Number.parseInt(value, 10);
      if (parsed > 0) return parsed;
    }
  }

  return null;
};

const GhlBookingEmbed = ({
  src = domesticBookingEmbed.src,
  iframeId = domesticBookingEmbed.iframeId,
  scriptSrc = domesticBookingEmbed.scriptSrc,
  title = domesticBookingEmbed.title,
  minHeightClassName = domesticBookingEmbed.minHeightClassName,
}: GhlBookingEmbedProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [scriptSrc]);

  useEffect(() => {
    const iframe = iframeRef.current;
    const wrapper = wrapperRef.current;
    if (!iframe || !wrapper) return;

    const applyHeight = (height: number) => {
      const next = Math.max(height, 960);
      iframe.style.height = `${next}px`;
      wrapper.style.minHeight = `${next}px`;
    };

    const onMessage = (event: MessageEvent) => {
      if (!GHL_ORIGINS.some((origin) => event.origin.startsWith(origin))) return;

      let height = parseEmbedHeight(event.data);

      if (!height && typeof event.data === "string") {
        try {
          height = parseEmbedHeight(JSON.parse(event.data));
        } catch {
          // Not JSON — ignore
        }
      }

      if (height) applyHeight(height);
    };

    window.addEventListener("message", onMessage);

    const observer = new ResizeObserver(() => {
      try {
        const doc = iframe.contentDocument;
        if (!doc?.body) return;
        applyHeight(doc.body.scrollHeight);
      } catch {
        // Cross-origin — rely on postMessage from GHL embed script
      }
    });

    observer.observe(iframe);

    return () => {
      window.removeEventListener("message", onMessage);
      observer.disconnect();
    };
  }, [iframeId]);

  return (
    <div ref={wrapperRef} className={`max-w-full min-w-0 ${minHeightClassName}`}>
      <iframe
        ref={iframeRef}
        src={src}
        style={{ width: "100%", border: "none", display: "block", height: "960px", minHeight: "960px" }}
        scrolling="yes"
        id={iframeId}
        title={title}
        className="w-full"
      />
    </div>
  );
};

export default GhlBookingEmbed;
