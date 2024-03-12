import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Home');
  }
}
