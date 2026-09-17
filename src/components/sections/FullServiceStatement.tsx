import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";

export function FullServiceStatement() {
  return (
    <section className="dark-section bg-dark px-6 py-28 text-center text-dark-text sm:px-10 sm:py-36">
      <h2 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(1.8rem,5vw,3.5rem)]">
        <MaskReveal lines={["OB NEUBAU.", "UMBAU.", "ODER SANIERUNG."]} />
      </h2>
      <h3 className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(3rem,10vw,7rem)] text-accent">
        <MaskReveal lines={["WIR SCHAFFEN", "DAS."]} />
      </h3>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-dark-muted sm:text-base">
          Von der Vorbereitung bis zur Ausführung denken wir Projekte
          ganzheitlich und lösungsorientiert.
        </p>
      </Reveal>
    </section>
  );
}
