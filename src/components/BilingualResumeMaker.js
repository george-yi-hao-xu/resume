import { escapeHtml } from "./utils.js";
import "./BilingualResumeMaker.scss";

const localizedText = (item, lang) => {
  if (!item) {
    return "";
  }

  if (typeof item === "string") {
    return item;
  }

  return item[lang] ?? item.zh ?? item.en ?? "";
};

const span = (item, lang, className = "bi-text") =>
  `<span class="${className}">${escapeHtml(localizedText(item, lang))}</span>`;

const mixedText = (item, className = "bi-text") => {
  if (!item) {
    return "";
  }

  if (typeof item === "string") {
    return `<span class="${className}">${escapeHtml(item)}</span>`;
  }

  const english = item.en ? `<span class="${className}__en">${escapeHtml(item.en)}</span>` : "";

  return `<span class="${className}"><span class="${className}__zh">${escapeHtml(item.zh)}</span>${english}</span>`;
};

const localizedContactLabel = (label, lang) => {
  if (typeof label === "string") {
    return lang === "zh" ? label : "";
  }

  return localizedText(label, lang);
};

const localizedContactValue = (item, lang) => {
  return localizedText(item.localizedValue, lang) || item.value;
};

const localizedCompany = (company, lang) => {
  if (lang === "zh") {
    return company.replace(/\s+(Sasaki Associates, Inc\.|ECADI)$/u, "");
  }

  if (company.includes("Sasaki Associates")) {
    return "Sasaki Associates, Inc.";
  }

  if (company.includes("ECADI")) {
    return "ECADI";
  }

  return company;
};

const localizedMeta = (items = [], lang) =>
  items
    .map((item) => {
      if (lang === "en") {
        return item
          .replace("至今", "Present")
          .replace("波士顿", "Boston")
          .replace("远程", "Remote")
          .replace("上海", "Shanghai")
          .replace("全职", "Full-time")
          .replace("实习", "Intern");
      }

      return item;
    })
    .join(" / ");

const contact = (item, lang) => {
  if (!item.value) {
    return "";
  }

  const label = localizedContactLabel(item.localizedLabel ?? item.label, lang);

  if (!label){
    return ""
  }

  const displayValue = localizedContactValue(item, lang);
  const value = item.href
    ? `<a href="${escapeHtml(item.href)}">${escapeHtml(displayValue)}</a>`
    : `<span>${escapeHtml(displayValue)}</span>`;

  return `<li><b>${escapeHtml(label)}</b>${value}</li>`;
};

