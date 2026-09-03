import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Certification } from '../_models/Certification';
import { CERTIFICATIONS } from '../_data/certifications.data';

interface CertGroup {
  categoryKey: string;
  certs: Certification[];
  expanded: boolean;
}

/**
 * A partir de esta cantidad de credenciales, la categoría arranca colapsada en
 * una sola fila de logos. Debajo del umbral no vale la pena esconderla.
 */
const COLLAPSE_FROM = 4;

@Component({
  standalone: false,
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden', opacity: 0 })),
      state('expanded', style({ height: '*', overflow: 'visible', opacity: 1 })),
      transition('collapsed <=> expanded', animate('280ms ease-in-out'))
    ])
  ]
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

  toggleGroup(group: CertGroup): void {
    group.expanded = !group.expanded;
  }

  /** Escalona la aparición de los tiles dentro de la categoría. */
  getCertDelay(certIndex: number): number {
    return certIndex * 55;
  }

  private groupByCategory(certs: Certification[]): CertGroup[] {
    return this.categoryOrder
      .map(categoryKey => {
        const groupCerts = certs.filter(cert => cert.category === categoryKey);
        return {
          categoryKey,
          certs: groupCerts,
          expanded: groupCerts.length < COLLAPSE_FROM
        };
      })
      .filter(group => group.certs.length > 0);
  }
}
