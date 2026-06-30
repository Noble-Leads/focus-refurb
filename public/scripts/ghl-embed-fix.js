/**
 * GHL embed sizing for custom sites (per GHL guidance):
 * - min-height on iframe so steps don't clip
 * - scrolling="yes" as fallback
 * - postMessage height updates from GHL domains
 */
(function () {
  var BUFFER = 48;
  var TRUSTED = [
    "msgsndr.com",
    "leadconnectorhq.com",
    "gohighlevel.com",
    "focusrefurbishmentltd.com",
    "nobleleads.uk",
  ];

  function isTrustedOrigin(origin) {
    for (var i = 0; i < TRUSTED.length; i++) {
      if (origin.indexOf(TRUSTED[i]) !== -1) return true;
    }
    return false;
  }

  function readMinHeight(iframe) {
    var dataHeight = parseInt(iframe.getAttribute("data-height") || "", 10);
    return isNaN(dataHeight) || dataHeight <= 0 ? 900 : dataHeight;
  }

  function applyHeight(iframe, height) {
    var minHeight = readMinHeight(iframe);
    var resolved = Math.max(height + BUFFER, minHeight);
    iframe.style.width = "100%";
    iframe.style.minHeight = minHeight + "px";
    iframe.style.height = resolved + "px";
    iframe.style.border = "none";
    iframe.style.background = "transparent";
    iframe.style.transition = "height 0.2s ease";
    iframe.setAttribute("height", String(resolved));
    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
  }

  function findIframeByMessageId(id) {
    var direct = document.getElementById(id);
    if (direct instanceof HTMLIFrameElement) return direct;

    var iframes = document.querySelectorAll(
      'iframe[src*="/widget/form/"], iframe[src*="/widget/booking/"]',
    );

    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      var formId = iframe.getAttribute("data-form-id") || "";
      var layoutId = iframe.getAttribute("data-layout-iframe-id") || "";

      if (iframe.id === id) return iframe;
      if (id.indexOf(iframe.id) !== -1 || iframe.id.indexOf(id) !== -1) return iframe;
      if (formId && (id === formId || id.indexOf(formId) !== -1)) return iframe;
      if (layoutId && (id === layoutId || id.indexOf(layoutId) !== -1)) return iframe;
    }

    return null;
  }

  function initIframe(iframe) {
    applyHeight(iframe, readMinHeight(iframe));
  }

  function initAll() {
    var iframes = document.querySelectorAll(
      'iframe[src*="/widget/form/"], iframe[src*="/widget/booking/"]',
    );
    for (var i = 0; i < iframes.length; i++) {
      initIframe(iframes[i]);
    }
  }

  function handleMessage(event) {
    if (!isTrustedOrigin(event.origin)) return;

    if (typeof event.data === "string" && event.data.indexOf("[iFrameSizer]") === 0) {
      var parts = event.data.slice(13).split(":");
      var id = parts[0];
      var height = parseInt(parts[1], 10);
      if (!id || isNaN(height) || height <= 0) return;
      var iframe = findIframeByMessageId(id);
      if (iframe) applyHeight(iframe, height);
      return;
    }

    if (event.data && typeof event.data === "object" && event.data.height) {
      var h = parseInt(event.data.height, 10);
      if (isNaN(h) || h <= 0) return;
      var target = null;
      if (event.data.id) target = findIframeByMessageId(String(event.data.id));
      if (!target) {
        target = document.querySelector('iframe[data-ghl-embed="true"]');
      }
      if (target) applyHeight(target, h);
    }
  }

  window.addEventListener("message", handleMessage, false);
  document.addEventListener("DOMContentLoaded", initAll);
  window.addEventListener("load", initAll);
})();
