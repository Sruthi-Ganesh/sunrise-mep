export interface ServicesContentProps {
    id: number;
    title: string;
    description?: string;
    points?: ServicesContentProps[];
    icon: string;
}