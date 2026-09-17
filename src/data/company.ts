export const company = {
  name: "HERR & POLITZ",
  legalName: "HERR & POLITZ Hoch- und Tiefbau GmbH",
  foundedYear: 1986,
  generation: "3.",
  region: "Hamburg und norddeutscher Raum",
  email: "info@hp-bau.de",
  registerCourt: "Amtsgericht Hamburg",
  registerNumber: "HRB 75728",
  vatId: "DE 188529670",
  management: ["Dipl.-Ing. Dennis Politz", "Dipl.-Ing. Nicolai Zarenko"],
  url: "https://hp-bau.de",
  title: "HERR & POLITZ | Hochbau & Tiefbau aus Hamburg",
  description:
    "HERR & POLITZ realisiert seit 1986 anspruchsvolle Hoch- und Tiefbauprojekte sowie Tankplätze und LAU-Anlagen im norddeutschen Raum.",
  introText:
    "Seit 1986 steht HERR & POLITZ für professionelle Bauausführung, langfristige Zusammenarbeit und zuverlässige Projektabwicklung. Von Hamburg aus realisiert das familiengeführte Unternehmen Projekte im gesamten norddeutschen Raum.",
  aboutText:
    "HERR & POLITZ ist ein familiengeführtes Hoch- und Tiefbauunternehmen mit Sitz in Hamburg und einem weiteren Standort bei Rostock. Seit 1986 stehen professionelle Zusammenarbeit, verlässliche Projektabwicklung und langfristige Geschäftsbeziehungen im Mittelpunkt. Heute werden diese Werte bis in die dritte Generation weitergetragen.",
  careerText:
    "HERR & POLITZ setzt auf langfristige Zusammenarbeit und ein familiäres Arbeitsumfeld.",
} as const;

export function yearsOfExperience(): number {
  return new Date().getFullYear() - company.foundedYear;
}
