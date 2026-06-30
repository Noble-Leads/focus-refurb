import { useEffect, useRef } from "react";

/** Form embeds — collapse prevention only. */
export const GHL_COLLAPSE_FLOOR = 480;
export const GHL_HEIGHT_BUFFER = 24;
export const GHL_FORM_INITIAL_HEIGHT = 720;
/** Commercial enquiry forms — start compact; GHL often reports inflated heights. */
export const GHL_COMMERCIAL_INITIAL_HEIGHT = 720;
export const GHL_COMMERCIAL_MAX_HEIGHT = 820;

/** Booking calendar — Google "squeeze" bounds (vh min/max + iFrameSizer). */
export const GHL_BOOKING_MIN_HEIGHT = 600;
export const GHL_BOOKING_MAX_HEIGHT = 850;
export const GHL_BOOKING_INITIAL_HEIGHT = 650;
export const GHL_BOOKING_HEIGHT_BUFFER = 48;

const TRUSTED_ORIGIN_FRAGMENTS = [
  "msgsndr.com",
  "leadconnectorhq.com",
  "gohighlevel.com",
  "focusrefurbishmentltd.com",
  "nobleleads.uk",
];

export type GhlEmbedType = "form" | "booking";

export const parseWidgetId = (src: string): string | null => {
  const match = src.match(/\/widget\/(?:booking|form)\/([^/?]+)/);
  return match?.[1] ?? null;
};

export const isTrustedGhlOrigin = (origin: string) =>
  TRUSTED_ORIGIN_FRAGMENTS.some((fragment) => origin.includes(fragment));

export const ghlBookingContainerClassName = () =>
  "ghl-booking-container w-full max-w-[850px] mx-auto overflow-hidden";

/** Default before iFrameSizer — clamp(600px, 75vh, 850px). */
export const ghlBookingIframeStyle = () =>
  ({
    width: "100%",
    height: "clamp(600px, 75vh, 850px)",
    minHeight: `${GHL_BOOKING_MIN_HEIGHT}px`,
    maxHeight: `${GHL_BOOKING_MAX_HEIGHT}px`,
    border: "none",
    display: "block",
    background: "transparent",
    transition: "height 0.15s ease-out",
  }) as const;

export const ghlFormIframeStyle = (
  initialHeight: number,
  collapseFloor = GHL_COLLAPSE_FLOOR,
  maxHeight?: number | null,
) => {
  const cappedInitial =
    maxHeight && maxHeight > 0 ? Math.min(initialHeight, maxHeight) : initialHeight;

  return {
    width: "100%",
    minHeight: `${collapseFloor}px`,
    height: `${cappedInitial}px`,
    maxHeight: maxHeight && maxHeight > 0 ? `${maxHeight}px` : "none",
    border: "none",
    display: "block",
    background: "transparent",
    transition: "height 0.15s ease-out",
  } as const;
};

type RegisteredEmbed = {
  iframeId: string;
  widgetId: string | null;
  initialHeight: number;
  collapseFloor: number;
  embedType: GhlEmbedType;
  maxHeight?: number | null;
};

const embedRegistry = new Map<HTMLIFrameElement, RegisteredEmbed>();
let globalListenerAttached = false;

const readEmbedType = (iframe: HTMLIFrameElement): GhlEmbedType =>
  iframe.getAttribute("data-embed-type") === "booking" ? "booking" : "form";

const readCollapseFloor = (iframe: HTMLIFrameElement) => {
  const registered = embedRegistry.get(iframe);
  if (registered) return registered.collapseFloor;
  const attr = Number.parseInt(iframe.getAttribute("data-collapse-floor") || "", 10);
  if (attr > 0) return attr;
  return readEmbedType(iframe) === "booking" ? GHL_BOOKING_MIN_HEIGHT : GHL_COLLAPSE_FLOOR;
};

