export const resume_data_cn_domestic = {
  pageTitle: "许易豪 - 国内中文简历",
  description: "许易豪面向国内职场的软件工程师中文简历。",
  name: "许易豪",
  role: "软件工程师 UI/UX设计 XR开发",
  labels: {
    contactAria: "联系信息",
    profile: "个人优势",
    education: "教育背景",
    skills: "专业技能",
    experience: "职业经历",
    workProjects: "工作项目",
    projects: "项目经历",
    languages: "语言",
    workContent: "工作内容",
    projectDescription: "项目描述",
  },
  contacts: [
    { label: "电话", value: "18701928010" },
    { label: "出生", value: "1996.04" },
    { label: "所在地", value: "中国 上海" },
    {
      label: "邮箱",
      value: "xuyihao342@outlook.com",
      href: "mailto:xuyihao342@outlook.com",
    },
    {
      label: "GitHub",
      value: "github.com/george-yi-hao-xu",
      href: "https://github.com/george-yi-hao-xu",
    },
  ],
  profile: [
    "2020年毕业于同济大学，后赴美国罗德岛设计学院攻读硕士学位，同时于布朗大学学习计算机课程。在校期间，探索人机交互、计算设计、动力学模拟等方向，成绩优异，并在国内外获得多项学科奖项。毕业后，顺利就职于顶尖规划设计公司 Sasaki规划事务所 波士顿总部研发部门，负责 Web 前后端生态架构开发，数据结构与算法优化等。具备极强的学习自驱力与跨学科整合能力，做事谨慎细致，沟通耐心友善，在学习和工作中均深受同事信任。",
  ],
  education: [
    {
      title: "罗德岛设计学院",
      meta: "设计学硕士 罗德岛 美国",
      time: "2021.07 - 2023.06",
    },
    {
      title: "布朗大学",
      meta: "计算机科学 跨校选课 罗德岛 美国",
      time: "",
    },
    {
      title: "同济大学",
      meta: "建筑学学士 德语强化班 上海",
      time: "2014.09 - 2020.06",
    },
    {
      title: "上海七宝中学",
      meta: "高中 上海",
      time: "2011.09 - 2014.06",
    },
  ],
  skillGroups: [
    {
      title: "AI 工程",
      items: ["Agent开发(Harness) 提示词工程 RAG", "PyTorch LoRA 微调"],
    },
    {
      title: "Web 前端工程化",
      items: [
        "HTML CSS/SCSS JavaScript/TypeScript",
        "React/ReactNative Node.js",
        "Jest / Chromatic / GitHub CI/CD",
      ],
    },
    {
      title: "Web 后端与数据库",
      items: [
        "Go Python/FastAPI Node.js/Nest.js GraphQL RESTAPI",
        "Firebase Google_Cloud",
        "PostgreSQL MongoDB Chroma向量",
      ],
    },
    {
      title: "测试开发",
      items: [
        "Jest / Chromatic / pytest / GitHub Actions CI/CD",
        "CUDA / GPU 性能基准测试与结果分析",
      ],
    },
    {
      title: "游戏与 3D 空间设计开发",
      items: [
        "Figma / Adobe XD / PS / AI / ID / PR",
        "Unity C# / C++ WASM cuda / Rhino GH",
      ],
    },
    {
      title: "AI 工具",
      items: ["Codex / GitHub Copilot / ComfyUI"],
    },
  ],
  experience: [
    {
      company: "美国SASAKI规划事务所 Sasaki Associates, Inc.",
      title: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职", "2026.1 - 至今 远程"],
      bullets: [
        "负责 Web 前后端架构、数据处理、组件库与自动化工程体系建设，支持多客户平台和内部工具交付。",
        "与设计、规划和开发团队协作，将数据可视化、设计系统和云端服务能力落地到实际项目。",
        "开发 Rhino / CAD 自动化脚本，支持点云生成、批量属性标注与 CSV 到 DWG 数据转换。",
      ],
      links: [
        {
          label: "员工信息",
          href: "https://www.sasaki.com/people/george-xu/",
        },
      ],
    },
    {
      company: "华东建筑设计研究院",
      title: "参数化设计师",
      meta: ["2020.08 - 2021.05", "上海", "实习"],
      bullets: [
        "参与大型公共建筑室内设计与方案表达，承担参数化建模、空间形态推敲和汇报材料输出。",
      ],
      links: [],
    },
  ],
  workProjects: [
    {
      title: "Dashi 多客户网站平台与数据可视化系统",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职", "2026.1 - 至今 远程"],
      description:
        "在 Dashi 多客户网站平台升级中，落地客户数据接入、站点配置与云端服务相关模块，升级原静态前端站点迭代为可复用的全栈应用；完善核心库维护与自动化部署流程，加速新客户站点上线。优化数据加载与计算负担问题、前后端数据处理流程，大幅降低首页渲染耗时。定位性能瓶颈，调整数据结构与存储逻辑，并支持设计师分析用户行为。主导开发内部数据可视化 d3.js 图表库，为项目提供可复用的动态图表、Tooltip 与数据展示组件；根据火焰图优化 Mapbox 地图加载速度，统一数据结构并优化渲染缓存。主导内部 UI 设计系统重构，支持跨项目复用组件样式与设计规范；完善样式与类型输出、版本迭代与 npm 包发布流程。",
    },
    {
      title: "Office Shift Pro 自动化建筑平面生成Web工具",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职", "2026.1 - 至今 远程"],
      description:
        "优化 Office Shift Pro 自动化建筑平面生成工具，重构核心贪心算法流程，调整局部搜索与结果评估逻辑，提升客户端交付效率。",
    },
    {
      title: "设计系统",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职", "2026.1 - 至今 远程"],
      description:
        "负责核心组件与 npm 包的自动化测试与质量保障工作，设计并完善基于 Jest、Chromatic 与 GitHub Actions 的 CI/CD 测试流水线，覆盖单元测试、UI 回归、跨平台构建与性能回归验证；对测试失败进行根因分析、缺陷追踪与修复验证，推动发布前质量门禁，降低回归风险。编写 Python / Node.js 脚本与内部工具优化测试流程，提升团队效率。",
    },
    // {
    //   title: "大型公共建筑室内设计项目",
    //   company: "华东建筑设计研究院",
    //   role: "参数化设计师",
    //   meta: ["2020.08 - 2021.05", "上海", "实习"],
    //   description:
    //     "参与华东院国际设计中心大型公共建筑室内设计工作，负责核心公共空间的空间形态推敲、方案表达与汇报材料整理。",
    // },
    // {
    //   title: "参数化建模与 Python 方案迭代",
    //   company: "华东建筑设计研究院",
    //   role: "参数化设计师",
    //   meta: ["2020.08 - 2021.05", "上海", "实习"],
    //   description:
    //     "使用参数化建模工具与 Python 脚本进行曲面建模和方案迭代，并输出渲染图、分析图与汇报文本。",
    // },
  ],
  projects: [
    {
      title: "简历文档 AI Agent 编辑器",
      meta: "基于本地部署的 Qwen 模型，构建面向简历改写、排版优化、视觉美化与多语言转换的开源 AI Agent。采用 Plan-and-Execute 架构编排 LLM 工作流，将用户指令拆分为意图识别、上下文选择、Patch 生成、规则校验与失败修复，提升 AI DOM 编辑的稳定性与可观测性。集成 Web UI、本地日志、用户状态持久化与基于案例文件的 RAG 检索，支持快速迭代并导出 PDF。",
      links: [
        {
          label: "源代码",
          href: "https://github.com/george-yi-hao-xu/resume-agent",
        },
      ],
    },
    {
      title: "在线 AI 对战棋类网站",
      meta: "基于 Minimax 算法实现五子棋与屏风四子棋的在线 AI 对弈，使用遗传算法优化评估函数权重，支持本地控制台游玩，并部署为可交互的 Web 应用。",
      links: [
        {
          label: "源代码",
          href: "https://github.com/george-yi-hao-xu/connect_4",
        },
      ],
    },
    {
      title: "基于动力学的空间找形设计",
      meta: "使用 CUDA C++ 实现基于点云动力学的空间找形开源软件，在 GPU 上完成并行数值模拟与高性能计算；设计基准测试验证 CUDA 内核的正确性与加速比，并通过 Raylib 与 WASM 完成可视化与 Web Demo 部署。",
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
    {
      title: "美国宇航局月球车竞赛",
      meta: "为 NASA HoloLens 竞赛项目开发宇航员 UI，使用 Unity / C# 实现采样、地图引导与定位功能。",
      links: [
        {
          label: "具体信息",
          href: "https://www.meijaydesign.com/work/nasa-suits-challenge",
        },
      ],
    },
  ],
  languages: [
    { name: "汉语", level: "母语" },
    { name: "英语", level: "流利 专业交流/文献阅读" },
    { name: "德语", level: "中级" },
    { name: "法语", level: "中级" },
  ],
};
