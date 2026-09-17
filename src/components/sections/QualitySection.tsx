import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { qualityPoints } from "@/data/quality";
import { certifications } from "@/data/certifications";

export function QualitySection() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          04 / Qualität
        </span>
      </Reveal>
      <h2 className="mt-4 font-display font-bold uppercase leading-[0.98] tracking-tight text-[clamp(2.2rem,6vw,4.5rem)]">
        <MaskReveal lines={["PRÄZISION IST", "KEIN EXTRA."]} />
      </h2>

      <div className="mt-16 border-t border-line sm:mt-20">
        {qualityPoints.map((point, i) => (
          <Reveal key={point.index} delay={0.05 * i}>
            <div className="grid grid-cols-1 gap-3 border-b border-line py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
              <span className="text-sm text-muted sm:col-span-1">{point.index}</span>
              <span className="font-display text-xl font-bold uppercase tracking-tight sm:col-span-5 sm:text-2xl">
                {point.title}
              </span>
              <p className="text-sm leading-relaxed text-muted sm:col-span-6 sm:text-base">
                {point.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {certifications.length > 0 ? (
        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-8">
          {certifications.map((c) => (
            <div key={c.name} className="text-sm text-muted">
              {c.name} — {c.issuer}
            </div>
          ))}
        </Reveal>
      ) : null}
    </section>
  );
}
