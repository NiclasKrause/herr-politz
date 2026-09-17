import { Hero } from "@/components/sections/Hero";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { FullServiceStatement } from "@/components/sections/FullServiceStatement";
import { ProjectsTeaser } from "@/components/sections/ProjectsTeaser";
import { MachineSection } from "@/components/sections/MachineSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { CompanySection } from "@/components/sections/CompanySection";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServiceIndex />
      <FullServiceStatement />
      <ProjectsTeaser />
      <MachineSection />
      <QualitySection />
      <CompanySection />
      <ContactCta />
    </>
  );
}
