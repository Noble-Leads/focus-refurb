import { useEffect } from "react";
import { domesticFormEmbed } from "@/lib/domesticFormEmbed";
import {
  GHL_BOOKING_INITIAL_HEIGHT,
  GHL_BOOKING_MAX_HEIGHT,
  GHL_BOOKING_MIN_HEIGHT,
  ghlBookingContainerClassName,
  ghlBookingIframeStyle,
  parseWidgetId,
  useGhlEmbedResize,
} from "@/lib/ghlEmbedResize";

/** Legacy GHL booking calendar — kept for non-domestic use if needed */
const LEGACY_BOOKING = {
  src: "https://app.focusrefurbishmentltd.com/widget/booking/jQ4b0DvP1o4PaGcUsxOT",
  bookingId: "jQ4b0DvP1o4PaGcUsxOT",
  iframeId: "jQ4b0DvP1o4PaGcUsxOT_1782828410773",
  title: "Book a free quote visit",
  initialHeight: GHL_BOOKING_INITIAL_HEIGHT,
  collapseFloor: GHL_BOOKING_MIN_HEIGHT,
  maxHeight: GHL_BOOKING_MAX_HEIGHT,
} as const;

type GhlBookingEmbedProps = {
  src?: string;
  iframeId?: string;
  title?: string;
};

const GHL_SCRIPT = domesticFormEmbed.scriptSrc;
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
  src = LEGACY_BOOKING.src,
  iframeId = LEGACY_BOOKING.iframeId,
  title = LEGACY_BOOKING.title,
}: GhlBookingEmbedProps) => {
  const widgetId = parseWidgetId(src) ?? LEGACY_BOOKING.bookingId;
  const { iframeRef } = useGhlEmbedResize({
    iframeId,
    widgetId,
    initialHeight: LEGACY_BOOKING.initialHeight,
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
        data-height={String(LEGACY_BOOKING.initialHeight)}
        data-collapse-floor={String(LEGACY_BOOKING.collapseFloor)}
        data-max-height={String(LEGACY_BOOKING.maxHeight)}
        data-layout-iframe-id={iframeId}
        data-form-id={widgetId}
      />
    </div>
  );
};

export default GhlBookingEmbed;
