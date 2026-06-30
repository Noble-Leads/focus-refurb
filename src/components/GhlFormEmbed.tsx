import { useEffect } from "react";
import { ghlFormSrc } from "@/lib/ghlForm";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import { ghlEmbedFrameClassName, useGhlEmbedResize } from "@/lib/ghlEmbedResize";

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
  minHeightClassName?: string;
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
  iframeHeight = "672px",
  minHeightClassName = "min-h-[672px]",
  wrapperClassName = "",
  autoResize = true,
}: GhlFormEmbedProps) => {
  const initialHeight = parseIframeHeight(iframeHeight, 672);
  const isCommercial = initialHeight >= 900;
  const { iframeRef, minHeight, isMobile } = useGhlEmbedResize({
    iframeId,
    widgetId: formId,
    initialHeight,
    enabled: autoResize,
    variant: isCommercial ? "commercial" : "form",
  });

  useEffect(() => {
    ensureGhlEmbedScripts();
  }, []);

  const wrapperClasses = autoResize
    ? `${ghlEmbedFrameClassName(isCommercial ? "commercial" : "form")} ${wrapperClassName}`.trim()
    : `max-w-full min-w-0 overflow-visible ${minHeightClassName} ${wrapperClassName}`.trim();

  return (
    <div className={wrapperClasses}>
      <iframe
        ref={iframeRef}
        src={ghlFormSrc(src, source)}
        className="block w-full rounded"
        scrolling={isMobile ? "yes" : "no"}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(autoResize ? minHeight : initialHeight)}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        data-initial-iframe-hidden="false"
        title={title}
      />
    </div>
  );
};

export default GhlFormEmbed;
