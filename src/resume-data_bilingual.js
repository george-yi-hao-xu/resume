/**
 * @typedef {{ zh: string, en?: string }} BilingualText
 * @typedef {{ label: BilingualText, href: string }} BilingualLink
 * @typedef {{ label: string, localizedLabel?: BilingualText, value?: string, localizedValue?: BilingualText, href?: string }} BilingualContact
 * @typedef {{ title: BilingualText, meta?: BilingualText, details?: BilingualText[], note?: BilingualText, links?: BilingualLink[] }} BilingualEntry
 * @typedef {{ title: BilingualText, items: BilingualText[] }} BilingualSkillGroup
 * @typedef {{ title: BilingualText, company: string | BilingualText, meta: string[], bullets: BilingualText[], links?: BilingualLink[] }} BilingualJob
 */

export const resume_data_bilingual = {
  name: { zh: "许易豪", en: "George Yihao Xu" },
  role: { zh: "软件工程师 UI/UX设计 XR开发", en: "Software Engineer" },
  pageTitle: "许易豪 / George Yihao Xu 双语简历",
  description: "许易豪 / George Yihao Xu 中英双语简历",
  contacts: [
    { label: "电话", localizedLabel: { zh: "电话", en: "Phone" }, value: "18701928010" },
    { label: "出生", localizedLabel: { zh: "出生", en: "" }, value: "1996.04" },
    {
      label: "所在地",
      localizedLabel: { zh: "所在地", en: "Location" },
      value: "中国 上海",
      localizedValue: { zh: "中国 上海", en: "Shanghai, China" },
    },
    {
      label: "邮箱",
      localizedLabel: { zh: "邮箱", en: "Email" },
      value: "xuyihao342@outlook.com",
      href: "mailto:xuyihao342@outlook.com",
    },
    {
      label: "GitHub",
      localizedLabel: { zh: "GitHub", en: "" },
      value: "github.com/george-yi-hao-xu",
      href: "https://github.com/george-yi-hao-xu",
    },
    // { label: "LinkedIn", value: "linkedin.com/in/george-xu", href: "https://www.linkedin.com/" },
  ],
  localizedLabels: {
    zh: {
      profile: "自我介绍",
      experience: "职业经历",
      education: "教育背景",
      skills: "技能",
      projects: "学术项目",
      languages: "语言",
      contactAria: "联系信息",
    },
    en: {
      profile: "Profile",
      experience: "Job Experience",
      education: "Education",
      skills: "Skills",
      projects: "Academic Projects",
      languages: "Languages",
      contactAria: "Contact",
    },
  },
  labels: {
    profile: "个人优势 Profile",
    experience: "职业经历 Job Experience",
    education: "教育背景 Education",
    skills: "技能 Skills",
    projects: "学术项目 Academic Projects",
    languages: "语言 Languages",
  },
  profile: [
    // {
    //   zh: `就职于世界顶尖规划公司SASAKI波士顿分部研发部门，担当主力软件工程师，承担Web前后端生态架构开发与维护、优化数据结构与算法。
    //   先前,毕业国内985211 同济大学 王牌专业建筑学 与 世界顶尖设计学院 美国罗德岛设计学院，并于美国常春藤 布朗大学 进修计算机课程。
    //   在校期间结合设计背景，深耕其与计算机交叉内容，包括人机交互、计算设计、动力学模拟等。成绩优异，与国内外斩获学科奖项。
    //   有极强的好奇心与学习自驱力，做事谨慎仔细，为人和善耐心，在校和职场深得合作同学、同事信任。`,
    //   en: `Software engineer on Sasaki's Boston R&D team, focused on web architecture, data structures, and algorithmic optimization.
    //   Trained in architecture and design at Tongji University and RISD, with CS coursework at Brown University; self-driven, detail-oriented, and trusted in cross-disciplinary collaboration.`,
    // },
    {
      zh: `2020年毕业于同济大学，后赴美国罗德岛设计学院攻读硕士学位，同时于布朗大学学习
计算机课程。在校期间，探索人机交互、计算设计、动力学模拟等方向，成绩优异，并在国内外
获得多项学科奖项。毕业后，顺利就职于顶尖规划设计公司 Sasaki规划事务所 波士顿总部研发部
门，负责 Web 前后端生态架构开发，数据结构与算法优化等。具备极强的学习自驱力与跨学科整合能力，
做事谨慎细致，沟通耐心友善，在学习和工作中均深受同事信任。`,
      en: `Graduated in Architecture from Tongji University, continued design studies at Rhode Island School of Design, 
      and completed computer science coursework at Brown University. During school, 
      explored cross-disciplinary work across human-computer interaction, computational design, 
      and physics-based simulation, earning strong academic results and multiple awards. 
      Currently works on Sasaki's Boston R&D team as a software engineer, focusing on web frontend and backend architecture, 
      data structures, and algorithmic optimization. Self-driven, detail-oriented, patient in communication, and trusted by colleagues and collaborators.`,
    },
    // {
    //   zh: "todo",
    //   en: "todo",
    // },
  ],
  experience: [
    {
      title: { zh: "软件工程师 Web全栈", en: "Software Engineer" },
      company: "美国SASAKI规划事务所 Sasaki Associates, Inc.",
      meta: ["2023.11 - 2025.11 波士顿 全职", "2026.1 - 至今 远程"],
      links: [
        { label: { zh: "员工信息", en: "Employee Info" }, href: "https://www.sasaki.com/people/george-xu/" },
      ],
      bullets: [

        {
          zh: `在 Dashi 多客户网站平台升级中，落地客户数据接入、站点配置与云端服务相关模块，将原静态前端站点迭代为可复用的全栈应用；完善核心库维护与自动化部署流程，加快新客户站点上线。`,
          en: `Delivered client data integration, site configuration, and cloud-backed service modules for the Dashi multi-client website platform, evolving the original static frontend into a reusable full-stack application; improved package maintenance and deployment automation to speed up new client-site launches.`,
        },
        {
          zh: `针对 Dashi 页面数据加载与计算负担问题，优化前后端数据处理流程，减少页面端重复计算，将首页渲染所需时间从2分钟降低至20秒。定位性能瓶颈，调整数据结构与存储逻辑，并支持设计师分析用户行为。`,
          en: `Improved Dashi's frontend and backend data flow to address page-loading and client-side computation issues; identified performance bottlenecks, adjusted data structures and storage logic, and supported user behavior analysis.`,
        },
        {
          zh: `优化 Office Shift Pro 自动化建筑平面生成工具，提高居住平面方案生成效率；重构核心贪心算法流程，调整局部搜索与结果评估逻辑，降低无效计算。`,
          en: `Improved Office Shift Pro, an automated floor-plan generation tool, to generate office layout options more efficiently. Refactored the core greedy-algorithm workflow, local search logic, and result-evaluation steps to reduce unnecessary computation.`,
        },
        {
          zh: `主导开发内部数据可视化图表库，为项目提供可复用的动态图表、Tooltip 与数据展示组件；根据火焰图，优化地图加载速度。统一数据结构并优化渲染缓存，减少重复计算。`,
          en: `Led development of an internal data-visualization chart library with reusable animated charts, tooltips, and data-display components; standardized data models and optimized rendering cache behavior to reduce repeated computation.`,
        },
        {
          zh: `落地内部 UI 设计系统重构，支持跨项目复用组件样式与设计规范；中心化设计 Token，完善样式与类型输出，并支持版本迭代与包发布流程。`,
          en: `Delivered an internal UI design-system refactor to support reusable component styling and design standards across projects; centralized design tokens, improved style and type outputs, and supported versioning and package-release workflows.`,
        },
        {
          zh: "开发 Rhino / CAD 自动化数据处理脚本，支持城市规划团队快速生成点云文件并批量标注几何属性；将 CSV 数据转换为 DWG 点云，并为 CAD 几何对象写入属性信息。",
          en: "Developed Rhino/CAD automation scripts to help urban planning teams generate point-cloud files and batch-annotate geometry attributes; converted CSV data into DWG point clouds and wrote metadata onto CAD geometry."
        }
      ],
    },
    {
      title: { zh: "参数化设计师", en: "Computational Designer" },
      company: {zh: "华东建筑设计研究院", en: "East China Architecture Design and Research Institute"},
      meta: ["2020.08 - 2021.05", "上海", "实习"],
      bullets: [
        {
          zh: `参与华东院国际设计中心大型公共建筑室内设计工作，负责核心公共空间的空间形态推敲、方案表达与汇报材料整理。`,
          en: "Contributed to large-scale public-building interior design at ECADI's International Design Center, supporting spatial design studies, design communication, and presentation materials for key public spaces.",
        },
        {
          zh: `使用参数化建模工具与 Python 脚本进行曲面建模和方案迭代，并输出渲染图、分析图与汇报文本。`,
          en: "Used parametric modeling tools and Python scripts for surface modeling and design iteration, producing renderings, diagrams, and presentation materials.",
        },
      ],
    },
  ],
  education: [
    {
      title: { zh: "罗德岛设计学院", en: "Rhode Island School of Design" },
      meta: { zh: "设计学硕士 罗德岛 美国", en: "Master of Design RI,USA" },
      time: { zh: "2021.07 - 2023.06", en: "2021.07 - 2023.06" },
    },
    {
      title: { zh: "布朗大学", en: "Brown University" },
      meta: {
        zh: "计算机科学 跨校选课 罗德岛 美国",
        en: "Computer Science cross-registration RI,USA",
      },
    },
    {
      title: { zh: "同济大学", en: "Tongji University" },
      meta: {
        zh: "建筑学学士 德语强化班 上海",
        en: "B.Arch, Deutschintensivkurs Shanghai,China",
      },
      time: { zh: "2014.09 - 2020.06", en: "2014.09 - 2020.06" },
    },
    {
      title: { zh: "上海七宝中学", en: "Qibao High School" },
      meta: {
        zh: "高中 上海",
        en: "High School Shanghai, China",
      },
      time: { zh: "2011.09 - 2014.06", en: "2011.09 - 2014.06" },
    },
  ],
  skillGroups: [
    {
      title: { zh: "AI 工程", en: "AI Eng" },
      items: [
        { zh: "Agent开发(Harness) 提示词工程 RAG", en: "Ai Agent Dev RAG  Prompt Eng" },
        { zh: "PyTorch LoRA 微调", en: "PyTorch Model Optimization"}
      ],
    },
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
        { zh: "Go Python/FastAPI Node.js/Nest.js GraphQL RESTAPI" },
        { zh: "Firebase  Google_Cloud" },
        { zh: "PostgreSQL  MongoDB Chroma向量", en: "PostgreSQL MongoDB Chroma" },
      ],
    },
    {
      title: { zh: "游戏与 3D 空间设计开发", en: "Design & 3D" },
      items: [
        { zh: "Figma / Adobe XD / PS / AI / ID / PR" },
        { zh: "Unity C# / C++ WASM cuda / Rhino GH" },
      ],
    },
    {
      title: { zh: "AI 工具", en: "AI Tools" },
      items: [{ zh: "Codex / GitHub Copilot / ComfyUI" }],
    },
  ],
  projects: [
    {
      title: { 
        zh: "简历文档 AI Agent 编辑器",
        en: "Resume AI Agent Editor" 
      },
      meta: { 
        zh: `基于本地部署的 Qwen 模型，构建面向简历改写、排版优化、视觉美化与多语言转换的开源 AI Agent。
        采用 Plan-and-Execute 架构编排 LLM 工作流，将用户指令拆分为意图识别、上下文选择、Patch 生成、规则校验与失败修复，提升 AI DOM 编辑的稳定性与可观测性。
        集成 Web UI、本地日志、用户状态持久化与基于案例文件的 RAG 检索，支持快速迭代并导出 PDF。`, 
        en: `Built an open-source AI agent on top of a locally deployed Qwen model for resume rewriting, layout optimization, visual polish, and multilingual conversion.
        Implemented a Plan-and-Execute LLM pipeline that decomposes user instructions into intent recognition, context selection, patch generation, rule validation, and failure recovery, improving stability and observability of AI-driven DOM editing.
        Integrated a Web UI, local logging, user-state persistence, and case-file RAG retrieval, enabling rapid iteration and PDF export.` },
      links: [
        // {
        //   label: { zh: "在线演示", en: "Live Demo" },
        //   href: "https://george-yi-hao-xu.github.io/mesh3d",
        // },
        {
          label: { zh: "源代码", en: "Source Code" },
          href: "https://github.com/george-yi-hao-xu/resume-agent",
        },
      ],
    },
    {
      title: { 
        zh: "在线 AI 对战棋类网站", 
        en: "AI Board-Game Web App" 
      },
      meta: { 
        zh: `基于 Minimax 算法实现五子棋与屏风四子棋的在线 AI 对弈，使用遗传算法优化评估函数权重，支持本地控制台游玩，并部署为可交互的 Web 应用。`, 
        en: `Built an AI board-game engine for Gomoku and Connect Four using Minimax search with heuristic evaluation. Optimized evaluation weights via a genetic algorithm, and exposed it through both a local console client and an interactive web application.` },
      links: [
        // {
        //   label: { zh: "在线演示", en: "Live Demo" },
        //   href: "https://george-yi-hao-xu.github.io/mesh3d",
        // },
        {
          label: { zh: "源代码", en: "Source Code" },
          href: "https://github.com/george-yi-hao-xu/resume-agent",
        },
      ],
    },
    {
      title: { 
        zh: "基于动力学的空间找形设计", 
        en: "Physics-Based Form-Finding" 
      },
      meta: { 
        zh: `基于点云动力学模拟实现空间找形的开源客户端软件，并用 CUDA C++、Raylib 与 WASM 完成可视化和 Web Demo 部署。`, 
        en: "Built a point-cloud form-finding simulation with CUDA C++, Raylib, and a WASM web demo." },
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
      title: { zh: "美国宇航局月球车竞赛", en: "NASA Rover Challenge" },
      meta: {
        zh: `为 NASA HoloLens 竞赛项目开发宇航员 UI，使用 Unity / C# 实现采样、地图引导与定位功能。`,
        en: "Built astronaut UI features for a NASA HoloLens project in Unity/C#, including sampling, map guidance, and positioning.",
      },
      links: [
        { label: { zh: "具体信息", en: "Detailed Timeline"}, href: "https://www.meijaydesign.com/work/nasa-suits-challenge" },
      ],
    }
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
      level: { zh: "流利 专业交流/文献阅读", en: "Professional" },
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
