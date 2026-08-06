import type { ResumeData } from "./data.types";

export const resumeData = {
    pageTitle: "许易豪 / George Yihao Xu - 中英文简历",
    description: "许易豪 / George Yihao Xu 面向软件工程、AI应用与Web全栈岗位的中英文简历。",
    name: { zh: "许易豪", en: "GEORGE YIHAO XU" },
    role: {
        zh: "软件工程师 - Web全栈 AI应用",
        en: "Software Engineer - Full-Stack Web & AI Applications",
    },
    labels: {
        contactAria: { zh: "联系信息", en: "Contact" },
        profile: { zh: "个人优势", en: "Profile" },
        education: { zh: "教育背景", en: "Education" },
        skills: { zh: "专业技能", en: "Technical Skills" },
        experience: { zh: "职业经历", en: "Professional Experience" },
        workProjects: { zh: "工作项目", en: "Professional Projects" },
        personalProjects: { zh: "个人项目", en: "Personal Projects" },
        languages: { zh: "语言", en: "Languages" },
        workContent: { zh: "工作内容", en: "Responsibilities" },
        projectDescription: { zh: "项目描述", en: "Project Description" },
    },
    visibleSections: {
        profile: { en: false },
        personalProjects: true,
    },
    contacts: [
        { label: { zh: "电话", en: "Phone" }, value: "18701928010" },
        { label: { zh: "出生年月", en: "Birth" }, value: "1996.04" },
        {
            label: { zh: "所在地", en: "Location" },
            value: "中国 上海",
            localizedValue: { zh: "中国 上海", en: "Shanghai, China" },
        },
        {
            label: { zh: "邮箱", en: "Email" },
            value: "xuyihao342@outlook.com",
            href: "mailto:xuyihao342@outlook.com",
        },
        {
            label: { zh: "GitHub", en: "GitHub" },
            value: "github.com/george-yi-hao-xu",
            href: "https://github.com/george-yi-hao-xu",
        },
    ],
    profile: [
        {
            zh: "同济大学建筑学本科、罗德岛设计学院硕士，曾于布朗大学学习计算机课程；现任 Sasaki 波士顿总部研发部软件工程师，负责 AI 应用、Web 全栈开发与算法优化。具备跨学科整合、快速自学、敏捷协作和系统维护能力，做事细致，沟通耐心，深受团队信任。",
            en: "Tongji B.Arch and RISD M.Des graduate with CS coursework at Brown. Software engineer on Sasaki Boston's R&D team, focused on AI applications, full-stack web development, and algorithm optimization. Strong cross-disciplinary problem solver with fast learning, agile collaboration, and system maintenance experience.",
        },
    ],
    education: [
        {
            title: { zh: "罗德岛设计学院", en: "Rhode Island School of Design" },
            meta: { zh: "设计学硕士", en: "Master of Design" },
            location: { zh: "普罗维登斯 罗德岛 美国", en: "Providence, RI, USA" },
            time: { zh: "2021.07 - 2023.06", en: "2021.07 - 2023.06" },
        },
        {
            title: { zh: "布朗大学", en: "Brown University" },
            meta: { zh: "计算机科学 (选修)", en: "Computer Science" },
            location: { zh: "普罗维登斯 罗德岛 美国", en: "Providence, RI, USA" },
            time: { zh: "2022.09 - 2023.06", en: "2022.09 - 2023.06" },
        },
        {
            title: { zh: "同济大学", en: "Tongji University" },
            meta: {
                zh: "建筑学学士 (德语强化班)",
                en: "Bachelor of Architecture, Minor in German",
            },
            location: { zh: "上海 中国", en: "Shanghai, China" },
            time: { zh: "2014.09 - 2020.06", en: "2014.09 - 2020.06" },
        },
        {
            title: { zh: "上海七宝中学", en: "Qibao High School" },
            meta: { zh: "高中", en: "High School" },
            location: { zh: "上海 中国", en: "Shanghai, China" },
            time: { zh: "2011.09 - 2014.06", en: "2011.09 - 2014.06" },
        },
    ],
    skillGroups: [
        {
            title: { zh: "AI 应用开发", en: "AI Dev" },
            items: [
                { zh: "AI Agent 开发", en: "AI Agent Development" },
                { zh: "PyTorch/LoRA 微调", en: "PyTorch/LoRA Fine-Tuning" },
            ],
        },
        {
            title: { zh: "AIGC 工具", en: "AIGC Tools" },
            items: [
                { zh: "Codex", en: "Codex" },
                { zh: "ComfyUI", en: "ComfyUI" },
            ],
        },
        {
            title: { zh: "Web 前端", en: "Web Frontend" },
            items: [
                { zh: "HTML", en: "HTML" },
                { zh: "CSS/SCSS", en: "CSS/SCSS" },
                { zh: "JavaScript/TypeScript", en: "JavaScript/TypeScript" },
                { zh: "React/ReactNative", en: "React/ReactNative" },
            ],
        },
        {
            title: { zh: "Web 后端", en: "Web Backend" },
            items: [
                { zh: "Python", en: "Python" },
                { zh: "Go", en: "Go" },
                { zh: "Node.js", en: "Node.js" },
                { zh: "GraphQL", en: "GraphQL" },
                { zh: "PostgreSQL", en: "PostgreSQL" },
                { zh: "MongoDB", en: "MongoDB" },
            ],
        },
        {
            title: { zh: "3D 开发", en: "3D Dev" },
            items: [
                { zh: "Unity/C#", en: "Unity/C#" },
                { zh: "C++/WASM/CUDA", en: "C++/WASM/CUDA" },
                { zh: "Rhino/Grasshopper", en: "Rhino/Grasshopper" },
                { zh: "AutoCAD Revit ArchiCAD", en: "AutoCAD Revit ArchiCAD" },
            ],
        },
        {
            title: { zh: "UI设计", en: "Design Tools" },
            items: [
                { zh: "Figma", en: "Figma" },
                { zh: "Photoshop", en: "Photoshop" },
                { zh: "Illustrator", en: "Illustrator" },
                { zh: "InDesign", en: "InDesign" },
            ],
        },
    ],
    experience: [
        {
            company: {
                zh: "美国Sasaki联合设计事务所 研发部门",
                en: "Sasaki Associates, R&D Team",
            },
            title: {
                zh: "软件工程师 - Web全栈 AI工程",
                en: "Software Engineer - Web Full-Stack, AI",
            },
            meta: [
                { zh: "2023.11 - 至今", en: "2023.11 - Present" },
                { zh: "美国麻州波士顿", en: "Boston, MA, USA" },
                { zh: "全职", en: "" },
            ],
            bullets: [
                {
                    zh: "负责 AI 与算法研发，优化自动方案生成、局部搜索和结果筛选，提升复杂设计问题的计算效率与可解释性。",
                    en: "Developed AI and algorithm workflows, optimizing automated generation, local search, and result filtering for faster, more explainable design computation.",
                },
                {
                    zh: "负责 React/MobX 客户端开发，搭建数据计算管道、可视化 UI 组件，并优化页面性能和交互体验。",
                    en: "Built React/MobX clients, data pipelines, and visualization UI components while improving page performance and interaction quality.",
                },
                {
                    zh: "负责后端与云服务开发，完善数据处理、权限配置、部署和自动化测试，以 CI/CD 提升稳定性与交付效率。",
                    en: "Developed backend and cloud services for data processing, permissions, deployment, and automated tests, using CI/CD to improve reliability and delivery.",
                },
                {
                    zh: "与政府、企业、产品和设计团队协作，将算法、数据可视化和工程能力落地到客户项目。",
                    en: "Worked with government, enterprise, product, and design teams to deliver algorithm, visualization, and engineering features in client projects.",
                },
            ],
        },
        {
            company: { zh: "ActEarn Inc", en: "ActEarn Inc" },
            title: { zh: "AI 客户端工程师", en: "AI Client Engineer" },
            meta: [
                { zh: "2023.08 - 2023.11", en: "2023.08 - 2023.11" },
                { zh: "美国加州旧金山", en: "San Francisco, CA, USA" },
                { zh: "实习", en: "Internship" },
            ],
            bullets: [
                {
                    zh: "使用 React Native 开发 AI 社区分析应用，接入 GPT 内容分析服务，完成聊天室、论坛热点和数据来源等核心界面。",
                    en: "Built React Native interfaces for an AI community-analysis app and integrated GPT analysis for chats, forum trends, and source views.",
                },
            ],
        },
        {
            company: {
                zh: "华东建筑设计研究院 国际设计中心",
                en: "East China Architecture Design and Research Institute, International Design Center",
            },
            title: { zh: "参数化设计师", en: "Computational Designer" },
            meta: [
                { zh: "2020.08 - 2021.05", en: "2020.08 - 2021.05" },
                { zh: "上海 中国", en: "Shanghai, China" },
                { zh: "实习", en: "Internship" },
            ],
            bullets: [
                {
                    zh: "参与大型公共建筑室内设计与表达，负责空间推敲、参数化建模和方案迭代。",
                    en: "Supported large public-building interior design, including spatial studies, parametric modeling, and design iteration.",
                },
                {
                    zh: "使用 Rhino SubD / Grasshopper 辅助曲面建模、几何分析和方案比选。",
                    en: "Used Rhino SubD and Grasshopper for surface modeling, geometry analysis, and option comparison.",
                },
            ],
            links: [],
        },
    ],
    workProjects: [
        {
            title: { zh: "Dashi 规划数据管理系统", en: "Dashi Municipal Data Management Platform" },
            company: { zh: "Sasaki", en: "Sasaki" },
            role: { zh: "软件工程师 Web全栈", en: "Full-Stack Web Software Engineer" },
            meta: [
                { zh: "2023.11 - 2025.11 波士顿 远程", en: "2023.11 - 2025.11, Boston, Remote" },
            ],
            summary: {
                zh: "企业级 SaaS: 协作式市政数据管理平台，包含图表、地图、收益统计、权限与多场景版本。",
                en: "Enterprise SaaS for municipal data management with charts, maps, analytics, permissions, and scenarios.",
            },
            description: [
                {
                    zh: "基于 React/MobX、Node.js 与 Google Cloud 将静态站升级为可复用全栈平台；开发 D3 图表库、完善 pnpm monorepo/Changeset/GitHub Workflow 发布流程，并优化数据加载、Mapbox 渲染和缓存逻辑。",
                    en: "Used React/MobX, Node.js, and Google Cloud to turn static sites into a reusable full-stack platform; built a D3 chart library, improved pnpm/Changesets/GitHub Workflow releases, and optimized data loading, Mapbox rendering, and caching.",
                },
            ],
        },
        {
            title: {
                zh: "Office Shift Pro - AI智能建筑改造系统",
                en: "Office Shift Pro - AI Building Conversion System",
            },
            company: { zh: "Sasaki", en: "Sasaki" },
            role: { zh: "软件工程师 Web全栈", en: "Full-Stack Web Software Engineer" },
            meta: [
                { zh: "2023.11 -  波士顿 全职", en: "2023.11 - , Boston, Full-time" },
            ],
            summary: {
                zh: "AI 算法产品: 基于建筑约束自动生成办公转住宅平面，并计算工程与金融指标。",
                en: "AI product for office-to-residential conversion plans, engineering metrics, and financial analysis.",
            },
            description: [
                {
                    zh: "重构贪心算法、剪枝、局部搜索和结果评估流程，引入 Web Worker 并发计算；参与参数配置、平面生成、指标计算和结果可视化，将设计/规划/商业分析需求抽象为产品能力。",
                    en: "Refactored greedy search, pruning, local search, and result evaluation; added Web Worker parallelism; contributed to parameters, plan generation, metrics, and visualization.",
                },
            ],
        },
        {
            title: {
                zh: "Wanderflow - AI 论坛智能分析平台",
                en: "Wanderflow - AI Forum Intelligence Platform",
            },
            company: { zh: "ActEarn", en: "ActEarn" },
            role: { zh: "AI 客户端工程师", en: "AI Client Engineer" },
            meta: [
                {
                    zh: "2023.07 - 2023.11 旧金山 实习",
                    en: "2023.07 - 2023.11, San Francisco, Internship",
                },
            ],
            summary: {
                zh: "AI 知识平台: 结合 LLM 与搜索结果分析帖子、溯源事实并支持交互式问答。",
                en: "AI knowledge platform combining LLMs and search for post analysis, fact tracing, and Q&A.",
            },
            description: [
                {
                    zh: "负责 React Native 客户端核心界面，协作接入 OpenAI GPT 分析服务，完成帖子总结、观点提炼、引用来源展示、AI 对话和分析详情等功能。",
                    en: "Built React Native client views and integrated OpenAI GPT analysis for summaries, opinions, citations, AI chat, and detail views.",
                },
            ],
        },
        {
            title: {
                zh: "Strategies UI和tokens组件库",
                en: "Strategies UI and Token Component Libraries",
            },
            company: { zh: "Sasaki", en: "Sasaki" },
            role: { zh: "软件工程师 Web全栈", en: "Full-Stack Web Software Engineer" },
            meta: [
                { zh: "2023.11 -  波士顿 全职", en: "2023.11 - , Boston, Full-time" },
            ],
            summary: {
                zh: "前端基建: 搭建团队核心样式与组件库，统一产品设计语言和交互模式。",
                en: "Frontend infrastructure for shared styles, components, design language, and interaction patterns.",
            },
            description: [
                {
                    zh: "主导 UI 设计系统重构，维护 TypeScript/React 组件库与样式 Token；完善 pnpm monorepo、Lerna 发布、Jest/Chromatic/GitHub Actions 测试流水线，覆盖单元、UI 回归、构建与性能验证。",
                    en: "Led a UI system refactor, maintained TypeScript/React components and style tokens, and improved pnpm, Lerna, Jest, Chromatic, and GitHub Actions release/test pipelines.",
                },
            ],
        },
    ],
    personalProjects: [
        {
            title: { zh: "简历文档 AI Agent 编辑器", en: "Resume Document AI Agent Editor" },
            summary: {
                zh: "本地 AI Agent 工具，支持简历改写、排版优化与多语言转换",
                en: "Local AI Agent for resume rewriting, layout optimization, and multilingual conversion.",
            },
            description: [
                {
                    zh: "基于本地 Qwen 模型实现 Plan-and-Execute 工作流，覆盖意图识别、上下文选择、Patch 生成、校验与失败修复；集成案例 RAG、Web UI、日志与 PDF 导出。",
                    en: "Built a local-Qwen Plan-and-Execute workflow for intent, context, patches, validation, and recovery; added case RAG, Web UI, logs, and PDF export.",
                },
            ],
        },
        {
            title: { zh: "在线 AI 对战棋类网站", en: "Online AI Board-Game Website" },
            summary: {
                zh: "基于Minimax算法的在线ai对战平台",
                en: "Classic AI algorithms project for board-game opponents and web deployment.",
            },
            description: [
                {
                    zh: "基于 Minimax 与 Alpha-Beta 剪枝实现五子棋、屏风四子棋 AI，并用遗传算法优化评估函数权重；支持控制台与 Web 人机对战。",
                    en: "Implemented Gomoku and Connect Four AI with Minimax/Alpha-Beta, tuned heuristics with a genetic algorithm, and shipped console plus web play.",
                },
            ],
        },
        {
            title: { zh: "基于动力学的空间找形设计", en: "Physics-Based Spatial Form-Finding" },
            summary: {
                zh: "面向空间结构形态生成的 GPU 并行模拟、三维可视化工具",
                en: "GPU-parallel simulation and 3D visualization tool for spatial form-finding.",
            },
            description: [
                {
                    zh: "使用 CUDA C++ 并行化节点受力、位置更新与约束计算，设计 CPU/GPU 基准测试验证正确性与加速比；基于 Raylib/WASM 部署在线 3D Demo。",
                    en: "Used CUDA C++ for parallel force, position, and constraint computation; benchmarked CPU/GPU correctness and speedup; deployed a Raylib/WASM 3D demo.",
                },
            ],
        },
        {
            title: { zh: "美国 NASA 宇航局月球车竞赛", en: "NASA Rover Challenge" },
            summary: {
                zh: "基于 HoloLens 的宇航员增强现实界面开发",
                en: "HoloLens AR interface and lunar mission support system for astronauts.",
            },
            description: [
                {
                    zh: "与 RISD 工业设计、Brown CS 团队合作，使用 Unity/C# 开发 AR 任务界面，参与采样、地图导航和路径规划功能。",
                    en: "Worked with RISD Industrial Design and Brown CS teams to build Unity/C# AR mission UI for sampling, map navigation, and path planning.",
                },
            ],
        },
    ],
    languages: [
        { name: { zh: "汉语", en: "Mandarin" }, level: { zh: "母语", en: "Native" } },
        {
            name: { zh: "英语", en: "English" },
            level: { zh: "流利", en: "Professional" },
        },
        { name: { zh: "德语", en: "German" }, level: { zh: "中级", en: "Intermediate" } },
        { name: { zh: "法语", en: "French" }, level: { zh: "中级", en: "Intermediate" } },
    ],
} satisfies ResumeData;
