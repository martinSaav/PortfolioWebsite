import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'Infinity Math',
    summaryKey: 'PROJECTS.INFINITY_MATH.SUMMARY',
    descriptionKey: 'PROJECTS.INFINITY_MATH.DESCRIPTION',
    projectLink: 'https://chic-blini-e43987.netlify.app',
    images: [
      './assets/imgs/infinity_math1.png',
      './assets/imgs/infinity_math2.png',
      './assets/imgs/infinity_math3.png'
    ],
    technologies: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT],
  },
];
