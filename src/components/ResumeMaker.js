import { Experience } from "./Experience.js";
import { Header } from "./Header.js";
import { Sidebar } from "./Sidebar.js";
import "./ResumeMaker.scss";

/**
 * @param {import("../resume-data.js").ResumeData} resume
 * @returns {string}
 */
export const ResumeMaker = (resume) => `
  <main class="resume">
      ${Header(resume)}
    <div class="resume__grid">
      ${Sidebar(resume)}
      ${Experience({
        title: resume.labels.experience,
        jobs: resume.experience,
      })}
    </div>
  </main>
`;
