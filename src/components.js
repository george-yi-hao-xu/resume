const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const paragraphs = (items = []) => items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");

const links = (items = []) =>
  items
    .map(
      (item) =>
        `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`,
    )
    .join("");

const Section = ({ title, children }) => `
  <section class="section">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;

const ContactItem = (item) => {
  if (!item.href) {
    return `<span>${escapeHtml(item.label)}</span>`;
  }

  return `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`;
};

const Header = ({ name, contacts }) => `
  <header class="resume__header">
    <h1>${escapeHtml(name)}</h1>
    <div class="contact-list" aria-label="Contact information">
      ${contacts.map(ContactItem).join("")}
    </div>
  </header>
`;

const Entry = ({ title, meta, details = [], note, links: entryLinks = [] }) => `
  <article class="entry">
    <h3>${escapeHtml(title)}</h3>
    ${meta ? `<p class="entry__meta">${escapeHtml(meta)}</p>` : ""}
    ${paragraphs(details)}
    ${note ? `<p class="entry__note">${escapeHtml(note)}</p>` : ""}
    ${links(entryLinks)}
  </article>
`;

const SkillGroup = ({ title, items }) => `
  <div class="skill-group">
    <h3>${escapeHtml(title)}</h3>
    ${paragraphs(items)}
  </div>
`;

const PlainList = (items) => `
  <ul class="plain-list">
    ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
  </ul>
`;

const LinkRow = (items = []) => {
  if (!items.length) {
    return "";
  }

  return `<p class="link-row">${links(items)}</p>`;
};

const Job = ({ title, company, meta = [], bullets = [], links: jobLinks = [] }) => `
  <article class="job">
    <header class="job__header">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p class="job__company">${escapeHtml(company)}</p>
      </div>
      <div class="job__meta">
        ${meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </header>
    <ul>
      ${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
    </ul>
    ${LinkRow(jobLinks)}
  </article>
`;

const Sidebar = (resume) => `
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
      title: "Freelance Projects",
      children: resume.freelanceProjects.map(Entry).join(""),
    })}
    ${Section({
      title: "Studio Projects",
      children: resume.studioProjects.map(Entry).join(""),
    })}
    ${Section({
      title: "Languages",
      children: PlainList(resume.languages),
    })}
  </aside>
`;

const Experience = (jobs) => `
  <section class="resume__main" aria-label="Professional experience">
    <h2>Professional Experience</h2>
    ${jobs.map(Job).join("")}
  </section>
`;

export const ResumeMaker = (resume) => `
  <main class="resume">
    ${Header(resume)}
    <div class="resume__grid">
      ${Sidebar(resume)}
      ${Experience(resume.experience)}
    </div>
  </main>
`;
