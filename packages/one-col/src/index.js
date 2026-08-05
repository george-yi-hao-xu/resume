import { OneColMaker } from "./one-col-maker.js";
import { one_col_data } from "./one-col-data.js";

export { OneColMaker, one_col_data };

export const mountOneColResume = ({
  avatar,
  documentRef = document,
  resume = one_col_data,
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

  target.innerHTML = OneColMaker(resume, avatar);
};
