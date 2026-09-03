import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

/**
 * Proyectos del portfolio, del más relevante al menos.
 * Los textos viven en `src/assets/i18n/{es,en}.json` bajo la clave `PROJECTS.*`.
 */
export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'Theater Booking System',
    summaryKey: 'PROJECTS.THEATER.SUMMARY',
    descriptionKey: 'PROJECTS.THEATER.DESCRIPTION',
    projectLink: 'https://teatro-gran-espectaculo-front.vercel.app/events',
    repoLink: 'https://github.com/martinSaav/theater-booking-system',
    year: '2025',
    featured: true,
    images: [
      './assets/imgs/teatro1.png',
      './assets/imgs/teatro2.png',
      './assets/imgs/teatro3.png'
    ],
    technologies: [
      Tag.JAVA,
      Tag.SPRING_BOOT,
      Tag.POSTGRESQL,
      Tag.DOCKER,
      Tag.AWS,
      Tag.CI_CD,
      Tag.REST_API
    ]
  },
  {
    id: 1,
    name: 'Counter-Strike 2D',
    summaryKey: 'PROJECTS.CS2D.SUMMARY',
    descriptionKey: 'PROJECTS.CS2D.DESCRIPTION',
    projectLink: 'https://martinsaav.github.io/Counter-Strike-2D-Website/',
    repoLink: 'https://github.com/martinSaav/counter-strike-2D',
    year: '2025',
    images: [
      './assets/imgs/cs2d2.jpg',
      './assets/imgs/cs2d3.jpg',
      './assets/imgs/cs2d4.jpg',
      './assets/imgs/cs2d5.jpg',
      './assets/imgs/cs2d1.jpg'
    ],
    technologies: [
      Tag.CPP,
      Tag.SDL2,
      Tag.QT,
      Tag.CMAKE,
      Tag.LINUX,
      Tag.DOCKER,
      Tag.CI_CD
    ]
  },
  {
    id: 2,
    name: 'Redes — TCP/IP interactivo',
    summaryKey: 'PROJECTS.REDES.SUMMARY',
    descriptionKey: 'PROJECTS.REDES.DESCRIPTION',
    projectLink: 'https://redes-web-beta.vercel.app',
    repoLink: 'https://github.com/martinSaav/redes-web',
    year: '2026',
    images: [
      './assets/imgs/redes_web2.png',
      './assets/imgs/redes_web3.png',
      './assets/imgs/redes_web1.png'
    ],
    technologies: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.CSS]
  },
  {
    id: 3,
    name: 'Concurrentes — TPC interactivo',
    summaryKey: 'PROJECTS.CONCURRENTES.SUMMARY',
    descriptionKey: 'PROJECTS.CONCURRENTES.DESCRIPTION',
    projectLink: 'https://concurrentes-web.vercel.app',
    repoLink: 'https://github.com/martinSaav/concurrentes-web',
    year: '2026',
    images: [
      './assets/imgs/concurrentes2.png',
      './assets/imgs/concurrentes3.png',
      './assets/imgs/concurrentes1.png'
    ],
    technologies: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.CSS]
  },
  {
    id: 4,
    name: 'Estadísticas con PostgreSQL y Redis',
    summaryKey: 'PROJECTS.TP_BDD.SUMMARY',
    descriptionKey: 'PROJECTS.TP_BDD.DESCRIPTION',
    repoLink: 'https://github.com/martinSaav/tp-bdd',
    year: '2025',
    images: [],
    technologies: [Tag.PYTHON, Tag.POSTGRESQL, Tag.REDIS, Tag.SQL]
  },
  {
    id: 5,
    name: 'Inventory Management',
    summaryKey: 'PROJECTS.INVENTORY.SUMMARY',
    descriptionKey: 'PROJECTS.INVENTORY.DESCRIPTION',
    repoLink: 'https://github.com/martinSaav/inventory-management',
    year: '2024',
    images: [],
    technologies: [Tag.PYTHON, Tag.CI_CD, Tag.TESTING]
  },
  {
    id: 6,
    name: 'Infinity Math',
    summaryKey: 'PROJECTS.INFINITY_MATH.SUMMARY',
    descriptionKey: 'PROJECTS.INFINITY_MATH.DESCRIPTION',
    projectLink: 'https://chic-blini-e43987.netlify.app',
    repoLink: 'https://github.com/martinSaav/infinity-math',
    year: '2024',
    images: [
      './assets/imgs/infinity_math1.png',
      './assets/imgs/infinity_math2.png',
      './assets/imgs/infinity_math3.png'
    ],
    technologies: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT],
  },
];
