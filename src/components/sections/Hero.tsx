"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { AnimatedLink } from "@/components/AnimatedLink";
import { locations } from "@/data/locations";

export function Hero() {
  const phone = locations[0];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Image
          src="/photos/gallery-257.jpg"
          alt="Rohbau-Baustelle von HERR & POLITZ mit Bewehrung und Bauteam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/10" />
      </div>

      <div className="relative px-6 pb-14 sm:px-10 sm:pb-16">
        <h1 className="font-display font-bold uppercase leading-[0.96] tracking-tight text-[clamp(2.8rem,9vw,7rem)] text-dark-text">
          <MaskReveal trigger="mount" lines={["WIR BAUEN,", "WORAUF ANDERE", "AUFBAUEN."]} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mt-6 max-w-lg text-balance text-base text-dark-text/85 sm:text-lg"
        >
          HERR &amp; POLITZ realisiert anspruchsvolle Hoch- und Tiefbauprojekte im
          norddeutschen Raum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.19, 1, 0.22, 1] }}
          className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-dark-text/70"
        >
          Hamburg / Rostock / Norddeutschland
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <AnimatedLink href="/#leistungen" arrow="down-right" className="text-dark-text">
            Leistungen entdecken
          </AnimatedLink>
          <AnimatedLink href="/kontakt" arrow="right" className="text-dark-text">
            Projekt anfragen
          </AnimatedLink>
          <a href={`tel:${phone.phoneHref}`} className="text-sm font-semibold text-dark-text/85 hover:text-accent">
            {phone.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
