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

/** @type {ResumeData} */
export const resume_data = {
  name: "George Yihao Xu",
  pageTitle: "George Yihao Xu Resume",
  description: "Resume of George Yihao Xu, UI/UX designer and frontend developer.",
  labels: {
    education: "Education",
    skills: "Skills",
    indieProjects: "Indie Projects",
    studioProjects: "Studio Projects",
    languages: "Languages",
    experience: "Professional Experience",
  },
  contacts: [
    { label: "www.georgeyxu.com", href: "https://www.georgeyxu.com/" },
    { label: "xuyihao342@gmail.com", href: "mailto:xuyihao342@gmail.com" },
    // { label: "+1.401.743.7680", href: "tel:+14017437680" },
    { label: "Software Engineering | Experience Design" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    // { label: "Portfolio", href: "https://www.georgeyxu.com/" },
  ],
  education: [
    {
      title: "Rhode Island School of Design",
      meta: "Providence, RI | Jul 2021 - Jun 2023",
      details: ["Master of Design"],
    },
    {
      title: "Brown University",
      meta: "Providence, RI | Sept 2022 - Jan 2023",
      details: ["Computer Science"],
      note: "Cross-registered",
    },
    {
      title: "Tongji University",
      meta: "Shanghai, CN | Jul 2014 - Jun 2020",
      details: ["Bachelor of Architecture"],
      note: "Minor in German Studies",
    },
  ],
  skillGroups: [
    {
      title: "Web Development",
      items: ["HTML CSS/SCSS Js/Ts", "React/RN", "Go Python/Flask Node.js", "Docker GraphQl/Firebase REST_API", "PostgreSQL/GCloud MongoDB"],
    },
    {
      title: "AI/Dev Tools",
      items: ["Codex", "ComfyUI"]
    },
    {
      title: "3D Development",
      items: ["Unity_C#  RayLib_C++_WASM", "Rhino/Grasshopper_Python/AutoCAD"],
    },
    {
      title: "UI/UX",
      items: ["Figma/AdobeXD", "PS/AI/ID/PR"],
    },
  ],
  indieProjects: [
    {
      title: "Mesh3d",
      details: ["Web & Native App"],
      links: [
        {
          label: "Live Demo",
          href: "https://george-yi-hao-xu.github.io/mesh3d",
        },
        {
          label: "Source Code",
          href: "https://github.com/george-yi-hao-xu/mesh3d",
        }
      ],
    }
  ],
  studioProjects: [
    {
      title: "Shekon",
      details: ["Oculus VR Development"],
      links: [
        {
          label: "Demo Video",
          href: "https://vimeo.com/1199347000?share=copy&fl=sv&fe=ci",
        },
        {
          label: "Source Code",
          href: "https://github.com/george-yi-hao-xu/shekon",
        }
      ],
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Mandarin & Wu", level: "Native" },
    { name: "German", level: "Intermediate" },
    { name: "French", level: "Intermediate" },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Sasaki Associates",
      meta: ["Full Time -> Remote Contractor", "Nov 2023 - Nov 2025 -> Present", "Boston, US"],
      bullets: [
        "Upgrade React UI and tokens design system, implement js/ts support. Improve build efficiency by implementing Node.js build scripts and set up GitHub CI/CD pipelines, including Jest test, chromatic online ui review platform, and auto deploy ui demo webpage.",
        "Migrate legacy REST API to GraphQL, speed up new client apps establishment. Set up Google cloud PostgreSQL database, enhance code type safety, implement cloud functions and set up GraphQL server with Google Firebase.",
        "Improve web app performance by optimizing MobX state management and implementing code-splitting caching techniques, resulting in a at least 30% reduction in data calculation times.",
        "Collaborate with design and development teams to implement high-quality d3.js data visualization components, enhancing user engagement and data comprehension across multiple projects.",
      ],
      links: [
        { label: "Employee Info", href: "https://www.sasaki.com/people/george-xu/" },
      ],
    },
    {
      title: "XR Developer",
      company: "RISD Rover Club - NASA Spacesuit UI Challenge",
      meta: ["Part-time", "Oct 2022 - Jun 2023", "Rhode Island, US"],
      bullets: [
        "Developed the user interface within Unity for HoloLens, with a primary focus on UI development.",
        "Closing working with industrial design students to implement their designs, and iterating based on user feedback.",
      ],
      links: [
        { label: "Detailed Timeline", href: "https://www.meijaydesign.com/work/nasa-suits-challenge" },
      ],
    },
    {
      title: "Graphic Designer",
      company: "RISD ISSA Office",
      meta: ["Part-time", "Jul 2022 - Dec 2022", "Rhode Island, US"],
      bullets: [
        "Designed and distributed online graphics, improving student comprehension of school events and policies.",
        "Roles encompassed data visualization, poster design, and review of slides and web design.",
      ],
    },
    {
      title: "Computational Designer",
      company: "ECADI",
      meta: ["Full-time", "Aug 2020 - May 2021", "Shanghai, CN"],
      bullets: [
        "Specialized in parametric design across teams' projects, using Rhino Grasshopper complemented by Python and C#. Greatly improved design efficiency and quality, and contributed to multiple large-scale projects.",
      ],
    },
  ],
};
