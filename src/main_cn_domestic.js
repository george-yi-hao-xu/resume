import "./styles/base.scss";
import { ChinaResumeMaker } from "./components/ChinaResumeMaker.js";
import avatarUrl from "./gyxu.jpg";
import { resume_data_bilingual } from "./resume-data_bilingual.js";
import "./styles/print.scss";

document.title = "许易豪 - 国内中文简历";
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", "许易豪面向国内职场的软件工程师中文简历。");

document.querySelector("#app").innerHTML = ChinaResumeMaker(
  resume_data_bilingual,
  avatarUrl,
);
