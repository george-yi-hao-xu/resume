import { escapeHtml } from "./utils.js";
import "./BilingualResumeMaker.scss";

const text = (item, className = "bi-text") => {
  if (!item) {
    return "";
  }

  const english = item.en ? `<span class="${className}__en">${escapeHtml(item.en)}</span>` : "";

  return `<span class="${className}"><span class="${className}__zh">${escapeHtml(item.zh)}</span>${english}</span>`;
};

const contact = (item) => {
  if (!item.value) {
    return "";
  }

  const value = item.href
    ? `<a href="${escapeHtml(item.href)}">${escapeHtml(item.value)}</a>`
    : `<span>${escapeHtml(item.value)}</span>`;

  return `<li><b>${escapeHtml(item.label)}</b>${value}</li>`;
};

const section = (title, children, className = "") => `
  <section class="bi-section ${className}">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;

const entryLinks = (items = []) => {
  if (!items.length) {
    return "";
  }

  return `
    <p class="bi-link-row">
      ${items
        .map(
          (item) =>
            `<a href="${escapeHtml(item.href)}">${text(item.label)}</a>`,
        )
        .join("")}
    </p>
  `;
};

const compactEntry = (item) => `
  <article class="bi-entry">
    <h3>${text(item.title)}</h3>
    ${item.meta ? `<p>${text(item.meta)}</p>` : ""}
    ${entryLinks(item.links)}
  </article>
`;

const skillGroup = (group) => `
  <article class="bi-entry">
    <h3>${text(group.title)}</h3>
    <ul class="bi-plain-list">
      ${group.items.map((item) => `<li>${text(item)}</li>`).join("")}
    </ul>
  </article>
`;

const language = (item) => `
  <li class="bi-language">
    ${text(item.name)}
    <span class="bi-language__level">${text(item.level)}</span>
  </li>
`;

const job = (item) => `
  <article class="bi-job">
    <header class="bi-job__header">
      <div>
        <h3>${text(item.title)}</h3>
        <p class="bi-job__company">${escapeHtml(item.company)}</p>
      </div>
      <p class="bi-job__meta">${item.meta.map(escapeHtml).join(" / ")}</p>
    </header>
    <ul>
      ${item.bullets.map((bullet) => `<li>${text(bullet, "bi-bullet")}</li>`).join("")}
    </ul>
  </article>
`;

export const BilingualResumeMaker = (resume) => `
  <main class="bi-resume">
    <header class="bi-header">
      <div class="bi-header__identity">
        <h1><span>${escapeHtml(resume.name.zh)}</span><small>${escapeHtml(resume.name.en)}</small></h1>
        <p>${text(resume.role, "bi-role")}</p>
      </div>
      <ul class="bi-contact-list" aria-label="联系信息">
        ${resume.contacts.map(contact).join("")}
      </ul>
      <img class="bi-avatar" src="${escapeHtml(resume.avatar)}" alt="许易豪头像" />
    </header>

    ${section(
      resume.labels.profile,
      `<ul class="bi-profile">${resume.profile.map((item) => `<li>${text(item, "bi-bullet")}</li>`).join("")}</ul>`,
      "bi-profile-section",
    )}

    <div class="bi-grid">
      <aside class="bi-sidebar">
        ${section(resume.labels.education, resume.education.map(compactEntry).join(""), "bi-education-section")}
        ${section(resume.labels.skills, resume.skillGroups.map(skillGroup).join(""), "bi-skills-section")}
        ${section(resume.labels.projects, resume.projects.map(compactEntry).join(""))}
        ${section(
          resume.labels.languages,
          `<ul class="bi-plain-list lang">${resume.languages.map(language).join("")}</ul>`,
        )}
      </aside>
      <section class="bi-main" aria-label="工作经历">
        <h2>${escapeHtml(resume.labels.experience)}</h2>
        ${resume.experience.map(job).join("")}
      </section>
    </div>
  </main>
`;
