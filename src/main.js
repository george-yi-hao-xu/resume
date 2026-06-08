import { ResumeMaker as ResumeTemplateMaker } from "./components/index.js";
import { resume_data } from "./resume-data.js";
import "./style.scss";

// browser tag info
document.title = `${resume_data.name} Resume`;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", resume_data.description);

// real stuff
document.querySelector("#app").innerHTML = ResumeTemplateMaker(resume_data);
