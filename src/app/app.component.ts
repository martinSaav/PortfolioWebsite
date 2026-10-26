import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, NavComponent, HeroComponent, HomeComponent, ExperienceComponent, PortfolioComponent, CertificationsComponent, ResumeComponent, ContactComponent]
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
