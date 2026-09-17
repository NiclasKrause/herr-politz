import type { Metadata } from "next";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Referenzprojekte von HERR & POLITZ im Hoch- und Tiefbau, bei Tankplätzen und LAU-Anlagen.",
};

export default function ProjektePage() {
  return (
    <section className="px-6 py-28 pt-32 sm:px-10 sm:py-36 sm:pt-40">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Projekte
        </span>
      </Reveal>
      <h1 className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.4rem,7vw,5.5rem)]">
        <MaskReveal trigger="mount" lines={["GEBAUT.", "NICHT BEHAUPTET."]} />
      </h1>
      <div className="mt-16 sm:mt-20">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
