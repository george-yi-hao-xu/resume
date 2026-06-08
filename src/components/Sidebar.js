import { Entry, LanguageList, SkillGroup } from "./Entry.js";
import { Section } from "./Section.js";

export const Sidebar = (resume) => `
  <aside class="resume__sidebar" aria-label="Resume details">
    ${Section({
      title: "Education",
      children: resume.education.map(Entry).join(""),
    })}
    ${Section({
      title: "Skills",
      children: resume.skillGroups.map(SkillGroup).join(""),
    })}
    ${Section({
      title: "Indie Projects",
      children: resume.indieProjects.map(Entry).join(""),
    })}
    ${Section({
      title: "Studio Projects",
      children: resume.studioProjects.map(Entry).join(""),
    })}
    ${Section({
      title: "Languages",
      children: LanguageList(resume.languages),
    })}
  </aside>
`;
