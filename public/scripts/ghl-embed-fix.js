/**
 * Keep GHL embed iframes visible and sized to their content.
 * Tall commercial forms keep a min-height floor; a style guard undoes GHL shrink attempts.
 */
(function () {
  var FORM_BUFFER = 64;
  var BOOKING_BUFFER = 160;
  var TALL_FORM_BUFFER = 120;
  var TALL_THRESHOLD = 800;
  var COLLAPSE_FLOOR = 280;
  var guarded = typeof WeakSet !== "undefined" ? new WeakSet() : null;

  function readConfiguredHeight(iframe) {
    var dataHeight = parseInt(iframe.getAttribute("data-height") || "", 10);
    return isNaN(dataHeight) ? 0 : dataHeight;
  }

  function minFloorFor(iframe) {
    var configured = readConfiguredHeight(iframe);
    return configured >= TALL_THRESHOLD ? configured : COLLAPSE_FLOOR;
  }

  function isTall(iframe) {
    return minFloorFor(iframe) >= TALL_THRESHOLD;
  }

  function bufferFor(iframe) {
    var src = iframe.getAttribute("src") || "";
    if (src.indexOf("/widget/booking/") !== -1) return BOOKING_BUFFER;
    return isTall(iframe) ? TALL_FORM_BUFFER : FORM_BUFFER;
  }

  function readHeight(iframe) {
    var inline = parseInt(iframe.style.height, 10);
    var attr = parseInt(iframe.getAttribute("height"), 10);
    return Math.max(isNaN(inline) ? 0 : inline, isNaN(attr) ? 0 : attr);
  }

  function isMobile() {
    return window.matchMedia("(max-width: 767px)").matches;
  }

  function setHeight(iframe, height, minFloor) {
    var floor = minFloor || COLLAPSE_FLOOR;
    var resolved = Math.max(height, floor);
    var tall = floor >= TALL_THRESHOLD;

    iframe.style.height = resolved + "px";
    iframe.style.minHeight = tall ? floor + "px" : "0";
    iframe.style.maxHeight = "none";
    iframe.setAttribute("height", String(resolved));
    iframe.setAttribute("data-initial-iframe-hidden", "false");
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    iframe.style.background = "transparent";
    iframe.style.overflow = tall ? "auto" : "visible";
    iframe.scrolling = tall && isMobile() ? "auto" : "no";

    if (tall) {
      iframe.setAttribute("data-ghl-tall", "true");
    }
  }

  function enforceHeight(iframe, height) {
    var minFloor = minFloorFor(iframe);
    setHeight(iframe, height, minFloor);
    window.requestAnimationFrame(function () {
      setHeight(iframe, Math.max(height, minFloor), minFloor);
    });
    window.setTimeout(function () {
      setHeight(iframe, Math.max(height, minFloor), minFloor);
    }, 50);
    window.setTimeout(function () {
      setHeight(iframe, Math.max(height, minFloor), minFloor);
    }, 250);
    window.setTimeout(function () {
      setHeight(iframe, Math.max(height, minFloor), minFloor);
    }, 1000);
  }

  function guardIframe(iframe) {
    if (guarded && guarded.has(iframe)) return;
    if (guarded) guarded.add(iframe);

    var minFloor = minFloorFor(iframe);
    if (minFloor < TALL_THRESHOLD) return;

    function applyGuard() {
      var current = readHeight(iframe);
      if (current < minFloor) {
        setHeight(iframe, minFloor, minFloor);
      }
      if (iframe.style.overflow === "hidden") {
        iframe.style.overflow = "auto";
      }
    }

    applyGuard();

    if (typeof MutationObserver !== "undefined") {
      var observer = new MutationObserver(applyGuard);
      observer.observe(iframe, { attributes: true, attributeFilter: ["style", "height"] });
    }

    window.setInterval(applyGuard, 300);
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

  function fixCollapsed() {
    var iframes = document.querySelectorAll(
      'iframe[src*="/widget/form/"], iframe[src*="/widget/booking/"]',
    );
    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      guardIframe(iframe);
      var minFloor = minFloorFor(iframe);
      var current = readHeight(iframe);
      if (current < COLLAPSE_FLOOR) {
        var dataHeight = readConfiguredHeight(iframe);
        enforceHeight(iframe, dataHeight > 0 ? dataHeight : COLLAPSE_FLOOR);
        continue;
      }
      if (isTall(iframe) && current < minFloor) {
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

    enforceHeight(iframe, height + bufferFor(iframe));
  }

  window.addEventListener("message", function (event) {
    growFromMessage(event.data);
  });

  window.setInterval(fixCollapsed, 400);

  document.addEventListener("DOMContentLoaded", fixCollapsed);
  window.addEventListener("load", fixCollapsed);
})();
