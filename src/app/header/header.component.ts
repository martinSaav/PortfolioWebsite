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
  private readonly fullRole = 'Software Developer';
  private typingTimer?: ReturnType<typeof setTimeout>;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly cdr: ChangeDetectorRef
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
