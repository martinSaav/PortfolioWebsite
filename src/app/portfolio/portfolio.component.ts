import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  constructor(@Inject(Title) private titleService: Title) {
    this.titleService.setTitle('Martin Estrada - Portfolio');
  }
}
