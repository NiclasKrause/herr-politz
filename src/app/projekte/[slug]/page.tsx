import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLink } from "@/components/AnimatedLink";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.location}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="pt-24">
      {project.image ? (
        <div className="relative h-[60vh] min-h-[360px]">
          <Image src={project.image} alt={project.name} fill sizes="100vw" className="object-cover" />
        </div>
      ) : null}

      <div className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted">
          <span>{project.category}</span>
          <span>—</span>
          <span>{project.location}</span>
          <span>—</span>
          <span>{project.year}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">{project.summary}</p>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-3">
          {project.scope ? (
            <Reveal>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Aufgabe</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">{project.scope}</p>
            </Reveal>
          ) : null}
          {project.execution ? (
            <Reveal delay={0.05}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Umsetzung</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">{project.execution}</p>
            </Reveal>
          ) : null}
          {project.specifics ? (
            <Reveal delay={0.1}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Besonderheiten</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">{project.specifics}</p>
            </Reveal>
          ) : null}
        </div>

        {project.client ? (
          <p className="mt-10 text-sm text-muted">Auftraggeber: {project.client}</p>
        ) : null}

        <div className="mt-14">
          <AnimatedLink href="/projekte" arrow="right" className="w-fit text-ink">
            Alle Projekte
          </AnimatedLink>
        </div>
      </div>
    </article>
  );
}
