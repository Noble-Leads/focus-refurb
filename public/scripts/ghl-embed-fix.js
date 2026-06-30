/**
 * GHL embed iframes: grow-only height, never shrink below data-height, always scrollable.
 */
(function () {
  var FORM_BUFFER = 80;
  var BOOKING_BUFFER = 200;
  var COLLAPSE_FLOOR = 280;
  var peaks = typeof WeakMap !== "undefined" ? new WeakMap() : null;
  var guarded = typeof WeakSet !== "undefined" ? new WeakSet() : null;

  function readConfiguredHeight(iframe) {
    var dataHeight = parseInt(iframe.getAttribute("data-height") || "", 10);
    return isNaN(dataHeight) || dataHeight <= 0 ? COLLAPSE_FLOOR : dataHeight;
  }

  function bufferFor(iframe) {
    var src = iframe.getAttribute("src") || "";
    return src.indexOf("/widget/booking/") !== -1 ? BOOKING_BUFFER : FORM_BUFFER;
  }

  function readHeight(iframe) {
    var inline = parseInt(iframe.style.height, 10);
    var attr = parseInt(iframe.getAttribute("height"), 10);
    return Math.max(isNaN(inline) ? 0 : inline, isNaN(attr) ? 0 : attr);
  }

  function getPeak(iframe, minFloor) {
    if (peaks && peaks.has(iframe)) return peaks.get(iframe);
    return minFloor;
  }

  function setPeak(iframe, value) {
    if (peaks) peaks.set(iframe, value);
  }

  function setHeight(iframe, height, minFloor) {
    var floor = minFloor || COLLAPSE_FLOOR;
    var resolved = Math.max(height, floor, COLLAPSE_FLOOR);
    setPeak(iframe, resolved);

    iframe.style.height = resolved + "px";
    iframe.style.minHeight = floor + "px";
    iframe.style.maxHeight = "none";
    iframe.setAttribute("height", String(resolved));
    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    iframe.style.background = "transparent";
    iframe.style.overflow = "auto";
    iframe.scrolling = "auto";
  }

  function enforceHeight(iframe, rawHeight) {
    var minFloor = readConfiguredHeight(iframe);
    var target = Math.max(getPeak(iframe, minFloor), rawHeight + bufferFor(iframe), minFloor);
    setHeight(iframe, target, minFloor);

    window.requestAnimationFrame(function () {
      setHeight(iframe, target, minFloor);
    });
    window.setTimeout(function () {
      setHeight(iframe, target, minFloor);
    }, 50);
    window.setTimeout(function () {
      setHeight(iframe, target, minFloor);
    }, 250);
    window.setTimeout(function () {
      setHeight(iframe, target, minFloor);
    }, 1000);
  }

  function guardIframe(iframe) {
    if (guarded && guarded.has(iframe)) return;
    if (guarded) guarded.add(iframe);

    var minFloor = readConfiguredHeight(iframe);
    setPeak(iframe, minFloor);

    function applyGuard() {
      var minFloor = readConfiguredHeight(iframe);
      var peak = getPeak(iframe, minFloor);
      var current = readHeight(iframe);
      var target = Math.max(peak, minFloor, current);

      if (current < target) {
        setHeight(iframe, target, minFloor);
      }

      if (iframe.style.overflow === "hidden") {
        iframe.style.overflow = "auto";
      }
      if (iframe.getAttribute("scrolling") === "no") {
        iframe.setAttribute("scrolling", "auto");
      }
    }

    applyGuard();

    if (typeof MutationObserver !== "undefined") {
      var observer = new MutationObserver(applyGuard);
      observer.observe(iframe, { attributes: true, attributeFilter: ["style", "height"] });
    }

    window.setInterval(applyGuard, 250);
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

  function fixAll() {
    var iframes = document.querySelectorAll(
      'iframe[src*="/widget/form/"], iframe[src*="/widget/booking/"]',
    );
    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      guardIframe(iframe);
      var minFloor = readConfiguredHeight(iframe);
      var current = readHeight(iframe);
      if (current < minFloor) {
        enforceHeight(iframe, minFloor);
      }
    }
  }

  function growFromMessage(data) {
    if (typeof data !== "string" || data.indexOf("[iFrameSizer]") !== 0) return;
    var parts = data.slice(13).split(":");
    var id = parts[0];
    var height = parseInt(parts[1], 10);
    if (!id || isNaN(height) || height <= 0) return;

    var iframe = findIframeByMessageId(id);
    if (!(iframe instanceof HTMLIFrameElement)) return;

    enforceHeight(iframe, height);
  }

  window.addEventListener("message", function (event) {
    growFromMessage(event.data);
  });

  window.setInterval(fixAll, 400);

  document.addEventListener("DOMContentLoaded", fixAll);
  window.addEventListener("load", fixAll);
})();
