export interface Certification {
    nameKey: string;
    /** Opcional: sólo las certificaciones con contenido propio que vale contar. */
    descriptionKey?: string;
    /** Opcional: si no hay logo propio se muestra `logoText` en su lugar. */
    image?: string;
    logoText?: string;
    imageWidth?: number;
    issuingOrganization: string;
    issueDate: Date;
    credentialUrl?: string;
    category: string;
  }
