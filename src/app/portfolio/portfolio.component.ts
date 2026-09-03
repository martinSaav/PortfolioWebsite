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

  /** Todas las tecnologías presentes en los proyectos, ordenadas por uso. */
  availableTags: Tag[] = [];
  selectedTags: Tag[] = [];

  isCollapsed = true;

  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Portfolio');
  }

  ngOnInit(): void {
    this.projects = PROJECTS;
    this.availableTags = this.collectTags();
  }

  get filtering(): boolean {
    return this.selectedTags.length > 0;
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  isSelected(tag: Tag): boolean {
    return this.selectedTags.includes(tag);
  }

  /** Un proyecto entra si tiene al menos una de las tecnologías elegidas. */
  toggleTag(tag: Tag): void {
    this.selectedTags = this.isSelected(tag)
      ? this.selectedTags.filter(selected => selected !== tag)
      : [...this.selectedTags, tag];

    this.projects = this.filtering
      ? PROJECTS.filter(project =>
          project.technologies.some(technology => this.selectedTags.includes(technology)))
      : PROJECTS;
  }

  clearFilter(): void {
    this.selectedTags = [];
    this.projects = PROJECTS;
  }

  /** Tecnologías únicas de todos los proyectos, las más usadas primero. */
  private collectTags(): Tag[] {
    const usage = new Map<Tag, number>();
    for (const project of PROJECTS) {
      for (const technology of project.technologies) {
        usage.set(technology, (usage.get(technology) ?? 0) + 1);
      }
    }
    return [...usage.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].toString().localeCompare(b[0].toString()))
      .map(([tag]) => tag);
  }
}
