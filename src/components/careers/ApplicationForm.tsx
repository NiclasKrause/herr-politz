"use client";

import { useId, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { jobs } from "@/data/jobs";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

const inputClasses =
  "w-full border-b border-line bg-transparent py-2 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-accent";

export function ApplicationForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("stelle") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone") || "—"}`,
      `Stelle: ${data.get("job")}`,
      `Berufserfahrung: ${data.get("experience") || "—"}`,
      "",
      "Nachricht:",
      `${data.get("message") || "—"}`,
      "",
      "Bitte Lebenslauf als Anhang an diese E-Mail hinzufügen.",
    ].join("\n");

    const subject = encodeURIComponent(`Bewerbung – ${data.get("job")}`);
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg border border-line bg-surface p-8">
        <p className="font-display text-xl font-bold uppercase tracking-tight">
          Danke für Ihre Bewerbung.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Ihr E-Mail-Programm sollte sich gerade geöffnet haben. Bitte fügen Sie
          Ihren Lebenslauf dort als Anhang hinzu und senden Sie die E-Mail ab.
          Alternativ erreichen Sie uns direkt unter{" "}
          <a href={`mailto:${company.email}`} className="underline">
            {company.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
      <Field label="Name" htmlFor={`${formId}-name`}>
        <input id={`${formId}-name`} name="name" type="text" required className={inputClasses} />
      </Field>
      <Field label="E-Mail" htmlFor={`${formId}-email`}>
        <input id={`${formId}-email`} name="email" type="email" required className={inputClasses} />
      </Field>
      <Field label="Telefon" htmlFor={`${formId}-phone`}>
        <input id={`${formId}-phone`} name="phone" type="tel" className={inputClasses} />
      </Field>
      <Field label="Stelle" htmlFor={`${formId}-job`}>
        <select
          id={`${formId}-job`}
          name="job"
          defaultValue={preselected || jobs[0]?.title}
          required
          className={cn(inputClasses, "bg-bg")}
        >
          {jobs.map((job) => (
            <option key={job.slug} value={job.title}>
              {job.title}
            </option>
          ))}
          <option value="Initiativbewerbung">Initiativbewerbung</option>
        </select>
      </Field>
      <Field label="Berufserfahrung" htmlFor={`${formId}-experience`} full>
        <input
          id={`${formId}-experience`}
          name="experience"
          type="text"
          placeholder="z. B. 5 Jahre im Tiefbau"
          className={inputClasses}
        />
      </Field>
      <Field label="Nachricht" htmlFor={`${formId}-message`} full>
        <textarea id={`${formId}-message`} name="message" rows={4} className={cn(inputClasses, "resize-none")} />
      </Field>

      <div className="flex items-start gap-3 md:col-span-2">
        <input
          id={`${formId}-privacy`}
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 border border-line bg-transparent accent-[var(--color-accent)]"
        />
        <label htmlFor={`${formId}-privacy`} className="text-xs leading-relaxed text-muted">
          Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Bewerbung
          gespeichert werden. Weitere Informationen in der Datenschutzerklärung.
        </label>
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex w-fit items-center gap-2 bg-dark px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-dark-text transition-colors hover:bg-accent md:col-span-2"
      >
        Bewerbung absenden
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-2", full && "md:col-span-2")}>
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
