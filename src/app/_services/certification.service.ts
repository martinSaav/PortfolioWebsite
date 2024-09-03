import { Injectable } from '@angular/core';
import { Certification } from '../_models/Certification';

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
      issueDate: new Date('2024-03-15T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1uxm7vDBOkOEXj1I-HAM2hC6JsD9IwibO/view'
    },
    {
      id: 1,
      name: 'Python Full Stack',
      image: 'https://media.licdn.com/dms/image/D4D0BAQFrtswH5l2AGw/company-logo_100_100/0/1689360760595?e=1729728000&v=beta&t=zitiNGi_jvN01ZjHfT3716v6jydkna-ccP4pZ_mpxGM',
      issuingOrganization: 'Codo a Codo',
      issueDate: new Date('2022-07-15T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1gd0eXKYmjyXtqFvEnTBrAo6oJXqCwyQn/view'
    },
    {
      id: 2,
      name: 'Profesional Testing Master',
      image: 'https://media.licdn.com/dms/image/v2/C4D0BAQEovaJU3sIB6g/company-logo_200_200/company-logo_200_200/0/1661176830309/programa_empujar_logo?e=1733356800&v=beta&t=Kzh_i-Md9Dq0hQw8kREspZSwdRCz2P6I4YTBFnECoBE',
      issuingOrganization: 'Fundacion Empujar',
      issueDate: new Date('2024-08-03T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/17jNCas-Y-zQ_ujYdCnX8_cfNXc6W5Vol/view?usp=sharing'
    },
    {
      id: 3,
      name: 'Testing de Software',
      image: 'https://media.licdn.com/dms/image/v2/C4D0BAQHkHKKEsnGofA/company-logo_200_200/company-logo_200_200/0/1631310008288?e=1733356800&v=beta&t=4LZsy_VCogeFH-gXxdL74dXYA0jByQd8qDIs273F_Wo',
      issuingOrganization: 'Universidad Tecnológica Nacional Buenos Aires',
      issueDate: new Date('2024-08-19T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1zgyWxZRuVnL2RDVrMdbGjVYbLsnxvOXR/view?usp=sharing'
    },
    {
      id: 4,
      name: 'Java Front-End',
      image: 'https://media.licdn.com/dms/image/v2/D4D0BAQGzaTgKCbOWgg/company-logo_200_200/company-logo_200_200/0/1715023353410/saalv_logo?e=1733356800&v=beta&t=lykmZIQ-qECVwBFYcZJMSnvqV0ZCuCc7RfzB_y9vseA',
      issuingOrganization: 'Subsecretaría de Aprendizaje a lo Largo de la Vida',
      issueDate: new Date('2024-08-29T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1ji6ZuIF84JgeoC3A2C1Z_dO4Vcd1IXdb/view?usp=sharing'
    },
    {
      id: 5,
      name: 'Asistencia perfecta',
      image: 'https://media.licdn.com/dms/image/v2/C4D0BAQEovaJU3sIB6g/company-logo_200_200/company-logo_200_200/0/1661176830309/programa_empujar_logo?e=1733356800&v=beta&t=Kzh_i-Md9Dq0hQw8kREspZSwdRCz2P6I4YTBFnECoBE',
      issuingOrganization: 'Fundacion Empujar',
      issueDate: new Date('2024-08-03T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1mTmAvBr5gU4X4L8ZXxPNQA_3Jr7Vzgsw/view?usp=sharing'
    },
    {
      id: 6,
      name: 'Ingles A2+',
      image: 'https://seeklogo.com/images/P/pearson-logo-2D49F7673A-seeklogo.com.png',
      issuingOrganization: 'Academia BA Emprende',
      issueDate: new Date('2023-06-23T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1sVzZPkHNInO5Ov8UHRZeBAVTr-053_3K/view?usp=sharing'
    },
    {
      id: 7,
      name: 'Análisis de Datos 1',
      image: 'https://academiaba.buenosaires.gob.ar/wp-content/uploads/2021/07/Logo-AcademiaBA-2.png',
      issuingOrganization: 'Academia BA Emprende',
      issueDate: new Date('2022-07-28T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1kYbj63gdhUZvVvEjIywpzMYi7236Bgrf/view?usp=sharing'
    },
    {
      id: 8,
      name: 'Análisis de Datos 2',
      image: 'https://academiaba.buenosaires.gob.ar/wp-content/uploads/2021/07/Logo-AcademiaBA-2.png',
      issuingOrganization: 'Academia BA Emprende',
      issueDate: new Date('2022-08-25T00:00:00'),
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
