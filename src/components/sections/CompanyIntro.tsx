import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { locations } from "@/data/locations";

const stats = [
  { value: String(company.foundedYear), label: "Gegründet" },
  { value: company.generation, label: "Generation" },
  { value: String(locations.length), label: "Standorte" },
  { value: "Nord", label: "Deutschland" },
];

export function CompanyIntro() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              01 / HERR &amp; POLITZ
            </span>
          </Reveal>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,6vw,4.5rem)]">
            <MaskReveal lines={["BAUEN IST", "VERTRAUENSSACHE."]} />
          </h2>

          <Reveal delay={0.1} className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-ink sm:text-xl">
            <p>{company.introText}</p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.05 * i}>
                <p className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
