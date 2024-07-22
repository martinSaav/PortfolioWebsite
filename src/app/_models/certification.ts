export interface Certification {
    id: number;
    name: string;
    image: string;
    issuingOrganization: string;
    issueDate: Date;
    credentialUrl?: string;
  }