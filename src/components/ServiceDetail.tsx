"use client";

import Image from "next/image";
import type { ServiceArea } from "@/data/services";
import { fieldLog } from "@/data/media";
import { projectLogic } from "@/data/projectLogic";
import { departments } from "@/data/team";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { Reveal } from "@/components/motion/Reveal";

const disciplineBySlug: Record<string, "TIEFBAU" | "HOCHBAU" | "LAU"> = {
  tiefbau: "TIEFBAU",
  hochbau: "HOCHBAU",
  "tankplaetze-lau": "LAU",
};

const heroImageBySlug: Record<string, string> = {
  tiefbau: "/photos/tiefbau/gruendung-pfaehle-01.jpg",
  hochbau: "/photos/hochbau/gruendung-bewehrung-01.jpg",
  "tankplaetze-lau": "/photos/lau/tankanlage-gruendung-01.jpg",
};

const kalkulation = departments.find((d) => d.name === "Kalkulation")!;

export function ServiceDetail({ service }: { service: ServiceArea }) {
  const { openInquiry } = useInquiry();
  const photos = fieldLog.filter((p) => p.discipline === disciplineBySlug[service.slug]);

  return (
    <>
      {/* 01 Visuelles Problem */}
      <section className="dark-section relative flex min-h-[80vh] items-end overflow-hidden bg-hp-dark pt-[72px] text-hp-light">
        <Image
          src={heroImageBySlug[service.slug]}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hp-dark via-hp-dark/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-20 sm:px-10">
          <span className="meta-label text-dark-muted">{service.index} / {service.tag}</span>
          <h1 className="font-display mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl">
            {service.heroHeadline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-dark-muted">{service.heroSubline}</p>
        </div>
      </section>

      {/* 02 Was HERR & POLITZ übernimmt */}
      <section className="bg-hp-light">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
          <span className="meta-label text-hp-muted">Was wir übernehmen</span>
          <Reveal>
            <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-hp-text sm:text-3xl">
              {service.intro}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-hp-muted">{service.secondText}</p>
          </Reveal>
        </div>
      </section>

      {/* 03 Technische Leistungen */}
      <section className="border-y border-hp-border bg-hp-concrete/40">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
          <span className="meta-label text-hp-muted">Technische Leistungen</span>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.leistungen.map((l, i) => (
              <div key={l} className="flex items-baseline gap-3 border-b border-hp-border pb-4">
                <span className="meta-label text-hp-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg font-semibold text-hp-text">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Bildmaterial */}
      {photos.length > 0 ? (
        <section className="dark-section bg-hp-dark py-20 text-hp-light">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
            <span className="meta-label text-dark-muted">Bildmaterial</span>
            <div className="mt-8 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {photos.map((photo) => (
                <div key={photo.id} className="relative aspect-[4/3] overflow-hidden">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="50vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 05 Ablauf */}
      <section className="bg-hp-light">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
          <span className="meta-label text-hp-muted">Ablauf</span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold uppercase leading-[0.95] tracking-tight text-hp-text sm:text-5xl">
            Was ein gutes Projekt ausmacht.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projectLogic.map((factor) => (
              <div key={factor.index}>
                <span className="meta-label text-hp-primary">{factor.index}</span>
                <h3 className="font-display mt-2 text-lg font-bold uppercase tracking-tight text-hp-text">
                  {factor.title}
                </h3>
                <p className="mt-2 text-sm text-hp-muted">{factor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Passender Ansprechpartner + 07 Projektanfrage */}
      <section className="border-t border-hp-border bg-hp-concrete/40">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div>
              <span className="meta-label text-hp-muted">Passender Ansprechpartner</span>
              <p className="font-display mt-3 text-2xl font-bold uppercase tracking-tight text-hp-text">
                {kalkulation.name}
              </p>
              {kalkulation.members.map((m) => (
                <div key={m.name} className="mt-3">
                  <p className="font-semibold text-hp-text">{m.name}</p>
                  <a href={`tel:${m.phoneHref}`} className="block text-sm text-hp-text hover:text-hp-primary">
                    {m.phone}
                  </a>
                  <a href={`mailto:${m.email}`} className="block text-sm text-hp-muted hover:text-hp-text">
                    {m.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <span className="meta-label text-hp-muted">Projektanfrage</span>
              <button
                type="button"
                onClick={() => openInquiry(service.title)}
                className="bg-hp-dark px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-hp-primary"
              >
                {service.ctaLabel} →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
