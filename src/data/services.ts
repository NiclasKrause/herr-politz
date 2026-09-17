export interface ServiceArea {
  index: string;
  slug: string;
  title: string;
  subline: string;
  intro: string;
  leistungen: string[];
  ctaLabel: string;
  navLabel: string;
}

export const services: ServiceArea[] = [
  {
    index: "01",
    slug: "tiefbau",
    title: "TIEFBAU",
    subline: "DORT ANFANGEN, WO MAN SPÄTER NICHTS MEHR SIEHT.",
    intro:
      "Unser Leistungsspektrum im Tiefbau reicht von anspruchsvollen Gründungsarbeiten über schweren Erdbau bis zu Entwässerungssystemen, Straßenbau- und Pflasterarbeiten.",
    leistungen: [
      "Gründungsarbeiten",
      "Schwerer Erdbau",
      "Entwässerungssysteme",
      "Straßenbau",
      "Pflasterarbeiten",
      "Abwasserbehandlungsanlagen",
      "Pumpwerke",
      "Rückhalteanlagen",
      "Versickerungsrigolen",
    ],
    ctaLabel: "TIEFBAU ENTDECKEN",
    navLabel: "Tiefbau",
  },
  {
    index: "02",
    slug: "tankplaetze-lau-anlagen",
    title: "TANKPLÄTZE & LAU-ANLAGEN",
    subline: "SICHERHEIT BEGINNT IM UNTERGRUND.",
    intro:
      "Tankplätze und LAU-Anlagen nach WHG gehören zu unserem ursprünglichen Kerngeschäft. Gemeinsam mit erfahrenen Partnern aus Tanktechnik und Rohrleitungsbau realisieren wir Lösungen von der schlüsselfertigen Tankstelle bis zur kleinteiligen Fugensanierung.",
    leistungen: [
      "Tankplätze nach WHG",
      "LAU-Anlagen – Neubau",
      "LAU-Anlagen – Sanierung",
      "Betankungsflächen",
      "Waschplätze",
      "Fugensanierung",
      "Fettabscheider",
      "Ölabscheider",
      "Koaleszenzabscheider",
    ],
    ctaLabel: "FACHBEREICH ANSEHEN",
    navLabel: "Tankplätze & LAU-Anlagen",
  },
  {
    index: "03",
    slug: "hochbau",
    title: "HOCHBAU",
    subline: "WAS BLEIBT, MUSS RICHTIG GEBAUT SEIN.",
    intro:
      "Die Erstellung von Rohbauten aus Mauerwerk und im Stahlbetonbau – konventionell, in Halbfertigteil- oder Vollfertigteilbauweise – gehört zu den Kernkompetenzen unserer langjährigen Mitarbeiter. Auf Wunsch in schnittstellenarmer Abwicklung mit zugehörigem Tiefbau und Außenanlagen.",
    leistungen: [
      "Rohbau",
      "Mauerwerk",
      "Stahlbetonbau",
      "Konventionelle Bauweise",
      "Halbfertigteilbauweise",
      "Vollfertigteilbauweise",
    ],
    ctaLabel: "HOCHBAU ENTDECKEN",
    navLabel: "Hochbau",
  },
];

export function getServiceBySlug(slug: string): ServiceArea | undefined {
  return services.find((s) => s.slug === slug);
}
