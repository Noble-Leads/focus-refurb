import { useEffect } from "react";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import { ghlEmbedFrameClassName, parseWidgetId, useGhlEmbedResize } from "@/lib/ghlEmbedResize";

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

const GhlBookingEmbed = ({
  src = domesticBookingEmbed.src,
  iframeId = domesticBookingEmbed.iframeId,
  title = domesticBookingEmbed.title,
  initialHeight = DEFAULT_HEIGHT,
}: GhlBookingEmbedProps) => {
  const widgetId = parseWidgetId(src) ?? domesticBookingEmbed.bookingId;
  const { iframeRef, minHeight, isMobile } = useGhlEmbedResize({
    iframeId,
    widgetId,
    initialHeight,
    useBookingFallback: true,
    variant: "booking",
  });

  useEffect(() => {
    ensureGhlEmbedScripts();
  }, []);

  return (
    <div className={ghlEmbedFrameClassName("booking")}>
      <iframe
        ref={iframeRef}
        src={src}
        id={iframeId}
        title={title}
        className="block w-full"
        scrolling={isMobile ? "yes" : "no"}
        data-initial-iframe-hidden="false"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-height={String(minHeight)}
        data-layout-iframe-id={iframeId}
        data-form-id={widgetId}
      />
    </div>
  );
};

export default GhlBookingEmbed;
