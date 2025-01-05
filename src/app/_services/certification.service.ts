import { Injectable } from '@angular/core';
import { Certification } from '../_models/Certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  certifications: Certification[] = [
    {
      id: 0,
      name: 'Java Microservices',
      image: './assets/imgs/sistemas_activos_srl_logo.jpg',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'Sitemas activos S.R.L',
      issueDate: new Date('2024-03-15T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1uxm7vDBOkOEXj1I-HAM2hC6JsD9IwibO/view'
    },
    {
      id: 1,
      name: 'AWS Cloud Computing 101',
      image: './assets/imgs/aws-educate-introduction-to-cloud-101.png',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'AWS Educate',
      issueDate: new Date('2024-12-11T00:00:00'),
      credentialUrl: 'https://www.credly.com/badges/cd0b1119-304c-4fb1-97be-fffd79da854d/public_url'
    },
    {
      id: 2,
      name: 'AWS Getting Started with Storage',
      image: './assets/imgs/aws-educate-getting-started-with-storage.png',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'AWS Educate',
      issueDate: new Date('2024-12-18T00:00:00'),
      credentialUrl: 'https://www.credly.com/badges/8e5c75d1-1dee-4b1a-b8e5-4d4d6cc9c259/public_url'
    },
    {
      id: 2,
      name: 'AWS Getting Started with Compute',
      image: './assets/imgs/aws-educate-getting-started-with-compute.png',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'AWS Educate',
      issueDate: new Date('2025-01-04T00:00:00'),
      credentialUrl: 'https://www.credly.com/badges/e4845be4-d350-4313-a55c-bb18d3657cdc/public_url'
    },
    {
      id: 2,
      name: 'Python Full Stack',
      image: './assets/imgs/codo_a_codo_logo.png',
      imageHeight: 100,
      imageWidth: 140,
      issuingOrganization: 'Codo a Codo',
      issueDate: new Date('2022-07-15T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1gd0eXKYmjyXtqFvEnTBrAo6oJXqCwyQn/view'
    },
    {
      id: 3,
      name: 'Profesional Testing Master',
      image: './assets/imgs/programa_empujar_logo.jpg',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'Fundacion Empujar',
      issueDate: new Date('2024-08-03T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/17jNCas-Y-zQ_ujYdCnX8_cfNXc6W5Vol/view?usp=sharing'
    },
    {
      id: 4,
      name: 'Testing de Software',
      image: './assets/imgs/centro_de_e-learning_utn_frba_logo.jpg',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'Universidad Tecnológica Nacional Buenos Aires',
      issueDate: new Date('2024-08-19T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1zgyWxZRuVnL2RDVrMdbGjVYbLsnxvOXR/view?usp=sharing'
    },
    {
      id: 4,
      name: 'Introducción a la Ciberseguridad',
      image: './assets/imgs/base 4.png',
      imageHeight: 100,
      imageWidth: 170,
      issuingOrganization: 'BASE4 Security S.A',
      issueDate: new Date('2024-09-05T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/10BlDwSUriSDuXLwdjA09Rm_Wsox-7FkI/view?usp=sharing'
    },
    {
      id: 4,
      name: 'Asistente en la Ekoparty Security Conference 2024',
      image: './assets/imgs/eko party.png',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'Ekoparty Security Conference',
      issueDate: new Date('2024-11-15T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1v9Pgu6jC8ASYG6LEhdFCtRPAiP0Rwd6W/view?usp=sharing'
    },
    {
      id: 5,
      name: 'Impulsando Talento IT',
      image: './assets/imgs/fk_tech.png',
      imageHeight: 100,
      imageWidth: 150,
      issuingOrganization: 'FK Tech Solutions Factory',
      issueDate: new Date('2024-12-27T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1_kDGlIyYTG-SqPwhCCv4GPhvA0spvcop/view?usp=sharing'
    },
    {
      id: 5,
      name: 'Java Front-End',
      image: './assets/imgs/saalv_logo.jpg',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'Subsecretaría de Aprendizaje a lo Largo de la Vida',
      issueDate: new Date('2024-08-29T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1ji6ZuIF84JgeoC3A2C1Z_dO4Vcd1IXdb/view?usp=sharing'
    },
    {
      id: 6,
      name: 'Asistencia perfecta',
      image: './assets/imgs/programa_empujar_logo.jpg',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'Fundacion Empujar',
      issueDate: new Date('2024-08-03T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1mTmAvBr5gU4X4L8ZXxPNQA_3Jr7Vzgsw/view?usp=sharing'
    },
    {
      id: 7,
      name: 'Ingles A2+',
      image: './assets/imgs/pearson_logo.jpg',
      imageHeight: 100,
      imageWidth: 100,
      issuingOrganization: 'Pearson',
      issueDate: new Date('2023-06-23T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1sVzZPkHNInO5Ov8UHRZeBAVTr-053_3K/view?usp=sharing'
    },
    {
      id: 8,
      name: 'Análisis de Datos 1',
      image: './assets/imgs/academia_emprende_logo.png',
      imageHeight: 100,
      imageWidth: 160,
      issuingOrganization: 'Academia BA Emprende',
      issueDate: new Date('2022-07-28T00:00:00'),
      credentialUrl: 'https://drive.google.com/file/d/1kYbj63gdhUZvVvEjIywpzMYi7236Bgrf/view?usp=sharing'
    },
    {
      id: 9,
      name: 'Análisis de Datos 2',
      image: './assets/imgs/academia_emprende_logo.png',
      imageHeight: 100,
      imageWidth: 160,
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
