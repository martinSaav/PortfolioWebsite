import { Component, Inject, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CV_FILE_IDS, cvDownloadUrl, cvViewUrl } from '../_data/cv.data';

interface CvOption {
  lang: string;
  titleKey: string;
  fileId: string;
}

@Component({
  standalone: false,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  readonly options: CvOption[] = [
    { lang: 'es', titleKey: 'RESUME.SPANISH_TITLE', fileId: CV_FILE_IDS['es'] },
    { lang: 'en', titleKey: 'RESUME.ENGLISH_TITLE', fileId: CV_FILE_IDS['en'] }
  ];

  constructor(@Inject(Title) private titleService: Title, @Inject(Renderer2) private renderer: Renderer2) {
    this.titleService.setTitle('Martin Estrada - Resume');
  }

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
