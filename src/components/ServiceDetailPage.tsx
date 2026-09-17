import Image from "next/image";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLink } from "@/components/AnimatedLink";
import type { ServiceArea } from "@/data/services";

const images: Record<string, string> = {
  tiefbau: "/photos/tiefbau4.jpg",
  "tankplaetze-lau-anlagen": "/photos/WHG4.jpg",
  hochbau: "/photos/hochbau3.jpg",
};

export function ServiceDetailPage({ service }: { service: ServiceArea }) {
  return (
    <>
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={images[service.slug]}
            alt={`${service.title} bei HERR & POLITZ`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/10" />
        </div>
        <div className="relative px-6 pb-16 sm:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dark-text/70">
            {service.index} / Leistungen
          </span>
          <h1 className="mt-4 font-display font-bold uppercase leading-[0.98] tracking-tight text-[clamp(2.4rem,8vw,6rem)] text-dark-text">
            <MaskReveal
              trigger="mount"
              lines={service.title.includes(" & ") ? service.title.split(" & ").map((l, i) => (i === 0 ? `${l} &` : l)) : [service.title]}
            />
          </h1>
          <p className="mt-4 max-w-xl font-display text-lg font-semibold uppercase tracking-tight text-accent sm:text-xl">
            {service.subline}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-balance text-lg leading-relaxed text-ink sm:text-xl">
              {service.intro}
            </p>
            <div className="mt-10">
              <AnimatedLink href={`/kontakt?leistung=${encodeURIComponent(service.title)}`} className="w-fit text-ink">
                {service.ctaLabel}
              </AnimatedLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Leistungsspektrum
            </span>
            <ul className="mt-5 flex flex-col gap-3 border-t border-line pt-5">
              {service.leistungen.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line pb-3 text-sm text-ink sm:text-base">
                  <span className="text-accent">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
