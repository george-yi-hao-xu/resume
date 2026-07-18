export const resume_data_cn_domestic = {
  pageTitle: "许易豪 - 国内中文简历",
  description: "许易豪面向国内职场的软件工程师中文简历。",
  name: "许易豪",
  role: "Web全栈 AI应用 软件工程师",
  labels: {
    contactAria: "联系信息",
    profile: "个人优势",
    education: "教育背景",
    skills: "专业技能",
    experience: "职业经历",
    workProjects: "工作项目",
    projects: "学术项目",
    languages: "语言",
    workContent: "工作内容",
    projectDescription: "项目描述",
  },
  contacts: [
    { label: "电话", value: "18701928010" },
    // { label: "出生", value: "1996.04" },
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
    `2020年毕业于同济大学，后赴美国罗德岛设计学院攻读硕士学位，同时于布朗大学学习计算机课程。
    在校期间，探索人机交互、计算设计、动力学模拟等方向，成绩优异，并在国内外获得多项学科奖项。
    毕业后，顺利就职于顶尖规划设计公司 Sasaki波士顿总部研发部门，负责 Web 前后端生态架构开发，数据结构与算法优化等。
    具备极强的学习自驱力与跨学科整合能力，做事谨慎细致，沟通耐心友善，在学习和工作中均深受同事信任。`,
  ],
  education: [
    {
      title: "罗德岛设计学院",
      meta: "设计学硕士",
      location: "普罗维登斯 罗德岛 美国",
      time: "2021.07 - 2023.06",
    },
    {
      title: "布朗大学",
      meta: "计算机科学 (选修)",
      location: "普罗维登斯 罗德岛 美国",
      time: "2022.09 - 2022.12",
    },
    {
      title: "同济大学",
      meta: "建筑学学士 (德语强化班)",
      location: "上海 中国",
      time: "2014.09 - 2020.06",
    },
    {
      title: "上海七宝中学",
      meta: "高中",
      location: "上海 中国",
      time: "2011.09 - 2014.06",
    },
  ],
  skillGroups: [
    {
      title: "AI 工程",
      items: ["AI Agent 开发", "Harness", "提示词工程", "RAG", "PyTorch/LoRA 微调"],
    },
    {
      title: "AI 工具",
      items: ["Codex", "GitHub Copilot", "ComfyUI"],
    },
    {
      title: "Web 前端 工程化",
      items: [ "HTML", "CSS/SCSS", "JavaScript/TypeScript", "React/React Native", "Node.js", "Jest", "Chromatic", "GitHub Actions/CI/CD", ],
    },
    {
      title: "Web 后端 数据库",
      items: [ "Go", "Python/FastAPI", "Node.js/Nest.js", "GraphQL", "REST API", "Firebase", "Google Cloud", "PostgreSQL", "MongoDB", "Chroma 向量数据库", ],
    },
    {
      title: "3D 开发",
      items: [ "Unity/C#", "C++/WASM/CUDA" ],
    },
    {
      title: "设计工具",
      items: ["Rhino/Grasshopper", "Figma", "Photoshop", "Illustrator", "InDesign", "Premiere",]
    },
  ],
  experience: [
    {
      company: "美国Sasaki联合设计事务所 研发部门",
      title: "软件工程师 Web全栈",
      meta: ["2023.11 - 至今", "美国麻州波士顿", "全职"],
      bullets: [
        "核心网站开发与维护: 负责 Web 前后端网站架构维护开发、数据处理、AI Agent功能、组件库与自动化工程体系建设，支持多客户平台和内部工具交付。包括政府工程数据管理平台、智能建筑改造平台等",
        "与设计、规划和开发团队协作，将数据可视化、设计系统和云端服务能力落地到实际项目。",
      ],
      links: [
        {
          label: "员工信息",
          href: "https://www.sasaki.com/people/george-xu/",
        },
      ],
    },
    {
      company: "ActEarn Inc",
      title: "AI 客户端工程师",
      meta: ["2023.08 - 2023.11", "美国加州旧金山", "实习"],
      bullets : [
        "使用 React Native 开发 AI 手机端社区分析应用，与后端工程师协作接入基于 GPT 大模型的内容分析服务，实现聊天室及论坛热点话题、观点和趋势分析结果的结构化展示，并完成 AI 对话、消息交互、语音输入、异步数据处理及移动端体验优化。"
      ]
    },
    {
      company: "华东建筑设计研究院 国际设计中心",
      title: "参数化设计师",
      meta: ["2020.08 - 2021.05", "上海 中国", "实习"],
      bullets: [
        "参与大型公共建筑室内设计与方案表达，承担参数化建模、空间形态推敲和汇报材料输出。",
      ],
      links: [],
    },
  ],
  workProjects: [
    {
      title: "Dashi 市政数据管理平台",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 远程"],
      summary: "大型交互式协作式市政数据管理平台，包含图表、地图、收益统计，以及存储、用户权限、多场景版本等功能。",
      description: [
        "Web前端开发：熟练使用前端React.js框架与MobX状态管理，升级原静态前端站点迭代为可复用的全栈应用；",
        "Web后端开发：熟悉Node.js与Google云服务云端数据库生态。",
        "项目管理：熟悉pnpm monorepo架构，引入Changeset完善核心库版本迭代管理与GitHub Workflow自动化部署流程，加速新客户站点上线。",
        "优化数据加载与js计算负担问题、前后端数据处理流程，大幅降低首页渲染耗时。",
        "主导开发内部数据可视化 d3.js 图表库，为项目提供可复用的动态图表、Tooltip 与数据展示组件；根据火焰图优化 Mapbox 地图加载速度，统一数据结构并优化渲染缓存。",
        "与政府部门对接，深入理解市政地产行业诉求，根据客户需求，完善整体产品逻辑"
      ],
    },
    {
      title: "Office Shift Pro AI智能建筑改造系统",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职"],
      summary: "利用人工智能技术，基于建筑参数等约束条件，全自动生成建筑改造平面，计算工程、金融指标，将办公空间改变为居住场所",
      description: [
        "算法开发：重构核心算法流程，优化贪心算法，通过剪枝等优化手段，调整局部搜索与结果评估逻辑，稳定生成结果。",
        "采用函数式编程思想，重构项目结构，实现Web Worker多线程并发，提升计算速度。",
        "深入理解公司内部各部门需求，结合公司业务，搭建符合公司需求的智能产品。"
      ]
    },
    {
      title: "Strategies UI和tokens组件库",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职"],
      summary: "搭建团队核心的样式、组件库，以保证公司产品的统一设计语言以及稳定的交互形式",
      description: [
        "主导内部 UI 设计系统重构，熟悉pnpm monorepo多npm包管理 与 lerna 快速版本发布迭代。熟练掌握TypeScript特性，维护优质的React组件库与样式Token库。",
        `负责核心组件与 npm 包的自动化测试与质量保障工作，设计并完善基于 Jest、Chromatic 与 GitHub Actions 的 CI/CD 测试流水线，
          覆盖单元测试、UI 回归、跨平台构建与性能回归验证；对测试失败进行根因分析、缺陷追踪与修复验证，推动发布前质量门禁，降低回归风险。`,
      ],
    },
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
      title: "美国 NASA 宇航局月球车竞赛",
      meta: "与罗德岛设计学院工业设计系、布朗大学计算机系学术合作，基于微软HoloLens平台，开发宇航员 UI。使用 Unity 平台 通过开发C#， 实现月球表面采样、地图引导、路径规划等功能。",
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
