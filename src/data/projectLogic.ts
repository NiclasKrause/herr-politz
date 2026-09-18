export interface ProjectLogicFactor {
  index: string;
  title: string;
  text: string;
}

export const projectLogic: ProjectLogicFactor[] = [
  {
    index: "01",
    title: "VORBEREITUNG",
    text: "Je früher Anforderungen, Bauablauf und technische Randbedingungen sauber geklärt sind, desto weniger Reibungsverluste entstehen später auf der Baustelle.",
  },
  {
    index: "02",
    title: "SCHNITTSTELLEN",
    text: "Gerade bei komplexeren Bauvorhaben entscheidet nicht nur das einzelne Gewerk. Entscheidend ist, wie die Gewerke ineinandergreifen.",
  },
  {
    index: "03",
    title: "AUSFÜHRUNG",
    text: "Planung wird erst dann wertvoll, wenn sie auf der Baustelle zuverlässig umgesetzt wird. Dafür braucht es Erfahrung, Koordination und die passenden Ressourcen.",
  },
  {
    index: "04",
    title: "VERLÄSSLICHKEIT",
    text: "Auftraggeber brauchen keine täglichen Überraschungen. Sie brauchen Ansprechpartner, klare Absprachen und eine Projektabwicklung, auf die sie aufbauen können.",
  },
];

export interface BusinessFactor {
  title: string;
  text: string;
}

export const businessFactors: BusinessFactor[] = [
  {
    title: "ABLAUF",
    text: "Sauber koordinierte Arbeitsschritte reduzieren unnötige Unterbrechungen.",
  },
  {
    title: "SCHNITTSTELLEN",
    text: "Je klarer Verantwortlichkeiten und Übergaben definiert sind, desto geringer ist das Risiko von Reibungsverlusten.",
  },
  {
    title: "BESTAND",
    text: "Bei Umbauten und Sanierungen im laufenden Betrieb kommt es besonders auf Planung und Abstimmung an.",
  },
];
