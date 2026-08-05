export type LanguageCode = "zh" | "en";

export type DisplayText = {
    zh?: string;
    en?: string;
};

export type LocalizedValue = string | DisplayText;

export type SectionVisibility = boolean | Partial<Record<LanguageCode, boolean>>;

export type ResumeLabels = {
    contactAria: DisplayText;
    profile: DisplayText;
    education: DisplayText;
    skills: DisplayText;
    experience: DisplayText;
    workProjects: DisplayText;
    personalProjects: DisplayText;
    languages: DisplayText;
    workContent: DisplayText;
    projectDescription: DisplayText;
};

export type ContactItem = {
    label: DisplayText;
    value: string;
    localizedValue?: DisplayText;
    href?: string;
};

export type EducationItem = {
    title: DisplayText;
    meta: DisplayText;
    location?: DisplayText;
    time?: DisplayText;
};

export type SkillGroup = {
    title: DisplayText;
    items: DisplayText[];
};

export type LinkItem = {
    label: DisplayText;
    href: string;
};

export type ExperienceItem = {
    company: DisplayText;
    title: DisplayText;
    meta: DisplayText[];
    bullets: DisplayText[];
    links?: LinkItem[];
};

export type WorkProjectItem = {
    title: DisplayText;
    company: DisplayText;
    role: DisplayText;
    meta?: DisplayText[];
    summary?: DisplayText;
    description: DisplayText[];
    links?: LinkItem[];
};

export type PersonalProjectItem = {
    title: DisplayText;
    summary?: DisplayText;
    description: DisplayText[];
    links?: LinkItem[];
};

export type LanguageItem = {
    name: DisplayText;
    level?: DisplayText;
};

export type ResumeData = {
    pageTitle: string;
    description: string;
    name: DisplayText;
    role: DisplayText;
    labels: ResumeLabels;
    visibleSections?: Partial<
        Record<
            "profile" | "education" | "skills" | "experience" | "workProjects" | "personalProjects",
            SectionVisibility
        >
    >;
    contacts: ContactItem[];
    profile: DisplayText[];
    education: EducationItem[];
    skillGroups: SkillGroup[];
    experience: ExperienceItem[];
    workProjects: WorkProjectItem[];
    personalProjects: PersonalProjectItem[];
    languages: LanguageItem[];
};
