export interface Location {
  id: string;
  city: string;
  name: string;
  street: string;
  zip: string;
  place: string;
  phone: string;
  phoneHref: string;
  email: string;
  mapsQuery: string;
}

export const locations: Location[] = [
  {
    id: "hamburg",
    city: "Hamburg",
    name: "HERR & POLITZ Hoch- und Tiefbau GmbH",
    street: "Oehleckerring 15",
    zip: "22419",
    place: "Hamburg",
    phone: "040 538 90 5-0",
    phoneHref: "+494053890-50",
    email: "info@hp-bau.de",
    mapsQuery: "Oehleckerring 15, 22419 Hamburg",
  },
  {
    id: "rostock",
    city: "Rostock",
    name: "HERR & POLITZ Hoch- und Tiefbau GmbH",
    street: "Mitteldorf 15",
    zip: "18211",
    place: "Admannshagen",
    phone: "038203 869-0",
    phoneHref: "+4938203869-0",
    email: "info@hp-bau.de",
    mapsQuery: "Mitteldorf 15, 18211 Admannshagen",
  },
];
