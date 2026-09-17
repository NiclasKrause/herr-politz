export interface Job {
  slug: string;
  title: string;
  area: string;
  description: string;
}

/**
 * Stand der offenen Stellen zum Zeitpunkt der Analyse (hp-bau.de/karriere).
 * Vor Veröffentlichung mit der aktuellen Website abgleichen.
 */
export const jobs: Job[] = [
  {
    slug: "baggerfahrer",
    title: "Baggerfahrer",
    area: "Tiefbau",
    description:
      "Sie bewegen Erdmassen auf unseren Baustellen und sorgen mit Erfahrung und Präzision für einen reibungslosen Bauablauf.",
  },
  {
    slug: "facharbeiter-kanalbau",
    title: "Facharbeiter im Kanalbau",
    area: "Tiefbau",
    description:
      "Sie übernehmen die fachgerechte Verlegung und Instandsetzung von Kanal- und Rohrsystemen.",
  },
  {
    slug: "polier-tiefbau",
    title: "Polier im Tiefbau",
    area: "Tiefbau",
    description:
      "Sie überwachen und koordinieren unsere Tiefbauprojekte vor Ort und sind zentraler Ansprechpartner auf der Baustelle.",
  },
];
