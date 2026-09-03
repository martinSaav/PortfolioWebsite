import { Experience } from '../_models/Experience';
import { Tag } from '../_models/Tag';

/**
 * Experiencia laboral, de la más reciente a la más antigua.
 * Los textos viven en `src/assets/i18n/{es,en}.json` bajo la clave `EXP.*`.
 */
export const EXPERIENCES: Experience[] = [
  {
    id: 0,
    company: 'Unitech',
    companyUrl: 'https://www.unitech-corp.com/',
    roleKey: 'EXP.UNITECH.ROLE',
    locationKey: 'EXP.UNITECH.LOCATION',
    startDate: '2026-03',
    endDate: null,
    summaryKey: 'EXP.UNITECH.SUMMARY',
    bulletKeys: [
      'EXP.UNITECH.B1',
      'EXP.UNITECH.B2',
      'EXP.UNITECH.B3',
      'EXP.UNITECH.B4'
    ],
    technologies: [
      Tag.JAVA,
      Tag.QUARKUS,
      Tag.ANGULAR,
      Tag.IA,
      Tag.RAG,
      Tag.FLOWISE,
      Tag.POSTGRESQL
    ]
  },
  {
    id: 1,
    company: 'Certant',
    roleKey: 'EXP.CERTANT.ROLE',
    locationKey: 'EXP.CERTANT.LOCATION',
    startDate: '2025-06',
    endDate: '2026-03',
    summaryKey: 'EXP.CERTANT.SUMMARY',
    bulletKeys: [
      'EXP.CERTANT.B1',
      'EXP.CERTANT.B2',
      'EXP.CERTANT.B3',
      'EXP.CERTANT.B4'
    ],
    technologies: [
      Tag.JAVA,
      Tag.SPRING_BOOT,
      Tag.ANGULAR,
      Tag.MICROSERVICES,
      Tag.AWS,
      Tag.POSTGRESQL,
      Tag.PYTHON,
      Tag.TESTING
    ]
  },
  {
    id: 2,
    company: 'FIUBA',
    roleKey: 'EXP.TEACHING.ROLE',
    locationKey: 'EXP.TEACHING.LOCATION',
    startDate: '2024-01',
    endDate: '2025-02',
    summaryKey: 'EXP.TEACHING.SUMMARY',
    bulletKeys: [
      'EXP.TEACHING.B1',
      'EXP.TEACHING.B2',
      'EXP.TEACHING.B3'
    ],
    technologies: [Tag.C, Tag.PYTHON]
  }
];
