import type { Metadata } from "next";
import { Suspense } from "react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { LocationBlock } from "@/components/contact/LocationBlock";
import { locations } from "@/data/locations";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Sprechen Sie mit ${company.name} über Ihr Bauvorhaben — Hamburg und Rostock.`,
};

export default function KontaktPage() {
  return (
    <section className="dark-section bg-dark px-6 pb-28 pt-32 text-dark-text sm:px-10 sm:pb-36 sm:pt-40">
      <h1 className="font-display font-bold uppercase leading-[0.98] tracking-tight text-[clamp(2.6rem,9vw,7rem)]">
        <MaskReveal trigger="mount" lines={["WAS KÖNNEN", "WIR FÜR SIE", "BAUEN?"]} />
      </h1>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-md text-lg text-dark-muted">
          Sie planen ein Bauvorhaben? Sprechen Sie mit uns.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 sm:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9">
          {locations.map((loc) => (
            <LocationBlock key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}
