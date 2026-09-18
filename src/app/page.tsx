import { ProjectEntry } from "@/components/home/ProjectEntry";
import { Capabilities } from "@/components/home/Capabilities";
import { FieldProof } from "@/components/home/FieldProof";
import { ProjectLogicSection } from "@/components/home/ProjectLogicSection";
import { BusinessSection, ProjectFinderSection } from "@/components/home/BusinessAndFinder";
import { ClientTrust } from "@/components/home/ClientTrust";
import { ResourceLayer } from "@/components/home/ResourceLayer";
import { PeopleSection } from "@/components/home/PeopleSection";
import { NextProjectCta } from "@/components/home/NextProjectCta";

export default function HomePage() {
  return (
    <>
      <ProjectEntry />
      <Capabilities />
      <FieldProof />
      <ProjectLogicSection />
      <BusinessSection />
      <ProjectFinderSection />
      <ClientTrust />
      <ResourceLayer />
      <PeopleSection />
      <NextProjectCta />
    </>
  );
}
