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
    // La entrada se anima una sola vez: se deja de observar la seccion apenas
    // aparece, para que no vuelva a hacer fade cada vez que se pasa por encima.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    });

    elements.forEach((element: Element) => {
      observer.observe(element);
    });
  }

}
