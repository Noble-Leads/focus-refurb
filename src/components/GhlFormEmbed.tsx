import { useEffect } from "react";
import { ghlFormSrc } from "@/lib/ghlForm";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import {
  GHL_COLLAPSE_FLOOR,
  GHL_COMMERCIAL_INITIAL_HEIGHT,
  GHL_COMMERCIAL_MAX_HEIGHT,
  GHL_FORM_INITIAL_HEIGHT,
  ghlFormIframeStyle,
  useGhlEmbedResize,
} from "@/lib/ghlEmbedResize";

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

const parseInitialHeight = (iframeHeight: string | undefined, fallback: number) => {
  const parsed = Number.parseInt(iframeHeight ?? "", 10);
  return parsed > 0 ? parsed : fallback;
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
  /** Cap height for tall commercial forms — avoids GHL-reported dead space below submit */
  maxHeight?: number;
  wrapperClassName?: string;
  /** Grow iframe height with form content */
  autoResize?: boolean;
};

const GhlFormEmbed = ({
  src,
  title,
  iframeId,
  formName,
  formId,
  source,
  iframeHeight,
  maxHeight,
  wrapperClassName = "",
  autoResize = true,
}: GhlFormEmbedProps) => {
  const isCommercialForm = maxHeight != null || Boolean(iframeHeight && Number.parseInt(iframeHeight, 10) >= 800);
  const resolvedMaxHeight = maxHeight ?? (isCommercialForm ? GHL_COMMERCIAL_MAX_HEIGHT : undefined);
  const defaultInitial = isCommercialForm ? GHL_COMMERCIAL_INITIAL_HEIGHT : GHL_FORM_INITIAL_HEIGHT;
  const parsedInitial = parseInitialHeight(iframeHeight, defaultInitial);
  const initialHeight = resolvedMaxHeight
    ? Math.min(parsedInitial, resolvedMaxHeight)
    : parsedInitial;

  const { iframeRef } = useGhlEmbedResize({
    iframeId,
    widgetId: formId,
    initialHeight,
    collapseFloor: GHL_COLLAPSE_FLOOR,
    maxHeight: resolvedMaxHeight ?? null,
    embedType: "form",
    enabled: autoResize,
  });

  useEffect(() => {
    ensureGhlEmbedScripts();
  }, []);

  const iframe = (
    <iframe
      ref={iframeRef}
      src={ghlFormSrc(src, source)}
      className="ghl-embed-iframe ghl-embed-iframe--form"
      style={ghlFormIframeStyle(initialHeight, GHL_COLLAPSE_FLOOR, resolvedMaxHeight)}
      scrolling={resolvedMaxHeight ? "yes" : "no"}
      id={iframeId}
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={formName}
      data-height={String(initialHeight)}
      data-collapse-floor={String(GHL_COLLAPSE_FLOOR)}
      data-embed-type="form"
      data-layout-iframe-id={iframeId}
      data-form-id={formId}
      data-initial-iframe-hidden="false"
      data-ghl-embed="true"
      data-max-height={resolvedMaxHeight ? String(resolvedMaxHeight) : undefined}
      title={title}
    />
  );

  if (!wrapperClassName) return iframe;

  return <div className={wrapperClassName}>{iframe}</div>;
};

export default GhlFormEmbed;
