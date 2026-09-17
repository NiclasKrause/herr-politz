export interface Machine {
  name: string;
  manufacturer: string;
  type: string;
  usage: string;
}

/**
 * Die bestehende Kommunikation erwähnt einen umfangreichen Maschinenpark,
 * ohne einzelne Maschinen mit Hersteller/Typ zu benennen. Liste bewusst leer
 * lassen, bis verifizierte Angaben vorliegen – keine Maschinentypen erfinden.
 */
export const machines: Machine[] = [];
