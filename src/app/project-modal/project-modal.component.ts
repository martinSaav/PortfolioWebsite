import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Project } from '../_models/Project';

@Component({
  standalone: false,
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public project: Project
  ) {}

  closeProjectModal(): void {
    this.dialogRef.close();
  }
}
