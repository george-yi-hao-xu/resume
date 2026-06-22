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
      zh: "拥有设计背景与国际工作经验的软件工程师，熟悉 Web 开发生态、前后端协作流程与数据可视化实践，并持续探索深度学习在产品与设计工具中的应用。具备较强的自驱学习能力，沟通清晰，能够在跨职能团队中稳定推进复杂任务。",
      en: "Software engineer with a design background and international work experience, familiar with the Web development ecosystem, frontend-backend collaboration, and data visualization. Actively exploring deep learning applications in products and design tools, with strong self-driven learning, clear communication, and the ability to move complex tasks forward in cross-functional teams.",
    },
    // {
    //   zh: "todo",
    //   en: "todo",
    // },
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
          zh: "主导基于 Adobe React Aria 无样式组件库重构 UI 设计系统，中心化设计 Token，通过 Node.js 脚本实现编译，同时支持 SCSS 与 TypeScript，并基于 Lerna / Changesets 实现快速版本迭代。",
          en: "Led a UI design system refactor with Adobe React Aria, centralized design tokens, Node.js build scripts, SCSS/TypeScript output, and Lerna/Changesets versioning.",
        },
        {
          zh: "参与将主力项目 Dashi 从 1.0 前端静态网站，升级为基于 GraphQL、Google Data Connect 和云函数的 2.0 Web 前后端项目。"
            + "借助 Changesets 完善核心库的迭代维护，增强 Monorepo 的健壮性，并大幅提升新客户网站的部署速度。",
          en: "Helped upgrade Dashi from a static 1.0 frontend into a full 2.0 web app using GraphQL, Google Data Connect, and cloud functions; improved package maintenance and client-site deployment speed with Changesets.",
        },
        {
          zh: "通过浏览器 Profile 工具定位前端计算瓶颈并优化 JavaScript 数组计算；在后端参与计算结果快照，减轻前端计算负担；并基于 Google Analytics 协助设计师分析用户行为。",
          en: "Used browser profiling to find frontend bottlenecks, optimized JavaScript array processing, reduced client computation through backend result snapshots, and supported Google Analytics-based user behavior analysis.",
        },
        {
          zh: "主导基于 d3.js 的图表库开发，解耦数据与缓存逻辑，统一数据结构，简化多种带动画与 Tooltip 解释浮层的图表实现。",
          en: "Led a d3.js charting library, decoupling data/cache logic and standardizing data structures for animated charts and tooltip overlays.",
        },
        {
          zh: "多次编写 Rhino Python 脚本，帮助建筑师根据 CSV 数据生成 AutoCAD DWG 点云文件，并实现 CAD 内几何图形的属性标注，助力城市规划设计项目推进。",
          en: "Wrote Rhino Python scripts to generate AutoCAD DWG point clouds from CSV data, annotate CAD geometry, and support urban planning workflows."
        }
      ],
    },
    {
      title: { zh: "HoloLens XR 开发工程师", en: "Hololens XR Developer" },
      company: "罗德岛设计学院 月球车社团 RISD Rover Club",
      meta: ["2022.10 - 2023.06", "罗德岛", "学术项目"],
      bullets: [
        {
          zh: "全流程深度参与基于微软 HoloLens 的 NASA 竞赛项目，熟练使用 Unity 与 C#。完善模拟采样抓取、地图打点引导、宇航员定位等功能。",
          en: "Built Microsoft HoloLens UI features in Unity and C# for a NASA competition project, including sample collection, waypoint guidance, and astronaut positioning;"
        },
        // {
        //   zh: "todo",
        //   en: "todo",
        // },
      ],
      links: [
        { label: { zh: "具体信息", en: "Detailed Timeline"}, href: "https://www.meijaydesign.com/work/nasa-suits-challenge" },
      ],
    },
    {
      title: { zh: "参数化设计师", en: "Computational Designer" },
      company: "华东建筑设计研究院 ECADI",
      meta: ["2020.08 - 2021.05", "上海", "全职"],
      bullets: [
        {
          zh: "参与大型机场项目室内设计，运用 Rhino Grasshopper 参数化工具，对中庭等核心公共空间进行建模与设计。并使用InDesign等工具完成文本编排工作。",
          en: "Contributed to interior design for a large-scale airport project, using Rhino Grasshopper parametric tools to model and design core public spaces such as atriums.",
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
      title: { zh: "Web 前端工程化", en: "Web Frontend" },
      items: [
        { zh: "HTML CSS/SCSS JavaScript/TypeScript" },
        { zh: "React/ReactNative Node.js" },
        { zh: "Jest / Chromatic / GitHub CI/CD" },
      ],
    },
    {
      title: { zh: "Web 后端与数据库", en: "Web Backend & DB" },
      items: [
        { zh: "Go Python/Flask GraphQL RESTAPI" },
        { zh: "Firebase  Google_Cloud" },
        { zh: "PostgreSQL  MongoDB" },
      ],
    },
    {
      title: { zh: "游戏与 3D 空间设计开发", en: "Design & 3D" },
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
        zh: "基于力学模拟，辅助设计师进行空间找形设计，并分别部署于 Windows 客户端和网页前端。在 Windows 端，使用 C++ 与 CUDA 技术，配合 Raylib 实现计算可视化；同时借助 WASM 技术在 GitHub Pages 部署 1.0 版本。目前，包含存储与管理、基于 PyTorch 的深度学习功能的 2.0 版本仍在本地 Docker 环境中开发。", 
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
