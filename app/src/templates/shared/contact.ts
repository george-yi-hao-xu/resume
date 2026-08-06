import type { ContactItem, LanguageCode, ResumeData } from "../../data/data.types";
import { escapeHtml, htmlText, localizedText, visibilitySettingIsVisible } from "../../shared/html";

const ContactEntry = (item: ContactItem, lang: LanguageCode) => {
    if (!visibilitySettingIsVisible(item.visible, lang)) {
        return "";
    }

    const label = localizedText(item.label, lang);
    const value = item.localizedValue ?? item.value;

    if (!label || !item.value) {
        return "";
    }

    const separator = lang === "en" ? ": " : "：";
    const content = item.href
        ? `<a href="${escapeHtml(item.href)}">${htmlText(value, lang)}</a>`
        : `<span>${htmlText(value, lang)}</span>`;

    return `<span><b>${escapeHtml(label)}${separator}</b>${content}</span>`;
};

export const ContactList = (resume: ResumeData, lang: LanguageCode, className: string) => `
  <div class="${escapeHtml(className)}" aria-label="${htmlText(resume.labels.contactAria, lang)}">
    ${resume.contacts.map((item) => ContactEntry(item, lang)).join("")}
  </div>
`;
