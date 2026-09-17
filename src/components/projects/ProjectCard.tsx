import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projekte/${project.slug}`}
      className="group relative block h-[70vw] max-h-[520px] min-h-[280px] w-full overflow-hidden"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name}, ${project.location}`}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-6 text-dark-text sm:p-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-dark-text/75">
            {project.location}
          </p>
          <p className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            {project.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
