import { Component, Inject, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  
  constructor(@Inject(Title) private titleService: Title, @Inject(Renderer2) private renderer: Renderer2) {
    this.titleService.setTitle('Martin Estrada - Resume');
  }

  downloadFile(fileId: string) {
    const googleDriveUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = this.renderer.createElement('a');
    link.setAttribute('href', googleDriveUrl);
    link.click();
    link.remove();
  }
  openLink(link: string) {
    window.open(link, '_blank');
  }
}
