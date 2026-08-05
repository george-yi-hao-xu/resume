import { Entry, SkillGroup } from "./Entry.js";
import { Section } from "./Section.js";

const languageText = (item) => `${item.name}${item.level ? ` (${item.level})` : ""}`;

const skillGroupsWithLanguages = (resume) => [
  ...resume.skillGroups,
  ...(resume.languages?.length
    ? [
        {
          title: resume.labels.languages,
          items: [resume.languages.map(languageText).join(" / ")],
        },
      ]
    : []),
];

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
      children: skillGroupsWithLanguages(resume).map(SkillGroup).join(""),
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
