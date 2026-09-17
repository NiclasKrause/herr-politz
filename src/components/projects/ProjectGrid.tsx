import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const spanClasses: Record<Project["span"], string> = {
  full: "md:col-span-12",
  wide: "md:col-span-7",
  narrow: "md:col-span-5",
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-start gap-5 border border-line bg-surface px-8 py-16 sm:px-14 sm:py-24">
        <p className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          Ausgewählte Projekte folgen in Kürze.
        </p>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Wir bereiten aktuell freigegebene Referenzprojekte für die Veröffentlichung
          vor. Bis dahin erzählen wir Ihnen gerne persönlich, welche Projekte zu
          Ihrem Vorhaben passen.
        </p>
        <Link
          href="/kontakt"
          className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold uppercase tracking-wide"
        >
          Referenzen anfragen
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6">
      {projects.map((project) => (
        <div key={project.slug} className={spanClasses[project.span]}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
