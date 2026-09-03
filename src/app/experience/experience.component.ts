import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Experience } from '../_models/Experience';
import { EXPERIENCES } from '../_data/experience.data';

interface ExperienceView {
  experience: Experience;
  start: Date;
  end: Date | null;
  years: number;
  months: number;
}

@Component({
  standalone: false,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit, OnDestroy {

  items: ExperienceView[] = [];
  /** Locale para el DatePipe: sigue al idioma elegido en el nav. */
  lang = 'es';

  private langSub?: Subscription;

  constructor(private readonly translate: TranslateService) {}

  ngOnInit(): void {
    this.items = EXPERIENCES.map(experience => this.toView(experience));
    this.lang = this.translate.currentLang || this.translate.getDefaultLang() || 'es';
    this.langSub = this.translate.onLangChange.subscribe(event => this.lang = event.lang);
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  getDelay(index: number): number {
    return index * 90;
  }

  private toView(experience: Experience): ExperienceView {
    const start = this.toDate(experience.startDate);
    const end = experience.endDate ? this.toDate(experience.endDate) : null;
    // Se cuenta el mes de inicio y el de fin, como es habitual en un CV.
    const closing = end ?? new Date();
    const total = Math.max(
      1,
      (closing.getFullYear() - start.getFullYear()) * 12 + (closing.getMonth() - start.getMonth()) + 1
    );
    return { experience, start, end, years: Math.floor(total / 12), months: total % 12 };
  }

  /** 'YYYY-MM' -> Date en hora local, evitando el corrimiento de `new Date(string)`. */
  private toDate(value: string): Date {
    const [year, month] = value.split('-').map(Number);
    return new Date(year, month - 1, 1);
  }
}
