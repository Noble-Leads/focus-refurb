(function () {
  var dragging = false;
  var activeFrame = null;

  function applyPosition(frame, pct) {
    var clamped = Math.min(100, Math.max(0, pct));
    var clip = frame.querySelector("[data-before-clip]");
    var inner = frame.querySelector("[data-before-inner]");
    var handle = frame.querySelector("[data-handle]");
    if (!clip || !inner || !handle) return;

    var innerWidth = clamped > 0 ? (100 / clamped) * 100 + "%" : "100%";
    clip.style.width = clamped + "%";
    inner.style.width = innerWidth;
    handle.style.left = clamped + "%";
    frame.setAttribute("aria-valuenow", String(Math.round(clamped)));
  }

  function positionFromEvent(frame, clientX) {
    var rect = frame.getBoundingClientRect();
    if (rect.width <= 0) return;
    applyPosition(frame, ((clientX - rect.left) / rect.width) * 100);
  }

  document.addEventListener(
    "pointerdown",
    function (e) {
      var frame = e.target.closest("[data-before-after]");
      if (!frame || e.button !== 0) return;

      dragging = true;
      activeFrame = frame;
      frame.setPointerCapture(e.pointerId);
      positionFromEvent(frame, e.clientX);
    },
    { passive: true }
  );

  document.addEventListener(
    "pointermove",
    function (e) {
      if (!dragging || !activeFrame) return;
      if (!activeFrame.hasPointerCapture(e.pointerId)) return;
      positionFromEvent(activeFrame, e.clientX);
    },
    { passive: true }
  );

  function endDrag(e) {
    if (!dragging || !activeFrame) return;
    if (activeFrame.hasPointerCapture(e.pointerId)) {
      activeFrame.releasePointerCapture(e.pointerId);
    }
    dragging = false;
    activeFrame = null;
  }

  document.addEventListener("pointerup", endDrag);
  document.addEventListener("pointercancel", endDrag);

  document.addEventListener("keydown", function (e) {
    var frame = e.target.closest("[data-before-after]");
    if (!frame) return;

    var current = Number(frame.getAttribute("aria-valuenow") || 50);
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      applyPosition(frame, current - 2);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      applyPosition(frame, current + 2);
    }
  });
})();
