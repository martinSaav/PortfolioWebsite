import { Component, Inject, Input } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Project } from '../_models/Project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  standalone: false,
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project: Project = {} as Project;

  constructor(@Inject(Dialog) private dialog: Dialog) {}

  openProjectModal(): void {
    this.dialog.open(ProjectModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      data: this.project,
    });
  }
}
