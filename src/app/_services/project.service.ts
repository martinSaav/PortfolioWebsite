import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Infinity Math',
      summary: 'Pagina web muy basica de clases particulares hecho con HTML, CSS y JavaScript.',
      description: 'Infinity Math es una pagina web muy basica de clases particulares hecho con HTML, CSS y JavaScript. La pagina web cuenta con un inicio, las clases particulares, sede y formulario de contacto. La pagina web es responsiva y se ve bien en dispositivos moviles y aunque la pagina web no tiene informacion real, es un buen ejemplo de como se veria una pagina web de clases particulares. Despliegue en Netlify.',
      projectLink: 'https://chic-blini-e43987.netlify.app',
      images: ["./assets/imgs/infinity_math1.png", "./assets/imgs/infinity_math2.png", "/.assets/imgs/infinity_math3.png"],
      technologies: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(id: number): Project {
    let project: Project | undefined = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('The project with id ' + id + ' does not exist');
    }
    return project;
  }

  getProjectsByFilter(filter: Tag[]): Project[] {
    let filteredProjects: Project[] = [];

    this.projects.forEach(project => {
      let foundAllTags: boolean = true;
      filter.forEach(tag => {
        if (!project.technologies.includes(tag)) {
          foundAllTags = false;
        }
      });

      if (foundAllTags) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
    }
}