const readMaxHeight = (iframe: HTMLIFrameElement) => {
  const attr = Number.parseInt(iframe.getAttribute("data-max-height") || "", 10);
  if (attr > 0) return attr;
  return readEmbedType(iframe) === "booking" ? GHL_BOOKING_MAX_HEIGHT : null;
};

const syncGhlWrapper = (iframe: HTMLIFrameElement) => {
  const wrapper = iframe.closest<HTMLElement>(".ep-wrapper, [id$='-wrapper']");
  if (!wrapper) return;
  const maxHeight = readMaxHeight(iframe);
  wrapper.style.width = "100%";
  wrapper.style.height = "auto";
  wrapper.style.minHeight = "0";
  wrapper.style.maxHeight = maxHeight ? `${maxHeight}px` : "none";
  wrapper.style.overflow = maxHeight ? "hidden" : "visible";
};

/** Apply iFrameSizer height — booking is clamped 600–850px with internal scroll above max. */
export const applyGhlIframeHeight = (iframe: HTMLIFrameElement, nextHeight: number) => {
  const embedType = readEmbedType(iframe);
  const collapseFloor = readCollapseFloor(iframe);
  const maxHeight = readMaxHeight(iframe);

  if (embedType === "booking") {
    const buffer = GHL_BOOKING_HEIGHT_BUFFER;
    const resolved = Math.min(
      Math.max(nextHeight + buffer, GHL_BOOKING_MIN_HEIGHT),
      GHL_BOOKING_MAX_HEIGHT,
    );
    iframe.style.width = "100%";
    iframe.style.minHeight = `${GHL_BOOKING_MIN_HEIGHT}px`;
    iframe.style.maxHeight = `${GHL_BOOKING_MAX_HEIGHT}px`;
    iframe.style.height = `${resolved}px`;
    iframe.setAttribute("height", String(resolved));
    iframe.setAttribute("scrolling", "yes");
    syncGhlWrapper(iframe);
    return;
  }

  let resolved = Math.max(nextHeight + GHL_HEIGHT_BUFFER, collapseFloor);
  if (maxHeight) resolved = Math.min(resolved, maxHeight);

  iframe.style.minHeight = `${collapseFloor}px`;
  iframe.style.height = `${resolved}px`;
  iframe.style.maxHeight = maxHeight ? `${maxHeight}px` : "none";
  iframe.setAttribute("height", String(resolved));
  iframe.setAttribute("scrolling", maxHeight ? "yes" : "no");
  syncGhlWrapper(iframe);
};

const findIframeByMessageId = (messageId: string): HTMLIFrameElement | null => {
  const direct = document.getElementById(messageId);
  if (direct instanceof HTMLIFrameElement) return direct;

  const iframes = document.querySelectorAll<HTMLIFrameElement>(
    'iframe[src*="/widget/form/"], iframe[src*="/widget/booking/"]',
  );

  for (const iframe of iframes) {
    const formId = iframe.getAttribute("data-form-id");
    const layoutId = iframe.getAttribute("data-layout-iframe-id");

    if (iframe.id === messageId) return iframe;
    if (messageId.includes(iframe.id) || iframe.id.includes(messageId)) return iframe;
    if (formId && (messageId === formId || messageId.includes(formId))) return iframe;
    if (layoutId && (messageId === layoutId || messageId.includes(layoutId))) return iframe;
  }

  for (const [iframe, reg] of embedRegistry) {
    if (matchesIframeSizerId(messageId, reg.iframeId, reg.widgetId)) return iframe;
  }

  return null;
};

const matchesIframeSizerId = (
  messageId: string,
  iframeId: string,
  widgetId?: string | null,
) => {
  const ids = new Set<string>([iframeId, `embedded_iframe_${iframeId}`]);
  if (widgetId) {
    ids.add(widgetId);
    ids.add(`inline-${widgetId}`);
    ids.add(`embedded_iframe_${widgetId}`);
  }
  if (ids.has(messageId)) return true;
  if (widgetId && messageId.startsWith(`${widgetId}_`)) return true;
  if (widgetId && messageId.includes(widgetId)) return true;
  if (messageId.includes(iframeId)) return true;
  if (iframeId.includes(messageId)) return true;
  return false;
};

