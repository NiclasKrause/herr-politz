export interface FieldPhoto {
  id: string;
  file: number;
  src: string;
  discipline: "TIEFBAU" | "HOCHBAU" | "LAU" | "MASCHINEN";
  status: "EXECUTION" | "GRÜNDUNG" | "AUSFÜHRUNG" | "FLOTTE";
  location?: string;
  alt: string;
}

/**
 * Reale Baustellen- und Maschinenfotografie von hp-bau.de. Keine Projektnamen
 * oder Orte erfunden - "location" nur gesetzt, wenn im Bild selbst sichtbar
 * (z. B. Markenbeschriftung am Gebäude).
 */
export const fieldLog: FieldPhoto[] = [
  {
    id: "tiefbau-01",
    file: 1,
    src: "/photos/tiefbau/pflaster-entwaesserung-01.jpg",
    discipline: "TIEFBAU",
    status: "AUSFÜHRUNG",
    alt: "Entwässerungsrinne und Pflasterarbeiten auf einer Baustelle, Minibagger im Einsatz",
  },
  {
    id: "lau-01",
    file: 2,
    src: "/photos/lau/tankanlage-gruendung-01.jpg",
    discipline: "LAU",
    status: "GRÜNDUNG",
    alt: "Gründungsarbeiten an einer Tankanlage mit Bewehrung, im Hintergrund Lagertanks",
  },
  {
    id: "tiefbau-02",
    file: 3,
    src: "/photos/tiefbau/marktkauf-pflaster-01.jpg",
    discipline: "TIEFBAU",
    status: "AUSFÜHRUNG",
    location: "Marktkauf Center",
    alt: "Pflasterarbeiten vor einem Marktkauf Center, Bagger und Radlader im Einsatz",
  },
  {
    id: "tiefbau-03",
    file: 4,
    src: "/photos/tiefbau/marktkauf-pflaster-02.jpg",
    discipline: "TIEFBAU",
    status: "AUSFÜHRUNG",
    location: "Marktkauf Center",
    alt: "Fertiggestellte Pflasterfläche vor einem Einkaufszentrum",
  },
  {
    id: "tiefbau-04",
    file: 5,
    src: "/photos/tiefbau/erdarbeiten-stadion-01.jpg",
    discipline: "TIEFBAU",
    status: "AUSFÜHRUNG",
    location: "Volksparkstadion Hamburg",
    alt: "Bagger bei Erdarbeiten im Innenraum eines Fußballstadions",
  },
  {
    id: "maschinen-01",
    file: 6,
    src: "/photos/maschinen/flotte-erdbau-01.jpg",
    discipline: "MASCHINEN",
    status: "FLOTTE",
    alt: "Radlader und Kettenbagger beim Beschicken einer Siebanlage",
  },
  {
    id: "hochbau-01",
    file: 7,
    src: "/photos/hochbau/rohbau-industrie-01.jpg",
    discipline: "HOCHBAU",
    status: "AUSFÜHRUNG",
    alt: "Bewehrung und Schalung im Industrieumfeld, Hafenkräne im Hintergrund",
  },
  {
    id: "tiefbau-05",
    file: 8,
    src: "/photos/tiefbau/gruendung-pfaehle-01.jpg",
    discipline: "TIEFBAU",
    status: "GRÜNDUNG",
    alt: "Freigelegte Gründungspfähle auf einer Baustelle, Vermessung durch Mitarbeiter",
  },
  {
    id: "hochbau-02",
    file: 9,
    src: "/photos/hochbau/rohbau-rostock-01.jpg",
    discipline: "HOCHBAU",
    status: "AUSFÜHRUNG",
    alt: "Stahlbetonrohbau mit Schalung und Kran, Plattenbauten im Hintergrund",
  },
  {
    id: "maschinen-02",
    file: 10,
    src: "/photos/maschinen/fuhrpark-radlader-01.jpg",
    discipline: "MASCHINEN",
    status: "FLOTTE",
    alt: "Reihe von Radladern vor dem Firmengebäude",
  },
  {
    id: "hochbau-03",
    file: 11,
    src: "/photos/hochbau/gruendung-bewehrung-01.jpg",
    discipline: "HOCHBAU",
    status: "GRÜNDUNG",
    alt: "Großflächige Bewehrungsmatte für eine Bodenplatte, Kran im Einsatz",
  },
];

export function fieldPhotoById(id: string): FieldPhoto | undefined {
  return fieldLog.find((p) => p.id === id);
}
