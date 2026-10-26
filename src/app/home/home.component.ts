import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { PROJECTS } from '../_data/projects.data';
import { CarouselComponent } from '../carousel/carousel.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent, TranslatePipe]
})
export class HomeComponent implements OnInit {

  featuredProject: Project = {} as Project;


  ngOnInit(): void {
    this.featuredProject = PROJECTS.find(project => project.featured) ?? PROJECTS[0];
  }
}
