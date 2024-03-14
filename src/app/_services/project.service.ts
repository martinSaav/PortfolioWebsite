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
      images: ['project1.png'],
      technologies: [Tag.ANGULAR, Tag.JAVA, Tag.SPRING],
    },
    {
      id: 1,
      name: 'Project 2',
      summary: 'This is a summary of project 2',
      description: 'This is a description of project 2',
      projectLink: ' ',
      images: ['project2.png'],
      technologies: [Tag.ANGULAR],
    },
    {
      id: 2,
      name: 'Project 3',
      summary: 'This is a summary of project 3',
      description: 'This is a description of project 3',
      projectLink: ' ',
      images: ['project3.png'],
      technologies: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 3,
      name: 'Project 4',
      summary: 'This is a summary of project 4',
      description: 'This is a description of project 4',
      projectLink: ' ',
      images: ['project4.png'],
      technologies: [Tag.POSTGRESQL, Tag.CSS, Tag.HTML],
    }];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProject(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('The project with id ' + id + ' does not exist');
    }
    return project;
  }
}
