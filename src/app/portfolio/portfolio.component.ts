import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { PROJECTS } from '../_data/projects.data';

@Component({
  standalone: false,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden', opacity: 0 })),
      state('expanded', style({ height: '*', overflow: 'visible', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [];

  isCollapsed: boolean = true;
  javaScript: boolean = false;
  typeScript: boolean = false;
  angular: boolean = false;
  filtering: boolean = false;

  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Portfolio');
  }

  ngOnInit(): void {
    this.projects = PROJECTS;
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  filterProjects(): void {
    const filterTags: Tag[] = [];

    if (this.javaScript) {
      filterTags.push(Tag.JAVASCRIPT);
    }

    if (this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    this.filtering = filterTags.length > 0;

    this.projects = PROJECTS.filter(
      project => filterTags.every(tag => project.technologies.includes(tag))
    );
  }

  clearFilter(): void {
    this.typeScript = false;
    this.angular = false;
    this.javaScript = false;
    this.projects = PROJECTS;
    this.filtering = false;
  }
}
