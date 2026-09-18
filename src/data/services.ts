export interface ServiceArea {
  index: string;
  slug: string;
  title: string;
  layerHeadline: string[];
  heroHeadline: string[];
  heroSubline: string;
  intro: string;
  secondText: string;
  leistungen: string[];
  ctaLabel: string;
  navLabel: string;
  tag: string;
}

export const services: ServiceArea[] = [
  {
    index: "01",
    slug: "tiefbau",
    title: "TIEFBAU",
    layerHeadline: ["DORT, WO SPÄTER", "ALLES DARAUF STEHT."],
    heroHeadline: ["DAS PROJEKT", "BEGINNT UNTER", "DER OBERFLÄCHE."],
    heroSubline:
      "Gründung, Erdarbeiten, Entwässerung und Außenanlagen schaffen die Voraussetzungen für alles, was danach entsteht.",
    intro:
      "Im Tiefbau entscheidet sich früh, ob ein Projekt später reibungslos funktioniert. Deshalb denken wir Erdarbeiten, Entwässerung, Gründung und Außenanlagen nicht isoliert, sondern als Teil des gesamten Bauablaufs.",
    secondText:
      "Unser Leistungsspektrum im Tiefbau reicht von anspruchsvollen Gründungsarbeiten über schweren Erdbau bis zu Entwässerungssystemen, Straßenbau- und Pflasterarbeiten.",
    leistungen: [
      "Gründungsarbeiten",
      "Schwerer Erdbau",
      "Entwässerung",
      "Straßenbau",
      "Pflasterarbeiten",
      "Abwasserbehandlungsanlagen",
      "Pumpwerke",
      "Rückhalteanlagen",
      "Versickerungsrigolen",
    ],
    ctaLabel: "TIEFBAU ANFRAGEN",
    navLabel: "Tiefbau",
    tag: "TIEFBAU",
  },
  {
    index: "02",
    slug: "tankplaetze-lau",
    title: "TANKPLÄTZE / LAU",
    layerHeadline: ["WO UMWELTSCHUTZ", "AUF BAUTECHNIK", "TRIFFT."],
    heroHeadline: ["DICHTHEIT", "IST KEINE", "DETAILFRAGE."],
    heroSubline:
      "Tankplätze und LAU-Anlagen stellen besondere Anforderungen an Konstruktion, Abdichtung und Ausführung.",
    intro:
      "Bei Flächen und Anlagen zum Umgang mit wassergefährdenden Stoffen reicht es nicht, dass eine Konstruktion gut aussieht. Sie muss technisch funktionieren, dauerhaft dicht sein und in den betrieblichen Ablauf passen.",
    secondText:
      "HERR & POLITZ verbindet bauliche Ausführung mit der Erfahrung aus einem Geschäftsfeld, das seit den Anfängen des Unternehmens eine besondere Rolle spielt.",
    leistungen: [
      "Neubau von Tankplätzen und LAU-Anlagen",
      "Sanierung bestehender Anlagen",
      "Betankungsflächen",
      "Waschplätze",
      "Fugensanierung",
      "Fettabscheider",
      "Ölabscheider",
      "Koaleszenzabscheider",
      "Tankstellenlösungen (mit Partnern)",
      "Rohrleitungsbau in Zusammenarbeit mit Partnern",
    ],
    ctaLabel: "LAU-PROJEKT BESPRECHEN",
    navLabel: "Tankplätze / LAU",
    tag: "TANKPLÄTZE / LAU-ANLAGEN / WHG",
  },
  {
    index: "03",
    slug: "hochbau",
    title: "HOCHBAU",
    layerHeadline: ["WENN AUS", "STRUKTUR", "GEBÄUDE WIRD."],
    heroHeadline: ["ROHBAU", "IST KEIN", "ROHZUSTAND."],
    heroSubline: "Er ist die Grundlage für alle Gewerke, die folgen.",
    intro:
      "Ein guter Rohbau beginnt lange vor dem ersten Beton. Entscheidend sind Abläufe, Schnittstellen und eine Ausführung, auf die die nächsten Gewerke aufbauen können.",
    secondText:
      "Wo es sinnvoll ist, verbinden wir Hochbau, Tiefbau und Außenanlagen zu einer abgestimmten Projektabwicklung.",
    leistungen: [
      "Rohbau",
      "Mauerwerk",
      "Stahlbetonbau",
      "Halbfertigteilbauweise",
      "Vollfertigteilbauweise",
      "Tiefbau und Außenanlagen (schnittstellenarm)",
    ],
    ctaLabel: "HOCHBAUPROJEKT ANFRAGEN",
    navLabel: "Hochbau",
    tag: "HOCHBAU",
  },
];

export function getServiceBySlug(slug: string): ServiceArea | undefined {
  return services.find((s) => s.slug === slug);
}
