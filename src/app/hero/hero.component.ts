import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CV_FILE_IDS, cvDownloadUrl } from '../_data/cv.data';

@Component({
  standalone: false,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {

  /** Texto del rol que se va escribiendo letra por letra. */
  displayedRole = '';

  private fullRole = 'Desarrollador de Software';
  private typingTimer?: ReturnType<typeof setTimeout>;
  private langSub?: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly cdr: ChangeDetectorRef,
    private readonly renderer: Renderer2,
    private readonly translate: TranslateService
  ) {
    // En el prerender no hay animación: se emite el rol completo para que el
    // HTML servido ya tenga el texto.
    if (!isPlatformBrowser(this.platformId)) {
      this.displayedRole = this.fullRole;
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.langSub = this.translate.stream('HEADER.ROLE').subscribe(role => {
      this.fullRole = role;
      if (this.typingTimer) clearTimeout(this.typingTimer);
      this.displayedRole = '';
      this.cdr.detectChanges();
      this.startTyping();
    });
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
    this.langSub?.unsubscribe();
  }

  /**
   * El salto por hash aterriza corrido porque el layout todavía se acomoda
   * después del scroll; `scrollIntoView` sobre el elemento respeta el
   * `scroll-margin-top` y lo deja justo debajo de la barra.
   */
  goToPortfolio(event: Event): void {
    const target = document.getElementById('portfolio');
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /** Descarga el CV del idioma activo, con el español como respaldo. */
  downloadCv(): void {
    const lang = this.translate.currentLang || this.translate.getDefaultLang() || 'es';
    const fileId = CV_FILE_IDS[lang] ?? CV_FILE_IDS['es'];
    const link = this.renderer.createElement('a');
    link.setAttribute('href', cvDownloadUrl(fileId));
    link.click();
    link.remove();
  }

  private startTyping(): void {
    const typeForward = (i: number) => {
      this.displayedRole = this.fullRole.slice(0, i);
      this.cdr.detectChanges();
      if (i < this.fullRole.length) {
        this.typingTimer = setTimeout(() => typeForward(i + 1), 75);
      } else {
        this.typingTimer = setTimeout(() => eraseBack(this.fullRole.length), 5000);
      }
    };

    const eraseBack = (i: number) => {
      this.displayedRole = this.fullRole.slice(0, i);
      this.cdr.detectChanges();
      if (i > 0) {
        this.typingTimer = setTimeout(() => eraseBack(i - 1), 45);
      } else {
        this.typingTimer = setTimeout(() => typeForward(0), 500);
      }
    };

    this.typingTimer = setTimeout(() => typeForward(0), 400);
  }
}
