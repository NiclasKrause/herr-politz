import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLink } from "@/components/AnimatedLink";
import { company } from "@/data/company";

export function CompanySection() {
  return (
    <section className="dark-section bg-dark px-6 py-24 text-dark-text sm:px-10 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dark-muted">
              05 / Unternehmen
            </span>
          </Reveal>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,6vw,4.2rem)]">
            <MaskReveal lines={["FAST 40 JAHRE.", "UND NOCH LANGE", "NICHT FERTIG."]} />
          </h2>

          <Reveal delay={0.1} className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-dark-text/90">
            <p>{company.aboutText}</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-14 flex flex-wrap items-center gap-x-14 gap-y-6 border-t border-dark-line pt-10">
            <div>
              <p className="font-display text-3xl font-bold text-accent">{company.foundedYear}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-dark-muted">
                Gründung
              </p>
            </div>
            <div className="h-10 w-px bg-dark-line" />
            <div>
              <p className="font-display text-3xl font-bold text-accent">Heute</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-dark-muted">
                {company.generation} Generation
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-12">
            <AnimatedLink href="/unternehmen" className="w-fit text-dark-text">
              Mehr über uns
            </AnimatedLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
