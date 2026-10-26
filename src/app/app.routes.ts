import { Routes } from '@angular/router';

// El sitio es una sola página: el nav resuelve el scroll entre secciones con
// scrollIntoView, así que acá sólo hace falta absorber cualquier ruta.
export const routes: Routes = [
  { path: '**', children: [] }
];
