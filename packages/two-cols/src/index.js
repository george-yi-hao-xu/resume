import { TwoColsResumeMaker } from "./TwoColsResumeMaker.js";
import { resume_data_two_cols } from "./resume-data_two_cols.js";

export { TwoColsResumeMaker, resume_data_two_cols };

export const mountTwoColsResume = ({
  avatar,
  documentRef = document,
  resume = resume_data_two_cols,
  selector = "#app",
} = {}) => {
  documentRef.title = resume.pageTitle;
  documentRef
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", resume.description);

  const target = documentRef.querySelector(selector);

  if (!target) {
    throw new Error(`Cannot mount two-cols resume: missing ${selector}`);
  }

  target.innerHTML = TwoColsResumeMaker({
    ...resume,
    avatar,
  });
};
