import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summaryKey: string;
    descriptionKey: string;
    projectLink: string;
    images: string[];
    technologies: Tag[];
    }
