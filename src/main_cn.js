import "./styles/base.scss";
import { ResumeMaker as ResumeTemplateMaker } from "./components/index.js";
import selfieUrl from "./gyxu.jpg";
import { resume_data_cn } from "./resume-data_cn.js";
import "./styles/page-preview.scss";
import "./styles/print.scss";
import { installPrintPreviewGuides } from "./utils/printPreviewGuides.js";

document.title = resume_data_cn.pageTitle;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", resume_data_cn.description);

document.querySelector("#app").innerHTML = ResumeTemplateMaker(resume_data_cn);

document
  .querySelector(".resume")
  ?.insertAdjacentHTML(
    "afterbegin",
    `<img id="selfie" src="${selfieUrl}" alt="许易豪-专业照片" />`,
  );

installPrintPreviewGuides();
