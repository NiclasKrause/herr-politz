import type { Metadata } from "next";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { departments } from "@/data/team";

export const metadata: Metadata = {
  title: "Ansprechpartner",
  description:
    "Direkte Ansprechpartner bei HERR & POLITZ — von Geschäftsführung über Projektleitung bis Technisches Büro.",
};

export default function AnsprechpartnerPage() {
  return (
    <section className="px-6 pb-28 pt-32 sm:px-10 sm:pb-36 sm:pt-40">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Ansprechpartner
      </span>
      <h1 className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,6vw,4.5rem)]">
        <MaskReveal trigger="mount" lines={["DIREKTE", "ANSPRECHPARTNER.", "KLARE WEGE."]} />
      </h1>

      <div className="mt-16 flex flex-col gap-16 sm:mt-20">
        {departments.map((dept, di) => (
          <Reveal key={dept.name} delay={0.03 * di}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              {dept.name}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {dept.members.map((member) => (
                <div key={member.name} className="border-b border-line pb-6">
                  <p className="font-display text-lg font-bold tracking-tight">{member.name}</p>
                  {member.position ? (
                    <p className="mt-1 text-sm text-muted">{member.position}</p>
                  ) : null}
                  <div className="mt-4 flex flex-col gap-1 text-sm">
                    <a href={`tel:${member.phoneHref}`} className="text-ink hover:text-accent">
                      {member.phone}
                    </a>
                    <a href={`mailto:${member.email}`} className="text-muted hover:text-accent">
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
