import "@resume/shared/styles/base.scss";
import { mountOneColResume } from "@resume/one-col";
import { avatarUrl } from "@resume/shared/avatar";
import "@resume/shared/styles/page-preview.scss";
import "@resume/shared/styles/print.scss";
import { installPrintPreviewGuides } from "@resume/shared/print-preview-guides";

mountOneColResume({ avatar: avatarUrl });
installPrintPreviewGuides();
