import Image from "next/image";
import { clients } from "@/data/clients";
import { certifications } from "@/data/certifications";
import { company, yearsOfExperience } from "@/data/company";
import { Reveal } from "@/components/motion/Reveal";

export function ClientTrust() {
  return (
    <section className="dark-section bg-hp-dark py-24 text-hp-light">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <span className="meta-label text-dark-muted">04 / Client Trust</span>
        <Reveal>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl">
            Wer uns beauftragt, kommt oft wieder.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-dark-muted">
            Wir verstehen gute Zusammenarbeit nicht als einmaligen Auftrag. Viele Geschäftsbeziehungen entwickeln
            sich über Jahre.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px bg-dark-line sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name + client.src}
              className="group flex aspect-[3/2] items-center justify-center bg-hp-dark p-6"
            >
              <div className="relative h-full w-full grayscale brightness-[1.8] contrast-[0.6] transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100">
                <Image src={client.src} alt={client.name} fill className="object-contain" sizes="200px" />
              </div>
            </div>
          ))}
        </div>

        {/* Project stamp */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-dark-line pt-12 sm:grid-cols-4">
          <Stamp label="EST." value={String(company.foundedYear)} />
          <Stamp label="Family Business" value="3. Generation" />
          <Stamp label="Region" value="Norddeutschland" />
          <Stamp label="Locations" value="Hamburg / Rostock" />
        </div>
        <p className="meta-label mt-6 text-dark-muted">{yearsOfExperience()} Jahre Erfahrung</p>

        {/* Certifications */}
        <div className="mt-20 border-t border-dark-line pt-12">
          <span className="meta-label text-dark-muted">Zertifizierungen</span>
          <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-start gap-3">
                <div className="relative h-16 w-16 shrink-0 bg-white p-1">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} – ${cert.issuer}`}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-hp-light">{cert.name}</p>
                  <p className="text-xs text-dark-muted">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stamp({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="meta-label text-dark-muted">{label}</span>
      <p className="font-display mt-1 text-2xl font-bold uppercase tracking-tight sm:text-3xl">{value}</p>
    </div>
  );
}
