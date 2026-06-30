import type { MouseEvent } from "react";

const getScrollOffset = () => {
  if (typeof window === "undefined") return 96;

  const root = document.documentElement;
  const headerHeight = getComputedStyle(root).getPropertyValue("--site-header-height").trim();
  const remValue = Number.parseFloat(headerHeight) || 5.5;
  const rootFontSize = Number.parseFloat(getComputedStyle(root).fontSize) || 16;

  return remValue * rootFontSize + 16;
};

/** Scroll to an in-page anchor — reliable on mobile where hash links + content-visibility can fail. */
export function scrollToAnchor(anchorId: string) {
  const target = document.getElementById(anchorId);
  if (!target) return;

  target.classList.add("scroll-target");

  const scrollToTarget = (behavior: ScrollBehavior) => {
    const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
    window.scrollTo({ top: Math.max(0, top), behavior });
    history.replaceState(null, "", `#${anchorId}`);
  };

  const startY = window.scrollY;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => scrollToTarget("smooth"));
  });

  // iOS Safari can ignore smooth scroll to far-off targets — retry with instant scroll.
  window.setTimeout(() => {
    if (Math.abs(window.scrollY - startY) < 12) {
      scrollToTarget("auto");
    }
  }, 400);
}

export function scrollToHref(href: string) {
  if (href.startsWith("#")) {
    scrollToAnchor(href.slice(1));
    return;
  }

  window.location.href = href;
}

export function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, anchorId: string) {
  event.preventDefault();
  scrollToAnchor(anchorId);
}

/** Same-page hash links scroll; cross-page links navigate normally. */
export function navigateToHref(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfterNavigate?: () => void,
) {
  const url = new URL(href, window.location.origin);
  const anchorId = url.hash ? url.hash.slice(1) : undefined;

  if (anchorId && url.pathname === window.location.pathname) {
    event.preventDefault();
    scrollToAnchor(anchorId);
  }

  onAfterNavigate?.();
}

export function scrollToHashOnLoad() {
  const anchorId = window.location.hash.slice(1);
  if (!anchorId) return;

  window.setTimeout(() => scrollToAnchor(anchorId), 150);
}
