export interface Project {
  slug: string;
  name: string;
  location: string;
  year: string;
  category: string;
  span: "full" | "wide" | "narrow";
  summary: string;
  scope?: string;
  execution?: string;
  specifics?: string;
  client?: string;
  image?: string;
}

/**
 * Es liegen aktuell keine freigegebenen, strukturierten Referenzprojekte
 * (Name, Ort, Jahr, Leistungsbereich, Bildmaterial) vor. Diese Liste bewusst
 * leer lassen, bis reale, bestätigte Projekte zur Veröffentlichung freigegeben
 * werden – keine Platzhalterprojekte erfinden.
 */
export const projects: Project[] = [];
