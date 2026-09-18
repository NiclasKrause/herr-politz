"use client";

import { useState } from "react";
import Image from "next/image";
import { jobs, skillLabels, type Job } from "@/data/jobs";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export default function KarrierePage() {
  const [skillFilter, setSkillFilter] = useState<Job["skill"] | null>(null);
  const [selectedJob, setSelectedJob] = useState<string | undefined>(undefined);

  const filtered = skillFilter ? jobs.filter((j) => j.skill === skillFilter) : jobs;

  return (
    <>
      <section className="dark-section relative flex min-h-[70vh] items-end overflow-hidden bg-hp-dark pt-[72px] text-hp-light">
        <Image
          src="/photos/tiefbau/erdarbeiten-stadion-01.jpg"
          alt="Mitarbeiter von HERR & POLITZ im Einsatz"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hp-dark via-hp-dark/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-20 sm:px-10">
          <span className="meta-label text-dark-muted">Karriere</span>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Du musst nicht ins Büro, um etwas Großes aufzubauen.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-dark-muted">
            Am Ende des Tages siehst du, was du gemacht hast.
          </p>
        </div>
      </section>

      <section className="bg-hp-light">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
          <Reveal>
            <p className="max-w-xl text-lg text-hp-text">
              Wir suchen Menschen, die Verantwortung übernehmen, mitdenken und lieber gemeinsam etwas bauen, als
              lange darüber zu reden.
            </p>
          </Reveal>

          <div className="mt-14">
            <span className="meta-label text-hp-muted">Was kannst du?</span>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSkillFilter(null)}
                className={cn(
                  "border px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                  !skillFilter ? "border-hp-primary bg-hp-primary text-white" : "border-hp-border text-hp-text",
                )}
              >
                Alle
              </button>
              {Object.entries(skillLabels).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSkillFilter(value as Job["skill"])}
                  className={cn(
                    "border px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                    skillFilter === value
                      ? "border-hp-primary bg-hp-primary text-white"
                      : "border-hp-border text-hp-text hover:border-hp-text",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-10 flex flex-col border-t border-hp-border">
              {filtered.map((job) => (
                <div key={job.slug} className="flex flex-col gap-4 border-b border-hp-border py-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="meta-label text-hp-muted">{job.area} — {skillLabels[job.skill]}</span>
                    <h3 className="font-display mt-1 text-2xl font-bold uppercase tracking-tight text-hp-text">
                      {job.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-hp-muted">{job.description}</p>
                  </div>
                  <a
                    href="#bewerbung"
                    onClick={() => setSelectedJob(job.slug)}
                    className="shrink-0 border border-hp-text px-5 py-3 text-center text-[13px] font-semibold uppercase tracking-wide text-hp-text hover:bg-hp-text hover:text-white"
                  >
                    Stelle ansehen
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bewerbung" className="border-t border-hp-border bg-hp-concrete/40">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
          <span className="meta-label text-hp-muted">Bewerbung</span>
          <h2 className="font-display mt-4 text-3xl font-bold uppercase leading-[0.95] tracking-tight text-hp-text sm:text-5xl">
            Jetzt bewerben.
          </h2>
          <div className="mt-10">
            <ApplicationForm key={selectedJob} preselectedSlug={selectedJob} />
          </div>
        </div>
      </section>
    </>
  );
}
