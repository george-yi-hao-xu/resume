import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { resume_data_bilingual as resume } from "../src/resume-data_bilingual.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...value] = arg.replace(/^--/, "").split("=");
    return [key, value.join("=") || true];
  }),
);

const lang = args.get("lang") || "zh";
const defaultOutput = lang === "bilingual" ? "boss-resume-bilingual.md" : "boss-resume.md";
const outputPath = resolve(rootDir, args.get("out") || defaultOutput);

const labels = {
  profile: "个人优势",
  experience: "职业经历",
  education: "教育背景",
  skills: "技能",
  projects: "独立项目",
  languages: "语言",
  links: "相关链接",
};

const isBilingual = lang === "bilingual";

const compact = (value) => String(value ?? "").replace(/\s+/g, " ").trim();

const text = (value) => {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return compact(value);
  }

  const zh = compact(value.zh);
  const en = compact(value.en);

  if (isBilingual && en && en !== zh) {
    return `${zh} / ${en}`;
  }

  return zh || en;
};

const line = (value = "") => `${value}\n`;
const blank = () => "\n";
const h1 = (value) => line(`# ${value}`);
const h2 = (value) => line(`## ${value}`);
const h3 = (value) => line(`### ${value}`);
const bullet = (value) => (value ? line(`- ${value}`) : "");

const formatLinks = (links = []) => {
  if (!links.length) {
    return "";
  }

  return links
    .map((link) => bullet(`${text(link.label)}：${link.href}`))
    .join("");
};

const formatContacts = () =>
  resume.contacts
    .filter((item) => item.value || item.href)
    .map((item) => {
      const value = item.value || item.href;
      return bullet(`${item.label}：${value}`);
    })
    .join("");

const formatProfile = () => resume.profile.map((item) => bullet(text(item))).join("");

const formatExperience = () =>
  resume.experience
    .map((job) => {
      const title = [text(job.title), job.company].filter(Boolean).join(" | ");
      const meta = job.meta?.length ? line(job.meta.join(" | ")) : "";
      const links = formatLinks(job.links);
      const bullets = job.bullets.map((item) => bullet(text(item))).join("");

      return [h3(title), meta, links, bullets].filter(Boolean).join("");
    })
    .join(blank());

const formatEducation = () =>
  resume.education
    .map((item) => {
      const title = text(item.title);
      const meta = text(item.meta);
      return bullet([title, meta].filter(Boolean).join(" | "));
    })
    .join("");

const formatSkills = () =>
  resume.skillGroups
    .map((group) => {
      const items = group.items.map(text).filter(Boolean).join("；");
      return bullet(`${text(group.title)}：${items}`);
    })
    .join("");

const formatProjects = () =>
  resume.projects
    .map((project) => {
      const meta = text(project.meta);
      const links = formatLinks(project.links);

      return [h3(text(project.title)), meta ? line(meta) : "", links].filter(Boolean).join("");
    })
    .join(blank());

const formatLanguages = () =>
  resume.languages
    .map((item) => bullet(`${text(item.name)}：${text(item.level)}`))
    .join("");

const sections = [
  h1(`${text(resume.name)} - ${text(resume.role)}`),
  formatContacts(),
  h2(labels.profile),
  formatProfile(),
  h2(labels.experience),
  formatExperience(),
  h2(labels.education),
  formatEducation(),
  h2(labels.skills),
  formatSkills(),
  h2(labels.languages),
  formatLanguages(),
  h2(labels.projects),
  formatProjects(),
];

const markdown = `${sections.filter(Boolean).join(blank()).trim()}\n`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, markdown, "utf8");

console.log(`Generated ${outputPath}`);
