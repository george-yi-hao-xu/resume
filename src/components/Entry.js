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

