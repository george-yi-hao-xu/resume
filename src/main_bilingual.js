import "./styles/base.scss";
import { resume_data_bilingual } from "./resume-data_bilingual.js";
import { BilingualResumeMaker } from "./components/BilingualResumeMaker.js";
import avatarUrl from "./gyxu.jpg";
import "./styles/page-preview.scss";
import "./styles/print.scss";
import { installPrintPreviewGuides } from "./utils/printPreviewGuides.js";

document.title = resume_data_bilingual.pageTitle;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", resume_data_bilingual.description);

document.querySelector("#app").innerHTML = BilingualResumeMaker({
  ...resume_data_bilingual,
  avatar: avatarUrl,
});

installPrintPreviewGuides();
