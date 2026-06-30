import { useCallback, useEffect, useRef, useState } from "react";

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
  if (widgetId && messageId.includes(widgetId)) return true;
  if (messageId.includes(iframeId)) return true;
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

export const mobileFormFallbackHeight = (baseHeight: number) => {
  if (!isMobileViewport()) return baseHeight;
  if (baseHeight >= 900) return baseHeight + 120;
  if (baseHeight >= 650) return Math.max(baseHeight + 120, 900);
  return Math.max(baseHeight + 80, 820);
};

export const mobileBookingFallbackHeight = (baseHeight: number) => {
  if (!isMobileViewport()) return baseHeight;
  return Math.max(baseHeight + 120, 900);
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
  const [allowIframeScroll, setAllowIframeScroll] = useState(() => isMobileViewport());

  const applyHeight = useCallback((nextHeight: number) => {
    setHeight((current) => Math.max(current, nextHeight));
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    iframe.style.pointerEvents = "auto";

    if (!enabled) return;

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      const nextHeight = parseIframeSizerHeight(event.data, iframeId, widgetId);
      if (nextHeight) applyHeight(nextHeight);
    };

    const fallbackTimers = [400, 1000, 2500, 5000, 8000].map((delay) =>
      window.setTimeout(() => applyHeight(fallbackHeight), delay),
    );

    const scrollFallbackTimer = window.setTimeout(() => {
      if (isMobileViewport()) setAllowIframeScroll(true);
    }, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        applyHeight(fallbackHeight);
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );
    observer.observe(iframe);

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      fallbackTimers.forEach(window.clearTimeout);
      window.clearTimeout(scrollFallbackTimer);
      observer.disconnect();
    };
  }, [applyHeight, enabled, fallbackHeight, iframeId, widgetId]);

  return {
    iframeRef,
    height,
    startingHeight: fallbackHeight,
    applyHeight,
    allowIframeScroll,
  };
}

export const ghlEmbedFrameClassName = (allowScroll: boolean) =>
  [
    "ghl-embed-frame max-w-full min-w-0",
    allowScroll ? "ghl-embed-frame--scrollable" : "overflow-visible",
  ].join(" ");
