"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { fieldLog, type FieldPhoto } from "@/data/media";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

// Layout recipe: mix of full-width, split, panorama and side-by-side tiles.
const LAYOUT: { span: string; aspect: string }[] = [
  { span: "col-span-6", aspect: "aspect-[21/9]" }, // 0 full width
  { span: "col-span-2", aspect: "aspect-[3/4]" }, // 1 small left
  { span: "col-span-4", aspect: "aspect-[4/3]" }, // 2 large right
  { span: "col-span-6", aspect: "aspect-[16/9]" }, // 3 near fullscreen
  { span: "col-span-6", aspect: "aspect-[21/6]" }, // 4 panorama
  { span: "col-span-3", aspect: "aspect-square" }, // 5
  { span: "col-span-3", aspect: "aspect-square" }, // 6
  { span: "col-span-3", aspect: "aspect-[3/4]" }, // 7
  { span: "col-span-3", aspect: "aspect-[3/4]" }, // 8
  { span: "col-span-4", aspect: "aspect-[4/3]" }, // 9
  { span: "col-span-2", aspect: "aspect-[3/4]" }, // 10
];

export function FieldProof() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="dark-section bg-hp-dark py-24 text-hp-light">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <span className="meta-label text-dark-muted">02 / Field Proof</span>
        <Reveal>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl">
            Nicht rendern. Bauen.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-1 sm:grid-cols-6">
          {fieldLog.map((photo, i) => {
            const layout = LAYOUT[i % LAYOUT.length];
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={cn("group relative overflow-hidden", layout.span, layout.aspect)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-hp-dark/0 transition-colors group-hover:bg-hp-dark/20" />
                <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-hp-dark/70 px-2 py-1">
                  <span className="meta-label text-white/80">
                    FIELD / {String(i + 1).padStart(2, "0")} — {photo.discipline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ProjectViewer
        photos={fieldLog}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}

function ProjectViewer({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: {
  photos: FieldPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const goTo = useCallback(
    (delta: number) => {
      if (activeIndex === null) return;
      const next = (activeIndex + delta + photos.length) % photos.length;
      onNavigate(next);
    },
    [activeIndex, photos.length, onNavigate],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, onClose, goTo]);

  const photo = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <AnimatePresence>
      {photo ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex flex-col bg-hp-dark/98 text-white"
        >
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <span className="meta-label text-white/70">{photo.discipline}</span>
            <button type="button" onClick={onClose} aria-label="Schließen" className="text-2xl leading-none">
              ×
            </button>
          </div>

          <div className="relative flex-1">
            <Image src={photo.src} alt={photo.alt} fill className="object-contain" sizes="100vw" />
            <button
              type="button"
              onClick={() => goTo(-1)}
              aria-label="Vorheriges Bild"
              className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl sm:left-6"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              aria-label="Nächstes Bild"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl sm:right-6"
            >
              ›
            </button>
          </div>

          <div className="flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-10">
            <div>
              <span className="meta-label text-white/60">Leistungsbereich</span>
              <p className="font-display text-xl font-bold uppercase tracking-tight">
                {photo.discipline}
                {photo.location ? ` — ${photo.location}` : ""}
              </p>
              <p className="mt-1 max-w-lg text-sm text-white/70">{photo.alt}</p>
            </div>
            <span className="meta-label text-white/50">
              {String(activeIndex! + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
