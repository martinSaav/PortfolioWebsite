import { Component, Inject, Input, OnChanges } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { TranslatePipe } from '@ngx-translate/core';

/** Tecnologias que se muestran en la tarjeta; el resto queda como "+N". */
const MAX_VISIBLE_TAGS = 4;

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css',
    imports: [TranslatePipe]
})
export class ProjectCardComponent implements OnChanges {

  @Input() project: Project = {} as Project;

  visibleTags: Tag[] = [];
  hiddenTagCount = 0;

  constructor(@Inject(Dialog) private dialog: Dialog) {}

  ngOnChanges(): void {
    const technologies = this.project.technologies ?? [];
    this.visibleTags = technologies.slice(0, MAX_VISIBLE_TAGS);
    this.hiddenTagCount = Math.max(0, technologies.length - MAX_VISIBLE_TAGS);
  }

  openProjectModal(): void {
    this.dialog.open(ProjectModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      data: this.project,
    });
  }
}
