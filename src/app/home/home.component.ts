import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProject: Project = {} as Project;

  constructor(@Inject(Title) private titleService: Title, @Inject(ProjectService) private projectService: ProjectService ) {
    this.titleService.setTitle('Martin Estrada - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProject(0);
  }
}
