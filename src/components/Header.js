import { escapeHtml } from "./utils.js";
import "./Header.scss";

const ContactItem = (item) => {
  if (!item.href) {
    return `<span>${escapeHtml(item.label)}</span>`;
  }

  return `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`;
};

export const Header = ({ name, contacts }) => `
  <header class="resume__header">
    <h1>${escapeHtml(name)}</h1>
    <div class="contact-list" aria-label="Contact information">
      ${contacts.map(ContactItem).join("")}
    </div>
  </header>
`;
