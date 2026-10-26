import { ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Project } from '../_models/Project';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
    selector: 'app-project-modal',
    templateUrl: './project-modal.component.html',
    styleUrl: './project-modal.component.css',
    imports: [CarouselComponent, TranslatePipe]
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
