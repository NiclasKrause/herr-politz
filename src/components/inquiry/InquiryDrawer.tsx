"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useInquiry } from "./InquiryProvider";
import { cn } from "@/lib/cn";

const PROJECT_TYPES = ["Tiefbau", "Hochbau", "LAU / Tankplatz", "Sanierung", "Sonstiges"];

export function InquiryDrawer() {
  const { isOpen, initialProjectType, closeInquiry } = useInquiry();

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-hp-dark/60 backdrop-blur-sm"
            onClick={closeInquiry}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-xl flex-col overflow-y-auto bg-hp-light shadow-2xl"
          >
            <DrawerContent key={initialProjectType} initialProjectType={initialProjectType} onClose={closeInquiry} />
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function DrawerContent({ initialProjectType, onClose }: { initialProjectType?: string; onClose: () => void }) {
  const [projectType, setProjectType] = useState(initialProjectType || "");
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("projectType", projectType);
    files.forEach((f) => fd.append("files", f));

    if (!projectType) {
      setError("Bitte wählen Sie, was Sie planen.");
      return;
    }
    if (!(fd.get("privacyAccepted") === "true")) {
      setError("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Anfrage konnte nicht gesendet werden.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Anfrage konnte nicht gesendet werden.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
        <span className="meta-label text-hp-muted">Projektanfrage / gesendet</span>
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-hp-text sm:text-4xl">
          Vielen Dank.
        </h2>
        <p className="max-w-sm text-hp-muted">Wir haben Ihre Anfrage erhalten.</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 border border-hp-text px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-hp-text hover:bg-hp-text hover:text-hp-light"
        >
          Schließen
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-hp-border px-6 py-5 sm:px-10">
        <span className="meta-label text-hp-muted">06 / Projektanfrage</span>
        <button type="button" onClick={onClose} aria-label="Schließen" className="text-2xl leading-none text-hp-text">
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-8 px-6 py-8 sm:px-10">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <fieldset>
          <legend className="meta-label mb-3 block text-hp-muted">Was planen Sie?</legend>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setProjectType(type)}
                className={cn(
                  "border px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                  projectType === type
                    ? "border-hp-primary bg-hp-primary text-white"
                    : "border-hp-border text-hp-text hover:border-hp-text",
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </fieldset>

        <Field label="Wo? / Projektort" name="location" required placeholder="z. B. Hamburg-Wandsbek" />
        <Field label="Wann? / Geplanter Beginn" name="startDate" placeholder="z. B. Q3 2026" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Wer? / Name" name="name" required />
          <Field label="Firma (optional)" name="company" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Telefon" name="phone" type="tel" required />
          <Field label="E-Mail" name="email" type="email" required />
        </div>

        <label className="block">
          <span className="meta-label mb-2 block text-hp-muted">Nachricht (optional)</span>
          <textarea
            name="message"
            rows={4}
            className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
          />
        </label>

        <label className="block">
          <span className="meta-label mb-2 block text-hp-muted">Unterlagen (optional) – PDF, Pläne, Fotos, Ausschreibung</span>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={(e) => setFiles(Array.from(e.target.files || []).slice(0, 5))}
            className="block w-full text-sm text-hp-muted file:mr-4 file:border file:border-hp-border file:bg-white file:px-4 file:py-2 file:text-[13px] file:font-semibold file:uppercase file:tracking-wide"
          />
          {files.length > 0 ? (
            <ul className="mt-2 text-xs text-hp-muted">
              {files.map((f) => (
                <li key={f.name}>{f.name}</li>
              ))}
            </ul>
          ) : null}
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
          {submitting ? "Wird gesendet …" : "Projektanfrage senden"}
        </button>
      </form>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="meta-label mb-2 block text-hp-muted">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
      />
    </label>
  );
}
