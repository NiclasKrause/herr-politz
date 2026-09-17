import Link from "next/link";
import type { Job } from "@/data/jobs";

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="grid grid-cols-1 items-center gap-4 border-b border-line py-8 sm:grid-cols-12 sm:gap-6">
      <div className="sm:col-span-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          {job.area}
        </span>
      </div>
      <div className="sm:col-span-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
          {job.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{job.description}</p>
      </div>
      <div className="sm:col-span-3 sm:text-right">
        <Link
          href={`/karriere?stelle=${encodeURIComponent(job.title)}#bewerbung`}
          className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold uppercase tracking-wide"
        >
          Jetzt bewerben
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
