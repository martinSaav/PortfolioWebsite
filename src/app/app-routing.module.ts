import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '**', component: AppComponent} 
];

// El sitio es una sola pagina: la navegacion entre secciones la resuelve el nav
// con scrollIntoView, que respeta el scroll-margin-top definido en styles.css.
// El anchorScrolling del router se deja apagado porque competia con eso y movia
// el destino de forma inconsistente.
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'disabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
