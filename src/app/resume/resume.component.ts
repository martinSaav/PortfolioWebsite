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

  downloadFile(): void {
    let link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/pdf/CV_martin_estrada.pdf');
    link.setAttribute('download', 'CV_martin_estrada.pdf');
    link.click();
    link.remove();
  }
}
