import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  displayedRole = '';
  private fullRole = 'Desarrollador de Software';
  private typingTimer?: ReturnType<typeof setTimeout>;
  private langSub?: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly cdr: ChangeDetectorRef,
    private readonly translate: TranslateService
  ) {
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
