import { escapeHtml } from "./utils.js";
import "./Section.scss";

export const Section = ({ title, children }) => `
  <section class="section">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;
