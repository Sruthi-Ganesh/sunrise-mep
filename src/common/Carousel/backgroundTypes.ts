import { ButtonBlockProps } from "./buttonTypes";

export interface BackgroundBlockProps {
    id: number;
    title?: string;
    text?: string;
    button?: ButtonBlockProps[];
    icon: string;
}