"use client";

import { useId, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

const projectTypes = ["Tiefbau", "Hochbau", "Tankplätze / LAU-Anlagen", "Sanierung", "Sonstiges"];

const inputClasses =
  "w-full border-b border-dark-line bg-transparent py-2 text-base text-dark-text outline-none transition-colors placeholder:text-dark-muted focus:border-accent";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("leistung") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Unternehmen: ${data.get("company") || "—"}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone") || "—"}`,
      `Projektart: ${data.get("projectType")}`,
      `Projektstandort: ${data.get("location") || "—"}`,
      "",
      "Nachricht:",
      `${data.get("message") || "—"}`,
    ].join("\n");

    const subject = encodeURIComponent("Projektanfrage – HERR & POLITZ");
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg border border-dark-line p-8 text-dark-text">
        <p className="font-display text-xl font-bold uppercase tracking-tight">
          Danke für Ihre Anfrage.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-dark-muted">
          Ihr E-Mail-Programm sollte sich gerade geöffnet haben. Falls nicht,
          schreiben Sie uns direkt an{" "}
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
      <Field label="Unternehmen" htmlFor={`${formId}-company`}>
        <input id={`${formId}-company`} name="company" type="text" className={inputClasses} />
      </Field>
      <Field label="E-Mail" htmlFor={`${formId}-email`}>
        <input id={`${formId}-email`} name="email" type="email" required className={inputClasses} />
      </Field>
      <Field label="Telefon" htmlFor={`${formId}-phone`}>
        <input id={`${formId}-phone`} name="phone" type="tel" className={inputClasses} />
      </Field>
      <Field label="Projektart" htmlFor={`${formId}-projectType`}>
        <select
          id={`${formId}-projectType`}
          name="projectType"
          defaultValue={projectTypes.includes(preselected) ? preselected : projectTypes[0]}
          required
          className={cn(inputClasses, "bg-transparent")}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-dark">
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Projektstandort" htmlFor={`${formId}-location`}>
        <input id={`${formId}-location`} name="location" type="text" className={inputClasses} />
      </Field>

      <Field label="Nachricht" htmlFor={`${formId}-message`} full>
        <textarea id={`${formId}-message`} name="message" rows={4} required className={cn(inputClasses, "resize-none")} />
      </Field>

      <div className="flex items-start gap-3 md:col-span-2">
        <input
          id={`${formId}-privacy`}
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 border border-dark-line bg-transparent accent-[var(--color-accent)]"
        />
        <label htmlFor={`${formId}-privacy`} className="text-xs leading-relaxed text-dark-muted">
          Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage
          gespeichert werden. Weitere Informationen in der Datenschutzerklärung.
        </label>
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex w-fit items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-dark-text transition-colors hover:bg-accent-dark md:col-span-2"
      >
        Anfrage senden
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
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-widest text-dark-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
