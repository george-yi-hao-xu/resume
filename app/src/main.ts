import { avatarUrl } from "./avatar";
import "./styles/base.scss";
import "./styles/page-preview.scss";
import "./styles/print.scss";
import { resumeData } from "./data/data";
import { parseVersion, selectorHtml, type ResumeVersion } from "./selector";
import "./styles/app.scss";
import { OneColResume } from "./templates/one-col/one-col-maker";
import { TwoColsResume } from "./templates/two-cols/two-cols-maker";
import { installPrintPreviewGuides } from "./utils/print-preview-guides";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
    throw new Error("Cannot mount new resume app: missing #app");
}

const renderResume = (version: ResumeVersion) => {
    document.title = `${resumeData.pageTitle} - ${version === "one-col" ? "单列版" : "双列版"}`;

    return version === "one-col"
        ? OneColResume(resumeData, avatarUrl)
        : TwoColsResume(resumeData, avatarUrl);
};

const render = () => {
    const selected = parseVersion(window.location.hash);

    app.innerHTML = `
    ${selectorHtml(selected)}
    <div class="new-preview" id="resume-preview">
      ${selected ? renderResume(selected) : ""}
    </div>
  `;

    app.querySelectorAll<HTMLButtonElement>("[data-version]").forEach((button) => {
        button.addEventListener("click", () => {
            const version = parseVersion(button.dataset.version);

            if (version) {
                window.location.hash = version;
            }
        });
    });
};

window.addEventListener("hashchange", render);
render();
installPrintPreviewGuides();
