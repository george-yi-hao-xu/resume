import type {
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
    visibilitySettingIsVisible,
} from "../../shared/html";
import { ContactList } from "../shared/contact";
import "./two-cols.scss";

const Section = (title: string, children: string, className = "") => `
  <section class="nt-section ${escapeHtml(className)}">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;

const Header = (resume: ResumeData, avatar: string, lang: LanguageCode) => {
    const name = localizedText(resume.name, lang);
    const avatarIsVisible = visibilitySettingIsVisible(resume.avatar?.visible, lang);

    return `
    <header class="nt-header${avatarIsVisible ? "" : " nt-header--no-avatar"}">
      <div class="nt-header__identity">
        <h1>${escapeHtml(name)}</h1>
        <p>${htmlText(resume.role, lang)}</p>
        ${ContactList(resume, lang, "nt-contact-list")}
      </div>
      ${avatarIsVisible ? `<img class="nt-avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(name)}" />` : ""}
    </header>
  `;
};

const Profile = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        // localizedText(resume.labels.profile, lang),
        '',
        `<ul class="nt-profile">${resume.profile.map((item) => `<li>${htmlText(item, lang)}</li>`).join("")}</ul>`,
        "nt-profile-section",
    );

const CompactEntry = (item: EducationItem, lang: LanguageCode) => `
  <article class="nt-entry">
    <h3>${htmlText(item.title, lang)}</h3>
    <div class="nt-edu-meta-loc">
      <span>${htmlText(item.meta, lang)} |</span>
      <span>${htmlText(item.location, lang)}</span>
    </div>
    ${item.time ? `<p>${htmlText(item.time, lang)}</p>` : ""}
  </article>
`;

const languageSkillText = (item: LanguageItem, lang: LanguageCode) => {
    const name = localizedText(item.name, lang);
    const level = localizedText(item.level, lang);

    return `${name}${level ? ` (${level})` : ""}`;
};

const skillGroupsWithLanguages = (resume: ResumeData, lang: LanguageCode): SkillGroup[] => [
    ...resume.skillGroups.map((group) => ({
        ...group,
        items: [
            {
                zh: group.items
                    .map((item) => localizedText(item, "zh"))
                    .filter(Boolean)
                    .join(" "),
                en: group.items
                    .map((item) => localizedText(item, "en"))
                    .filter(Boolean)
                    .join(" "),
            },
        ],
    })),
    ...(resume.languages.length
        ? [
              {
                  title: resume.labels.languages,
                  items: [
                      {
                          [lang]: resume.languages
                              .map((item) => languageSkillText(item, lang))
                              .join(" / "),
                      },
                  ],
              },
          ]
        : []),
];

const SkillGroup = (group: SkillGroup, lang: LanguageCode) => `
  <article class="nt-entry">
    <h3>${htmlText(group.title, lang)}</h3>
    <ul class="nt-plain-list">${group.items.map((item) => `<li>${htmlText(item, lang)}</li>`).join("")}</ul>
  </article>
`;

const PersonalProject = (item: PersonalProjectItem, lang: LanguageCode) => `
  <article class="nt-entry nt-personal-project">
    <h3>${htmlText(item.title, lang)}</h3>
    ${item.summary ? `<p>${htmlText(item.summary, lang)}</p>` : ""}
  </article>
`;

const PersonalProjects = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.personalProjects, lang),
        resume.personalProjects.map((item) => PersonalProject(item, lang)).join(""),
        "nt-personal-projects-section",
    );

const Job = (item: ExperienceItem, lang: LanguageCode) => `
  <article class="nt-job">
    <header class="nt-job__header">
      <div>
        <h3 class="nt-job__title">
          <span class="nt-job__company">${htmlText(item.company, lang)}</span>
        </h3>
      </div>
      <div class="nt-job__role-meta">
        <span class="nt-job__role">${htmlText(item.title, lang)}</span>
        <span class="nt-job__meta">${localizedJoin(item.meta, lang)}</span>
      </div>
    </header>
    <ul>${item.bullets.map((bullet) => `<li>${htmlText(bullet, lang)}</li>`).join("")}</ul>
  </article>
`;

const projectMeta = (item: WorkProjectItem, lang: LanguageCode) =>
    localizedJoin(
        [item.company, item.role, ...(item.meta ?? [])],
        lang,
        lang === "en" ? ", " : " ",
    );

const ProjectEntry = (item: WorkProjectItem, lang: LanguageCode) => `
  <article class="nt-entry nt-project">
    <h3>${htmlText(item.title, lang)}</h3>
    <ul class="nt-project-list">
      <li class="nt-project-list__meta">${projectMeta(item, lang)}</li>
      ${item.summary ? `<li>${htmlText(item.summary, lang)}</li>` : ""}
      ${item.description.map((description) => `<li>${htmlText(description, lang)}</li>`).join("")}
    </ul>
  </article>
`;

const Page = (resume: ResumeData, avatar: string, lang: LanguageCode) => `
  <main class="nt-resume nt-resume--${lang}" lang="${lang === "zh" ? "zh-Hans" : "en"}">
    ${Header(resume, avatar, lang)}
    ${sectionIsVisible(resume, "profile", lang) ? Profile(resume, lang) : ""}
    <div class="nt-grid">
      <aside class="nt-sidebar">
        ${Section(localizedText(resume.labels.education, lang), resume.education.map((item) => CompactEntry(item, lang)).join(""), "nt-education-section")}
        ${Section(
            localizedText(resume.labels.skills, lang),
            skillGroupsWithLanguages(resume, lang)
                .map((item) => SkillGroup(item, lang))
                .join(""),
            "nt-skills-section",
        )}
        ${sectionIsVisible(resume, "personalProjects", lang) ? PersonalProjects(resume, lang) : ""}
      </aside>
      <section class="nt-main" aria-label="${htmlText(resume.labels.experience, lang)}">
        <h2>${htmlText(resume.labels.experience, lang)}</h2>
        ${resume.experience.map((item) => Job(item, lang)).join("")}
        ${Section(localizedText(resume.labels.workProjects, lang), resume.workProjects.map((item) => ProjectEntry(item, lang)).join(""), "nt-main-projects")}
      </section>
    </div>
  </main>
`;

export const TwoColsResume = (resume: ResumeData, avatar: string) => `
  <div class="nt-document nt-document--two-cols">
    ${Page(resume, avatar, "zh")}
    ${Page(resume, avatar, "en")}
  </div>
`;
