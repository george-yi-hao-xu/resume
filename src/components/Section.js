import { escapeHtml } from "./utils.js";
import "./Section.scss";

/**
 * @param {{ title: string, children: string, className?: string }} props
 * @returns {string}
 */
export const Section = ({ title, children, className = "" }) => `
  <section class="section ${escapeHtml(className)}">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;
