import { Component, Inject, Renderer2 } from '@angular/core';
import { CV_FILE_IDS, cvDownloadUrl, cvViewUrl } from '../_data/cv.data';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { UpperCasePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface CvOption {
  lang: string;
  titleKey: string;
  fileId: string;
}

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css',
    imports: [SectionHeaderComponent, UpperCasePipe, TranslatePipe]
})
export class ResumeComponent {

  readonly options: CvOption[] = [
    { lang: 'es', titleKey: 'RESUME.SPANISH_TITLE', fileId: CV_FILE_IDS['es'] },
    { lang: 'en', titleKey: 'RESUME.ENGLISH_TITLE', fileId: CV_FILE_IDS['en'] }
  ];

  constructor(@Inject(Renderer2) private renderer: Renderer2) {}

  downloadFile(fileId: string): void {
    const link = this.renderer.createElement('a');
    link.setAttribute('href', cvDownloadUrl(fileId));
    link.click();
    link.remove();
  }

  viewFile(fileId: string): void {
    window.open(cvViewUrl(fileId), '_blank');
  }
}
