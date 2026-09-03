import { Component, Inject, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CV_FILE_IDS, cvDownloadUrl, cvViewUrl } from '../_data/cv.data';

@Component({
  standalone: false,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  readonly cvIds = CV_FILE_IDS;

  constructor(@Inject(Title) private titleService: Title, @Inject(Renderer2) private renderer: Renderer2) {
    this.titleService.setTitle('Martin Estrada - Resume');
  }

  downloadFile(fileId: string) {
    const link = this.renderer.createElement('a');
    link.setAttribute('href', cvDownloadUrl(fileId));
    link.click();
    link.remove();
  }

  viewFile(fileId: string) {
    window.open(cvViewUrl(fileId), '_blank');
  }
}
