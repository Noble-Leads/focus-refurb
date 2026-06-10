import { useEffect } from "react";

type GhlFormEmbedProps = {
  src: string;
  title: string;
  iframeId: string;
  formName: string;
  formId: string;
  iframeHeight?: string;
  minHeightClassName?: string;
  wrapperClassName?: string;
  successRedirectPath?: string;
};

const containsSuccessKeyword = (value: string) => {
  const normalized = value.toLowerCase();
  return (
    normalized.includes("submitted") ||
    normalized.includes("success") ||
    normalized.includes("form_submit") ||
    normalized.includes("formsubmit") ||
    normalized.includes("submission")
  );
};

const tryParseData = (data: unknown) => {
  if (typeof data !== "string") {
    return data;
  }

  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};

const safeToText = (value: unknown) => {
  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value ?? "");
  } catch {
    return "";
  }
};

const GhlFormEmbed = ({
  src,
  title,
  iframeId,
  formName,
  formId,
  iframeHeight = "502px",
  minHeightClassName = "min-h-[502px]",
  wrapperClassName = "",
  successRedirectPath = "/thank-you",
}: GhlFormEmbedProps) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const parsedData = tryParseData(event.data);
      const sourceText = safeToText(parsedData);
      const hasFormId = sourceText.includes(formId);
      const hasSuccess = containsSuccessKeyword(sourceText);
      const trustedOrigin =
        event.origin.includes("nobleleads.uk") ||
        event.origin.includes("leadconnectorhq.com") ||
        event.origin.includes("gohighlevel.com") ||
        event.origin.includes("focusrefurbishmentltd.com");

      if (!hasSuccess || (!hasFormId && !trustedOrigin)) {
        return;
      }

      window.location.assign(successRedirectPath);
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [formId, successRedirectPath]);

  return (
    <div className={`max-w-full min-w-0 overflow-hidden ${minHeightClassName} ${wrapperClassName}`.trim()}>
      <iframe
        src={src}
        style={{ width: "100%", height: iframeHeight, border: "none", borderRadius: "8px" }}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        title={title}
      />
    </div>
  );
};

export default GhlFormEmbed;
