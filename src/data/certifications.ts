export interface Certification {
  name: string;
  issuer: string;
  detail: string;
  image: string;
}

/**
 * Reale, auf hp-bau.de veröffentlichte Zertifizierungen. Direkt von der
 * bestehenden Website übernommen, keine erfundenen Siegel.
 */
export const certifications: Certification[] = [
  {
    name: "Management System SCC**",
    issuer: "TÜV Rheinland",
    detail: "Zertifiziertes Sicherheits- und Gesundheitsmanagement, ID 9105067213",
    image: "/brand/certifications/tuev-rheinland-scc.png",
  },
  {
    name: "Fachbetrieb nach WHG",
    issuer: "TÜV NORD",
    detail: "Fachbetrieb für Anlagen zum Umgang mit wassergefährdenden Stoffen",
    image: "/brand/certifications/tuev-nord-whg.jpg",
  },
  {
    name: "Präqualifikation nach VOB",
    issuer: "PQ-VOB",
    detail: "Qualifikationsnachweis für die Teilnahme an öffentlichen Ausschreibungen",
    image: "/brand/certifications/praequalifikation-vob.png",
  },
  {
    name: "Gütezeichen Kanalbau",
    issuer: "RAL Gütegemeinschaft",
    detail: "Qualitätssicherung für die Ausführung von Kanalbauarbeiten",
    image: "/brand/certifications/guetezeichen-ral-kanalbau.png",
  },
];
