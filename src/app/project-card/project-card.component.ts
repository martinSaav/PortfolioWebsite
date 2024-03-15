import { Component, Inject, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project: Project = {} as Project;

  bsModalRef?: BsModalRef;

  constructor(@Inject(BsModalService) private modalService: BsModalService) { 
  }

  openProjectModal() {
    this.bsModalRef = this.modalService.show('');
  }
}
