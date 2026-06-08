import "./styles/base.scss";
import { resume_data } from "./resume-data.js";
import { ResumeMaker as ResumeTemplateMaker } from "./components/index.js";
import "./styles/print.scss";

// browser tag info
document.title = resume_data.pageTitle;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", resume_data.description);

// real stuff
document.querySelector("#app").innerHTML = ResumeTemplateMaker(resume_data);
