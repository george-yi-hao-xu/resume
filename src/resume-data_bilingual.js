/**
 * @typedef {{ zh: string, en?: string }} BilingualText
 * @typedef {{ label: BilingualText, href: string }} BilingualLink
 * @typedef {{ label: string, localizedLabel?: BilingualText, value?: string, localizedValue?: BilingualText, href?: string }} BilingualContact
 * @typedef {{ title: BilingualText, meta?: BilingualText, details?: BilingualText[], note?: BilingualText, links?: BilingualLink[] }} BilingualEntry
 * @typedef {{ title: BilingualText, items: BilingualText[] }} BilingualSkillGroup
 * @typedef {{ title: BilingualText, company: string, meta: string[], bullets: BilingualText[], links?: BilingualLink[] }} BilingualJob
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
      zh: `毕业于同济大学，后赴美国罗德岛设计学院深造，并于布朗大学学习
计算机相关课程。在校期间，探索人机交互、计算设计、动力学模拟等方向，成绩优异，并在国内外
获得多项学科奖项。现就职于世界顶尖规划设计公司 Sasaki 波士顿总部研发部
门，负责 Web 前后端生态架构开发，数据结构与算法优化等。具备极强的学习自驱力与跨学科整合能力，
做事谨慎细致，沟通耐心友善，在学习和工作中均深受同事领导信任。`,
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
      title: { zh: "软件工程师", en: "Software Engineer" },
      company: "美国SASAKI规划事务所 Sasaki Associates, Inc.",
      meta: ["2023.11 - 至今", "波士顿 全职 远程"],
      links: [
        { label: { zh: "员工信息", en: "Employee Info" }, href: "https://www.sasaki.com/people/george-xu/" },
      ],
      bullets: [

        {
          zh: `参与主力项目 Dashi 升级迭代，开发维护以 GraphQL、Google Data Connect 和云函数为技术栈的 Web工程管理 多客户网站
            借助 Changesets 和 Jest 测试工具 完善核心库的迭代维护，增强基于 pnpm 项目 Monorepo 的健壮性，通过bash脚本大幅提升新客户网站的部署速度。
            通过浏览器 Profile 工具定位前端计算瓶颈并优化计算；优化后端存储逻辑，减轻前端计算负担；并基于 Google Analytics 协助设计师分析用户行为。
            `,
          en: `Upgraded Dashi from a static site to a GraphQL/Data Connect app; improved monorepo releases and client-site deployment. 
          Profiled frontend bottlenecks, optimized JS array logic, moved heavy results to backend snapshots, and supported GA analysis.
          `,
        },
        {
          zh: "",
          en: "",
        },
        {
          zh: `主导基于 d3.js 的内部图表库开发，优化统一数据结构，实现丰富动画与提示框等功能。并基于 Adobe React Aria 无样式组件库重构内部 UI 设计系统，中心化设计 Token，通过 Node.js 脚本实现编译，
          以支持 SCSS 与 TypeScript，并基于 Lerna / Changesets 实现快速版本迭代 与 npm包发布。`,
          en: `Built a d3.js chart library with cleaner data/cache logic, shared data models, 
          animations, and tooltips.Refactored the UI design system with React Aria, design tokens, SCSS/TS output, and Lerna/Changesets releases.`,
        },
        {
          zh: "编写 Rhino Python 脚本，辅助公司其他团队根据 CSV 数据生成 AutoCAD DWG 点云文件，并实现 CAD 内几何图形的属性标注。",
          en: "Wrote Rhino Python scripts for CSV-to-DWG point clouds, CAD annotations, and planning workflows."
        }
      ],
    },
    {
      title: { zh: "参数化设计师", en: "Computational Designer" },
      company: "华东建筑设计研究院 ECADI",
      meta: ["2020.08 - 2021.05", "上海", "实习"],
      bullets: [
        {
          zh: `于华东院国际设计中心参与大型公共建筑室内设计。熟练运用 Rhino GH SubD 等参数化建模工具，撰写Python脚本，对主要公共空间进行曲面建模设计。
          熟练运用VRay Enscape等3D渲染器，以及Adobe Photoshop Illustrator Indesign整理汇报文本`,
          en: "Modeled airport interior spaces with Rhino Grasshopper and produced layouts in InDesign.",
        },
      ],
    },
  ],
  education: [
    {
      title: { zh: "罗德岛设计学院", en: "Rhode Island School of Design" },
      meta: { zh: "设计学硕士 罗德岛 美国 2021.07 - 2023.06 ", en: "Master of Design 2021.07 - 2023.06" },
    },
    {
      title: { zh: "布朗大学", en: "Brown University" },
      meta: {
        zh: "计算机科学 跨校选课 罗德岛 美国",
        en: "Computer Science cross-registration",
      },
    },
    {
      title: { zh: "同济大学", en: "Tongji University" },
      meta: {
        zh: "建筑学学士 德语强化班 上海 2014.09 - 2020.06",
        en: "B.Arch, Deutschintensivkurs 2014.09 - 2020.06",
      },
    },
    {
      title: { zh: "上海七宝中学", en: "Qibao High School" },
      meta: {
        zh: "高中 上海 2011.09 - 2014.06",
        en: "High School 2011.09 - 2014.06",
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
      title: { 
        zh: "基于动力学的空间找形设计", 
        en: "Physics-Based Form-Finding" 
      },
      meta: { 
        zh: `同济学习期间，着力于计算设计。借力于 CUDA C++ 技术，对点云进行动力学模拟，以实现空间找形。并基于 Raylib 库实现计算可视化；
        同时借 WASM 技术于 GitHub Pages 部署 web demo 版本。`, 
        en: "Used CUDA C++ and Raylib for point-cloud physics simulation and visualization; deployed a WASM web demo on GitHub Pages." },
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
        zh: `在罗德岛设计学院学习期间，全流程深度参与基于北美微软 HoloLens 的 NASA 竞赛项目，熟练使用 Unity 与 C#进行开发。与设计师紧密合作、专业交流，完善模拟采样抓取、地图打点引导、宇航员定位等功能。`,
        en: "Built HoloLens features in Unity/C#, including sample collection, waypoint guidance, and astronaut positioning.",
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
      level: { zh: "流利", en: "Professional" },
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
