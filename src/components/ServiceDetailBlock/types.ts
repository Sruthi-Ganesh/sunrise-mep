import { ServicesContentProps } from "common/Carousel/serviceTypes";
import { BackgroundBlockProps } from "common/Carousel/backgroundTypes";
export interface ServiceBlockProps {
  id: string;
  heading: string;
  backgroundContent?: BackgroundBlockProps[];
  servicesContent: ServicesContentProps[];
  chooseUsContent: ServicesContentProps[];
}
