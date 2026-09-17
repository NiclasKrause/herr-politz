import type { Metadata } from "next";
import { company } from "@/data/company";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  const hamburg = locations[0];

  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 pt-32 sm:px-10 sm:pt-40">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ink">
        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2">
            {company.legalName}
            <br />
            {hamburg.street}
            <br />
            {hamburg.zip} {hamburg.place}
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Kontakt</h2>
          <p className="mt-2">
            Telefon: {hamburg.phone}
            <br />
            E-Mail: {company.email}
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Handelsregister</h2>
          <p className="mt-2">
            {company.registerCourt}
            <br />
            Handelsregister-Nr.: {company.registerNumber}
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Umsatzsteuer-ID</h2>
          <p className="mt-2">{company.vatId}</p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Geschäftsführung</h2>
          <p className="mt-2">
            {company.management.map((name) => (
              <span key={name} className="block">
                {name}
              </span>
            ))}
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">
            EU-Streitschlichtung
          </h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit, die Sie unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>{" "}
            finden. Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">
            Verbraucherstreitbeilegung
          </h2>
          <p className="mt-2">
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Haftungshinweis</h2>
          <p className="mt-2">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </div>
      </div>
    </section>
  );
}
