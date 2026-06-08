import { escapeHtml, links, paragraphs } from "./utils.js";

export const Entry = ({ title, meta, details = [], note, links: entryLinks = [] }) => `
  <article class="entry">
    <h3>${escapeHtml(title)}</h3>
    ${meta ? `<p class="entry__meta">${escapeHtml(meta)}</p>` : ""}
    ${paragraphs(details)}
    ${note ? `<p class="entry__note">${escapeHtml(note)}</p>` : ""}
    ${links(entryLinks)}
  </article>
`;

export const SkillGroup = ({ title, items }) => `
  <div class="skill-group">
    <h3>${escapeHtml(title)}</h3>
    ${paragraphs(items)}
  </div>
`;

export const PlainList = (items) => `
  <ul class="plain-list">
    ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
  </ul>
`;

const LanguageItem = (item) => {
  const level = item.level
    ? `<span class="language-list__level">${escapeHtml(item.level)}</span>`
    : "";

  return `<li>${escapeHtml(item.name)}${level}</li>`;
};

export const LanguageList = (items) => `
  <ul class="plain-list language-list">
    ${items.map(LanguageItem).join("")}
  </ul>
`;
