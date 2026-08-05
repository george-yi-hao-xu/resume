export type ResumeVersion = "one-col" | "two-cols";

export type VersionOption = {
    id: ResumeVersion;
    title: string;
    description: string;
};

export const versionOptions: VersionOption[] = [
    {
        id: "one-col",
        title: "单列版",
        description: "更接近完整叙述版，适合阅读和投递。",
    },
    {
        id: "two-cols",
        title: "双列版",
        description: "信息密度更高，适合快速浏览和打印。",
    },
];

export const parseVersion = (value: string | null | undefined): ResumeVersion | null => {
    const normalized = value?.replace(/^#/, "");

    return normalized === "one-col" || normalized === "two-cols" ? normalized : null;
};

const VersionButton = (option: VersionOption, selected: ResumeVersion | null) =>
    [
        `<button class="new-selector__option${option.id === selected ? " is-active" : ""}" type="button" data-version="${option.id}">`,
        `<span>${option.title}</span>`,
        `<small>${option.description}</small>`,
        "</button>",
    ].join("");

export const selectorHtml = (selected: ResumeVersion | null) =>
    [
        '<section class="new-selector" aria-label="简历版本选择">',
        '<div class="new-selector__header">',
        "<p>Resume Builder</p>",
        "<h1>许易豪 / George Yihao Xu</h1>",
        "</div>",
        '<div class="new-selector__options" role="list">',
        versionOptions.map((option) => VersionButton(option, selected)).join(""),
        "</div>",
        "</section>",
    ].join("");
