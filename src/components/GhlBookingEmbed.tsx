import { useEffect } from "react";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import {
  ghlBookingContainerClassName,
  ghlBookingIframeStyle,
  parseWidgetId,
  useGhlEmbedResize,
} from "@/lib/ghlEmbedResize";

type GhlBookingEmbedProps = {
  src?: string;
  iframeId?: string;
  title?: string;
};

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

const GhlBookingEmbed = ({
  src = domesticBookingEmbed.src,
  iframeId = domesticBookingEmbed.iframeId,
  title = domesticBookingEmbed.title,
}: GhlBookingEmbedProps) => {
  const widgetId = parseWidgetId(src) ?? domesticBookingEmbed.bookingId;
  const { iframeRef } = useGhlEmbedResize({
    iframeId,
    widgetId,
    initialHeight: domesticBookingEmbed.initialHeight,
    embedType: "booking",
  });

  useEffect(() => {
    ensureGhlEmbedScripts();
  }, []);

  return (
    <div className={ghlBookingContainerClassName()}>
      <iframe
        ref={iframeRef}
        src={src}
        id={iframeId}
        title={title}
        className="ghl-embed-iframe ghl-embed-iframe--booking"
        style={ghlBookingIframeStyle()}
        scrolling="yes"
        data-initial-iframe-hidden="false"
        data-ghl-embed="true"
        data-embed-type="booking"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-height={String(domesticBookingEmbed.initialHeight)}
        data-collapse-floor={String(domesticBookingEmbed.collapseFloor)}
        data-max-height={String(domesticBookingEmbed.maxHeight)}
        data-layout-iframe-id={iframeId}
        data-form-id={widgetId}
      />
    </div>
  );
};

export default GhlBookingEmbed;
