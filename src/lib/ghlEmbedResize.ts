import { useEffect, useRef } from "react";

export const GHL_HEIGHT_BUFFER = 64;
export const MOBILE_FORM_MIN_HEIGHT = 1400;
export const MOBILE_TALL_FORM_MIN_HEIGHT = 1750;
export const MOBILE_BOOKING_MIN_HEIGHT = 1500;

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
  return false;
};

const parseHeightFromMessage = (data: string): number | null => {
  if (!data.startsWith("[iFrameSizer]")) return null;
  const [, height] = data.slice(13).split(":");
  const parsed = Number.parseInt(height ?? "", 10);
  return parsed > 0 ? parsed + GHL_HEIGHT_BUFFER : null;
};

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

export const mobileFormFallbackHeight = (baseHeight: number) => {
  if (!isMobileViewport()) return baseHeight;
  if (baseHeight >= 900) return Math.max(baseHeight, MOBILE_TALL_FORM_MIN_HEIGHT);
  if (baseHeight >= 650) return Math.max(baseHeight, MOBILE_FORM_MIN_HEIGHT);
  return MOBILE_FORM_MIN_HEIGHT;
};

export const mobileBookingFallbackHeight = (baseHeight: number) => {
  if (!isMobileViewport()) return baseHeight;
  return Math.max(baseHeight, MOBILE_BOOKING_MIN_HEIGHT);
};

type RegisteredEmbed = {
  iframeId: string;
  widgetId: string | null;
  minHeight: number;
};

const embedRegistry = new Map<HTMLIFrameElement, RegisteredEmbed>();
let globalListenerAttached = false;

const readIframeHeight = (iframe: HTMLIFrameElement) => {
  const inline = Number.parseInt(iframe.style.height || "", 10);
  const attr = Number.parseInt(iframe.getAttribute("height") || "", 10);
  return Math.max(inline || 0, attr || 0);
};

export const setIframeHeight = (iframe: HTMLIFrameElement, nextHeight: number, minHeight: number) => {
  const resolved = Math.max(readIframeHeight(iframe), nextHeight, minHeight);
  iframe.style.height = `${resolved}px`;
  iframe.setAttribute("height", String(resolved));
  return resolved;
};

const handleIframeSizerMessage = (data: string) => {
  if (!data.startsWith("[iFrameSizer]")) return;

  const [messageId, heightStr] = data.slice(13).split(":");
  const parsedHeight = Number.parseInt(heightStr ?? "", 10);
  if (!messageId || parsedHeight <= 0) return;

  applyHeightToMessage(messageId, parsedHeight + GHL_HEIGHT_BUFFER);
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
  applyHeightToMessage(messageId, height + GHL_HEIGHT_BUFFER);
};

const applyHeightToMessage = (messageId: string, targetHeight: number) => {
  const byId = document.getElementById(messageId);
  if (byId instanceof HTMLIFrameElement) {
    const reg = embedRegistry.get(byId);
    setIframeHeight(byId, targetHeight, reg?.minHeight ?? targetHeight);
    return;
  }

  for (const [iframe, reg] of embedRegistry) {
    if (!matchesIframeSizerId(messageId, reg.iframeId, reg.widgetId)) continue;
    setIframeHeight(iframe, targetHeight, reg.minHeight);
  }
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

export const registerGhlEmbed = (
  iframe: HTMLIFrameElement,
  options: RegisteredEmbed,
) => {
  ensureGlobalListener();
  embedRegistry.set(iframe, options);
  setIframeHeight(iframe, options.minHeight, options.minHeight);
  return () => {
    embedRegistry.delete(iframe);
  };
};

type UseGhlEmbedResizeOptions = {
  iframeId: string;
  widgetId: string | null;
  initialHeight: number;
  enabled?: boolean;
  useBookingFallback?: boolean;
  variant?: "form" | "booking" | "commercial";
};

export function useGhlEmbedResize({
  iframeId,
  widgetId,
  initialHeight,
  enabled = true,
  useBookingFallback = false,
  variant,
}: UseGhlEmbedResizeOptions) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const minHeight =
    variant === "commercial"
      ? mobileFormFallbackHeight(Math.max(initialHeight, 960))
      : useBookingFallback
        ? mobileBookingFallbackHeight(initialHeight)
        : mobileFormFallbackHeight(initialHeight);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    iframe.style.pointerEvents = "auto";
    iframe.style.width = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";

    if (!enabled) {
      setIframeHeight(iframe, initialHeight, initialHeight);
      return;
    }

    const unregister = registerGhlEmbed(iframe, { iframeId, widgetId, minHeight });

    const fallbackTimers = [400, 1200, 2500, 5000, 8000, 12000].map((delay) =>
      window.setTimeout(() => setIframeHeight(iframe, minHeight, minHeight), delay),
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIframeHeight(iframe, minHeight, minHeight);
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    observer.observe(iframe);

    return () => {
      unregister();
      fallbackTimers.forEach(window.clearTimeout);
      observer.disconnect();
    };
  }, [enabled, iframeId, initialHeight, minHeight, widgetId]);

  return {
    iframeRef,
    minHeight,
    isMobile: isMobileViewport(),
  };
}

export const ghlEmbedFrameClassName = (variant: "form" | "booking" | "commercial" = "form") =>
  `ghl-embed-frame ghl-embed-frame--${variant} max-w-full min-w-0 overflow-visible`;
