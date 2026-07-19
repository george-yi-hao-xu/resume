export const resume_data_cn_domestic = {
  pageTitle: "许易豪 - 国内中文简历",
  description: "许易豪面向国内职场的软件工程师中文简历。",
  name: "许易豪",
  role: "软件工程师 - Web全栈 AI应用",
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
    在校期间，探索人工智能、人机交互等方向，成绩优异，并在国内外获得多项学科奖项。
    毕业后，顺利就职于顶尖规划设计公司 Sasaki波士顿总部研发部门，负责AI应用开发、 Web 前后端开发、算法优化等。
    具备极强的学习自驱力、自学能力与跨学科整合能力，熟悉敏捷开发，亦可胜任信息管理、系统维护工作。做事谨慎细致，沟通耐心友善，在学习和工作中均深受同事信任。`,
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
      time: "2022.09 - 2023.06",
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
      title: "AI 应用开发",
      items: ["AI Agent 开发", "Harness", "提示词工程", "RAG", "PyTorch/LoRA 微调"],
    },
    {
      title: "AI 工具",
      items: ["Codex", "GitHub Copilot", "ComfyUI"],
    },
    {
      title: "Web 前端",
      items: [ "HTML", "CSS/SCSS", "JavaScript/TypeScript", "React/React Native", "Jest", "GitHub Actions/CI/CD", ],
    },
    {
      title: "Web 后端",
      items: [ "Python", "Node.js", "Go", "GraphQL", "REST API", "G Cloud", "PostgreSQL", "MongoDB", "Chroma", ],
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
      title: "软件工程师 - Web全栈 AI工程",
      meta: ["2023.11 - 至今", "美国麻州波士顿", "全职"],
      bullets: [
        "负责 AI 与算法能力研发，将约束参数、工程指标和业务规则转化为可计算逻辑；优化自动方案生成、局部搜索、结果评估与筛选流程，提升复杂设计问题的计算效率和结果可解释性。",
        "负责 Web 前端工程开发，基于 React 构建复杂交互界面、数据可视化组件和可复用 UI 模块；通过组件化、缓存与异步计算优化页面性能和用户体验。",
        "负责 Web 后端与云端服务开发，完成数据处理、API 接入、权限配置、服务部署和自动化测试；结合 CI/CD 流程提升系统稳定性与交付效率。",
        "与政府、企业、设计和研发团队协作，梳理跨专业业务需求并拆解为可实现的产品功能；将算法、数据可视化和工程化能力落地到客户项目，支持方案分析、汇报展示和持续迭代。",
      ],
      // links: [
      //   {
      //     label: "员工信息",
      //     href: "https://www.sasaki.com/people/george-xu/",
      //   },
      // ],
    },
    {
      company: "ActEarn Inc",
      title: "AI 客户端工程师",
      meta: ["2023.08 - 2023.11", "美国加州旧金山", "实习"],
      bullets : [
        "使用 React Native 开发 AI 手机端社区分析应用，完成聊天室、论坛热点和观点趋势分析等核心界面。",
        "协作接入基于 GPT 的内容分析服务，支持 AI 对话、语音输入、异步数据处理和移动端体验优化。"
      ]
    },
    {
      company: "华东建筑设计研究院 国际设计中心",
      title: "参数化设计师",
      meta: ["2020.08 - 2021.05", "上海 中国", "实习"],
      bullets: [
        "参与大型公共建筑室内设计与方案表达，负责空间形态推敲、参数化建模和设计迭代。",
        "使用 Rhino / Grasshopper 辅助曲面建模、几何分析和方案比选，输出汇报图纸与演示材料。"
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
      summary: "大型企业级 SaaS: 协作式市政数据管理平台，包含图表、地图、收益统计，及存储、用户权限、多场景版本等功能",
      description: [
        "Web前端开发：熟练使用前端React.js框架与MobX状态管理，升级原静态前端站点迭代为可复用的全栈应用；主导开发内部数据可视化 d3.js 图表库，为项目提供可复用的动态图表、Tooltip 与数据展示组件；",
        "Web后端开发：熟悉Node.js与Google云服务云端数据库生态。",
        "项目管理：熟悉pnpm monorepo架构，引入Changeset完善核心库版本迭代管理与GitHub Workflow自动化部署流程，加速新客户站点上线。",
        "性能优化：优化数据加载与js计算负担问题、前后端数据处理流程，大幅降低首页渲染耗时。根据火焰图优化 Mapbox 地图加载速度，统一数据结构并优化渲染缓存。",
        "部门合作：与政府部门对接，深入理解市政地产行业诉求，根据客户需求，完善整体产品逻辑"
      ],
    },
    {
      title: "Office Shift Pro - AI智能建筑改造系统",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职"],
      summary: "AI算法产品: 基于建筑参数等约束条件，自动生成建筑改造平面，计算工程、金融指标，将办公空间改变为居住场所",
      description: [
        "算法开发：重构核心算法流程，优化贪心算法，通过剪枝、局部搜索及结果评估机制提升方案生成质量与稳定性。",
        "性能优化：采用函数式编程思想重构项目架构，引入 Web Worker 多线程并发计算，大幅提升复杂建筑方案生成效率。",
        "产品开发：参与建筑参数配置、平面方案生成、工程与金融指标计算及结果可视化等核心模块开发。",
        "业务落地：深入理解建筑设计、规划及商业分析团队需求，将业务流程抽象为智能化产品能力，推动 AI 建筑改造平台落地。"
      ]
    },
    {
      title: "Wanderflow - AI 论坛智能分析平台",
      company: "ActEarn",
      role: "AI 客户端工程师",
      meta: ["2023.07 - 2023.11 旧金山 实习"],
      summary: "AI 知识平台 - 通过结合 LLM 与搜索结果，对帖子内容进行自动分析、事实溯源及交互式问答，帮助用户快速理解讨论背景与关键信息。",
      description: [
        "AI 功能开发：与后端协作，对接 OpenAI GPT 分析服务，实现帖子内容智能总结、观点提炼及上下文分析。",
        "可解释性展示：开发 AI 分析结果与引用来源展示模块，结合搜索结果提供可追溯的信息来源，提升分析可信度。",
        "智能交互：负责 React Native 客户端开发，实现 AI 对话、分析详情及交互式信息展示等核心功能。"
      ]
    },
    {
      title: "Strategies UI和tokens组件库",
      company: "Sasaki",
      role: "软件工程师 Web全栈",
      meta: ["2023.11 - 2025.11 波士顿 全职"],
      summary: "前端基建 - 搭建团队核心的样式、组件库，以保证公司产品的统一设计语言以及稳定的交互形式",
      description: [
        "主导内部 UI 设计系统重构，熟悉pnpm monorepo多npm包管理 与 lerna 快速版本发布迭代。熟练掌握TypeScript特性，维护优质的React组件库与样式Token库。",
        `负责核心组件与 npm 包的自动化测试与质量保障工作，设计并完善基于 Jest、Chromatic 与 GitHub Actions 的 CI/CD 测试流水线，
          覆盖单元测试、UI 回归、跨平台构建与性能回归验证；对测试失败进行根因分析、缺陷追踪与修复验证，推动发布前质量门禁，降低回归风险。`,
      ],
    },
  ],

  // 学术项目
  projects: [
    {
      title: "简历文档 AI Agent 编辑器",
      summary:
        "面向简历内容改写、排版优化与多语言转换的本地 AI Agent 工具。",
      description: [
        "Agent 架构：基于本地部署的 Qwen 大语言模型，采用 Plan-and-Execute 架构编排 LLM 工作流，将用户指令拆分为意图识别、上下文选择、Patch 生成、规则校验与失败修复，提升 AI DOM 编辑的稳定性与可观测性。",
        "AI 能力：集成基于案例文件的 RAG 检索，支持简历内容改写、多语言转换、排版优化与视觉美化，增强模型对目标岗位和优秀案例的上下文理解。",
        "工程实现：开发 Web UI、本地日志、与 PDF 导出功能，支持工作流调试、错误追踪和功能快速迭代。",
      ],
      // links: [
      //   {
      //     label: "源代码",
      //     href: "https://github.com/george-yi-hao-xu/resume-agent",
      //   },
      // ],
    },
    {
      title: "在线 AI 对战棋类网站",
      summary:
        "支持多种棋类 AI 对战与 Web 部署的经典人工智能算法实践项目。",
      description: [
        "AI 算法：基于 Minimax 搜索实现五子棋与屏风四子棋 AI，并通过Alpha-Beta剪枝减少无效搜索，提高决策效率。",
        "策略优化：使用遗传算法自动优化评估函数权重，迭代棋局评分策略，提升 AI 的对弈表现与稳定性。",
        "产品开发：支持本地控制台运行，并封装为可交互的 Web 应用，实现在线棋盘渲染、落子反馈与人机对战",
      ],
      // links: [
      //   {
      //     label: "源代码",
      //     href: "https://github.com/george-yi-hao-xu/connect_4",
      //   },
      // ],
    },
    {
      title: "基于动力学的空间找形设计",
      summary:
        "面向空间结构形态生成的 GPU 并行数值模拟与三维可视化工具。",
      description: [
        "GPU 并行计算：使用 CUDA C++ 实现基于点云动力学的空间找形算法，将节点受力、位置更新与约束计算并行化，在 GPU 上完成高性能数值模拟。",
        "性能验证：设计 CPU 与 GPU 基准测试，验证 CUDA Kernel 的计算正确性，并分析不同数据规模下的运行时间、加速比与并行计算性能。",
        "可视化与部署：基于 Raylib 实现三维结构实时渲染与交互，并通过 WebAssembly 编译和部署在线 Web Demo。",
      ],
      // links: [
      //   {
      //     label: "在线演示",
      //     href: "https://george-yi-hao-xu.github.io/mesh3d",
      //   },
      //   {
      //     label: "源代码",
      //     href: "https://github.com/george-yi-hao-xu/mesh3d",
      //   },
      // ],
    },
    {
      title: "美国 NASA 宇航局月球车竞赛",
      summary:
        "基于 Microsoft HoloLens 的宇航员增强现实交互界面与月球任务辅助系统。",
      description: [
        "跨学科合作：与罗德岛设计学院工业设计系及布朗大学计算机系团队合作，参与 NASA 面向月球任务场景的宇航员辅助系统设计与开发",
        "XR 应用开发：基于 Microsoft HoloLens 与 Unity 平台，使用 C# 开发增强现实交互界面，将任务信息叠加至宇航员的真实视野",
        "功能实现：参与月球表面采样、地图导航与路径规划等功能开发，优化宇航员在复杂任务环境中的信息获取与操作流程",
      ],
      // links: [
      //   {
      //     label: "具体信息",
      //     href: "https://www.meijaydesign.com/work/nasa-suits-challenge",
      //   },
      // ],
    },
  ],
  
  languages: [
    { name: "汉语", level: "母语" },
    { name: "英语", level: "流利 专业交流/文献阅读" },
    { name: "德语", level: "中级" },
    { name: "法语", level: "中级" },
  ],
};
