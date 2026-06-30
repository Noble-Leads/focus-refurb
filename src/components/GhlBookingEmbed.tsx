import { useEffect } from "react";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";

type GhlBookingEmbedProps = {
  src?: string;
  iframeId?: string;
  scriptSrc?: string;
  title?: string;
  minHeightClassName?: string;
};

const GhlBookingEmbed = ({
  src = domesticBookingEmbed.src,
  iframeId = domesticBookingEmbed.iframeId,
  scriptSrc = domesticBookingEmbed.scriptSrc,
  title = domesticBookingEmbed.title,
  minHeightClassName = domesticBookingEmbed.minHeightClassName,
}: GhlBookingEmbedProps) => {
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

  return (
    <div className={`max-w-full min-w-0 overflow-hidden ${minHeightClassName}`}>
      <iframe
        src={src}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id={iframeId}
        title={title}
        className="w-full min-h-[680px]"
      />
    </div>
  );
};

export default GhlBookingEmbed;
