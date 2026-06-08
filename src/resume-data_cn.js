/** @type {import("./resume-data.js").ResumeData} */
export const resume_data_cn = {
  name: "许易豪 / George",
  pageTitle: "许易豪 / George 中文简历",
  description: "许易豪 / George 的中文简历，软件工程师与体验设计师。",
  labels: {
    education: "教育经历",
    skills: "技能",
    indieProjects: "个人项目",
    studioProjects: "工作室项目",
    languages: "语言",
    experience: "专业经历",
  },
  contacts: [
    { label: "www.georgeyxu.com", href: "https://www.georgeyxu.com/" },
    { label: "xuyihao342@gmail.com", href: "mailto:xuyihao342@gmail.com" },
    { label: "软件工程 | 体验设计" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  education: [
    {
      title: "罗德岛设计学院",
      meta: "罗德岛，美国 | 2021 年 7 月 - 2023 年 6 月",
      details: ["设计学硕士"],
    },
    {
      title: "布朗大学",
      meta: "罗德岛, 美国 | 2022 年 9 月 - 2023 年 1 月",
      details: ["计算机科学"],
      note: "跨校选课",
    },
    {
      title: "同济大学",
      meta: "上海, 中国 | 2014 年 7 月 - 2020 年 6 月",
      details: ["建筑学学士"],
      note: "德语强化班",
    },
  ],
  skillGroups: [
    {
      title: "网络前后端开发",
      items: [
        "HTML CSS/SCSS Js/Ts",
        "React/RN",
        "Go Python/Flask Node.js",
        "GraphQl/Firebase REST_API",
        "PostgreSQL/GCloud MongoDB",
      ],
    },
    {
      title: "AI 辅助工具",
      items: ["Codex", "GitHub Copilot"],
    },
    {
      title: "交互与计算设计",
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
          label: "在线演示",
          href: "https://george-yi-hao-xu.github.io/mesh3d",
        },
        {
          label: "源代码",
          href: "https://github.com/george-yi-hao-xu/mesh3d",
        },
      ],
    },
  ],
  studioProjects: [
    {
      title: "Shekon",
      details: ["Oculus VR 开发"],
      links: [
        {
          label: "演示视频",
          href: "https://vimeo.com/1199347000?share=copy&fl=sv&fe=ci",
        },
        {
          label: "源代码",
          href: "https://github.com/george-yi-hao-xu/shekon",
        },
      ],
    },
  ],
  languages: [
    { name: "英语", level: "流利" },
    { name: "汉语", level: "母语" },
    { name: "德语", level: "中级" },
    { name: "法语", level: "中级" },
  ],
  experience: [
    {
      title: "软件工程师",
      company: "Sasaki Associates",
      meta: ["全职 -> 远程合同", "2023 年 11 月 - 2025 年 11 月 -> 至今", "Boston, US"],
      bullets: [
        "升级 React UI 与 tokens design system，加入 js/ts 支持；通过 Node.js build scripts 提升构建效率，并配置 GitHub CI/CD pipelines，覆盖 Jest test、Chromatic 在线 UI review 平台与 UI demo webpage 自动部署。",
        "将 legacy REST API 迁移至 GraphQL，加快新 client apps 搭建；配置 Google Cloud PostgreSQL database，增强代码 type safety，实现 cloud functions 并基于 Google Firebase 搭建 GraphQL server。",
        "通过优化 MobX state management，并实现 code-splitting 与 caching 技术提升 web app performance，使数据计算时间至少减少 30%。",
        "与 design 和 development 团队协作，实现高质量 d3.js data visualization components，在多个项目中提升用户参与度与数据理解效率。",
      ],
      links: [
        { label: "Employee Info", href: "https://www.sasaki.com/people/george-xu/" },
      ],
    },
    {
      title: "XR 开发者",
      company: "RISD Rover Club - NASA Spacesuit UI Challenge",
      meta: ["兼职", "2022 年 10 月 - 2023 年 6 月", "罗德岛, 美国"],
      bullets: [
        "在 Unity 中为 HoloLens 开发用户界面，重点负责 UI 开发。",
        "与工业设计学生紧密协作，将设计方案落地，并根据用户反馈持续迭代。",
      ],
      links: [
        { label: "详情", href: "https://www.meijaydesign.com/work/nasa-suits-challenge" },
      ],
    },
    {
      title: "平面设计师",
      company: "RISD ISSA Office",
      meta: ["兼职", "2022 年 7 月 - 2022 年 12 月", "罗德岛, 美国"],
      bullets: [
        "设计并发布线上图形，帮助学生更清晰地理解学校活动与政策信息。",
        "工作内容覆盖数据可视化、海报设计，以及幻灯片与网页设计的审阅。",
      ],
    },
    {
      title: "参数化设计师",
      company: "ECADI",
      meta: ["全职", "2020 年 8 月 - 2021 年 5 月", "上海, 中国"],
      bullets: [
        "在跨团队项目中负责参数化设计，使用 Rhino Grasshopper 并结合 Python 与 C#，显著提升设计效率和质量，并参与多个大型项目。",
      ],
    },
  ],
};
