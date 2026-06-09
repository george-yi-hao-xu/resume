import { escapeHtml, links, paragraphs } from "./utils.js";
import "./Entry.scss";

/**
 * @param {import("../resume-data.js").EntryData} props
 * @returns {string}
 */
export const Entry = ({ title, meta, details = [], note, links: entryLinks = [] }) => `
  <article class="entry">
    <h3>${escapeHtml(title)}</h3>
    ${meta ? `<p class="entry__meta">${escapeHtml(meta)}</p>` : ""}
    ${paragraphs(details)}
    ${note ? `<p class="entry__note">${escapeHtml(note)}</p>` : ""}
    ${links(entryLinks)}
  </article>
`;

/**
 * @param {import("../resume-data.js").SkillGroupData} props
 * @returns {string}
 */
export const SkillGroup = ({ title, items }) => `
  <div class="skill-group">
    <h3>${escapeHtml(title)}</h3>
    ${paragraphs(items)}
  </div>
`;

/**
 * @param {string[]} items
 * @returns {string}
 */
export const PlainList = (items) => `
  <ul class="plain-list">
    ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
  </ul>
`;

/**
 * @param {import("../resume-data.js").Language} item
 * @returns {string}
 */
const LanguageItem = (item) => {
  const level = item.level
    ? `<span class="language-list__level">${escapeHtml(item.level)}</span>`
    : "";

  return `<li>${escapeHtml(item.name)}${level}</li>`;
};

/**
 * @param {import("../resume-data.js").Language[]} items
 * @returns {string}
 */
export const LanguageList = (items) => `
  <ul class="plain-list language-list">
    ${items.map(LanguageItem).join("")}
  </ul>
`;
