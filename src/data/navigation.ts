export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Tiefbau", href: "/tiefbau" },
  { label: "Hochbau", href: "/hochbau" },
  { label: "Tankplätze / LAU", href: "/tankplaetze-lau" },
  { label: "Karriere", href: "/karriere" },
];

export const footerServiceNav: NavLink[] = [
  { label: "Tiefbau", href: "/tiefbau" },
  { label: "Hochbau", href: "/hochbau" },
  { label: "Tankplätze & LAU-Anlagen", href: "/tankplaetze-lau" },
];

export const footerCompanyNav: NavLink[] = [
  { label: "Ansprechpartner", href: "/ansprechpartner" },
  { label: "Karriere", href: "/karriere" },
  { label: "Hinweisgeberschutzgesetz", href: "/hinweisgeberschutzgesetz" },
];

export const footerLegalNav: NavLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
