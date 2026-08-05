import type {
    EducationItem,
    ExperienceItem,
    LanguageCode,
    LanguageItem,
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
import "./two-cols.scss";

const Section = (title: string, children: string, className = "") => `
  <section class="nt-section ${escapeHtml(className)}">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;

const Contact = (resume: ResumeData, lang: LanguageCode) => `
  <ul class="nt-contact-list" aria-label="${htmlText(resume.labels.contactAria, lang)}">
    ${resume.contacts
        .map((item) => {
            const label = localizedText(item.label, lang);
            const value = item.localizedValue ?? item.value;

            if (!label || !item.value) {
                return "";
            }

            const content = item.href
                ? `<a href="${escapeHtml(item.href)}">${htmlText(value, lang)}</a>`
                : `<span>${htmlText(value, lang)}</span>`;

            return `<li><b>${escapeHtml(label)}</b>${content}</li>`;
        })
        .join("")}
  </ul>
`;

const Header = (resume: ResumeData, avatar: string, lang: LanguageCode) => {
    const name = localizedText(resume.name, lang);

    return `
    <header class="nt-header">
      <div class="nt-header__identity">
        <h1>${escapeHtml(name)}</h1>
        <p>${htmlText(resume.role, lang)}</p>
      </div>
      ${Contact(resume, lang)}
      <img class="nt-avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(name)}" />
    </header>
  `;
};

const Profile = (resume: ResumeData, lang: LanguageCode) =>
    Section(
        localizedText(resume.labels.profile, lang),
        `<ul class="nt-profile">${resume.profile.map((item) => `<li>${htmlText(item, lang)}</li>`).join("")}</ul>`,
        "nt-profile-section",
    );

const CompactEntry = (item: EducationItem, lang: LanguageCode) => `
  <article class="nt-entry">
    <h3>${htmlText(item.title, lang)}</h3>
    <p>${localizedJoin([item.meta, item.location], lang, lang === "en" ? ", " : " ")}</p>
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

const Job = (item: ExperienceItem, lang: LanguageCode) => `
  <article class="nt-job">
    <header class="nt-job__header">
      <div>
        <h3 class="nt-job__title">
          <span class="nt-job__company">${htmlText(item.company, lang)}</span>
          <span class="nt-job__separator">/</span>
          <span class="nt-job__role">${htmlText(item.title, lang)}</span>
        </h3>
      </div>
      <p class="nt-job__meta">${localizedJoin(item.meta, lang)}</p>
    </header>
    <ul>${item.bullets.map((bullet) => `<li>${htmlText(bullet, lang)}</li>`).join("")}</ul>
  </article>
`;

const projectMeta = (item: WorkProjectItem, lang: LanguageCode) =>
    [
        localizedJoin(
            [item.company, item.role, ...(item.meta ?? [])],
            lang,
            lang === "en" ? ", " : " ",
        ),
        htmlText(item.summary, lang),
        ...item.description.map((description) => htmlText(description, lang)),
    ]
        .filter(Boolean)
        .join(lang === "en" ? " " : "");

const ProjectEntry = (item: WorkProjectItem, lang: LanguageCode) => `
  <article class="nt-entry nt-project">
    <h3>${htmlText(item.title, lang)}</h3>
    <ul class="nt-project-list"><li>${projectMeta(item, lang)}</li></ul>
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
