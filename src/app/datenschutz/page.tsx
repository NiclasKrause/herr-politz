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
          <h2 className="font-semibold uppercase tracking-wide text-muted">
            Verantwortlicher
          </h2>
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
            Diese Website wird bei einem externen Hosting-Anbieter betreiben.
            Personenbezogene Daten, die beim Aufruf dieser Website erhoben
            werden, werden auf den Servern des Hosters verarbeitet. Details zum
            eingesetzten Hosting-Anbieter werden hier ergänzt, sobald die
            Website produktiv geschaltet ist.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">
            Kontakt- und Bewerbungsformular
          </h2>
          <p className="mt-2">
            Die Formulare auf dieser Website öffnen beim Absenden eine
            vorausgefüllte E-Mail in Ihrem eigenen E-Mail-Programm. Ihre
            Angaben werden dabei nicht auf unseren Servern gespeichert,
            sondern erst mit dem Versand der E-Mail an uns übermittelt.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anfrage- bzw.
            Bewerbungsbearbeitung).
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">
            Cookies &amp; Tracking
          </h2>
          <p className="mt-2">
            Diese Website verwendet keine Analyse- oder Marketing-Cookies.
            Technisch notwendige Cookies werden nur eingesetzt, sofern sie für
            den Betrieb der Website erforderlich sind. Sollte sich dies
            ändern, holen wir vorab Ihre Einwilligung über ein
            Cookie-Consent-Tool ein.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Schriftarten</h2>
          <p className="mt-2">
            Wir binden die auf dieser Website verwendeten Schriftarten lokal
            ein. Es findet keine Verbindung zu externen Font-Anbietern statt,
            wodurch keine Daten an Dritte übertragen werden.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Kartenlinks</h2>
          <p className="mt-2">
            Links zu unseren Standorten führen auf Wunsch zu Google Maps.
            Dabei wird keine Karte auf unserer Website eingebettet — es
            öffnet sich ein neuer Tab auf der Website des Kartenanbieters, für
            dessen Datenverarbeitung dessen eigene Datenschutzbestimmungen
            gelten.
          </p>
        </div>

        <div>
          <h2 className="font-semibold uppercase tracking-wide text-muted">Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie
            ein Recht auf Datenübertragbarkeit und Widerspruch. Wenden Sie
            sich hierzu an {company.email}. Zudem steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde für den
            Datenschutz zu.
          </p>
        </div>
      </div>
    </section>
  );
}
