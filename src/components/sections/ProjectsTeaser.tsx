import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLink } from "@/components/AnimatedLink";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export function ProjectsTeaser() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              03 / Projekte
            </span>
          </Reveal>
          <h2 className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,6vw,4.5rem)]">
            <MaskReveal lines={["GEBAUT.", "NICHT BEHAUPTET."]} />
          </h2>
        </div>
        <Reveal delay={0.1}>
          <AnimatedLink href="/projekte" className="w-fit text-ink">
            Alle Projekte
          </AnimatedLink>
        </Reveal>
      </div>

      <ProjectGrid projects={projects.slice(0, 4)} />
    </section>
  );
}
