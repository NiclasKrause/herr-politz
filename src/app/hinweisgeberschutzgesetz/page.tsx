import type { Metadata } from "next";
import { company } from "@/data/company";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Hinweisgeberschutz",
  description:
    "Meldemöglichkeiten nach dem Hinweisgeberschutzgesetz bei HERR & POLITZ.",
};

export default function HinweisgeberschutzPage() {
  const hamburg = locations[0];

  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 pt-32 sm:px-10 sm:pt-40">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Hinweisgeberschutz
      </h1>

      <div className="mt-10 flex flex-col gap-6 text-sm leading-relaxed text-ink">
        <p>
          Das deutsche Hinweisgeberschutzgesetz trat am 2. Juli 2023 in Kraft
          und setzt die EU-Richtlinie 2019/1937 in nationales Recht um. Es
          schützt Personen, die im beruflichen Umfeld Rechtsverstöße oder
          Missstände melden, vor Benachteiligung und verpflichtet
          Organisationen dazu, sichere Meldewege einzurichten.
        </p>
        <p>
          Sie können sich mit einem Hinweis persönlich oder telefonisch an die
          Geschäftsführung wenden:
        </p>

        <div className="border-t border-line pt-6">
          {company.management.map((name) => (
            <p key={name} className="font-semibold">
              {name}
            </p>
          ))}
          <a href={`tel:${hamburg.phoneHref}`} className="mt-2 block hover:text-accent">
            {hamburg.phone}
          </a>
          <a href={`mailto:${company.email}`} className="block text-muted hover:text-accent">
            {company.email}
          </a>
        </div>

        <p>
          Meldungen werden vertraulich behandelt und ausschließlich zur
          Aufklärung des gemeldeten Sachverhalts verwendet.
        </p>
      </div>
    </section>
  );
}
