import { ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Project } from '../_models/Project';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent implements OnDestroy {

  private langSub: Subscription;

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public project: Project,
    private readonly cdr: ChangeDetectorRef,
    private readonly translate: TranslateService
  ) {
    this.langSub = translate.onLangChange.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }

  closeProjectModal(): void {
    this.dialogRef.close();
  }
}
