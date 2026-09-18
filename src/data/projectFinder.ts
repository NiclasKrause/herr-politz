export interface FinderOption {
  value: string;
  label: string;
}

export const heroFinderOptions: FinderOption[] = [
  { value: "tiefbau", label: "TIEFBAU" },
  { value: "hochbau", label: "HOCHBAU" },
  { value: "lau", label: "TANKPLATZ / LAU" },
  { value: "sanierung", label: "SANIERUNG" },
  { value: "offen", label: "NOCH OFFEN" },
];

export const heroFinderContent: Record<string, { text: string; image: string; href: string }> = {
  tiefbau: {
    text: "Gründung, Erdarbeiten, Entwässerung und Außenanlagen – von der Vorbereitung bis zur Ausführung.",
    image: "/photos/tiefbau/gruendung-pfaehle-01.jpg",
    href: "/tiefbau",
  },
  hochbau: {
    text: "Rohbau aus Mauerwerk oder Stahlbeton – konventionell, halb- oder vollfertigteil.",
    image: "/photos/hochbau/rohbau-rostock-01.jpg",
    href: "/hochbau",
  },
  lau: {
    text: "Tankplätze und LAU-Anlagen nach WHG – Neubau, Sanierung, Abscheideranlagen.",
    image: "/photos/lau/tankanlage-gruendung-01.jpg",
    href: "/tankplaetze-lau",
  },
  sanierung: {
    text: "Umbauten und Sanierungen im laufenden Betrieb erfordern besondere Abstimmung. Wir übernehmen alle drei Leistungsbereiche.",
    image: "/photos/hochbau/rohbau-industrie-01.jpg",
    href: "/#kontakt",
  },
  offen: {
    text: "Noch nicht sicher, was Ihr Projekt braucht? Sprechen Sie mit unserem Team – wir ordnen es gemeinsam ein.",
    image: "/photos/maschinen/flotte-erdbau-01.jpg",
    href: "/#kontakt",
  },
};

export const projectTypeOptions: FinderOption[] = [
  { value: "neubau", label: "NEUBAU" },
  { value: "umbau", label: "UMBAU" },
  { value: "sanierung", label: "SANIERUNG" },
  { value: "lau", label: "LAU / TANKPLATZ" },
  { value: "tiefbau", label: "TIEFBAU" },
  { value: "rohbau", label: "ROHBAU" },
  { value: "aussenanlagen", label: "AUSSENANLAGEN" },
  { value: "unsicher", label: "NOCH NICHT SICHER" },
];

export const regionOptions: FinderOption[] = [
  { value: "hamburg", label: "Hamburg / Umgebung" },
  { value: "mv", label: "Mecklenburg-Vorpommern / Rostock" },
  { value: "nord", label: "Norddeutschland" },
  { value: "andere", label: "Andere Region" },
];

export const statusOptions: FinderOption[] = [
  { value: "idee", label: "ERSTE IDEE" },
  { value: "planung", label: "PLANUNG LÄUFT" },
  { value: "ausschreibung", label: "AUSSCHREIBUNG" },
  { value: "kurz-vor-baubeginn", label: "KURZ VOR BAUBEGINN" },
  { value: "laufend", label: "LAUFENDES PROJEKT" },
];

/**
 * Einfache regelbasierte Zuordnung passender Ansprechpartner-Bereiche je nach
 * Projektart. Keine KI - nur Auswahl des thematisch passenden Kontakts.
 */
export const finderContactRouting: Record<string, string> = {
  neubau: "Projektleitung",
  umbau: "Projektleitung",
  sanierung: "Projektleitung",
  lau: "Kalkulation",
  tiefbau: "Kalkulation",
  rohbau: "Kalkulation",
  aussenanlagen: "Kalkulation",
  unsicher: "Zentrale / Sekretariat",
};
