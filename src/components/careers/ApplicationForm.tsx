"use client";

import { useState, type FormEvent } from "react";
import { jobs, skillLabels, type Job } from "@/data/jobs";
import { cn } from "@/lib/cn";

export function ApplicationForm({ preselectedSlug }: { preselectedSlug?: string }) {
  const [jobSlug, setJobSlug] = useState(preselectedSlug || jobs[0]?.slug || "");
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const job = jobs.find((j) => j.slug === jobSlug);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    fd.set("jobSlug", jobSlug);
    fd.set("jobTitle", job?.title || "");
    files.forEach((f) => fd.append("files", f));

    if (!(fd.get("privacyAccepted") === "true")) {
      setError("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/karriere", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Bewerbung konnte nicht gesendet werden.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bewerbung konnte nicht gesendet werden.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="border border-hp-border bg-white p-10 text-center">
        <span className="meta-label text-hp-muted">Bewerbung / gesendet</span>
        <h3 className="font-display mt-3 text-2xl font-bold uppercase tracking-tight text-hp-text">Vielen Dank.</h3>
        <p className="mt-2 text-hp-muted">Wir haben Ihre Bewerbung erhalten und melden uns bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 border border-hp-border bg-white p-6 sm:p-10">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <span className="meta-label mb-3 block text-hp-muted">01 / Für welche Stelle?</span>
        <div className="flex flex-wrap gap-2">
          {jobs.map((j) => (
            <button
              key={j.slug}
              type="button"
              onClick={() => setJobSlug(j.slug)}
              className={cn(
                "border px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                jobSlug === j.slug
                  ? "border-hp-primary bg-hp-primary text-white"
                  : "border-hp-border text-hp-text hover:border-hp-text",
              )}
            >
              {j.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <span className="meta-label mb-2 block text-hp-muted">02 / Wer bist du?</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
          />
        </div>
        <div>
          <span className="meta-label mb-2 block text-hp-muted">Was kannst du?</span>
          <select
            name="skill"
            required
            defaultValue={job?.skill || ""}
            className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            {Object.entries(skillLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <span className="meta-label mb-2 block text-hp-muted">03 / Wie erreichen wir dich?</span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="tel"
            name="phone"
            required
            placeholder="Telefon"
            className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="E-Mail"
            className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
          />
        </div>
      </div>

      <label className="block">
        <span className="meta-label mb-2 block text-hp-muted">Nachricht (optional)</span>
        <textarea
          name="message"
          rows={3}
          className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
        />
      </label>

      <label className="block">
        <span className="meta-label mb-2 block text-hp-muted">Lebenslauf / Unterlagen (optional)</span>
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          onChange={(e) => setFiles(Array.from(e.target.files || []).slice(0, 5))}
          className="block w-full text-sm text-hp-muted file:mr-4 file:border file:border-hp-border file:bg-white file:px-4 file:py-2 file:text-[13px] file:font-semibold file:uppercase file:tracking-wide"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-hp-muted">
        <input type="checkbox" name="privacyAccepted" value="true" required className="mt-1" />
        <span>
          Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
          <a href="/datenschutz" target="_blank" className="underline">
            Datenschutzerklärung
          </a>{" "}
          zu.
        </span>
      </label>

      {error ? <p className="text-sm text-hp-primary">{error}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="bg-hp-dark px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-hp-primary disabled:opacity-60"
      >
        {submitting ? "Wird gesendet …" : "04 / Absenden"}
      </button>
    </form>
  );
}

export type { Job };
