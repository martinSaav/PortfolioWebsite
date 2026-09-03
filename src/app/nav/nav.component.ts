import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

interface NavSection {
  id: string;
  labelKey: string;
}

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  /** Secciones del nav, en el mismo orden en que aparecen en la pagina. */
  readonly sections: NavSection[] = [
    { id: 'home', labelKey: 'NAV.HOME' },
    { id: 'experience', labelKey: 'NAV.EXPERIENCE' },
    { id: 'portfolio', labelKey: 'NAV.PORTFOLIO' },
    { id: 'resume', labelKey: 'NAV.RESUME' },
    { id: 'contact', labelKey: 'NAV.CONTACT' }
  ];

  activeSection = 'home';
  scrollProgress = 0;
  currentLang = 'es';
  private isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private readonly translate: TranslateService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.currentLang = translate.currentLang || 'es';
  }

  setLang(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  /**
   * Lleva a la seccion sin pasar por el router: `scrollIntoView` respeta el
   * `scroll-margin-top`, asi el destino queda justo debajo de la barra sticky.
   * El hash se actualiza a mano para que la URL siga siendo compartible.
   */
  goTo(section: string, event: Event): void {
    this.activeSection = section;
    if (!this.isBrowser) return;

    const target = document.getElementById(section);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${section}`);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!this.isBrowser) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    // Al final de la pagina la ultima seccion nunca llega a cruzar el umbral,
    // porque ya no queda scroll: ahi se la marca activa directamente.
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      this.activeSection = this.sections[this.sections.length - 1].id;
      return;
    }

    const trigger = window.innerHeight * 0.45;
    let current = this.sections[0].id;
    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el && el.getBoundingClientRect().top <= trigger) {
        current = section.id;
      }
    }
    this.activeSection = current;
  }
}
