import { Entry, LanguageList, SkillGroup } from "./Entry.js";
import { Section } from "./Section.js";

/**
 * @param {import("../resume-data.js").ResumeData} resume
 * @returns {string}
 */
export const Sidebar = (resume) => `
  <aside class="resume__sidebar" aria-label="Resume details">
    ${Section({
      title: resume.labels.education,
      children: resume.education.map(Entry).join(""),
    })}
    ${Section({
      title: resume.labels.skills,
      children: resume.skillGroups.map(SkillGroup).join(""),
    })}
    ${Section({
      title: resume.labels.languages,
      children: LanguageList(resume.languages),
      className: "section--languages",
    })}
    ${Section({
      title: resume.labels.studioProjects,
      children: resume.studioProjects.map(Entry).join(""),
    })}
    ${Section({
      title: resume.labels.indieProjects,
      children: resume.indieProjects.map(Entry).join(""),
    })}
  </aside>
`;
