import { PROJECTS } from './projects.data';
import { EXPERIENCES } from './experience.data';
import { CERTIFICATIONS } from '../_data/certifications.data';
import { CV_FILE_IDS } from './cv.data';

/**
 * Los datos del sitio son archivos editados a mano: estos tests protegen de
 * los errores típicos al agregar un proyecto o una experiencia (una clave i18n
 * mal escrita, un id repetido, una imagen que no existe en assets).
 */
describe('datos del sitio', () => {

  describe('proyectos', () => {
    it('no repite ids', () => {
      const ids = PROJECTS.map(p => p.id);
      expect(new Set(ids).size).withContext(`ids: ${ids}`).toBe(ids.length);
    });

    it('cada uno tiene nombre y claves de traducción con el prefijo correcto', () => {
      for (const p of PROJECTS) {
        expect(p.name.trim()).withContext(`id ${p.id}`).toBeTruthy();
        expect(p.summaryKey).withContext(p.name).toMatch(/^PROJECTS\.[A-Z0-9_]+\.SUMMARY$/);
        expect(p.descriptionKey).withContext(p.name).toMatch(/^PROJECTS\.[A-Z0-9_]+\.DESCRIPTION$/);
      }
    });

    it('las imágenes apuntan a assets y tienen extensión conocida', () => {
      for (const p of PROJECTS) {
        for (const img of p.images) {
          expect(img).withContext(p.name).toMatch(/^\.\/assets\/imgs\/.+\.(png|jpe?g|webp|svg)$/);
        }
      }
    });

    it('cada proyecto declara al menos una tecnología', () => {
      for (const p of PROJECTS) {
        expect(p.technologies.length).withContext(p.name).toBeGreaterThan(0);
      }
    });

    it('cada proyecto se puede abrir por algún lado: demo o repositorio', () => {
      for (const p of PROJECTS) {
        expect(p.projectLink || p.repoLink).withContext(p.name).toBeTruthy();
      }
    });

    it('a lo sumo un proyecto está marcado como destacado', () => {
      expect(PROJECTS.filter(p => p.featured).length).toBeLessThanOrEqual(1);
    });
  });

  describe('experiencia', () => {
    it('usa el formato YYYY-MM y el fin es posterior al inicio', () => {
      for (const e of EXPERIENCES) {
        expect(e.startDate).withContext(e.company).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/);
        if (e.endDate) {
          expect(e.endDate).withContext(e.company).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/);
          expect(e.endDate >= e.startDate).withContext(e.company).toBeTrue();
        }
      }
    });

    it('está ordenada de la más reciente a la más antigua', () => {
      const inicios = EXPERIENCES.map(e => e.startDate);
      expect([...inicios].sort().reverse()).toEqual(inicios);
    });

    it('como mucho un puesto sigue vigente', () => {
      expect(EXPERIENCES.filter(e => e.endDate === null).length).toBeLessThanOrEqual(1);
    });
  });

  describe('certificaciones', () => {
    it('cada una tiene categoría con el prefijo CERT. y fecha válida', () => {
      for (const c of CERTIFICATIONS) {
        expect(c.category).withContext(c.nameKey).toMatch(/^CERT\.[A-Z_]+$/);
        expect(isNaN(c.issueDate.getTime())).withContext(c.nameKey).toBeFalse();
      }
    });

    it('cada una tiene logo propio o un texto para mostrar en su lugar', () => {
      for (const c of CERTIFICATIONS) {
        expect(!!(c.image || c.logoText)).withContext(c.nameKey).toBeTrue();
        if (c.image) {
          expect(c.image).withContext(c.nameKey).toMatch(/^\.\/assets\/imgs\/.+\.(png|jpe?g|webp|svg)$/);
        }
      }
    });
  });

  describe('CV', () => {
    it('tiene un id de Drive por idioma', () => {
      for (const lang of ['es', 'en']) {
        expect(CV_FILE_IDS[lang]).withContext(lang).toBeTruthy();
      }
    });
  });
});
