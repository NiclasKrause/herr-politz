export interface TeamMember {
  name: string;
  position?: string;
  phone: string;
  phoneHref: string;
  email: string;
}

export interface Department {
  name: string;
  members: TeamMember[];
}

export const departments: Department[] = [
  {
    name: "Geschäftsführung",
    members: [
      {
        name: "Dipl.-Ing. Dennis Politz",
        position: "Geschäftsführer / Gesellschafter",
        phone: "040 538 90 5-0",
        phoneHref: "+494053890-50",
        email: "info@hp-bau.de",
      },
      {
        name: "Dipl.-Ing. Nicolai Zarenko",
        position: "Geschäftsführer",
        phone: "040 538 90 5-0",
        phoneHref: "+494053890-50",
        email: "info@hp-bau.de",
      },
    ],
  },
  {
    name: "Zentrale / Sekretariat",
    members: [
      {
        name: "Lina Mußbach",
        phone: "040 538 90 5-0",
        phoneHref: "+494053890-50",
        email: "info@hp-bau.de",
      },
    ],
  },
  {
    name: "Kalkulation",
    members: [
      {
        name: "Dipl.-Ing. Andreas Neuer",
        phone: "040 538 90 5-12",
        phoneHref: "+494053890-512",
        email: "aneuer@hp-bau.de",
      },
    ],
  },
  {
    name: "Projektleitung",
    members: [
      {
        name: "Dipl.-Ing. Peter Mess",
        phone: "040 538 90 5-21",
        phoneHref: "+494053890-521",
        email: "pmess@hp-bau.de",
      },
      {
        name: "Dipl.-Ing. Frank Tesch",
        phone: "040 538 90 5-23",
        phoneHref: "+494053890-523",
        email: "ftesch@hp-bau.de",
      },
      {
        name: "Torben Hanke",
        position: "Staatl. geprüfter Bautechniker",
        phone: "040 538 90 5-60",
        phoneHref: "+494053890-560",
        email: "thanke@hp-bau.de",
      },
    ],
  },
  {
    name: "Buchhaltung",
    members: [
      {
        name: "Sieglinde Weber",
        phone: "040 538 90 5-15",
        phoneHref: "+494053890-515",
        email: "sweber@hp-bau.de",
      },
      {
        name: "Britta Schacht",
        phone: "040 538 90 5-11",
        phoneHref: "+494053890-511",
        email: "bschacht@hp-bau.de",
      },
      {
        name: "Kristin Froß",
        phone: "040 538 90 5-18",
        phoneHref: "+494053890-518",
        email: "kfross@hp-bau.de",
      },
    ],
  },
  {
    name: "Technisches Büro",
    members: [
      {
        name: "Christopher Kohn",
        position: "Staatl. geprüfter Bautechniker",
        phone: "040 538 90 5-17",
        phoneHref: "+494053890-517",
        email: "ckohn@hp-bau.de",
      },
      {
        name: "Dipl.-Ing. Sylvia Hantzsche",
        phone: "038203 8690",
        phoneHref: "+4938203869-0",
        email: "shantzsche@hp-bau.de",
      },
    ],
  },
];
