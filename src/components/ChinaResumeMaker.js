import { escapeHtml } from "./utils.js";
import "./ChinaResumeMaker.scss";

const text = (value) => {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return value.zh ?? value.en ?? "";
};

const cleanText = (value) => text(value).replace(/\s+/gu, " ").trim();

const htmlText = (value) => escapeHtml(cleanText(value));

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

  const label = cleanText(item.localizedLabel ?? item.label);
  const value = cleanText(item.localizedValue ?? item.value);

  if (!label || !value) {
    return "";
  }

  const content = item.href
    ? `<a href="${escapeHtml(item.href)}">${escapeHtml(value)}</a>`
    : `<span>${escapeHtml(value)}</span>`;

  return `<span><b>${escapeHtml(label)}：</b>${content}</span>`;
};

const header = (resume, avatar) => `
  <header class="cn-header">
    <div class="cn-header__identity">
      <h1>${htmlText(resume.name)}</h1>
      <p>${htmlText(resume.role)}</p>
    </div>
    <div class="cn-contact-list" aria-label="联系信息">
      ${resume.contacts.map(contactItem).join("")}
    </div>
    <img class="cn-avatar" src="${escapeHtml(avatar)}" alt="${htmlText(resume.name)}头像" />
  </header>
`;

const profile = (items = []) => section(
  "个人优势",
  `
    <div class="cn-profile">
      ${items.map((item) => `<p>${htmlText(item)}</p>`).join("")}
    </div>
  `,
  "cn-profile-section",
);

const job = (item) => `
  <article class="cn-entry cn-job">
    <header class="cn-entry__header">
      <div>
        <h3>${htmlText(item.company)}</h3>
        <p class="cn-entry__role">${htmlText(item.title)}</p>
      </div>
      <p class="cn-entry__meta">${item.meta.map(htmlText).join(" | ")}</p>
    </header>
    <div class="cn-entry__body">
      <p class="cn-entry__label">工作内容：</p>
      <ul>
        ${item.bullets.map((bullet) => `<li>${htmlText(bullet)}</li>`).join("")}
      </ul>
      ${linkRow(item.links)}
    </div>
  </article>
`;

const experience = (items = []) =>
  section("职业经历", items.map(job).join(""), "cn-experience-section");

const project = (item) => `
  <article class="cn-entry cn-project">
    <header class="cn-entry__header">
      <h3>${htmlText(item.title)}</h3>
    </header>
    <div class="cn-entry__body">
      <p class="cn-entry__label">项目描述：</p>
      <p>${htmlText(item.meta)}</p>
      ${linkRow(item.links)}
    </div>
  </article>
`;

const projects = (items = []) =>
  section("项目经历", items.map(project).join(""), "cn-projects-section");

const educationItem = (item) => `
  <article class="cn-compact-entry">
    <header>
      <h3>${htmlText(item.title)}</h3>
      ${item.time ? `<p>${htmlText(item.time)}</p>` : ""}
    </header>
    <p>${htmlText(item.meta)}</p>
  </article>
`;

const education = (items = []) =>
  section("教育背景", items.map(educationItem).join(""), "cn-education-section");

const skillGroup = (group) => `
  <article class="cn-skill-group">
    <h3>${htmlText(group.title)}：</h3>
    <p>${group.items.map(htmlText).join("；")}</p>
  </article>
`;

const skills = (items = []) =>
  section("专业技能", items.map(skillGroup).join(""), "cn-skills-section");

const languageItem = (item) => `
  <span>${htmlText(item.name)}${item.level ? `：${htmlText(item.level)}` : ""}</span>
`;

const languages = (items = []) => section(
  "语言",
  `<div class="cn-language-list">${items.map(languageItem).join("")}</div>`,
  "cn-languages-section",
);

export const ChinaResumeMaker = (resume, avatar) => `
  <main class="cn-resume">
    ${header(resume, avatar)}
    ${profile(resume.profile)}
    ${experience(resume.experience)}
    ${projects(resume.projects)}
    ${education(resume.education)}
    ${skills(resume.skillGroups)}
    ${languages(resume.languages)}
  </main>
`;
