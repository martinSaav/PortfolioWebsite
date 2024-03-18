import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Project 1',
      summary: 'This is a summary of project 1',
      description: 'This is a description of project 1',
      projectLink: ' ',
      images: ["../../assets/imgs/img1.png", "../../assets/imgs/img2.png", "../../assets/imgs/img3.png"],
      technologies: [Tag.ANGULAR, Tag.JAVA, Tag.SPRING],
    },
    {
      id: 1,
      name: 'Project 2',
      summary: 'This is a summary of project 2',
      description: 'This is a description of project 2',
      projectLink: ' ',
      images: ["../../assets/imgs/img1.png", "../../assets/imgs/img2.png", "../../assets/imgs/img3.png"],
      technologies: [Tag.ANGULAR],
    },
    {
      id: 2,
      name: 'Project 3',
      summary: 'This is a summary of project 3',
      description: 'This is a description of project 3',
      projectLink: ' ',
      images: ["../../assets/imgs/img1.png", "../../assets/imgs/img2.png", "../../assets/imgs/img3.png"],
      technologies: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 3,
      name: 'Project 4',
      summary: 'This is a summary of project 4',
      description: 'This is a description of project 4',
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
