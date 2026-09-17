export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Karriere", href: "/karriere" },
  { label: "Ansprechpartner", href: "/ansprechpartner" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerServiceNav: NavLink[] = [
  { label: "Tiefbau", href: "/tiefbau" },
  { label: "Hochbau", href: "/hochbau" },
  { label: "Tankplätze & LAU-Anlagen", href: "/tankplaetze-lau-anlagen" },
];

export const footerCompanyNav: NavLink[] = [
  { label: "Über uns", href: "/unternehmen" },
  { label: "Ansprechpartner", href: "/ansprechpartner" },
  { label: "Karriere", href: "/karriere" },
  { label: "Projekte", href: "/projekte" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Hinweisgeberschutz", href: "/hinweisgeberschutzgesetz" },
];

export const footerLegalNav: NavLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
