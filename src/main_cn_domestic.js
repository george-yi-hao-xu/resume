import "./styles/base.scss";
import { ChinaResumeMaker } from "./components/ChinaResumeMaker.js";
import avatarUrl from "./gyxu.jpg";
import { resume_data_cn_domestic } from "./resume-data_cn_domestic.js";
import "./styles/print.scss";

document.title = resume_data_cn_domestic.pageTitle;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", resume_data_cn_domestic.description);

document.querySelector("#app").innerHTML = ChinaResumeMaker(
  resume_data_cn_domestic,
  avatarUrl,
);
