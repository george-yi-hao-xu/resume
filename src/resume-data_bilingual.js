/**
 * @typedef {{ zh: string, en?: string }} BilingualText
 * @typedef {{ label: BilingualText, href: string }} BilingualLink
 * @typedef {{ label: string, value?: string, href?: string }} BilingualContact
 * @typedef {{ title: BilingualText, meta?: BilingualText, details?: BilingualText[], note?: BilingualText, links?: BilingualLink[] }} BilingualEntry
 * @typedef {{ title: BilingualText, items: BilingualText[] }} BilingualSkillGroup
 * @typedef {{ title: BilingualText, company: string, meta: string[], bullets: BilingualText[] }} BilingualJob
 */

export const resume_data_bilingual = {
  name: { zh: "许易豪", en: "George Yihao Xu" },
  role: { zh: "软件工程师", en: "Software Engineer" },
  pageTitle: "许易豪 / George Yihao Xu 双语简历",
  description: "许易豪 / George Yihao Xu 的中英双语简历，面向软件岗位。",
  contacts: [
    { label: "电话", value: "" },
    { label: "微信", value: "" },
    { label: "所在地", value: "中国上海" },
    { label: "邮箱", value: "xuyihao342@gmail.com", href: "mailto:xuyihao342@outlook.com" },
    { label: "GitHub", value: "github.com/george-yi-hao-xu", href: "https://github.com/george-yi-hao-xu" },
    // { label: "LinkedIn", value: "linkedin.com/in/george-xu", href: "https://www.linkedin.com/" },
  ],
  labels: {
    profile: "个人优势 Profile",
    experience: "工作经历 Experience",
    education: "教育背景 Education",
    skills: "技能 Skills",
    projects: "项目 Projects",
    languages: "语言 Languages",
  },
  profile: [
    {
      zh: "软件工程与体验设计复合背景，擅长把设计系统、前端工程和数据可视化落地为稳定产品。",
      en: "Hybrid software and experience-design background across design systems, frontend engineering, and data visualization.",
    },
    {
      zh: "熟悉 React、TypeScript、GraphQL、Firebase、PostgreSQL 与云端部署流程，能独立推进从原型到上线的工程闭环。",
      en: "Hands-on with React, TypeScript, GraphQL, Firebase, PostgreSQL, and cloud delivery workflows.",
    },
  ],
  experience: [
    {
      title: { zh: "软件工程师", en: "Software Engineer" },
      company: "Sasaki Associates.Inc",
      meta: ["2023.11 - 至今", "波士顿 / 远程"],
      bullets: [
        {
          zh: "基于Abode-Aria 无样式组件库升级UI设计系统，中心化设计Token，并强化多语种支持，通过 Node.js脚本和GitHub CI/CD提升迭代发布效率。",
          en: "Upgraded React UI and token systems with JS/TS support and CI/CD automation.",
        },
        {
          zh: "将 legacy REST API 迁移至 GraphQL，搭建 Firebase cloud functions 与 Google Cloud PostgreSQL 数据链路。",
          en: "Migrated REST workflows to GraphQL with Firebase functions and Google Cloud PostgreSQL.",
        },
        {
          zh: "优化 MobX 状态管理与缓存策略，使核心数据计算耗时降低至少 30%。",
          en: "Improved MobX state and caching, reducing key calculation time by at least 30%.",
        },
        {
          zh: "与设计和开发团队协作实现 d3.js 数据可视化组件，提高复杂数据的可读性和产品体验。",
          en: "Built d3.js visualizations with design and engineering teams.",
        },
      ],
    },
    {
      title: { zh: "Hololens XR 开发工程师", en: "Hololens XR Developer" },
      company: "RISD Rover Club - NASA Spacesuit UI Challenge",
      meta: ["2022.10 - 2023.06", "罗德岛", "学术项目"],
      bullets: [
        {
          zh: "在 Unity 中开发 HoloLens 界面，支持宇航服视觉系统的信息展示与交互验证。",
          en: "Built HoloLens UI in Unity for spacesuit interface validation.",
        },
        {
          zh: "与工业设计学生协作，将概念方案转化为可测试界面，并根据反馈迭代。",
          en: "Translated industrial-design concepts into testable interfaces.",
        },
      ],
    },
    {
      title: { zh: "参数化设计师", en: "Computational Designer" },
      company: "ECADI",
      meta: ["2020.08 - 2021.05", "上海", "全职"],
      bullets: [
        {
          zh: "使用 Rhino Grasshopper、Python 与 C# 参与跨团队参数化设计，提高大型项目的设计效率与质量。",
          en: "Applied Rhino Grasshopper, Python, and C# to improve design workflows.",
        },
      ],
    },
  ],
  education: [
    {
      title: { zh: "罗德岛设计学院", en: "Rhode Island School of Design" },
      meta: { zh: "设计学硕士 2023.06 毕业", en: "Master of Design, graduated Jun 2023" },
    },
    {
      title: { zh: "布朗大学", en: "Brown University" },
      meta: {
        zh: "计算机科学 跨校选课",
        en: "Computer Science cross-registration",
      },
    },
    {
      title: { zh: "同济大学", en: "Tongji University" },
      meta: {
        zh: "建筑学学士 德强班 2020.06 毕业",
        en: "Bachelor of Architecture, Deutschintensivkurs, graduated Jun 2020",
      },
    },
  ],
  skillGroups: [
    {
      title: { zh: "前端与工程化", en: "Frontend" },
      items: [
        { zh: "HTML CSS/SCSS JavaScript/TypeScript" },
        { zh: "React/ReactNative Node.js" },
        { zh: "Jest / Chromatic / GitHub CI/CD" },
      ],
    },
    {
      title: { zh: "服务端与数据库", en: "Backend & Data" },
      items: [
        { zh: "Go Python/Flask GraphQL RESTAPI" },
        { zh: "Firebase  Google_Cloud" },
        { zh: "PostgreSQL  MongoDB" },
      ],
    },
    {
      title: { zh: "设计与三维", en: "Design & 3D" },
      items: [
        { zh: "Figma / Adobe XD / PS / AI / ID / PR" },
        { zh: "Unity C# / RayLib C++ WASM / Rhino Grasshopper" },
      ],
    },
    {
      title: { zh: "AI 工具", en: "AI Tools" },
      items: [{ zh: "Codex / GitHub Copilot / ComfyUI" }],
    },
  ],
  projects: [
    {
      title: { zh: "Mesh3d", en: "Web & Native App" },
      meta: { zh: "Web 与 Native 三维应用；在线演示与源码已发布。", en: "3D web/native app with live demo and source code." },
      links: [
        {
          label: { zh: "在线演示", en: "Live Demo" },
          href: "https://george-yi-hao-xu.github.io/mesh3d",
        },
        {
          label: { zh: "源代码", en: "Source Code" },
          href: "https://github.com/george-yi-hao-xu/mesh3d",
        },
      ],
    },
    {
      title: { zh: "Shekon", en: "Oculus VR Development" },
      meta: { zh: "Oculus VR 开发项目；覆盖演示视频与源码。", en: "Oculus VR project with demo video and source code." },
      links: [
        {
          label: { zh: "演示视频", en: "Demo Video" },
          href: "https://vimeo.com/1199347000?share=copy&fl=sv&fe=ci",
        },
        {
          label: { zh: "源代码", en: "Source Code" },
          href: "https://github.com/george-yi-hao-xu/shekon",
        },
      ],
    },
  ],
  languages: [
    {
      name: { zh: "汉语", en: "Mandarin & Wu" },
      level: { zh: "母语", en: "Native" },
    },
    {
      name: { zh: "英语", en: "English" },
      level: { zh: "专业", en: "Professional" },
    },
    {
      name: { zh: "德语", en: "Deutsch" },
      level: { zh: "中级", en: "Intermediate" },
    },
    {
      name: { zh: "法语", en: "Français" },
      level: { zh: "中级", en: "Intermediate" },
    },
  ],
};
