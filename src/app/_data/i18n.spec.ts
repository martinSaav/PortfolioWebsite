import es from '../../assets/i18n/es.json';
import en from '../../assets/i18n/en.json';
import { PROJECTS } from './projects.data';
import { EXPERIENCES } from './experience.data';
import { CERTIFICATIONS } from './certifications.data';

type Dict = Record<string, string>;
const ES = es as Dict;
const EN = en as Dict;

/**
 * El sitio es bilingüe y las claves se escriben a mano en dos archivos: lo que
 * más se rompe es agregar algo en español y olvidarlo en inglés, o referenciar
 * desde los datos una clave que no existe.
 */
describe('traducciones', () => {

  it('los dos idiomas tienen exactamente las mismas claves', () => {
    const soloEs = Object.keys(ES).filter(k => !(k in EN));
    const soloEn = Object.keys(EN).filter(k => !(k in ES));
    expect(soloEs).withContext('faltan en en.json').toEqual([]);
    expect(soloEn).withContext('faltan en es.json').toEqual([]);
  });

  it('no hay traducciones vacías', () => {
    for (const [nombre, dict] of [['es', ES], ['en', EN]] as const) {
      const vacias = Object.keys(dict).filter(k => !dict[k].trim());
      expect(vacias).withContext(nombre).toEqual([]);
    }
  });

  it('todas las claves que usan los datos existen en ambos idiomas', () => {
    const usadas = [
      ...PROJECTS.flatMap(p => [p.summaryKey, p.descriptionKey]),
      ...EXPERIENCES.flatMap(e => [e.roleKey, e.summaryKey, ...e.bulletKeys, ...(e.locationKey ? [e.locationKey] : [])]),
      ...CERTIFICATIONS.flatMap(c => [c.nameKey, c.category, ...(c.descriptionKey ? [c.descriptionKey] : [])])
    ];
    const faltan = usadas.filter(k => !(k in ES) || !(k in EN));
    expect([...new Set(faltan)]).toEqual([]);
  });

  it('no quedan claves huérfanas de proyectos borrados', () => {
    const vivas = new Set(PROJECTS.flatMap(p => [p.summaryKey, p.descriptionKey]));
    const huerfanas = Object.keys(ES).filter(k => k.startsWith('PROJECTS.') && !vivas.has(k));
    expect(huerfanas).toEqual([]);
  });
});
