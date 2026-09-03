import { Tag } from './Tag';

export interface Experience {
  id: number;
  /** Nombre de la empresa u organización. */
  company: string;
  /** Sitio de la empresa. Opcional. */
  companyUrl?: string;
  /** Clave i18n del puesto. */
  roleKey: string;
  /** Ubicación / modalidad. Clave i18n. */
  locationKey?: string;
  /** Inicio en formato 'YYYY-MM'. */
  startDate: string;
  /** Fin en formato 'YYYY-MM'. `null` = actualidad. */
  endDate: string | null;
  /** Clave i18n de la descripción corta. */
  summaryKey: string;
  /** Claves i18n de los logros / tareas. */
  bulletKeys: string[];
  technologies: Tag[];
}
