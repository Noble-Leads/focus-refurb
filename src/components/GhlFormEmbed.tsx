import { useEffect, useRef, useState } from "react";
import { ghlFormSrc } from "@/lib/ghlForm";
import { domesticBookingEmbed } from "@/lib/domesticBookingEmbed";
import {
  ghlEmbedFrameClassName,
  mobileFormFallbackHeight,
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
  /** Grow iframe height with form content — no inner scroll box on desktop */
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
  const { iframeRef, height, startingHeight, applyHeight, allowIframeScroll } = useGhlEmbedResize({
    iframeId,
    widgetId: formId,
    initialHeight,
    enabled: autoResize,
  });
  const [fixedHeight] = useState(() => mobileFormFallbackHeight(initialHeight));

  useEffect(() => {
    ensureGhlEmbedScripts();
  }, []);

  const wrapperClasses = autoResize
    ? `${ghlEmbedFrameClassName(allowIframeScroll)} ${wrapperClassName}`.trim()
    : `max-w-full min-w-0 overflow-hidden ${minHeightClassName} ${wrapperClassName}`.trim();

  return (
    <div className={wrapperClasses}>
      <iframe
        ref={iframeRef}
        src={ghlFormSrc(src, source)}
        style={{
          width: "100%",
          height: autoResize ? height : iframeHeight,
          minHeight: autoResize ? startingHeight : undefined,
          border: "none",
          borderRadius: "4px",
          display: "block",
        }}
        scrolling={autoResize && allowIframeScroll ? "yes" : "no"}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(autoResize ? startingHeight : fixedHeight)}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        data-initial-iframe-hidden="false"
        title={title}
        onLoad={() => autoResize && applyHeight(startingHeight)}
      />
    </div>
  );
};

export default GhlFormEmbed;
