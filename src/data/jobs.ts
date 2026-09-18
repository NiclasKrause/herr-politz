export interface Job {
  slug: string;
  title: string;
  area: string;
  skill: "MASCHINEN" | "KANALBAU" | "BAUSTELLENFUEHRUNG" | "SONSTIGES";
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
    skill: "MASCHINEN",
    description:
      "Bewegen Sie Erde und Berge auf unserer Baustelle und profitieren Sie von zusätzlichen Prämien.",
  },
  {
    slug: "facharbeiter-kanalbau",
    title: "Facharbeiter im Kanalbau",
    area: "Tiefbau",
    skill: "KANALBAU",
    description:
      "Die Kunst der unterirdischen Meisterwerke. Tauchen Sie mit uns ein in die geheimnisvolle Welt unter unseren Füßen.",
  },
  {
    slug: "polier-tiefbau",
    title: "Polier im Tiefbau",
    area: "Tiefbau",
    skill: "BAUSTELLENFUEHRUNG",
    description:
      "Mit uns bauen Sie auf Erfolg! Überwachen, koordinieren und gestalten Sie Projekte mit Präzision und Motivation.",
  },
];

export const skillLabels: Record<Job["skill"], string> = {
  MASCHINEN: "Maschinen",
  KANALBAU: "Kanalbau",
  BAUSTELLENFUEHRUNG: "Baustellenführung",
  SONSTIGES: "Sonstiges",
};
