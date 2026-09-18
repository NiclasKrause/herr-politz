import type { Metadata } from "next";
import { PeopleDirectory } from "@/components/PeopleDirectory";

export const metadata: Metadata = {
  title: "Ansprechpartner",
  description:
    "Direkte Ansprechpartner bei HERR & POLITZ — von Geschäftsführung über Projektleitung bis Technisches Büro.",
};

export default function AnsprechpartnerPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-28 pt-32 sm:px-10 sm:pb-36 sm:pt-40">
      <span className="meta-label text-hp-muted">Ansprechpartner</span>
      <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance text-hp-text sm:text-6xl">
        Der kürzeste Weg zum richtigen Tisch.
      </h1>
      <p className="mt-6 max-w-xl text-hp-muted">
        Eine technische Frage gehört zur Projektleitung. Eine Anfrage zur Kalkulation gehört direkt dorthin.
        Deshalb finden Sie bei uns nicht nur eine zentrale Telefonnummer, sondern die passenden Ansprechpartner
        für Ihr Thema.
      </p>

      <div className="mt-16">
        <PeopleDirectory />
      </div>
    </section>
  );
}
