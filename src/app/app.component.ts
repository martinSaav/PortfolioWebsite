import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'PortfolioWebsite';

  constructor(
    private readonly el: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly translate: TranslateService
  ) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

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
