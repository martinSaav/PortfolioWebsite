import { Component, OnInit } from '@angular/core';
import { Certification } from '../_models/Certification';
import { CERTIFICATIONS } from '../_data/certifications.data';

interface CertGroup {
  categoryKey: string;
  certs: Certification[];
}

@Component({
  standalone: false,
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements OnInit {

  private readonly categoryOrder = [
    'CERT.AWS',
    'CERT.PROGRAMACION',
    'CERT.TESTING',
    'CERT.SEGURIDAD',
    'CERT.DATOS',
    'CERT.OTROS'
  ];

  certsByCategory: CertGroup[] = [];

  ngOnInit(): void {
    this.certsByCategory = this.groupByCategory(CERTIFICATIONS);
  }

  getCertDelay(groupIndex: number, certIndex: number): number {
    const offset = this.certsByCategory
      .slice(0, groupIndex)
      .reduce((sum, g) => sum + g.certs.length, 0);
    return (offset + certIndex) * 55;
  }

  private groupByCategory(certs: Certification[]): CertGroup[] {
    return this.categoryOrder
      .map(categoryKey => ({
        categoryKey,
        certs: certs.filter(cert => cert.category === categoryKey)
      }))
      .filter(group => group.certs.length > 0);
  }
}
