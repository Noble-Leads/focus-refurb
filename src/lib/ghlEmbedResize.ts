import { useEffect, useRef } from "react";

export const GHL_HEIGHT_BUFFER = 64;
export const GHL_BOOKING_HEIGHT_BUFFER = 160;
export const GHL_TALL_FORM_BUFFER = 120;
export const TALL_EMBED_THRESHOLD = 800;
export const COLLAPSE_FLOOR = 280;

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
  if (widgetId && messageId.includes(widgetId)) return true;
  if (messageId.includes(iframeId)) return true;
  if (iframeId.includes(messageId)) return true;
  return false;
};

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

export const minHeightFloor = (initialHeight: number) =>
  initialHeight >= TALL_EMBED_THRESHOLD ? initialHeight : COLLAPSE_FLOOR;

export const bufferForVariant = (
  variant: "form" | "booking" | "commercial",
  initialHeight: number,
) => {
  if (variant === "booking") return GHL_BOOKING_HEIGHT_BUFFER;
  if (variant === "commercial" || initialHeight >= TALL_EMBED_THRESHOLD) {
    return GHL_TALL_FORM_BUFFER;
  }
  return GHL_HEIGHT_BUFFER;
};

type RegisteredEmbed = {
  iframeId: string;
  widgetId: string | null;
  initialHeight: number;
  heightBuffer: number;
  minFloor: number;
};

const embedRegistry = new Map<HTMLIFrameElement, RegisteredEmbed>();
const styleGuards = new WeakMap<HTMLIFrameElement, () => void>();
let globalListenerAttached = false;

const readIframeHeight = (iframe: HTMLIFrameElement) => {
  const inline = Number.parseInt(iframe.style.height || "", 10);
  const attr = Number.parseInt(iframe.getAttribute("height") || "", 10);
  return Math.max(inline || 0, attr || 0);
};

const readConfiguredHeight = (iframe: HTMLIFrameElement) => {
  const dataHeight = Number.parseInt(iframe.getAttribute("data-height") || "", 10);
  return dataHeight > 0 ? dataHeight : 0;
};

const isTallEmbed = (minFloor: number) => minFloor >= TALL_EMBED_THRESHOLD;

/** Set iframe height; tall embeds keep a CSS min-height floor GHL cannot shrink below. */
export const setIframeHeight = (
  iframe: HTMLIFrameElement,
  nextHeight: number,
  minFloor = COLLAPSE_FLOOR,
) => {
  const resolved = Math.max(nextHeight, minFloor);
  const tall = isTallEmbed(minFloor);

  iframe.style.height = `${resolved}px`;
  iframe.style.minHeight = tall ? `${minFloor}px` : "0";
  iframe.style.maxHeight = "none";
  iframe.setAttribute("height", String(resolved));
  iframe.setAttribute("scrolling", tall && isMobileViewport() ? "auto" : "no");
  iframe.style.overflow = tall ? "auto" : "visible";

  return resolved;
};

const enforceIframeHeight = (
  iframe: HTMLIFrameElement,
  nextHeight: number,
  minFloor: number,
) => {
  setIframeHeight(iframe, nextHeight, minFloor);

  if (typeof window === "undefined") return;

  const apply = () => setIframeHeight(iframe, Math.max(nextHeight, minFloor), minFloor);
  window.requestAnimationFrame(apply);
  window.setTimeout(apply, 50);
  window.setTimeout(apply, 250);
  window.setTimeout(apply, 1000);
};

const bufferForIframe = (iframe: HTMLIFrameElement) => {
  const registered = embedRegistry.get(iframe);
  if (registered) return registered.heightBuffer;

  const src = iframe.getAttribute("src") ?? "";
  if (src.includes("/widget/booking/")) return GHL_BOOKING_HEIGHT_BUFFER;

  const configured = readConfiguredHeight(iframe);
  return configured >= TALL_EMBED_THRESHOLD ? GHL_TALL_FORM_BUFFER : GHL_HEIGHT_BUFFER;
};

