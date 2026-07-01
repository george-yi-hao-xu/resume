/**
 * @typedef {{ label: string, href?: string }} Contact
 * @typedef {{ label: string, href: string }} Link
 * @typedef {{ title: string, meta?: string, details?: string[], note?: string, links?: Link[] }} EntryData
 * @typedef {{ title: string, items: string[] }} SkillGroupData
 * @typedef {{ name: string, level?: string }} Language
 * @typedef {{ title: string, company: string, meta?: string[], bullets?: string[], links?: Link[] }} JobData
 * @typedef {{
 *   name: string,
 *   pageTitle: string,
 *   description: string,
 *   labels: {
 *     education: string,
 *     skills: string,
 *     indieProjects: string,
 *     studioProjects: string,
 *     languages: string,
 *     experience: string,
 *   },
 *   contacts: Contact[],
 *   education: EntryData[],
 *   skillGroups: SkillGroupData[],
 *   indieProjects: EntryData[],
 *   studioProjects: EntryData[],
 *   languages: Language[],
 *   experience: JobData[],
 * }} ResumeData
 */

export {};
