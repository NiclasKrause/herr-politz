export interface Certification {
  name: string;
  issuer: string;
}

/**
 * Nur tatsächlich verifizierte Zertifizierungen aufnehmen.
 * Aktuell keine gesicherten Angaben vorhanden – Liste bewusst leer.
 */
export const certifications: Certification[] = [];
