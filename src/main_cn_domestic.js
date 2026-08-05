import "./styles/base.scss";
import { mountOneColResume } from "@resume/one-col";
import avatarUrl from "./gyxu.jpg";
import "./styles/page-preview.scss";
import "./styles/print.scss";
import { installPrintPreviewGuides } from "./utils/printPreviewGuides.js";

mountOneColResume({ avatar: avatarUrl });
installPrintPreviewGuides();
