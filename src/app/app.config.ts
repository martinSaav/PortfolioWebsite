import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { DialogModule } from '@angular/cdk/dialog';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEs from '@angular/common/locales/es';

import { routes } from './app.routes';

// Datos de locale para que el DatePipe formatee los meses en español.
registerLocaleData(localeEs, 'es');

export function httpLoaderFactory(http: HttpClient) {
  // Prefijo relativo ('./') para que resuelva contra el <base href>: en GitHub
  // Pages la app se sirve desde /PortfolioWebsite/ y no desde la raíz.
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    // Sin zone.js: la detección de cambios la disparan los eventos del
    // template, los pipes async y las llamadas explícitas a detectChanges.
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'disabled' })),
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(
      DialogModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};
