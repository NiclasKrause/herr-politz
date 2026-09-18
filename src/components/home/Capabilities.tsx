"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/data/services";
import { fieldLog } from "@/data/media";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const layerImages: Record<string, string> = {
  tiefbau: fieldLog.find((p) => p.id === "tiefbau-05")!.src,
  "tankplaetze-lau": fieldLog.find((p) => p.id === "lau-01")!.src,
  hochbau: fieldLog.find((p) => p.id === "hochbau-02")!.src,
};

export function Capabilities() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="leistungen" className="bg-hp-light">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-24 sm:px-10">
        <span className="meta-label text-hp-muted">01 / Capabilities</span>
        <Reveal>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-hp-text sm:text-6xl">
            Nicht alles.
            <br />
            Aber das richtig.
          </h2>
        </Reveal>
      </div>

      <div>
        {services.map((service) => {
          const isOpen = open === service.slug;
          return (
            <div key={service.slug} className="relative h-[70vh] w-full overflow-hidden border-t border-hp-border sm:h-[85vh]">
              <Image
                src={layerImages[service.slug]}
                alt={service.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-hp-dark/50 transition-colors duration-500",
                  isOpen && "bg-hp-dark/75",
                )}
              />

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : service.slug)}
                className="absolute inset-0 flex flex-col justify-between p-6 text-left text-white sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="meta-label text-white/70">{service.index} / {service.tag}</span>
                  <span className="meta-label text-white/70">{isOpen ? "SCHLIESSEN −" : "MEHR +"}</span>
                </div>

                <div>
                  <h3 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
                    {service.title}
                  </h3>
                  {!isOpen ? (
                    <p className="font-display mt-3 max-w-xl text-xl font-semibold uppercase leading-tight tracking-tight text-white/85 sm:text-3xl">
                      {service.layerHeadline.join(" ")}
                    </p>
                  ) : null}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-x-0 bottom-0 overflow-hidden bg-white"
              >
                <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 sm:p-10">
                  <p className="max-w-md text-lg text-hp-text">{service.intro}</p>
                  <div className="flex flex-col gap-4">
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-hp-muted">
                      {service.leistungen.map((l) => (
                        <li key={l}>— {l}</li>
                      ))}
                    </ul>
                    <Link
                      href={`/${service.slug}`}
                      className="mt-2 inline-block w-fit border border-hp-text px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-hp-text hover:bg-hp-text hover:text-white"
                    >
                      {service.ctaLabel} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
