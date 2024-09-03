import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'PortfolioWebsite';

  constructor(private el: ElementRef) {}


  ngAfterViewInit(): void {
     const elements = this.el.nativeElement.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    elements.forEach((element: Element) => {
      observer.observe(element);
    });
  }
  
}
