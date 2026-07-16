import { escapeHtml } from "./utils.js";
import "./ChinaResumeMaker.scss";

const htmlText = (value) => escapeHtml(value ?? "");

const section = (title, children, className = "") => `
  <section class="cn-section ${escapeHtml(className)}">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;

const linkRow = (links = []) => {
  if (!links.length) {
    return "";
  }

  return `
    <p class="cn-links">
      ${links
        .map(
          (item) =>
            `<a href="${escapeHtml(item.href)}">${htmlText(item.label)}</a>`,
        )
        .join("")}
    </p>
  `;
};

const contactItem = (item) => {
  if (!item.value) {
    return "";
  }

  if (!item.label) {
    return "";
  }

  const content = item.href
    ? `<a href="${escapeHtml(item.href)}">${htmlText(item.value)}</a>`
    : `<span>${htmlText(item.value)}</span>`;

  return `<span><b>${htmlText(item.label)}：</b>${content}</span>`;
};

const header = (resume, avatar) => `
  <header class="cn-header">
    <div class="cn-header__identity">
      <h1>${htmlText(resume.name)}</h1>
      <p>${htmlText(resume.role)}</p>
    </div>
    <div class="cn-contact-list" aria-label="${htmlText(resume.labels.contactAria)}">
      ${resume.contacts.map(contactItem).join("")}
    </div>
    <img class="cn-avatar" src="${escapeHtml(avatar)}" alt="${htmlText(resume.name)}头像" />
  </header>
`;

const jobMeta = (item) => item.meta.map(htmlText).join(" | ");

const profile = (items = [], labels) => section(
  labels.profile,
  `
    <div class="cn-profile">
      ${items.map((item) => `<p>${htmlText(item)}</p>`).join("")}
    </div>
  `,
  "cn-profile-section",
);

const job = (item, labels) => `
  <article class="cn-entry cn-job">
    <header class="cn-entry__header">
      <div>
        <h3>${htmlText(item.company)}</h3>
        <p class="cn-entry__role">${htmlText(item.title)}</p>
      </div>
      <p class="cn-entry__meta">${jobMeta(item)}</p>
    </header>
    <div class="cn-entry__body">
      <ul>
        ${item.bullets.map((bullet) => `<li>${htmlText(bullet)}</li>`).join("")}
      </ul>
      ${linkRow(item.links)}
    </div>
  </article>
`;

const experience = (items = [], labels) =>
  section(labels.experience, items.map((item) => job(item, labels)).join(""), "cn-experience-section");

const workProject = (item, labels) => `
  <article class="cn-entry cn-work-project">
    <header class="cn-entry__header">
      <div>
        <h3>${htmlText(item.title)}</h3>
        <p class="cn-entry__role">${htmlText(item.company)} / ${htmlText(item.role)}</p>
      </div>
      <p class="cn-entry__meta">${item.meta.map(htmlText).join(" | ")}</p>
    </header>
    <div class="cn-entry__body">
      <p>${htmlText(item.description)}</p>
    </div>
  </article>
`;

const workProjects = (items = [], labels) =>
  section(
    labels.workProjects,
    items.map((item) => workProject(item, labels)).join(""),
    "cn-work-projects-section",
  );

const project = (item, labels) => `
  <article class="cn-entry cn-project">
    <header class="cn-entry__header">
      <h3>${htmlText(item.title)}</h3>
    </header>
    <div class="cn-entry__body">
      <p>${htmlText(item.meta)}</p>
      ${linkRow(item.links)}
    </div>
  </article>
`;

const projects = (items = [], labels) =>
  section(labels.projects, items.map((item) => project(item, labels)).join(""), "cn-projects-section");

const educationItem = (item) => `
  <article class="cn-compact-entry cn-education-entry">
    <h3>${htmlText(item.title)}</h3>
    <p class="cn-education-entry__meta">${htmlText(item.meta)}</p>
    ${item.time ? `<p class="cn-education-entry__time">${htmlText(item.time)}</p>` : ""}
  </article>
`;

const education = (items = [], labels) =>
  section(labels.education, items.map(educationItem).join(""), "cn-education-section");

const skillGroup = (group) => `
  <article class="cn-skill-group">
    <h3>${htmlText(group.title)}：</h3>
    <p>${group.items.map(htmlText).join("；")}</p>
  </article>
`;

const skills = (items = [], labels) =>
  section(labels.skills, items.map(skillGroup).join(""), "cn-skills-section");

const languageItem = (item) => `
  <span>${htmlText(item.name)}${item.level ? `：${htmlText(item.level)}` : ""}</span>
`;

const languages = (items = [], labels) => section(
  labels.languages,
  `<div class="cn-language-list">${items.map(languageItem).join("")}</div>`,
  "cn-languages-section",
);

export const ChinaResumeMaker = (resume, avatar) => `
  <main class="cn-resume">
    ${header(resume, avatar)}
    ${profile(resume.profile, resume.labels)}
    ${education(resume.education, resume.labels)}
    ${skills(resume.skillGroups, resume.labels)}
    ${experience(resume.experience, resume.labels)}
    ${workProjects(resume.workProjects, resume.labels)}
    ${projects(resume.projects, resume.labels)}
    ${languages(resume.languages, resume.labels)}
  </main>
`;
