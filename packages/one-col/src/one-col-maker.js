import { escapeHtml } from "./utils.js";
import "./one-col-maker.scss";

const localizedText = (value, lang) => {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return value[lang] ?? value.zh ?? value.en ?? "";
};

const htmlText = (value, lang) => escapeHtml(localizedText(value, lang));

const localizedJoin = (items = [], lang, separator = " | ") =>
  items.map((item) => htmlText(item, lang)).filter(Boolean).join(separator);

const sectionIsVisible = (resume, key, lang) => {
  const setting = resume.visibleSections?.[key];

  if (typeof setting === "object") {
    return setting[lang] !== false;
  }

  return setting !== false;
};

const descriptionList = (value, lang) => {
  const items = Array.isArray(value) ? value : [value];

  return `
    <ul class="cn-work-project__description-list">
      ${items.map((item) => `<li>${htmlText(item, lang)}</li>`).join("")}
    </ul>
  `;
};

const projectList = (value, lang) => {
  const items = Array.isArray(value) ? value : [value];

  return `
    <ul class="cn-project__description-list">
      ${items.map((item) => `<li>${htmlText(item, lang)}</li>`).join("")}
    </ul>
  `;
};

const section = (title, children, className = "") => `
  <section class="cn-section ${escapeHtml(className)}">
    <h2><span>${escapeHtml(title)}</span></h2>
    ${children}
  </section>
`;

const inlineLinkRow = (links = [], lang, className = "cn-entry__inline-links") => {
  if (!links.length) {
    return "";
  }

  return `
    <span class="${escapeHtml(className)}">
      ${links
        .map(
          (item) =>
            `<a href="${escapeHtml(item.href)}">${htmlText(item.label, lang)}</a>`,
        )
        .join("")}
    </span>
  `;
};

const contactItem = (item, lang) => {
  if (!item.value) {
    return "";
  }

  const label = localizedText(item.label, lang);

  if (!label) {
    return "";
  }

  const separator = lang === "en" ? ": " : "：";
  const value = item.localizedValue ?? item.value;
  const content = item.href
    ? `<a href="${escapeHtml(item.href)}">${htmlText(value, lang)}</a>`
    : `<span>${htmlText(value, lang)}</span>`;

  return `<span><b>${escapeHtml(label)}${separator}</b>${content}</span>`;
};

const header = (resume, avatar, labels, lang) => {
  const name = localizedText(resume.name, lang);
  const avatarAlt = lang === "en" ? `${name} avatar` : `${name}头像`;

  return `
  <header class="cn-header">
    <div class="cn-header__identity">
      <h1>
        <span>${escapeHtml(name)}</span>
        <small>${htmlText(resume.role, lang)}</small>
      </h1>
    </div>
    <div class="cn-contact-list" aria-label="${htmlText(labels.contactAria, lang)}">
      ${resume.contacts.map((item) => contactItem(item, lang)).join("")}
    </div>
    <img class="cn-avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(avatarAlt)}" />
  </header>
`;
};

const jobMeta = (item, lang) => localizedJoin(item.meta, lang);

const profile = (items = [], labels, lang) => section(
  localizedText(labels.profile, lang),
  `
    <div class="cn-profile">
      ${items.map((item) => `<p>${htmlText(item, lang)}</p>`).join("")}
    </div>
  `,
  "cn-profile-section",
);

const job = (item, lang) => `
  <article class="cn-entry cn-job">
    <header class="cn-entry__header">
      <div>
        <h3>${htmlText(item.company, lang)}</h3>
        <p class="cn-entry__role">
          <span>${htmlText(item.title, lang)}</span>
          ${inlineLinkRow(item.links, lang)}
        </p>
      </div>
      <p class="cn-entry__meta">${jobMeta(item, lang)}</p>
    </header>
    <div class="cn-entry__body">
      <ul>
        ${item.bullets.map((bullet) => `<li>${htmlText(bullet, lang)}</li>`).join("")}
      </ul>
    </div>
  </article>
`;

const experience = (items = [], labels, lang) =>
  section(localizedText(labels.experience, lang), items.map((item) => job(item, lang)).join(""), "cn-experience-section");

