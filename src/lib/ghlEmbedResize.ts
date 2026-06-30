export const GHL_HEIGHT_BUFFER = 48;

export const parseWidgetId = (src: string): string | null => {
  const match = src.match(/\/widget\/(?:booking|form)\/([^/?]+)/);
  return match?.[1] ?? null;
};

export const iframeResizeIds = (iframeId: string, widgetId?: string | null) => {
  const ids = new Set<string>([iframeId, `embedded_iframe_${iframeId}`]);

  if (widgetId) {
    ids.add(widgetId);
    ids.add(`inline-${widgetId}`);
    ids.add(`embedded_iframe_${widgetId}`);
  }

  return ids;
};

export const matchesIframeSizerId = (
  messageId: string,
  iframeId: string,
  widgetId?: string | null,
) => {
  if (iframeResizeIds(iframeId, widgetId).has(messageId)) return true;
  if (widgetId && messageId.startsWith(`${widgetId}_`)) return true;
  return false;
};

export const parseIframeSizerHeight = (
  data: string,
  iframeId: string,
  widgetId?: string | null,
): number | null => {
  if (!data.startsWith("[iFrameSizer]")) return null;

  const [id, height] = data.slice(13).split(":");
  if (!id || !matchesIframeSizerId(id, iframeId, widgetId)) return null;

  const parsed = Number.parseInt(height ?? "", 10);
  return parsed > 0 ? parsed + GHL_HEIGHT_BUFFER : null;
};

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

/** Booking/details steps need more room on narrow screens before resize messages arrive. */
export const mobileBookingFallbackHeight = (baseHeight: number) => {
  if (!isMobileViewport()) return baseHeight;
  return Math.max(baseHeight, 860);
};
