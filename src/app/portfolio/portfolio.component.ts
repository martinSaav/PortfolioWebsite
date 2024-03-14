import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  project: Project = {
    id: 1,
    name: 'Project 1',
    summary: 'Summary of Project 1',
    description: 'Description of Project 1',
    projectLink: '',
    images: [''],
    technologies: [Tag.ANGULAR, Tag.TYPESCRIPT]
  };
  
  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Portfolio');
  }
}
