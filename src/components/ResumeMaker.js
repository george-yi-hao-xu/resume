import { Experience } from "./Experience.js";
import { Header } from "./Header.js";
import { Sidebar } from "./Sidebar.js";
import "./ResumeMaker.scss";

export const ResumeMaker = (resume) => `
  <main class="resume">
    ${Header(resume)}
    <div class="resume__grid">
      ${Sidebar(resume)}
      ${Experience(resume.experience)}
    </div>
  </main>
`;
