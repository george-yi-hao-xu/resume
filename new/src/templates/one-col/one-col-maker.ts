import type {
    ContactItem,
    EducationItem,
    ExperienceItem,
    LanguageCode,
    LanguageItem,
    PersonalProjectItem,
    ResumeData,
    SkillGroup,
    WorkProjectItem,
} from "../../data/data.types";
import {
    escapeHtml,
    htmlText,
    localizedJoin,
    localizedText,
    sectionIsVisible,
} from "../../shared/html";
import "./one-col.scss";

const Section = (title: string, children: string, className = "") => `
  <section class="nr-section ${escapeHtml(className)}">
    <h2><span>${escapeHtml(title)}</span></h2>
    ${children}
  </section>
`;

const ContactItem = (item: ContactItem, lang: LanguageCode) => {
    const label = localizedText(item.label, lang);
    const value = item.localizedValue ?? item.value;

    if (!label || !item.value) {
        return "";
    }

    const separator = lang === "en" ? ": " : "：";
    const content = item.href
        ? `<a href="${escapeHtml(item.href)}">${htmlText(value, lang)}</a>`
        : `<span>${htmlText(value, lang)}</span>`;

    return `<span><b>${escapeHtml(label)}${separator}</b>${content}</span>`;
};

const Header = (resume: ResumeData, avatar: string, lang: LanguageCode) => {
    const name = localizedText(resume.name, lang);

    return `
    <header class="nr-header">
      <div class="nr-header__identity">
        <h1>
          <span>${escapeHtml(name)}</span>
          <small>${htmlText(resume.role, lang)}</small>
        </h1>
        <div class="nr-contact-list" aria-label="${htmlText(resume.labels.contactAria, lang)}">
          ${resume.contacts.map((item) => ContactItem(item, lang)).join("")}
        </div>
      </div>
      <img class="nr-avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(name)}" />
    </header>
  `;
};

const Profile = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.profile, lang),
        `<div class="nr-profile">${resume.profile.map((item) => `<p>${htmlText(item, lang)}</p>`).join("")}</div>`,
        "nr-profile-section",
    );

const EducationItem = (item: EducationItem, lang: LanguageCode) => `
  <article class="nr-compact-entry">
    <h3>${htmlText(item.title, lang)}</h3>
    <p class="nr-compact-entry__meta">${localizedJoin([item.meta, item.location], lang, lang === "en" ? ", " : " ")}</p>
    ${item.time ? `<p class="nr-compact-entry__time">${htmlText(item.time, lang)}</p>` : ""}
  </article>
`;

const Education = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.education, lang),
        resume.education.map((item) => EducationItem(item, lang)).join(""),
        "nr-education-section",
    );

const languageSkillText = (item: LanguageItem, lang: LanguageCode) => {
    const name = localizedText(item.name, lang);
    const level = localizedText(item.level, lang);

    return `${name}${level ? ` (${level})` : ""}`;
};

const skillGroupsWithLanguages = (resume: ResumeData, lang: LanguageCode): SkillGroup[] => [
    ...resume.skillGroups,
    ...(resume.languages.length
        ? [
              {
                  title: resume.labels.languages,
                  items: [
                      {
                          [lang]: resume.languages
                              .map((item) => languageSkillText(item, lang))
                              .join(lang === "en" ? ", " : "、"),
                      },
                  ],
              },
          ]
        : []),
];

const SkillGroup = (group: SkillGroup, lang: LanguageCode) => `
  <article class="nr-skill-group">
    <h3>${htmlText(group.title, lang)}</h3>
    <p>${group.items.map((item) => htmlText(item, lang)).join(lang === "en" ? ", " : "、")}</p>
  </article>
`;

const Skills = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.skills, lang),
        skillGroupsWithLanguages(resume, lang)
            .map((item) => SkillGroup(item, lang))
            .join(""),
        "nr-skills-section",
    );

const InlineLinks = (links: ExperienceItem["links"], lang: LanguageCode) => {
    if (!links?.length) {
        return "";
    }

    return `
    <span class="nr-entry__inline-links">
      ${links.map((item) => `<a href="${escapeHtml(item.href)}">${htmlText(item.label, lang)}</a>`).join("")}
    </span>
  `;
};

const Job = (item: ExperienceItem, lang: LanguageCode) => `
  <article class="nr-entry nr-job">
    <header class="nr-entry__header">
      <div>
        <h3>${htmlText(item.company, lang)}</h3>
        <p class="nr-entry__role">
          <span>${htmlText(item.title, lang)}</span>
          ${InlineLinks(item.links, lang)}
        </p>
      </div>
      <p class="nr-entry__meta">${localizedJoin(item.meta, lang)}</p>
    </header>
    <div class="nr-entry__body">
      <ul>${item.bullets.map((bullet) => `<li>${htmlText(bullet, lang)}</li>`).join("")}</ul>
    </div>
  </article>
`;

const Experience = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.experience, lang),
        resume.experience.map((item) => Job(item, lang)).join(""),
        "nr-experience-section",
    );

const WorkProject = (item: WorkProjectItem, lang: LanguageCode) => `
  <article class="nr-entry nr-project">
    <header class="nr-entry__header">
      <div>
        <h3>${htmlText(item.title, lang)}</h3>
        <p class="nr-entry__role">${localizedJoin([item.company, item.role], lang, " / ")}</p>
      </div>
      ${item.meta?.length ? `<p class="nr-entry__meta">${localizedJoin(item.meta, lang)}</p>` : ""}
    </header>
    <div class="nr-entry__body">
      ${item.summary ? `<p>${htmlText(item.summary, lang)}</p>` : ""}
      <ul>${item.description.map((description) => `<li>${htmlText(description, lang)}</li>`).join("")}</ul>
    </div>
  </article>
`;

const WorkProjects = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.workProjects, lang),
        resume.workProjects.map((item) => WorkProject(item, lang)).join(""),
        "nr-work-projects-section",
    );

const PersonalProject = (item: PersonalProjectItem, lang: LanguageCode) => `
  <article class="nr-entry nr-project">
    <header class="nr-entry__header">
      <h3>${htmlText(item.title, lang)}</h3>
    </header>
    <div class="nr-entry__body">
      ${item.summary ? `<p>${htmlText(item.summary, lang)}</p>` : ""}
      <ul>${item.description.map((description) => `<li>${htmlText(description, lang)}</li>`).join("")}</ul>
    </div>
  </article>
`;

const PersonalProjects = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.personalProjects, lang),
        resume.personalProjects.map((item) => PersonalProject(item, lang)).join(""),
        "nr-personal-projects-section",
    );

const Page = (resume: ResumeData, avatar: string, lang: LanguageCode) => `
  <main class="nr-resume nr-resume--${lang}" lang="${lang === "zh" ? "zh-Hans" : "en"}">
    ${Header(resume, avatar, lang)}
    ${sectionIsVisible(resume, "profile", lang) ? Profile(resume, lang) : ""}
    ${Education(resume, lang)}
    ${Skills(resume, lang)}
    ${Experience(resume, lang)}
    ${WorkProjects(resume, lang)}
    ${sectionIsVisible(resume, "personalProjects", lang) ? PersonalProjects(resume, lang) : ""}
  </main>
`;

export const OneColResume = (resume: ResumeData, avatar: string) => `
  <div class="nr-document nr-document--one-col">
    ${Page(resume, avatar, "zh")}
    ${Page(resume, avatar, "en")}
  </div>
`;
