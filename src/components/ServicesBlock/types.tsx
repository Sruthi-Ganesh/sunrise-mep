import { TFunction } from "react-i18next";
export interface ServiceBlockProps {
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
