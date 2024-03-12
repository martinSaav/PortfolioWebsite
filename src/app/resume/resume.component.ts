import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  
  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Resume');
  }
}
