import { useEffect, useRef } from "react";

/** GHL recommends 600–1200px for booking; 850–950px is a common starting point. */
export const GHL_BOOKING_MIN_HEIGHT = 950;
export const GHL_FORM_MIN_HEIGHT = 900;
export const GHL_COMMERCIAL_MIN_HEIGHT = 1100;
export const GHL_HEIGHT_BUFFER = 48;

const TRUSTED_ORIGIN_FRAGMENTS = [
  "msgsndr.com",
  "leadconnectorhq.com",
  "gohighlevel.com",
  "focusrefurbishmentltd.com",
  "nobleleads.uk",
];

export const parseWidgetId = (src: string): string | null => {
  const match = src.match(/\/widget\/(?:booking|form)\/([^/?]+)/);
  return match?.[1] ?? null;
};

export const isTrustedGhlOrigin = (origin: string) =>
  TRUSTED_ORIGIN_FRAGMENTS.some((fragment) => origin.includes(fragment));

export const ghlEmbedInlineStyle = (minHeight: number) =>
  ({
    width: "100%",
    minHeight: `${minHeight}px`,
    height: `${minHeight}px`,
    border: "none",
    display: "block",
    background: "transparent",
    transition: "height 0.2s ease",
  }) as const;

type RegisteredEmbed = {
  iframeId: string;
  widgetId: string | null;
  minHeight: number;
};

const embedRegistry = new Map<HTMLIFrameElement, RegisteredEmbed>();
let globalListenerAttached = false;

const readMinHeight = (iframe: HTMLIFrameElement) => {
  const registered = embedRegistry.get(iframe);
  if (registered) return registered.minHeight;
  const dataHeight = Number.parseInt(iframe.getAttribute("data-height") || "", 10);
  return dataHeight > 0 ? dataHeight : GHL_FORM_MIN_HEIGHT;
};

/** Apply height from GHL postMessage — never below configured min-height. */
export const applyGhlIframeHeight = (iframe: HTMLIFrameElement, nextHeight: number) => {
  const minHeight = readMinHeight(iframe);
  const resolved = Math.max(nextHeight + GHL_HEIGHT_BUFFER, minHeight);
  iframe.style.minHeight = `${minHeight}px`;
  iframe.style.height = `${resolved}px`;
  iframe.setAttribute("height", String(resolved));
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

  return null;
};

const handleIframeSizerMessage = (data: string) => {
  if (!data.startsWith("[iFrameSizer]")) return;

  const [messageId, heightStr] = data.slice(13).split(":");
  const parsedHeight = Number.parseInt(heightStr ?? "", 10);
  if (!messageId || parsedHeight <= 0) return;

  const iframe = findIframeByMessageId(messageId);
  if (iframe) applyGhlIframeHeight(iframe, parsedHeight);
};

const handleObjectHeightMessage = (data: Record<string, unknown>, iframe?: HTMLIFrameElement | null) => {
  const height = Number(data.height ?? data.iframeHeight ?? data.frameHeight);
  if (!Number.isFinite(height) || height <= 0) return false;

  const messageId =
    typeof data.id === "string"
      ? data.id
      : typeof data.iframeId === "string"
        ? data.iframeId
        : typeof data.frameId === "string"
          ? data.frameId
          : null;

  const target =
    iframe ??
    (messageId ? findIframeByMessageId(messageId) : null) ??
    document.querySelector<HTMLIFrameElement>('iframe[data-ghl-embed="true"]');

  if (!target) return false;
  applyGhlIframeHeight(target, height);
  return true;
};

const ensureGlobalListener = () => {
  if (globalListenerAttached || typeof window === "undefined") return;
  globalListenerAttached = true;

  window.addEventListener("message", (event: MessageEvent) => {
    if (!isTrustedGhlOrigin(event.origin)) return;

    if (typeof event.data === "string") {
      handleIframeSizerMessage(event.data);
      return;
    }

    if (event.data && typeof event.data === "object") {
      handleObjectHeightMessage(event.data as Record<string, unknown>);
    }
  });
};

export const registerGhlEmbed = (iframe: HTMLIFrameElement, options: RegisteredEmbed) => {
  ensureGlobalListener();
  embedRegistry.set(iframe, options);

  iframe.setAttribute("data-initial-iframe-hidden", "false");
  iframe.style.opacity = "1";
  iframe.style.visibility = "visible";

  const style = ghlEmbedInlineStyle(options.minHeight);
  Object.assign(iframe.style, style);

  return () => {
    embedRegistry.delete(iframe);
  };
};

type UseGhlEmbedResizeOptions = {
  iframeId: string;
  widgetId: string | null;
  minHeight: number;
  enabled?: boolean;
};

export function useGhlEmbedResize({
  iframeId,
  widgetId,
  minHeight,
  enabled = true,
}: UseGhlEmbedResizeOptions) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !enabled) return;

    return registerGhlEmbed(iframe, { iframeId, widgetId, minHeight });
  }, [enabled, iframeId, minHeight, widgetId]);

  return { iframeRef, minHeight };
}
