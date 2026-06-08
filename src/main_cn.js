import "./styles/base.scss";
import { ResumeMaker as ResumeTemplateMaker } from "./components/index.js";
import { resume_data_cn } from "./resume-data_cn.js";
import "./styles/print.scss";

document.title = resume_data_cn.pageTitle;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", resume_data_cn.description);

document.querySelector("#app").innerHTML = ResumeTemplateMaker(resume_data_cn);
