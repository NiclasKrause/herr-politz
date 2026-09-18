import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const LABELS = ["EARTHWORK", "SITE LOGISTICS", "GROUNDWORK", "EXECUTION"];

export function ResourceLayer() {
  return (
    <section className="bg-hp-light">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <span className="meta-label text-hp-muted">Ressourcen</span>
        <Reveal>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance text-hp-text sm:text-6xl">
            Gute Planung braucht Schlagkraft.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/photos/maschinen/fuhrpark-radlader-01.jpg"
              alt="Fuhrpark von HERR & POLITZ vor dem Firmengebäude"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="max-w-md text-lg text-hp-text">
              Ein umfangreicher Maschinenpark gibt uns die Möglichkeit, unterschiedliche Anforderungen direkt auf
              der Baustelle abzubilden und Projekte flexibel zu organisieren.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {LABELS.map((label) => (
                <span
                  key={label}
                  className="meta-label border border-hp-border px-4 py-3 text-hp-muted"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
