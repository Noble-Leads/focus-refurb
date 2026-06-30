import {
  GHL_COMMERCIAL_INITIAL_HEIGHT,
  GHL_COMMERCIAL_MAX_HEIGHT,
} from "@/lib/ghlEmbedResize";

/** Shared commercial enquiry form */
export const commercialFormEmbed = {
  src: "https://link.nobleleads.uk/widget/form/e6NuUzUMAfN2MKNTqFnI",
  title: "FR Site- Commercial",
  formName: "FR Site- Commercial",
  formId: "e6NuUzUMAfN2MKNTqFnI",
  iframeHeight: `${GHL_COMMERCIAL_INITIAL_HEIGHT}px`,
  maxHeight: GHL_COMMERCIAL_MAX_HEIGHT,
} as const;
