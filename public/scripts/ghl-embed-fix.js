/**
 * GHL embed iframes: iFrameSizer auto-resize.
 * Booking calendars use 600–850px bounds + scrolling (Google squeeze pattern).
 * Commercial forms cap at 820px to trim GHL-reported dead space below submit.
 */
(function () {
  var FORM_BUFFER = 24;
  var BOOKING_BUFFER = 48;
  var FORM_COLLAPSE = 480;
  var BOOKING_MIN = 600;
  var BOOKING_MAX = 850;
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

  function isBooking(iframe) {
    return iframe.getAttribute("data-embed-type") === "booking";
  }

  function readInitialHeight(iframe) {
    var dataHeight = parseInt(iframe.getAttribute("data-height") || "", 10);
    return isNaN(dataHeight) || dataHeight <= 0 ? 720 : dataHeight;
  }

  function readCollapseFloor(iframe) {
    if (isBooking(iframe)) return BOOKING_MIN;
    var floor = parseInt(iframe.getAttribute("data-collapse-floor") || "", 10);
    return isNaN(floor) || floor <= 0 ? FORM_COLLAPSE : floor;
  }

  function readMaxHeight(iframe) {
    var attr = parseInt(iframe.getAttribute("data-max-height") || "", 10);
    if (attr > 0) return attr;
    return isBooking(iframe) ? BOOKING_MAX : null;
  }

  function syncWrapper(iframe) {
    var wrapper = iframe.closest(".ep-wrapper, [id$='-wrapper']");
    if (!wrapper) return;
    var maxHeight = readMaxHeight(iframe);
    wrapper.style.width = "100%";
    wrapper.style.height = "auto";
    wrapper.style.minHeight = "0";
    wrapper.style.maxHeight = maxHeight ? maxHeight + "px" : "none";
    wrapper.style.overflow = maxHeight ? "hidden" : "visible";
  }

  function applyHeight(iframe, height) {
    var booking = isBooking(iframe);
    var floor = readCollapseFloor(iframe);
    var maxHeight = readMaxHeight(iframe);
    var buffer = booking ? BOOKING_BUFFER : FORM_BUFFER;
    var resolved;

    if (booking) {
      resolved = Math.min(Math.max(height + buffer, BOOKING_MIN), BOOKING_MAX);
      iframe.style.width = "100%";
      iframe.style.minHeight = BOOKING_MIN + "px";
      iframe.style.maxHeight = BOOKING_MAX + "px";
      iframe.style.height = resolved + "px";
      iframe.style.border = "none";
      iframe.style.background = "transparent";
      iframe.style.transition = "height 0.15s ease-out";
      iframe.setAttribute("height", String(resolved));
      iframe.setAttribute("scrolling", "yes");
    } else {
      resolved = Math.max(height + buffer, floor);
      if (maxHeight) resolved = Math.min(resolved, maxHeight);
      iframe.style.width = "100%";
      iframe.style.minHeight = floor + "px";
      iframe.style.height = resolved + "px";
      iframe.style.maxHeight = maxHeight ? maxHeight + "px" : "none";
      iframe.style.border = "none";
      iframe.style.background = "transparent";
      iframe.style.transition = "height 0.15s ease-out";
      iframe.setAttribute("height", String(resolved));
      iframe.setAttribute("scrolling", maxHeight ? "yes" : "no");
    }

    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    syncWrapper(iframe);
  }

  function initBookingIframe(iframe) {
    iframe.style.width = "100%";
    iframe.style.height = "clamp(600px, 75vh, 850px)";
    iframe.style.minHeight = BOOKING_MIN + "px";
    iframe.style.maxHeight = BOOKING_MAX + "px";
    iframe.style.border = "none";
    iframe.style.transition = "height 0.15s ease-out";
    iframe.setAttribute("scrolling", "yes");
    syncWrapper(iframe);
  }

  function initFormIframe(iframe) {
    var initial = readInitialHeight(iframe);
    var maxHeight = readMaxHeight(iframe);
    if (maxHeight) initial = Math.min(initial, maxHeight);
    applyHeight(iframe, initial - FORM_BUFFER);
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

  function initAll() {
    var iframes = document.querySelectorAll(
      'iframe[src*="/widget/form/"], iframe[src*="/widget/booking/"]',
    );
    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      if (isBooking(iframe)) {
        initBookingIframe(iframe);
      } else {
        initFormIframe(iframe);
      }
    }
  }

  function handleMessage(event) {
    if (typeof event.data === "string" && event.data.indexOf("[iFrameSizer]") === 0) {
      var parts = event.data.slice(13).split(":");
      var id = parts[0];
      var height = parseInt(parts[1], 10);
      if (!id || isNaN(height) || height <= 0) return;
      var iframe = findIframeByMessageId(id);
      if (iframe) applyHeight(iframe, height);
      return;
    }

    if (!isTrustedOrigin(event.origin)) return;

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
