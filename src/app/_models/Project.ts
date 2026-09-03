import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summaryKey: string;
    descriptionKey: string;
    /** Demo desplegada. Opcional: no todos los proyectos tienen una. */
    projectLink?: string;
    /** Repositorio en GitHub. */
    repoLink?: string;
    /** Año o rango mostrado en la card, ej. '2025'. */
    year?: string;
    /** Marca el proyecto que se muestra en la portada. */
    featured?: boolean;
    images: string[];
    technologies: Tag[];
    }
