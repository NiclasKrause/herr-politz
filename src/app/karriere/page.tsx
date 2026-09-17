import type { Metadata } from "next";
import { Suspense } from "react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { JobCard } from "@/components/careers/JobCard";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { jobs } from "@/data/jobs";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Karriere",
  description: company.careerText,
};

export default function KarrierePage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Karriere
        </span>
        <h1 className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.6rem,8vw,6rem)]">
          <MaskReveal trigger="mount" lines={["DEIN JOB.", "DEINE BAUSTELLE."]} />
        </h1>
        <Reveal delay={0.2} className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink">
          <p>{company.careerText}</p>
        </Reveal>
      </section>

      <section className="px-6 py-16 sm:px-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
          Offene Stellen
        </h2>
        <div className="mt-4 border-t border-line">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>

      <section id="bewerbung" className="px-6 py-20 sm:px-10 sm:py-28">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          Jetzt bewerben
        </h2>
        <div className="mt-10 max-w-3xl">
          <Suspense fallback={null}>
            <ApplicationForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
