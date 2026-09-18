import type { Metadata } from "next";
import { company } from "@/data/company";
import { locations } from "@/data/locations";
import { WhistleblowerForm } from "@/components/WhistleblowerForm";

export const metadata: Metadata = {
  title: "Hinweisgeberschutzgesetz",
  description: "Meldemöglichkeiten nach dem Hinweisgeberschutzgesetz bei HERR & POLITZ.",
};

export default function HinweisgeberschutzPage() {
  const hamburg = locations[0];

  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 pt-32 sm:px-10 sm:pt-40">
      <span className="meta-label text-hp-muted">Hinweisgeberschutzgesetz</span>
      <h1 className="font-display mt-4 text-3xl font-bold uppercase tracking-tight text-hp-text sm:text-4xl">
        Hinweisgeberschutz
      </h1>

      <div className="mt-10 flex flex-col gap-6 text-sm leading-relaxed text-hp-text">
        <p>
          Das deutsche Hinweisgeberschutzgesetz trat am 2. Juli 2023 in Kraft und setzt die Richtlinie 2019/1937
          in nationales Recht um. Diese Richtlinie garantiert hinweisgebenden Personen, sogenannten
          Whistleblowern, die Gesetzes- oder Rechtsverstöße melden wollen, mehr Schutz. Jemand, der einen
          Missstand aufdeckt, darf keine Benachteiligung fürchten oder um seinen Job oder seine Zukunft bangen
          müssen. Außerdem verpflichtet die Richtlinie öffentliche und private Organisationen dazu, sichere
          Kanäle für die Meldung von Missständen einzurichten.
        </p>
        <a
          href="https://hp-bau.de/wp-content/uploads/2023/12/HinSchG_Stand-02-06-23.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-hp-primary"
        >
          Bundesgesetzblatt zum Hinweisgeberschutzgesetz
        </a>

        <p>
          Sie können eine persönliche Meldung telefonisch an die Geschäftsführung richten oder eine anonyme
          Meldung über das Formular unten senden.
        </p>

        <div className="border-t border-hp-border pt-6">
          {company.management.map((name) => (
            <p key={name} className="font-semibold text-hp-text">
              {name}
            </p>
          ))}
          <a href={`tel:${hamburg.phoneHref}`} className="mt-2 block hover:text-hp-primary">
            {hamburg.phone}
          </a>
        </div>
      </div>

      <div className="mt-10">
        <WhistleblowerForm />
      </div>

      <p className="mt-6 text-xs text-hp-muted">
        Meldungen werden vertraulich behandelt und ausschließlich zur Aufklärung des gemeldeten Sachverhalts
        verwendet. Wenn Sie das Kontaktfeld freilassen, bleibt Ihre Meldung anonym.
      </p>
    </section>
  );
}
