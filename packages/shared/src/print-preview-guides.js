const RESUME_SELECTOR = ".resume, .cn-resume, .bi-resume";
const PRINTABLE_PAGE_HEIGHT_MM = 281;

let frameId = 0;

const mmToPx = (value) => {
  const probe = document.createElement("div");
  probe.style.height = `${value}mm`;
  probe.style.left = "-9999px";
  probe.style.position = "absolute";
  probe.style.top = "0";
  document.body.append(probe);

  const px = probe.getBoundingClientRect().height;
  probe.remove();

  return px;
};

const clearGuides = (resume) => {
  resume.querySelectorAll(":scope > .print-page-guide").forEach((item) => {
    item.remove();
  });
};

const renderGuides = () => {
  const pageHeight = mmToPx(PRINTABLE_PAGE_HEIGHT_MM);

  document.querySelectorAll(RESUME_SELECTOR).forEach((resume) => {
    clearGuides(resume);

    const height = resume.getBoundingClientRect().height;
    const pageCount = Math.ceil(height / pageHeight);

    for (let pageIndex = 1; pageIndex < pageCount; pageIndex += 1) {
      const guide = document.createElement("div");
      guide.className = "print-page-guide";
      guide.dataset.label = `第 ${pageIndex} 页结束`;
      guide.style.top = `${pageHeight * pageIndex}px`;
      resume.append(guide);
    }
  });
};

const scheduleRender = () => {
  window.cancelAnimationFrame(frameId);
  frameId = window.requestAnimationFrame(renderGuides);
};

export const installPrintPreviewGuides = () => {
  scheduleRender();

  window.addEventListener("resize", scheduleRender);
  document.fonts?.ready.then(scheduleRender);

  const observer = new ResizeObserver(scheduleRender);
  document.querySelectorAll(RESUME_SELECTOR).forEach((resume) => {
    observer.observe(resume);
  });
};
