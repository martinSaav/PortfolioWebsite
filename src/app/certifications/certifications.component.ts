import { Component, Inject } from '@angular/core';
import { Certification } from '../_models/Certification';
import { CertificationService } from '../_services/certification.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {

  certifications: Certification[] = {} as Certification[];

  constructor(@Inject(CertificationService) private certificationService: CertificationService) {
  }
  ngOnInit(): void {
    this.certifications = this.certificationService.getAllcertifications();
  }

}
