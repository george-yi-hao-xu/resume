import "@resume/shared/styles/base.scss";
import { mountTwoColsResume } from "@resume/two-cols";
import { avatarUrl } from "@resume/shared/avatar";
import "@resume/shared/styles/page-preview.scss";
import "@resume/shared/styles/print.scss";
import { installPrintPreviewGuides } from "@resume/shared/print-preview-guides";

mountTwoColsResume({ avatar: avatarUrl });
installPrintPreviewGuides();
