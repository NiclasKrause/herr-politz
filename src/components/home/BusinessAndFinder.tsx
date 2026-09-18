"use client";

import { useState } from "react";
import { businessFactors } from "@/data/projectLogic";
import {
  projectTypeOptions,
  regionOptions,
  statusOptions,
  finderContactRouting,
} from "@/data/projectFinder";
import { departments } from "@/data/team";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function BusinessSection() {
  return (
    <section className="border-y border-hp-border bg-hp-concrete/40">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <span className="meta-label text-hp-muted">Projektwirtschaft</span>
        <Reveal>
          <h2 className="font-display mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance text-hp-text sm:text-6xl">
            Bauleistung ist auch Projektwirtschaft.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-hp-text">
            Zeit, Schnittstellen und Nacharbeiten sind nicht nur technische Themen. Sie beeinflussen auch die
            Wirtschaftlichkeit eines Projekts.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-hp-border pt-10 sm:grid-cols-3">
          {businessFactors.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <span className="meta-label text-hp-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-2 text-xl font-bold uppercase tracking-tight text-hp-text">
                {f.title}
              </h3>
              <p className="mt-2 text-hp-muted">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectFinderSection() {
  const [type, setType] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const { openInquiry } = useInquiry();

  const routedDept = type ? finderContactRouting[type] : null;
  const contact = routedDept ? departments.find((d) => d.name === routedDept) : null;
  const ready = type && region && status;

  return (
    <section className="bg-hp-light">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <span className="meta-label text-hp-muted">Projekt-Finder</span>
        <h2 className="font-display mt-4 max-w-xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-hp-text sm:text-6xl">
          Was haben Sie vor?
        </h2>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-8">
            <FinderGroup label="Was?" options={projectTypeOptions} value={type} onChange={setType} />
            <FinderGroup label="Wo?" options={regionOptions} value={region} onChange={setRegion} />
            <FinderGroup label="Projektstatus" options={statusOptions} value={status} onChange={setStatus} />
          </div>

          <div className="flex w-full flex-col justify-between border border-hp-border bg-white p-8 lg:w-96">
            <div>
              <span className="meta-label text-hp-muted">Passender Ansprechpartner</span>
              {contact && contact.members[0] ? (
                <div className="mt-4">
                  <p className="font-display text-xl font-bold uppercase tracking-tight text-hp-text">
                    {contact.name}
                  </p>
                  <p className="mt-1 text-hp-muted">{contact.members[0].name}</p>
                  <a
                    href={`tel:${contact.members[0].phoneHref}`}
                    className="mt-2 block text-sm font-semibold text-hp-text hover:text-hp-primary"
                  >
                    {contact.members[0].phone}
                  </a>
                </div>
              ) : (
                <p className="mt-4 text-hp-muted">
                  Wählen Sie links aus, was Sie vorhaben – wir zeigen Ihnen den passenden Ansprechpartner.
                </p>
              )}
            </div>
            <button
              type="button"
              disabled={!ready}
              onClick={() => openInquiry(type ? projectTypeOptions.find((o) => o.value === type)?.label : undefined)}
              className="mt-8 bg-hp-dark px-5 py-4 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-hp-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Passenden Ansprechpartner finden
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinderGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className="meta-label text-hp-muted">{label}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "border px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors",
              value === opt.value
                ? "border-hp-primary bg-hp-primary text-white"
                : "border-hp-border text-hp-text hover:border-hp-text",
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
