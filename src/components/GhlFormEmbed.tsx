import { useEffect } from "react";
import { ghlFormSrc } from "@/lib/ghlForm";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import { useGhlEmbedResize } from "@/lib/ghlEmbedResize";

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

const parseIframeHeight = (iframeHeight: string, fallback: number) => {
  const parsed = Number.parseInt(iframeHeight, 10);
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
  iframeHeight = "1100px",
  wrapperClassName = "",
  autoResize = true,
}: GhlFormEmbedProps) => {
  const initialHeight = parseIframeHeight(iframeHeight, 1100);
  const variant = initialHeight >= 1000 ? "commercial" : "form";
  const { iframeRef } = useGhlEmbedResize({
    iframeId,
    widgetId: formId,
    initialHeight,
    enabled: autoResize,
    variant,
  });

  useEffect(() => {
    ensureGhlEmbedScripts();
  }, []);

  const iframe = (
    <iframe
      ref={iframeRef}
      src={ghlFormSrc(src, source)}
      className="ghl-embed-iframe block w-full max-w-full border-0 bg-transparent"
      scrolling="auto"
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
