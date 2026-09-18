"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { locations } from "@/data/locations";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { cn } from "@/lib/cn";

export function NextProjectCta() {
  const { openInquiry } = useInquiry();

  return (
    <section className="dark-section relative overflow-hidden bg-hp-dark py-32 text-hp-light">
      <div className="absolute inset-0">
        <Image
          src="/photos/hochbau/gruendung-bewehrung-01.jpg"
          alt="Baustelle von HERR & POLITZ"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hp-dark via-hp-dark/80 to-hp-dark/40" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10">
        <span className="meta-label text-dark-muted">06 / Next Project</span>
        <h2 className="font-display mt-6 max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl">
          Ihr nächstes Projekt beginnt nicht auf der Baustelle.
        </h2>
        <p className="font-display mt-3 text-2xl font-semibold uppercase tracking-tight text-dark-muted sm:text-4xl">
          Sondern mit einem Gespräch.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => openInquiry()}
            className="bg-accent px-8 py-5 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
          >
            Projekt besprechen →
          </button>
          <a
            href={`tel:${locations[0].phoneHref}`}
            className="text-lg font-semibold text-dark-text hover:text-accent"
          >
            {locations[0].phone}
          </a>
        </div>

        <NorthNetwork />
      </div>
    </section>
  );
}

function NorthNetwork() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-28 border-t border-dark-line pt-12">
      <span className="meta-label text-dark-muted">Zwei Standorte</span>
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {locations.map((loc) => {
          const isActive = active === loc.id;
          return (
            <button
              key={loc.id}
              type="button"
              onClick={() => setActive(isActive ? null : loc.id)}
              className="flex flex-col items-start gap-3 border border-dark-line px-6 py-8 text-left transition-colors hover:border-dark-text"
            >
              <span
                className={cn(
                  "h-3 w-3 shrink-0 rounded-full transition-colors",
                  isActive ? "bg-accent" : "bg-dark-muted",
                )}
              />
              <span className="font-display text-3xl font-bold uppercase tracking-tight">{loc.city}</span>

              <AnimatePresence>
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden text-dark-muted"
                  >
                    <p className="pt-2">{loc.street}</p>
                    <p>
                      {loc.zip} {loc.place}
                    </p>
                    <p className="mt-2 font-semibold text-dark-text">{loc.phone}</p>
                    <p>{loc.email}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
}
