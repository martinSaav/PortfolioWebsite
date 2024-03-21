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
      name: 'Projecto 1',
      summary: 'Este es el resumen del proyecto 1',
      description: 'Esta es la descripcion del proyecto 1',
      projectLink: ' ',
      images: ["../../assets/imgs/img1.png", "../../assets/imgs/img2.png", "../../assets/imgs/img3.png"],
      technologies: [Tag.ANGULAR, Tag.JAVA, Tag.SPRING],
    },
    {
      id: 1,
      name: 'Projecto 2',
      summary: 'Este es el resumen del proyecto 2',
      description: 'Esta es la descripcion del proyecto 2',
      projectLink: ' ',
      images: ["../../assets/imgs/img1.png", "../../assets/imgs/img2.png", "../../assets/imgs/img3.png"],
      technologies: [Tag.ANGULAR],
    },
    {
      id: 2,
      name: 'Projecto 3',
      summary: 'Este es el resumen del proyecto 3',
      description: 'Esta es la descripcion del proyecto 3',
      projectLink: ' ',
      images: ["../../assets/imgs/img1.png", "../../assets/imgs/img2.png", "../../assets/imgs/img3.png"],
      technologies: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 3,
      name: 'Projecto 4',
      summary: 'Este es el resumen del proyecto 4',
      description: 'Esta es la descripcion del proyecto 4',
      projectLink: ' ',
      images: ["../../assets/imgs/img1.png", "../../assets/imgs/img2.png", "../../assets/imgs/img3.png"],
      technologies: [Tag.POSTGRESQL, Tag.CSS, Tag.HTML],
    }];

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
