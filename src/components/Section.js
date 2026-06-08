import { escapeHtml } from "./utils.js";

export const Section = ({ title, children }) => `
  <section class="section">
    <h2>${escapeHtml(title)}</h2>
    ${children}
  </section>
`;
