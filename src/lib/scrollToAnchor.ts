/** Scroll to an in-page anchor — reliable on mobile where hash links + content-visibility can fail. */
export function scrollToAnchor(anchorId: string) {
  const target = document.getElementById(anchorId);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${anchorId}`);
}

export function scrollToHref(href: string) {
  if (href.startsWith("#")) {
    scrollToAnchor(href.slice(1));
    return;
  }

  window.location.href = href;
}