const mixedContact = (item) => {
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

const entryLinks = (items = [], lang, className = "") => {
  if (!items.length) {
    return "";
  }

  return `
    <p class="bi-link-row ${escapeHtml(className)}">
      ${items
        .map((item) => `<a href="${escapeHtml(item.href)}">${span(item.label, lang)}</a>`)
        .join("")}
    </p>
  `;
};

const mixedEntryLinks = (items = [], className = "") => {
  if (!items.length) {
    return "";
  }

  return `
    <p class="bi-link-row ${escapeHtml(className)}">
      ${items
        .map((item) => `<a href="${escapeHtml(item.href)}">${mixedText(item.label)}</a>`)
        .join("")}
    </p>
  `;
};

const compactEntry = (item, lang) => `
  <article class="bi-entry">
    <h3>${span(item.title, lang)}</h3>
    ${item.meta ? `<p>${span(item.meta, lang)}</p>` : ""}
    ${item.time ? `<p class="bi-entry__time">${span(item.time, lang)}</p>` : ""}
    ${entryLinks(item.links, lang)}
  </article>
`;

const mixedCompactEntry = (item) => `
  <article class="bi-entry">
    <h3>${mixedText(item.title)}</h3>
    ${item.meta ? `<p>${mixedText(item.meta)}</p>` : ""}
    ${item.time ? `<p class="bi-entry__time">${mixedText(item.time)}</p>` : ""}
    ${mixedEntryLinks(item.links)}
  </article>
`;

const skillGroup = (group, lang) => `
  <article class="bi-entry">
    <h3>${span(group.title, lang)}</h3>
    <ul class="bi-plain-list">
      ${group.items.map((item) => `<li>${span(item, lang)}</li>`).join("")}
    </ul>
  </article>
`;

const mixedSkillGroup = (group) => `
  <article class="bi-entry">
    <h3>${mixedText(group.title)}</h3>
    <ul class="bi-plain-list">
      ${group.items.map((item) => `<li>${mixedText(item)}</li>`).join("")}
    </ul>
  </article>
`;

const language = (item, lang) => `
  <span class="bi-language">
    ${span(item.name, lang)}
    <span class="bi-language__level">(${span(item.level, lang)})</span>
  </span>
`;

const mixedLanguage = (item) => `
  <li class="bi-language">
    ${mixedText(item.name)}
    <span class="bi-language__level">${mixedText(item.level)}</span>
  </li>
`;

const job = (item, lang) => `
  <article class="bi-job">
    <header class="bi-job__header">
      <div>
        <h3>${span(item.title, lang)}</h3>
        <div class="bi-job__company">
          <div class="name">${escapeHtml(localizedCompany(item.company, lang))}</div>
        </div>
        <div class="bi-job__meta">${escapeHtml(localizedMeta(item.meta, lang))}</div>
      </div>
    </header>
    <ul>
      ${item.bullets.map((bullet) => `<li>${span(bullet, lang, "bi-bullet")}</li>`).join("")}
    </ul>
  </article>
`;

const mixedJob = (item) => `
  <article class="bi-job">
    <header class="bi-job__header">
      <div>
        <h3>${mixedText(item.title)}</h3>
        <div class="bi-job__company">
          <div class="name">${escapeHtml(item.company)}</div>
        </div>
        <div class="bi-job__meta">${item.meta.map(escapeHtml).join(" / ")}</div>
      </div>
    </header>
    <ul>
      ${item.bullets.map((bullet) => `<li>${mixedText(bullet, "bi-bullet")}</li>`).join("")}
    </ul>
  </article>
`;

const resumePage = (resume, lang) => {
  const pageLabels = resume.localizedLabels[lang];
  const name = localizedText(resume.name, lang);
  const role = localizedText(resume.role, lang);

  return `
    <main class="bi-resume bi-resume--${lang}" lang="${lang}">
      <header class="bi-header">
        <div class="bi-header__identity">
          <h1><span>${escapeHtml(name)}</span></h1>
          <p><span class="bi-role">${escapeHtml(role)}</span></p>
        </div>
        <ul class="bi-contact-list" aria-label="${escapeHtml(pageLabels.contactAria)}">
          ${resume.contacts.map((item) => contact(item, lang)).join("")}
        </ul>
        <img class="bi-avatar" src="${escapeHtml(resume.avatar)}" alt="${escapeHtml(name)}" />
      </header>

      ${section(
        pageLabels.profile,
        `<ul class="bi-profile">${resume.profile
          .map((item) => `<li>${span(item, lang, "bi-bullet")}</li>`)
          .join("")}</ul>`,
        "bi-profile-section",
      )}

      <div class="bi-grid">
        <aside class="bi-sidebar">
          ${section(
            pageLabels.education,
            resume.education.map((item) => compactEntry(item, lang)).join(""),
            "bi-education-section",
          )}
          ${section(
            pageLabels.skills,
            resume.skillGroups.map((item) => skillGroup(item, lang)).join(""),
            "bi-skills-section",
          )}
          ${section(
            pageLabels.languages,
            `<div class="bi-plain-list lang">${resume.languages
              .map((item) => language(item, lang))
              .join("")}</div>`,
            "bi-languages-section",
          )}
        </aside>
        <section class="bi-main" aria-label="${escapeHtml(pageLabels.experience)}">
          <h2>${escapeHtml(pageLabels.experience)}</h2>
          ${resume.experience.map((item) => job(item, lang)).join("")}
          ${section(
            pageLabels.projects,
            resume.projects.map((item) => compactEntry(item, lang)).join(""),
            "bi-main-projects",
          )}
        </section>
      </div>
    </main>
  `;
};

const mixedResumePage = (resume) => `
  <main class="bi-resume bi-resume--mixed" lang="zh-Hans">
    <header class="bi-header">
      <div class="bi-header__identity">
        <h1><span>${escapeHtml(resume.name.zh)}</span><small>${escapeHtml(resume.name.en)}</small></h1>
        <p>${mixedText(resume.role, "bi-role")}</p>
      </div>
      <ul class="bi-contact-list" aria-label="联系信息">
        ${resume.contacts.map(mixedContact).join("")}
      </ul>
      <img class="bi-avatar" src="${escapeHtml(resume.avatar)}" alt="许易豪头像" />
    </header>

    ${section(
      resume.labels.profile,
      `<ul class="bi-profile">${resume.profile
        .map((item) => `<li>${mixedText(item, "bi-bullet")}</li>`)
        .join("")}</ul>`,
      "bi-profile-section",
    )}

    <div class="bi-grid">
      <aside class="bi-sidebar">
        ${section(resume.labels.education, resume.education.map(mixedCompactEntry).join(""), "bi-education-section")}
        ${section(resume.labels.skills, resume.skillGroups.map(mixedSkillGroup).join(""), "bi-skills-section")}
        ${section(
          resume.labels.languages,
          `<ul class="bi-plain-list lang">${resume.languages.map(mixedLanguage).join("")}</ul>`,
          "bi-languages-section",
        )}
      </aside>
      <section class="bi-main" aria-label="工作经历">
        <h2>${escapeHtml(resume.labels.experience)}</h2>
        ${resume.experience.map(mixedJob).join("")}
        ${section(resume.labels.projects, resume.projects.map(mixedCompactEntry).join(""), "bi-main-projects")}
      </section>
    </div>
  </main>
`;

// export const BilingualResumeMaker = (resume) => `
//   <div class="bi-document">
//     ${resumePage(resume, "zh")}
//     ${resumePage(resume, "en")}
//     ${mixedResumePage(resume)}
//   </div>
// `;

export const BilingualResumeMaker = (resume) => `
  <div class="bi-document">
    ${resumePage(resume, "zh")}
    ${resumePage(resume, "en")}
  </div>
`;
