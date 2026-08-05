import "./styles/base.scss";
import { mountTwoColsResume } from "@resume/two-cols";
import avatarUrl from "./gyxu.jpg";
import "./styles/page-preview.scss";
import "./styles/print.scss";
import { installPrintPreviewGuides } from "./utils/printPreviewGuides.js";

mountTwoColsResume({ avatar: avatarUrl });
installPrintPreviewGuides();
