import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectService } from '../_services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects: Project[] = {} as Project[];


  constructor(@Inject(Title) private titleService: Title, @Inject(ProjectService) private projectsService: ProjectService) {
    this.titleService.setTitle('Martin Estrada - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
