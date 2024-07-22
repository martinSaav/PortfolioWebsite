import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectService } from '../_services/project.service';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = {} as Project[];

  isCollapsed: boolean = true;
  javaScript: boolean = false;
  typeScript: boolean = false;
  angular: boolean = false;
  filtering: boolean = false;

  constructor(@Inject(Title) private titleService: Title, @Inject(ProjectService) private projectService: ProjectService) {
    this.titleService.setTitle('Martin Estrada - Portfolio');
  }
  
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  filterProjects(): void {
    let filtertags: Tag[] = [];

    if (this.javaScript) {
      filtertags.push(Tag.JAVASCRIPT);
    }

    if (this.typeScript) {
      filtertags.push(Tag.TYPESCRIPT);
    }

    if (this.angular) {
      filtertags.push(Tag.ANGULAR);
    }

    if (this.typeScript || this.angular || this.javaScript) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filtertags);
  }

  clearFilter(): void {
    this.typeScript = false;
    this.angular = false;
    this.javaScript = false;
    this.projects = this.projectService.getProjects();
    this.filtering = false;
  }
}
