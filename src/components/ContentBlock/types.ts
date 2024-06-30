import { TFunction } from "react-i18next";
import { BackgroundBlockProps } from "../../common/Carousel/backgroundTypes";
export interface ContentBlockProps {
  icon?: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  backgroundContent?: BackgroundBlockProps[];
}
