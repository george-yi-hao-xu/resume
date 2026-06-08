import { escapeHtml, links } from "./utils.js";
import "./Experience.scss";

/**
 * @param {import("../resume-data.js").Link[]} [items]
 * @returns {string}
 */
const LinkRow = (items = []) => {
  if (!items.length) {
    return "";
  }

  return `<p class="link-row">${links(items)}</p>`;
};

/**
 * @param {import("../resume-data.js").JobData} props
 * @returns {string}
 */
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

/**
 * @param {import("../resume-data.js").JobData[]} jobs
 * @returns {string}
 */
export const Experience = (jobs) => `
  <section class="resume__main" aria-label="Professional experience">
    <h2>Professional Experience</h2>
    ${jobs.map(Job).join("")}
  </section>
`;
