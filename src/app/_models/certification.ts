export interface Certification {
    id: number;
    name: string;
    image: string;
    imageHeight?: number;
    imageWidth?: number;
    issuingOrganization: string;
    issueDate: Date;
    credentialUrl?: string;
  }