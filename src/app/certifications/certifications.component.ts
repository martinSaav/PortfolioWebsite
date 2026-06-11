import { Component, Inject, OnInit } from '@angular/core';
import { Certification } from '../_models/Certification';
import { CertificationService } from '../_services/certification.service';

interface CertGroup {
  category: string;
  certs: Certification[];
}

@Component({
  standalone: false,
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements OnInit {

  certsByCategory: CertGroup[] = [];

  constructor(@Inject(CertificationService) private certificationService: CertificationService) {}

  ngOnInit(): void {
    const all = this.certificationService.getAllcertifications();
    this.certsByCategory = this.groupByCategory(all);
  }

  private groupByCategory(certs: Certification[]): CertGroup[] {
    const groups: Record<string, Certification[]> = {
      'AWS': [],
      'Programación': [],
      'Testing': [],
      'Seguridad': [],
      'Datos': [],
      'Otros': []
    };

    for (const cert of certs) {
      const org = cert.issuingOrganization.toLowerCase();
      const name = cert.name.toLowerCase();

      if (org.includes('aws')) {
        groups['AWS'].push(cert);
      } else if (name.includes('testing') || name.includes('tester')) {
        groups['Testing'].push(cert);
      } else if (name.includes('java') || name.includes('python')) {
        groups['Programación'].push(cert);
      } else if (org.includes('security') || org.includes('ekoparty') || name.includes('ciberseguridad')) {
        groups['Seguridad'].push(cert);
      } else if (name.includes('datos')) {
        groups['Datos'].push(cert);
      } else {
        groups['Otros'].push(cert);
      }
    }

    return Object.entries(groups)
      .filter(([, c]) => c.length > 0)
      .map(([category, c]) => ({ category, certs: c }));
  }
}
