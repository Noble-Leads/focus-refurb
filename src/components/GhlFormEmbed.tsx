import { useEffect } from "react";
import { ghlFormSrc } from "@/lib/ghlForm";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import {
  GHL_COMMERCIAL_MIN_HEIGHT,
  GHL_FORM_MIN_HEIGHT,
  ghlEmbedInlineStyle,
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

const parseMinHeight = (iframeHeight: string | undefined, fallback: number) => {
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
  wrapperClassName = "",
  autoResize = true,
}: GhlFormEmbedProps) => {
  const defaultMin =
    iframeHeight && Number.parseInt(iframeHeight, 10) >= 1000
      ? GHL_COMMERCIAL_MIN_HEIGHT
      : GHL_FORM_MIN_HEIGHT;
  const minHeight = parseMinHeight(iframeHeight, defaultMin);
  const { iframeRef } = useGhlEmbedResize({
    iframeId,
    widgetId: formId,
    minHeight,
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
      style={ghlEmbedInlineStyle(minHeight)}
      scrolling="yes"
      id={iframeId}
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={formName}
      data-height={String(minHeight)}
      data-layout-iframe-id={iframeId}
      data-form-id={formId}
      data-initial-iframe-hidden="false"
      data-ghl-embed="true"
      title={title}
    />
  );

  if (!wrapperClassName) return iframe;

  return <div className={wrapperClassName}>{iframe}</div>;
};

export default GhlFormEmbed;
