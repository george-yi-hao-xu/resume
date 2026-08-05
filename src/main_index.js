import "./styles/base.scss";
import "./styles/version-picker.scss";

const versions = [
  {
    href: "./cn.html",
    label: "国内中文简历",
    meta: "one-col / 国内投递",
  },
  {
    href: "./index_cn.html",
    label: "中文简历",
    meta: "传统版 / 中文内容",
  },
  {
    href: "./index_bilingual.html",
    label: "中英双语简历",
    meta: "bilingual / 英文岗位",
  },
];

document.querySelector("#app").innerHTML = `
  <main class="version-picker">
    <section class="version-picker__intro" aria-labelledby="resume-title">
      <p class="version-picker__eyebrow">Resume Versions</p>
      <h1 id="resume-title">许易豪 / George Yihao Xu</h1>
    </section>
    <nav class="version-picker__links" aria-label="简历版本">
      ${versions
        .map(
          (item) => `
            <a class="version-picker__link" href="${item.href}">
              <span>${item.label}</span>
              <small>${item.meta}</small>
            </a>
          `,
        )
        .join("")}
    </nav>
  </main>
`;
