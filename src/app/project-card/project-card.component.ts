import { Component, Inject, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project: Project = {} as Project;

  bsModalRef ?: BsModalRef;

  constructor(@Inject(BsModalService) private modalService: BsModalService) { 
  }

  openProjectModal() {
    const ModalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, ModalOptions);
  }
}