const workProject = (item, lang) => `
  <article class="cn-entry cn-work-project">
    <header class="cn-entry__header cn-work-project__header">
      <h3>${htmlText(item.title, lang)}</h3>
      <p class="cn-work-project__affiliation">${localizedJoin([item.company, item.role], lang, " / ")}</p>
    </header>
    <div class="cn-entry__body">
      ${item.summary ? `<p class="cn-work-project__summary">${htmlText(item.summary, lang)}</p>` : ""}
      ${descriptionList(item.description, lang)}
    </div>
  </article>
`;

const workProjects = (items = [], labels, lang) =>
  section(
    localizedText(labels.workProjects, lang),
    items.map((item) => workProject(item, lang)).join(""),
    "cn-work-projects-section",
  );

const project = (item, lang) => `
  <article class="cn-entry cn-project">
    <header class="cn-entry__header cn-project__header">
      <h3>${htmlText(item.title, lang)}</h3>
      ${item.links?.length ? `<p class="cn-project__links">${item.links
        .map((link) => `<a href="${escapeHtml(link.href)}">${htmlText(link.label, lang)}</a>`)
        .join("")}</p>` : ""}
    </header>
    <div class="cn-entry__body">
      ${item.summary ? `<p class="cn-project__summary">${htmlText(item.summary, lang)}</p>` : ""}
      ${projectList(item.description ?? item.meta, lang)}
    </div>
  </article>
`;

const projects = (items = [], labels, lang) =>
  section(localizedText(labels.projects, lang), items.map((item) => project(item, lang)).join(""), "cn-projects-section");

const educationItem = (item, lang) => `
  <article class="cn-compact-entry cn-education-entry">
    <h3>${htmlText(item.title, lang)}</h3>
    <p class="cn-education-entry__meta">${htmlText(item.meta, lang)}</p>
    ${item.location ? `<p class="cn-education-entry__location">${htmlText(item.location, lang)}</p>` : ""}
    ${item.time ? `<p class="cn-education-entry__time">${htmlText(item.time, lang)}</p>` : ""}
  </article>
`;

const education = (items = [], labels, lang) =>
  section(localizedText(labels.education, lang), items.map((item) => educationItem(item, lang)).join(""), "cn-education-section");

const skillGroup = (group, lang) => `
  <article class="cn-skill-group">
    <h3>${htmlText(group.title, lang)}</h3>
    <p>${group.items.map((item) => htmlText(item, lang)).join(lang === "en" ? ", " : "、")}</p>
  </article>
`;

const languageSkillText = (item, lang) => {
  const name = localizedText(item.name, lang);
  const level = localizedText(item.level, lang);

  return `${name}${level ? ` (${level})` : ""}`;
};

const skillGroupsWithLanguages = (items = [], labels, languageItems = [], lang) => [
  ...items,
  ...(languageItems.length
    ? [
        {
          title: localizedText(labels.languages, lang),
          items: [languageItems.map((item) => languageSkillText(item, lang)).join(lang === "en" ? ", " : "、")],
        },
      ]
    : []),
];

const skillsWithLanguages = (items = [], labels, languageItems = [], lang) =>
  section(
    localizedText(labels.skills, lang),
    skillGroupsWithLanguages(items, labels, languageItems, lang).map((item) => skillGroup(item, lang)).join(""),
    "cn-skills-section",
  );

const resumePage = (resume, avatar, lang) => {
  const labels = resume.labels;

  return `
  <main class="cn-resume cn-resume--${escapeHtml(lang)}" lang="${lang === "zh" ? "zh-Hans" : "en"}">
    ${header(resume, avatar, labels, lang)}
    ${sectionIsVisible(resume, "profile", lang) ? profile(resume.profile, labels, lang) : ""}
    ${education(resume.education, labels, lang)}
    ${skillsWithLanguages(resume.skillGroups, labels, resume.languages, lang)}
    ${experience(resume.experience, labels, lang)}
    ${workProjects(resume.workProjects, labels, lang)}
    ${sectionIsVisible(resume, "projects", lang) ? projects(resume.projects, labels, lang) : ""}
  </main>
`;
};

export const OneColMaker = (resume, avatar) => `
  <div class="cn-document">
    ${resumePage(resume, avatar, "zh")}
    ${resumePage(resume, avatar, "en")}
  </div>
`;
