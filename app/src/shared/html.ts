import type {
    LanguageCode,
    LocalizedValue,
    ResumeData,
    SectionVisibility,
} from "../data/data.types";

export const escapeHtml = (value: unknown): string =>
    String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

export const localizedText = (value: LocalizedValue | undefined, lang: LanguageCode): string => {
    if (!value) {
        return "";
    }

    if (typeof value === "string") {
        return value;
    }

    return value[lang] ?? value.zh ?? value.en ?? "";
};

export const htmlText = (value: LocalizedValue | undefined, lang: LanguageCode): string =>
    escapeHtml(localizedText(value, lang));

export const localizedJoin = (
    items: Array<LocalizedValue | undefined>,
    lang: LanguageCode,
    separator = " | ",
): string =>
    items
        .map((item) => htmlText(item, lang))
        .filter(Boolean)
        .join(separator);

export const sectionIsVisible = (
    resume: ResumeData,
    key: keyof NonNullable<ResumeData["visibleSections"]>,
    lang: LanguageCode,
): boolean => {
    const setting = resume.visibleSections?.[key] as SectionVisibility | undefined;

    if (typeof setting === "object") {
        return setting[lang] !== false;
    }

    return setting !== false;
};

export const mixedText = (value: LocalizedValue | undefined, className = "bi-text"): string => {
    if (!value) {
        return "";
    }

    if (typeof value === "string") {
        return `<span class="${className}">${escapeHtml(value)}</span>`;
    }

    const chinese = value.zh ? `<span class="${className}__zh">${escapeHtml(value.zh)}</span>` : "";
    const english = value.en ? `<span class="${className}__en">${escapeHtml(value.en)}</span>` : "";

    return `<span class="${className}">${chinese}${english}</span>`;
};
