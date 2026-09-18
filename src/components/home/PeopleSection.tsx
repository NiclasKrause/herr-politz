import { PeopleDirectory } from "@/components/PeopleDirectory";
import { company } from "@/data/company";
import { Reveal } from "@/components/motion/Reveal";

export function PeopleSection() {
  return (
    <section className="bg-hp-light">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <span className="meta-label text-hp-muted">05 / People</span>
        <Reveal>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance text-hp-text sm:text-6xl">
            Bauprojekte brauchen Ansprechpartner.
          </h2>
        </Reveal>

        <div className="mt-8 max-w-2xl">
          <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-hp-text sm:text-3xl">
            Der kürzeste Weg zum richtigen Tisch.
          </h3>
          <p className="mt-3 text-hp-muted">
            Eine technische Frage gehört zur Projektleitung. Eine Anfrage zur Kalkulation gehört direkt dorthin.
            Deshalb finden Sie bei uns nicht nur eine zentrale Telefonnummer, sondern die passenden Ansprechpartner
            für Ihr Thema.
          </p>
        </div>

        <div className="mt-14">
          <PeopleDirectory />
        </div>

        <CompanyTimeline />
      </div>
    </section>
  );
}

function CompanyTimeline() {
  return (
    <div className="mt-24 border-t border-hp-border pt-16">
      <h3 className="font-display max-w-lg text-3xl font-bold uppercase leading-[0.95] tracking-tight text-hp-text sm:text-5xl">
        Seit {company.foundedYear}. Nicht stehen geblieben.
      </h3>
      <p className="mt-4 max-w-xl text-hp-muted">
        {company.legalName.split(" GmbH")[0]} ist über Jahrzehnte gewachsen, ohne den Charakter eines
        familiengeführten Unternehmens zu verlieren. Heute verbinden wir langjährige Erfahrung mit moderner
        Projektabwicklung, einem vielseitigen Leistungsspektrum und direkten Ansprechpartnern.
      </p>

      <div className="relative mt-16 flex justify-between border-t-2 border-hp-text pt-4">
        <div>
          <span className="meta-label text-hp-primary">{company.foundedYear}</span>
          <p className="font-display text-xl font-bold uppercase tracking-tight text-hp-text">Gründung</p>
        </div>
        <div className="text-right">
          <span className="meta-label text-hp-primary">Heute</span>
          <p className="font-display text-xl font-bold uppercase tracking-tight text-hp-text">3. Generation</p>
        </div>
      </div>
    </div>
  );
}
