import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  displayedRole = '';
  private readonly fullRole = 'Desarrollador FullStack';
  private typingTimer?: ReturnType<typeof setTimeout>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private cdr: ChangeDetectorRef
  ) {
    if (!isPlatformBrowser(this.platformId)) {
      this.displayedRole = this.fullRole;
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  private startTyping(): void {
    let i = 0;
    const type = () => {
      this.displayedRole = this.fullRole.slice(0, i);
      this.cdr.detectChanges();
      if (i <= this.fullRole.length) {
        i++;
        this.typingTimer = setTimeout(type, 75);
      }
    };
    this.typingTimer = setTimeout(type, 400);
  }
}
