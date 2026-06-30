import { useEffect } from "react";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import { parseWidgetId, useGhlEmbedResize } from "@/lib/ghlEmbedResize";

type GhlBookingEmbedProps = {
  src?: string;
  iframeId?: string;
  title?: string;
  initialHeight?: number;
};

const GHL_SCRIPT = domesticBookingEmbed.scriptSrc;
const GHL_SCRIPT_LEGACY = "https://link.nobleleads.uk/js/form_embed.js";
const DEFAULT_HEIGHT = domesticBookingEmbed.initialHeight;

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
  const { iframeRef } = useGhlEmbedResize({
    iframeId,
    widgetId,
    initialHeight,
    variant: "booking",
  });

  useEffect(() => {
    ensureGhlEmbedScripts();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      id={iframeId}
      title={title}
      className="ghl-embed-iframe block w-full max-w-full border-0 bg-transparent"
      scrolling="no"
      data-initial-iframe-hidden="false"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-height={String(initialHeight)}
      data-layout-iframe-id={iframeId}
      data-form-id={widgetId}
    />
  );
};

export default GhlBookingEmbed;
