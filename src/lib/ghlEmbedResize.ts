import { useCallback, useEffect, useRef, useState } from "react";

export const GHL_HEIGHT_BUFFER = 64;
export const MOBILE_FORM_MIN_HEIGHT = 1320;
export const MOBILE_TALL_FORM_MIN_HEIGHT = 1480;
export const MOBILE_BOOKING_MIN_HEIGHT = 1150;

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

export const parseIframeSizerHeight = (
  data: string,
  iframeId: string,
  widgetId?: string | null,
  iframe?: HTMLIFrameElement | null,
): number | null => {
  if (!data.startsWith("[iFrameSizer]")) return null;

  const [id] = data.slice(13).split(":");
  if (id && matchesIframeSizerId(id, iframeId, widgetId)) {
    return parseHeightFromMessage(data);
  }

  if (!isMobileViewport() || !iframe) return null;

  const ghlIframes = document.querySelectorAll<HTMLIFrameElement>(
    'iframe[src*="/widget/form/"], iframe[src*="/widget/booking/"]',
  );
  if (ghlIframes.length === 1 && ghlIframes[0] === iframe) {
    return parseHeightFromMessage(data);
  }

  return null;
};

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

export const mobileFormFallbackHeight = (baseHeight: number) => {
  if (!isMobileViewport()) return baseHeight;
  if (baseHeight >= 900) return Math.max(baseHeight + 200, MOBILE_TALL_FORM_MIN_HEIGHT);
  if (baseHeight >= 650) return Math.max(baseHeight + 200, MOBILE_FORM_MIN_HEIGHT);
  return MOBILE_FORM_MIN_HEIGHT;
};

export const mobileBookingFallbackHeight = (baseHeight: number) => {
  if (!isMobileViewport()) return baseHeight;
  return Math.max(baseHeight + 200, MOBILE_BOOKING_MIN_HEIGHT);
};

type UseGhlEmbedResizeOptions = {
  iframeId: string;
  widgetId: string | null;
  initialHeight: number;
  enabled?: boolean;
  useBookingFallback?: boolean;
};

export function useGhlEmbedResize({
  iframeId,
  widgetId,
  initialHeight,
  enabled = true,
  useBookingFallback = false,
}: UseGhlEmbedResizeOptions) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fallbackHeight = useBookingFallback
    ? mobileBookingFallbackHeight(initialHeight)
    : mobileFormFallbackHeight(initialHeight);
  const [height, setHeight] = useState(fallbackHeight);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileViewport());
  }, []);

  const applyHeight = useCallback((nextHeight: number) => {
    setHeight((current) => {
      const resolved = Math.max(current, nextHeight);
      if (iframeRef.current) {
        iframeRef.current.style.height = `${resolved}px`;
      }
      return resolved;
    });
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    iframe.style.pointerEvents = "auto";
    iframe.style.height = `${fallbackHeight}px`;

    if (!enabled) return;

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      const nextHeight = parseIframeSizerHeight(event.data, iframeId, widgetId, iframe);
      if (nextHeight) applyHeight(nextHeight);
    };

    const fallbackTimers = [300, 800, 1500, 3000, 6000, 10000].map((delay) =>
      window.setTimeout(() => applyHeight(fallbackHeight), delay),
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        applyHeight(fallbackHeight);
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );
    observer.observe(iframe);

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      fallbackTimers.forEach(window.clearTimeout);
      observer.disconnect();
    };
  }, [applyHeight, enabled, fallbackHeight, iframeId, widgetId]);

  return {
    iframeRef,
    height,
    startingHeight: fallbackHeight,
    applyHeight,
    isMobile,
  };
}

export const ghlEmbedFrameClassName = () => "ghl-embed-frame max-w-full min-w-0 overflow-visible";