const minFloorForIframe = (iframe: HTMLIFrameElement) => {
  const registered = embedRegistry.get(iframe);
  if (registered) return registered.minFloor;

  const configured = readConfiguredHeight(iframe);
  return minHeightFloor(configured || COLLAPSE_FLOOR);
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

const applyHeightToMessage = (messageId: string, rawHeight: number) => {
  const iframe = findIframeByMessageId(messageId);
  if (!iframe) return;

  const minFloor = minFloorForIframe(iframe);
  const registered = embedRegistry.get(iframe);
  const buffer = registered?.heightBuffer ?? bufferForIframe(iframe);
  enforceIframeHeight(iframe, rawHeight + buffer, minFloor);
};

const handleIframeSizerMessage = (data: string) => {
  if (!data.startsWith("[iFrameSizer]")) return;

  const [messageId, heightStr] = data.slice(13).split(":");
  const parsedHeight = Number.parseInt(heightStr ?? "", 10);
  if (!messageId || parsedHeight <= 0) return;

  applyHeightToMessage(messageId, parsedHeight);
};

const handleObjectResizeMessage = (data: Record<string, unknown>) => {
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

  if (!messageId) return;
  applyHeightToMessage(messageId, height);
};

const ensureGlobalListener = () => {
  if (globalListenerAttached || typeof window === "undefined") return;
  globalListenerAttached = true;
  window.addEventListener("message", (event: MessageEvent) => {
    if (typeof event.data === "string") {
      handleIframeSizerMessage(event.data);
      return;
    }

    if (event.data && typeof event.data === "object") {
      handleObjectResizeMessage(event.data as Record<string, unknown>);
    }
  });
};

/** Undo GHL's script shrinking tall embeds after it sets inline styles. */
export const attachIframeStyleGuard = (
  iframe: HTMLIFrameElement,
  minFloor: number,
) => {
  const existing = styleGuards.get(iframe);
  existing?.();

  if (!isTallEmbed(minFloor)) {
    return () => {};
  }

  const guard = () => {
    const current = readIframeHeight(iframe);
    if (current < minFloor) {
      setIframeHeight(iframe, minFloor, minFloor);
    }
    if (iframe.style.overflow === "hidden") {
      iframe.style.overflow = "auto";
    }
  };

  const observer = new MutationObserver(guard);
  observer.observe(iframe, { attributes: true, attributeFilter: ["style", "height"] });

  const interval = window.setInterval(guard, 300);

  const disconnect = () => {
    observer.disconnect();
    window.clearInterval(interval);
    styleGuards.delete(iframe);
  };

  styleGuards.set(iframe, disconnect);
  guard();

  return disconnect;
};

export const registerGhlEmbed = (
  iframe: HTMLIFrameElement,
  options: RegisteredEmbed,
) => {
  ensureGlobalListener();
  embedRegistry.set(iframe, options);
  enforceIframeHeight(iframe, options.initialHeight, options.minFloor);
  attachIframeStyleGuard(iframe, options.minFloor);
  return () => {
    embedRegistry.delete(iframe);
    styleGuards.get(iframe)?.();
  };
};

type UseGhlEmbedResizeOptions = {
  iframeId: string;
  widgetId: string | null;
  initialHeight: number;
  enabled?: boolean;
  variant?: "form" | "booking" | "commercial";
};

export function useGhlEmbedResize({
  iframeId,
  widgetId,
  initialHeight,
  enabled = true,
  variant = "form",
}: UseGhlEmbedResizeOptions) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const heightBuffer = bufferForVariant(variant, initialHeight);
  const minFloor = minHeightFloor(initialHeight);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.setAttribute("data-initial-iframe-hidden", "false");
    if (isTallEmbed(minFloor)) {
      iframe.setAttribute("data-ghl-tall", "true");
    }
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    iframe.style.pointerEvents = "auto";
    iframe.style.width = "100%";
    iframe.style.maxWidth = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";
    iframe.style.background = "transparent";

    if (!enabled) {
      setIframeHeight(iframe, initialHeight, minFloor);
      const disconnectGuard = attachIframeStyleGuard(iframe, minFloor);
      return disconnectGuard;
    }

    const unregister = registerGhlEmbed(iframe, {
      iframeId,
      widgetId,
      initialHeight,
      heightBuffer,
      minFloor,
    });

    const collapseGuard = window.setInterval(() => {
      const current = readIframeHeight(iframe);
      if (current < COLLAPSE_FLOOR) {
        enforceIframeHeight(iframe, initialHeight, minFloor);
        return;
      }

      if (isTallEmbed(minFloor) && current < minFloor) {
        enforceIframeHeight(iframe, minFloor, minFloor);
      }
    }, 300);

    return () => {
      unregister();
      window.clearInterval(collapseGuard);
    };
  }, [enabled, heightBuffer, iframeId, initialHeight, minFloor, widgetId]);

  return {
    iframeRef,
    initialHeight,
  };
}

export const ghlEmbedFrameClassName = () => "";
