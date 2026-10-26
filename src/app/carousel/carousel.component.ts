import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css',
    imports: [TranslatePipe]
})
export class CarouselComponent {
  @Input() images: string[] = [];
  currentIndex = 0;

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
