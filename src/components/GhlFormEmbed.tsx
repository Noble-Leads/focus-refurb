type GhlFormEmbedProps = {
  src: string;
  title: string;
  iframeId: string;
  formName: string;
  formId: string;
  iframeHeight?: string;
  minHeightClassName?: string;
  wrapperClassName?: string;
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
}: GhlFormEmbedProps) => (
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

export default GhlFormEmbed;
