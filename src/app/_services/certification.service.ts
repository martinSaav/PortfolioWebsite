import { Injectable } from '@angular/core';
import { Certification } from '../_models/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  certifications: Certification[] = [
    {
        id: 0,
        name: 'Java Back End',
        image: 'https://media.licdn.com/dms/image/C4E0BAQHe1M1bQCC71Q/company-logo_100_100/0/1630572165659/sistemas_activos_srl_logo?e=1729728000&v=beta&t=jzPrAeaBDQhzu82CdBLRcKJCETtMDVzetDBz2ShMDIc',
        issuingOrganization: 'Sitemas activos S.R.L',
        issueDate: new Date('2024-03-01'),
        credentialUrl: 'https://drive.google.com/file/d/1uxm7vDBOkOEXj1I-HAM2hC6JsD9IwibO/view'
    },
    {
      id: 1,
      name: 'Python Full Stack',
      image: 'https://media.licdn.com/dms/image/D4D0BAQFrtswH5l2AGw/company-logo_100_100/0/1689360760595?e=1729728000&v=beta&t=zitiNGi_jvN01ZjHfT3716v6jydkna-ccP4pZ_mpxGM',
      issuingOrganization: 'Codo a Codo',
      issueDate: new Date('2022-08-01'),
      credentialUrl: 'https://drive.google.com/file/d/1gd0eXKYmjyXtqFvEnTBrAo6oJXqCwyQn/view'
    },
    {
      id: 2,
      name: 'Ingles A2+',
      image: 'https://seeklogo.com/images/P/pearson-logo-2D49F7673A-seeklogo.com.png',
      issuingOrganization: 'Academia BA Emprende',
      issueDate: new Date('2023-06-23'),
      credentialUrl: 'https://drive.google.com/file/d/1sVzZPkHNInO5Ov8UHRZeBAVTr-053_3K/view?usp=sharing'
    },
    {
      id: 3,
      name: 'Análisis de Datos 1',
      image: 'https://academiaba.buenosaires.gob.ar/wp-content/uploads/2021/07/Logo-AcademiaBA-2.png',
      issuingOrganization: 'Academia BA Emprende',
      issueDate: new Date('2022-08-01'),
      credentialUrl: 'https://drive.google.com/file/d/1kYbj63gdhUZvVvEjIywpzMYi7236Bgrf/view?usp=sharing'
    },
    {
      id: 4,
      name: 'Análisis de Datos 2',
      image: 'https://academiaba.buenosaires.gob.ar/wp-content/uploads/2021/07/Logo-AcademiaBA-2.png',
      issuingOrganization: 'Academia BA Emprende',
      issueDate: new Date('2022-08-01'),
      credentialUrl: 'https://drive.google.com/file/d/1jX11oKZ4ZRSiGPL6vUyfUnuOTzZ-yTbP/view?usp=sharing'
    },
  ];

  getAllcertifications(): Certification[] {
    return this.certifications;
  }

  getcertification(id: number): Certification {
    let certification: Certification | undefined = this.certifications.find(certification => certification.id === id);

    if (certification === undefined) {
      throw new TypeError('The certification with id ' + id + ' does not exist');
    }
    return certification;
  }

}
