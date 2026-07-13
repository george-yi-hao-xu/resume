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
      en: `Tongji B.Arch graduate with design studies at RISD and CS coursework at Brown. 
      Explored HCI, computational design, and physics simulation, earning strong results and awards. 
      Software engineer on Sasaki's Boston R&D team, focused on full-stack web architecture, 
      data structures, and algorithm optimization. Self-driven, detail-oriented, and trusted in collaboration.`,
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
          zh: `在 Dashi 多客户网站平台升级中，落地客户数据接入、站点配置与云端服务相关模块，升级原静态前端站点迭代为可复用的全栈应用；完善核心库维护与自动化部署流程，加速新客户站点上线。
          优化数据加载与计算负担问题、前后端数据处理流程，大幅降低首页渲染耗时。定位性能瓶颈，调整数据结构与存储逻辑，并支持设计师分析用户行为。`,
          en: `Built data integration, site configuration, and cloud service modules for Dashi, turning static client sites into a reusable full-stack platform. 
          Improved package maintenance, deployment automation, data flow, and storage logic to speed launches, reduce load time, and support user analysis.
          `,
        },
        {
          zh: `优化 Office Shift Pro 自动化建筑平面生成工具，重构核心贪心算法流程，调整局部搜索与结果评估逻辑，提升客户端交付效率。`,
          en: `Improved Office Shift Pro, an automated floor-plan tool, by refactoring greedy search, local search, and result evaluation to reduce computation and speed delivery.`,
        },
        {
          zh: `主导开发内部数据可视化d3.js图表库，为项目提供可复用的动态图表、Tooltip 与数据展示组件；根据火焰图，优化Mapbox地图加载速度。
          统一数据结构, 优化渲染缓存。主导内部 UI 设计系统重构，支持跨项目复用组件样式与设计规范；完善样式与类型输出、版本迭代与npm包发布流程。`,
          en: `Led an internal D3 chart library with reusable animated charts, tooltips, and data-display components. 
          Standardized data models, optimized render caching, and refactored the UI design system with shared tokens, typed outputs, versioning, and npm releases.`,
        },
        {
          zh: `负责核心组件与 npm 包的自动化测试与质量保障工作，设计并完善基于 Jest、Chromatic 与 GitHub Actions 的 CI/CD 测试流水线，覆盖单元测试、UI 回归、跨平台构建与性能回归验证；对测试失败进行根因分析、缺陷追踪与修复验证，推动发布前质量门禁，降低回归风险。编写 Python / Node.js 脚本与内部工具优化测试流程，提升团队效率。`,
          en: `Owned QA automation for core libraries and npm packages. Built Jest, Chromatic, and GitHub Actions pipelines for unit, UI regression, build, and performance checks; triaged failures and added Python/Node tools to streamline testing.`,
        },
        {
          zh: "开发 Rhino / CAD 自动化数据处理脚本，支持城市规划团队快速生成点云文件并批量标注几何属性；将 CSV 数据转换为 DWG 点云，并为 CAD 几何对象写入属性信息。",
          en: "Built Rhino/CAD automation scripts for point-cloud generation, geometry annotation, CSV-to-DWG conversion, and CAD metadata writing."
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
          en: "Supported large public-building interior design at ECADI, focusing on spatial studies, design communication, and presentation materials.",
        },
        {
          zh: `使用参数化建模工具与 Python 脚本进行曲面建模和方案迭代，并输出渲染图、分析图与汇报文本。`,
          en: "Used parametric modeling and Python for surface modeling, iteration, renderings, diagrams, and presentations.",
        },
      ],
    },
  ],
  education: [
    {
      title: { zh: "罗德岛设计学院", en: "Rhode Island School of Design" },
      meta: { zh: "设计学硕士 罗德岛 美国", en: "M.Des, RI, USA" },
      time: { zh: "2021.07 - 2023.06", en: "2021.07 - 2023.06" },
    },
    {
      title: { zh: "布朗大学", en: "Brown University" },
      meta: {
        zh: "计算机科学 跨校选课 罗德岛 美国",
        en: "CS cross-registration, RI, USA",
      },
    },
    {
      title: { zh: "同济大学", en: "Tongji University" },
      meta: {
        zh: "建筑学学士 德语强化班 上海",
        en: "B.Arch, Shanghai, China",
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
        { zh: "Agent开发(Harness) 提示词工程 RAG", en: "AI Agents RAG Prompt Eng" },
        { zh: "PyTorch LoRA 微调", en: "PyTorch LoRA" }
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
      title: { zh: "测试开发", en: "Test Development" },
      items: [
        { zh: "Jest / Chromatic / pytest / GitHub Actions CI/CD" },
        { zh: "CUDA / GPU 性能基准测试与结果分析", en: "CUDA/GPU Benchmarking" },
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
        en: `Built an open-source local-Qwen AI agent for resume rewriting, layout optimization, visual polish, and multilingual conversion.
        Implemented a Plan-and-Execute pipeline for intent recognition, context selection, patch generation, validation, and recovery.
        Added Web UI, logging, state persistence, case-file RAG, rapid iteration, and PDF export.` },
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
        en: `Built AI engines for Gomoku and Connect Four with Minimax search and heuristic evaluation. Tuned weights with a genetic algorithm and shipped console and web clients.` },
      links: [
        // {
        //   label: { zh: "在线演示", en: "Live Demo" },
        //   href: "https://george-yi-hao-xu.github.io/mesh3d",
        // },
        {
          label: { zh: "源代码", en: "Source Code" },
          href: "https://github.com/george-yi-hao-xu/connect_4",
        },
      ],
    },
    {
      title: { 
        zh: "基于动力学的空间找形设计", 
        en: "Physics-Based Form-Finding" 
      },
      meta: { 
        zh: `使用 CUDA C++ 实现基于点云动力学的空间找形开源软件，在 GPU 上完成并行数值模拟与高性能计算；设计基准测试验证 CUDA 内核的正确性与加速比，并通过 Raylib 与 WASM 完成可视化与 Web Demo 部署。`, 
        en: "Built a CUDA C++ point-cloud form-finding simulator with parallel solvers, benchmark validation, Raylib visualization, and a WASM web demo." },
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
        en: "Built Unity/C# astronaut UI features for NASA HoloLens, including sampling, map guidance, and positioning.",
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
