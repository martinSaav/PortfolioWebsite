import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { PROJECTS } from '../_data/projects.data';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProject: Project = {} as Project;

  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Home');
  }

  ngOnInit(): void {
    this.featuredProject = PROJECTS[0];
  }
}