const handleIframeSizerMessage = (data: string) => {
  if (!data.startsWith("[iFrameSizer]")) return;

  const [messageId, heightStr] = data.slice(13).split(":");
  const parsedHeight = Number.parseInt(heightStr ?? "", 10);
  if (!messageId || parsedHeight <= 0) return;

  const iframe = findIframeByMessageId(messageId);
  if (iframe) applyGhlIframeHeight(iframe, parsedHeight);
};

const handleObjectHeightMessage = (data: Record<string, unknown>) => {
  const height = Number(data.height ?? data.iframeHeight ?? data.frameHeight);
  if (!Number.isFinite(height) || height <= 0) return;

  const messageId =
    typeof data.id === "string"
      ? data.id
      : typeof data.iframeId === "string"
        ? data.iframeId
        : typeof data.frameId === "string"
          ? data.frameId
          : null;

  const target =
    (messageId ? findIframeByMessageId(messageId) : null) ??
    document.querySelector<HTMLIFrameElement>('iframe[data-ghl-embed="true"]');

  if (!target) return;
  applyGhlIframeHeight(target, height);
};

const ensureGlobalListener = () => {
  if (globalListenerAttached || typeof window === "undefined") return;
  globalListenerAttached = true;

  window.addEventListener("message", (event: MessageEvent) => {
    if (typeof event.data === "string") {
      handleIframeSizerMessage(event.data);
      if (event.data.startsWith("[iFrameSizer]")) return;
    }

    if (!isTrustedGhlOrigin(event.origin)) return;

    if (event.data && typeof event.data === "object") {
      handleObjectHeightMessage(event.data as Record<string, unknown>);
    }
  });
};

export const registerGhlEmbed = (iframe: HTMLIFrameElement, options: RegisteredEmbed) => {
  ensureGlobalListener();
  embedRegistry.set(iframe, options);

  iframe.setAttribute("data-initial-iframe-hidden", "false");
  iframe.setAttribute("data-collapse-floor", String(options.collapseFloor));
  iframe.style.opacity = "1";
  iframe.style.visibility = "visible";

  if (options.embedType === "booking") {
    iframe.setAttribute("data-max-height", String(GHL_BOOKING_MAX_HEIGHT));
    Object.assign(iframe.style, ghlBookingIframeStyle());
  } else {
    if (options.maxHeight) {
      iframe.setAttribute("data-max-height", String(options.maxHeight));
    }
    Object.assign(
      iframe.style,
      ghlFormIframeStyle(options.initialHeight, options.collapseFloor, options.maxHeight),
    );
    iframe.setAttribute("scrolling", options.maxHeight ? "yes" : "no");
  }

  syncGhlWrapper(iframe);

  return () => {
    embedRegistry.delete(iframe);
  };
};

type UseGhlEmbedResizeOptions = {
  iframeId: string;
  widgetId: string | null;
  initialHeight: number;
  collapseFloor?: number;
  maxHeight?: number | null;
  embedType?: GhlEmbedType;
  enabled?: boolean;
};

export function useGhlEmbedResize({
  iframeId,
  widgetId,
  initialHeight,
  collapseFloor = GHL_COLLAPSE_FLOOR,
  maxHeight = null,
  embedType = "form",
  enabled = true,
}: UseGhlEmbedResizeOptions) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !enabled) return;

    const floor =
      embedType === "booking" ? GHL_BOOKING_MIN_HEIGHT : collapseFloor;

    return registerGhlEmbed(iframe, {
      iframeId,
      widgetId,
      initialHeight,
      collapseFloor: floor,
      maxHeight,
      embedType,
    });
  }, [collapseFloor, embedType, enabled, iframeId, initialHeight, maxHeight, widgetId]);

  return { iframeRef, initialHeight };
}

/** @deprecated use ghlFormIframeStyle */
export const ghlEmbedInlineStyle = ghlFormIframeStyle;
