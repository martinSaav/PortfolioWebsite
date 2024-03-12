import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Contact');
  }
}
