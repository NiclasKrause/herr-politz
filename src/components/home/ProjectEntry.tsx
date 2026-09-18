"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { heroFinderOptions, heroFinderContent } from "@/data/projectFinder";
import { company, yearsOfExperience } from "@/data/company";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { cn } from "@/lib/cn";

export function ProjectEntry() {
  const [selected, setSelected] = useState<string | null>(null);
  const { openInquiry } = useInquiry();
  const active = selected ? heroFinderContent[selected] : null;

  return (
    <section className="relative overflow-hidden bg-hp-dark pt-[72px] text-hp-light">
      <div className="grid grid-cols-1 gap-1 p-1 sm:grid-cols-6 sm:grid-rows-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative col-span-1 row-span-2 h-[46vh] overflow-hidden sm:col-span-4 sm:h-[78vh]"
        >
          <Image
            src={active?.image || "/photos/maschinen/flotte-erdbau-01.jpg"}
            alt="HERR & POLITZ Baustelle"
            fill
            priority
            sizes="(min-width: 640px) 67vw, 100vw"
            className="object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hp-dark/80 via-hp-dark/10 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="relative col-span-1 hidden h-[38.5vh] overflow-hidden sm:col-span-2 sm:block"
        >
          <Image
            src="/photos/hochbau/rohbau-rostock-01.jpg"
            alt="Hochbau"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative col-span-1 hidden h-[38.5vh] overflow-hidden sm:col-span-2 sm:block"
        >
          <Image
            src="/photos/lau/tankanlage-gruendung-01.jpg"
            alt="Tankplätze und LAU-Anlagen"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-20 pt-10 sm:px-10">
        <div className="flex items-center justify-between">
          <span className="meta-label text-dark-muted">{company.name}</span>
          <span className="meta-label hidden text-dark-muted sm:block">00 / Project Entry</span>
        </div>

        <h1 className="font-display mt-6 max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Aus Plan
          <br />
          wird
          <br />
          Substanz.
        </h1>

        <p className="mt-6 max-w-md text-lg text-dark-muted">
          Hochbau. Tiefbau. Anlagenbau. Seit {company.foundedYear}.
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openInquiry()}
              className="bg-accent px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
            >
              Projekt besprechen →
            </button>
            <a
              href="#leistungen"
              className="border border-dark-line px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-dark-text transition-colors hover:border-dark-text"
            >
              Leistung finden ↓
            </a>
          </div>
          <div className="meta-label text-right text-dark-muted">
            <p>Hamburg</p>
            <p>Rostock</p>
            <p>Norddeutschland</p>
          </div>
        </div>

        {/* Interactive project finder */}
        <div className="mt-16 border-t border-dark-line pt-8">
          <span className="meta-label text-dark-muted">Was planen Sie?</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {heroFinderOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelected(selected === opt.value ? null : opt.value)}
                className={cn(
                  "border px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                  selected === opt.value
                    ? "border-accent bg-accent text-white"
                    : "border-dark-line text-dark-text hover:border-dark-text",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {active ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
              className="mt-6 flex flex-col items-start gap-4 overflow-hidden sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-lg text-dark-muted">{active.text}</p>
              <Link
                href={active.href}
                className="shrink-0 border border-dark-text px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-dark-text hover:bg-dark-text hover:text-hp-dark"
              >
                Passenden Bereich öffnen
              </Link>
            </motion.div>
          ) : null}
        </div>

        <p className="mt-16 meta-label text-dark-muted">
          Familiengeführt · {yearsOfExperience()} Jahre Erfahrung · 3. Generation
        </p>
      </div>
    </section>
  );
}
