import { ChinaResumeMaker } from "./ChinaResumeMaker.js";
import { resume_data_cn_domestic } from "./resume-data_cn_domestic.js";

export { ChinaResumeMaker, resume_data_cn_domestic };

export const mountOneColResume = ({
  avatar,
  documentRef = document,
  resume = resume_data_cn_domestic,
  selector = "#app",
} = {}) => {
  documentRef.title = resume.pageTitle;
  documentRef
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", resume.description);

  const target = documentRef.querySelector(selector);

  if (!target) {
    throw new Error(`Cannot mount one-col resume: missing ${selector}`);
  }

  target.innerHTML = ChinaResumeMaker(resume, avatar);
};
