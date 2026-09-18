import type { Metadata } from "next";
import { company } from "@/data/company";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  const hamburg = locations[0];

  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 pt-32 sm:px-10 sm:pt-40">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ink">
        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Verantwortlicher</h2>
          <p className="mt-2">
            {company.legalName}
            <br />
            {hamburg.street}, {hamburg.zip} {hamburg.place}
            <br />
            E-Mail: {company.email}
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Hosting</h2>
          <p className="mt-2">
            Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website werden automatisch technische
            Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite) verarbeitet, um die
            Website sicher und zuverlässig bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">
            Projektanfrage, Bewerbung und Hinweisgeber-Formular
          </h2>
          <p className="mt-2">
            Die Formulare auf dieser Website (Projektanfrage, Bewerbung, Meldung nach dem
            Hinweisgeberschutzgesetz) werden serverseitig verarbeitet und per E-Mail an die zuständige Stelle bei
            {" "}
            {company.name} weitergeleitet. Optional hochgeladene Unterlagen (z. B. Pläne, Lebenslauf) werden dabei
            als E-Mail-Anhang versendet und nicht dauerhaft auf unseren Servern gespeichert. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung bzw. Bearbeitung Ihrer Anfrage) bzw. bei der anonymen
            Hinweisgeber-Meldung Art. 6 Abs. 1 lit. c und f DSGVO in Verbindung mit dem Hinweisgeberschutzgesetz.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Cookies &amp; Tracking</h2>
          <p className="mt-2">
            Diese Website verwendet keine Analyse- oder Marketing-Cookies und kein Drittanbieter-Tracking.
            Technisch notwendige Cookies werden nur eingesetzt, sofern sie für den Betrieb der Website
            erforderlich sind. Sollte sich dies ändern, holen wir vorab Ihre Einwilligung über ein
            Cookie-Consent-Tool ein.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Schriftarten</h2>
          <p className="mt-2">
            Wir binden die auf dieser Website verwendeten Schriftarten lokal ein. Es findet keine Verbindung zu
            externen Font-Anbietern statt, wodurch keine Daten an Dritte übertragen werden.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Kartenlinks</h2>
          <p className="mt-2">
            Links zu unseren Standorten führen auf Wunsch zu Google Maps. Dabei wird keine Karte auf unserer
            Website eingebettet — es öffnet sich ein neuer Tab auf der Website des Kartenanbieters, für dessen
            Datenverarbeitung dessen eigene Datenschutzbestimmungen gelten.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten sowie ein Recht auf Datenübertragbarkeit und Widerspruch. Wenden Sie sich
            hierzu an {company.email}. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
            für den Datenschutz zu.
          </p>
        </div>
      </div>
    </section>
  );
}
