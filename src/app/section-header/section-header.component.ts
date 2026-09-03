import { Component, Input } from '@angular/core';

/**
 * Encabezado comun de las secciones: etiqueta chica en mayusculas, titulo
 * grande y bajada opcional. Unifica el estilo que ya usaba Contacto.
 */
@Component({
  standalone: false,
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent {
  /** Clave i18n de la etiqueta chica (el nombre de la seccion). */
  @Input() eyebrowKey = '';
  /** Clave i18n del titulo. */
  @Input() headingKey = '';
  /** Clave i18n de la bajada. Opcional. */
  @Input() subKey?: string;
}
