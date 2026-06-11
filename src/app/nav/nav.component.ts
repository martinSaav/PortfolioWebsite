import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  activeSection = 'home';
  scrollProgress = 0;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!this.isBrowser) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    this.updateActiveSection();
  }

  setActive(section: string): void {
    this.activeSection = section;
  }

  private updateActiveSection(): void {
    const sections = ['home', 'portfolio', 'resume', 'contact'];
    const trigger = window.innerHeight * 0.45;
    let current = 'home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= trigger) {
        current = id;
      }
    }
    this.activeSection = current;
  }
}
