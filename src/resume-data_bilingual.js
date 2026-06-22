/**
 * @typedef {{ zh: string, en?: string }} BilingualText
 * @typedef {{ label: BilingualText, href: string }} BilingualLink
 * @typedef {{ label: string, value?: string, href?: string }} BilingualContact
 * @typedef {{ title: BilingualText, meta?: BilingualText, details?: BilingualText[], note?: BilingualText, links?: BilingualLink[] }} BilingualEntry
 * @typedef {{ title: BilingualText, items: BilingualText[] }} BilingualSkillGroup
 * @typedef {{ title: BilingualText, company: string, meta: string[], bullets: BilingualText[], links?: BilingualLink[] }} BilingualJob
 */

export const resume_data_bilingual = {
  name: { zh: "许易豪", en: "George Yihao Xu" },
  role: { zh: "软件工程师", en: "Software Engineer" },
  pageTitle: "许易豪 / George Yihao Xu 双语简历",
  description: "许易豪 / George Yihao Xu 的中英双语简历，面向软件岗位。",
  contacts: [
    { label: "电话", value: "" },
    { label: "微信", value: "" },
    { label: "所在地", value: "中国 上海" },
    { label: "邮箱", value: "xuyihao342@outlook.com", href: "mailto:xuyihao342@outlook.com" },
    { label: "GitHub", value: "github.com/george-yi-hao-xu", href: "https://github.com/george-yi-hao-xu" },
    // { label: "LinkedIn", value: "linkedin.com/in/george-xu", href: "https://www.linkedin.com/" },
  ],
  labels: {
    profile: "个人优势 Profile",
    experience: "职业经历 Job Experience",
    education: "教育背景 Education",
    skills: "技能 Skills",
    projects: "独立项目 Indie Projects",
    languages: "语言 Languages",
  },
  profile: [
    {
      zh: "todo",
      en: "todo",
    },
    {
      zh: "todo",
      en: "todo",
    },
  ],
  experience: [
    {
      title: { zh: "软件工程师", en: "Software Engineer" },
      company: "Sasaki Associates, Inc.",
      meta: ["2023.11 - 至今", "波士顿 / 远程"],
      links: [
        { label: { zh: "员工信息", en: "Employee Info" }, href: "https://www.sasaki.com/people/george-xu/" },
      ],
      bullets: [
        {
          zh: "主导基于Adobe-Aria无样式UI库重构UI设计系统 参考 中心化设计Token，通过Node.js脚本实现编译，以同时支持scss和ts，并基于lerna/changset快速版本迭代。",
          en: "Upgraded React UI and token systems with JS/TS support and CI/CD automation.",
        },
        {
          zh: "参与将主力项目Dashi从1.0前端静态网站，基于GraphQl、Google Data Connect和云函数，升级为完善的2.0Web前后端项目。" 
            + "并借助Changset技术，完善了核心库的迭代维护，增强了Monorepo的健壮性。并且大幅度新客户网站的部署速度。",
          en: "Migrated REST workflows to GraphQL with Firebase functions and Google Cloud PostgreSQL.",
        },
        {
          zh: "通过浏览器Profile工具以及打时间点，定位前端计算瓶颈，优化js数组计算。在后端，参与对计算结果进行快照，以减轻前端计算工作量。并参与基于Google Analytics，借助设计师对用户行为等进行分析。",
          en: "Improved MobX state and caching, reducing key calculation time by at least 30%.",
        },
        {
          zh: "主导基于d3.js的图表库开发。通过解耦的store，统一数据结构，简化了多种带动画和 Tooltips 浮动解释文字框 的图表实现",
          en: "Built d3.js visualizations with design and engineering teams.",
        },
        {
          zh: "多次编写Rhino Python脚本，帮助建筑师根据csv数据生成AutoCAD dwg点云文件，并实现属性标注。",
          en: "todo"
        }
      ],
    },
    {
      title: { zh: "Hololens XR 开发工程师", en: "Hololens XR Developer" },
      company: "RISD Rover Club - NASA Spacesuit UI Challenge",
      meta: ["2022.10 - 2023.06", "罗德岛", "学术项目"],
      bullets: [
        {
          zh: "全流程深度参与基于微软Hololens的NASA竞赛项目，熟练使用Unity和C#进行UI开发。与设计师深度合作，完善了包括模拟采样抓取、地图打点引导、宇航员定位等等功能。参与野外模拟测试，并完成了最终的交付汇报。",
          en: "todo",
        },
        // {
        //   zh: "todo",
        //   en: "todo",
        // },
      ],
    },
    {
      title: { zh: "参数化设计师", en: "Computational Designer" },
      company: "ECADI",
      meta: ["2020.08 - 2021.05", "上海", "全职"],
      bullets: [
        {
          zh: "todo",
          en: "todo",
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
      title: { zh: "Web前端工程化", en: "Web Frontend" },
      items: [
        { zh: "HTML CSS/SCSS JavaScript/TypeScript" },
        { zh: "React/ReactNative Node.js" },
        { zh: "Jest / Chromatic / GitHub CI/CD" },
      ],
    },
    {
      title: { zh: "Web后端", en: "Web Backend & DB" },
      items: [
        { zh: "Go Python/Flask GraphQL RESTAPI" },
        { zh: "Firebase  Google_Cloud" },
        { zh: "PostgreSQL  MongoDB" },
      ],
    },
    {
      title: { zh: "游戏与3D空间设计开发", en: "Design & 3D" },
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
      title: { zh: "Mesh3d", en: "Web WASM & Native C++ App" },
      meta: { 
        zh: "基于力学模拟，辅助设计师在空间上进行找形设计，分别部署于win客户端和网页前端。在win端，使用C++以及cuda技术，配合Raylib实现计算可视化。且借助WASM技术在GitHub Page部署1.0版本。目前，存储与管理、基于PyTorch的深度学习功能的2.0版本，尚在本地docker环境中开发。", 
        en: "A mechanics-simulation tool that helps designers explore spatial form-finding, deployed as both a Windows client and a web frontend. The Windows version uses C++ and CUDA with Raylib for computational visualization, while version 1.0 is deployed to GitHub Pages through WASM. Version 2.0, with storage, management, and PyTorch-based deep learning features, is currently under development in a local Docker environment." },
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
    // {
    //   title: { zh: "Shekon", en: "Oculus VR Development" },
    //   meta: { zh: "TODO", en: "Oculus VR project with demo video and source code." },
    //   links: [
    //     {
    //       label: { zh: "演示视频", en: "Demo Video" },
    //       href: "https://vimeo.com/1199347000?share=copy&fl=sv&fe=ci",
    //     },
    //     {
    //       label: { zh: "源代码", en: "Source Code" },
    //       href: "https://github.com/george-yi-hao-xu/shekon",
    //     },
    //   ],
    // },
  ],
  languages: [
    {
      name: { zh: "汉语", en: "Mandarin" },
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
