import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("tankplaetze-lau-anlagen")!;

export const metadata: Metadata = {
  title: "Tankplätze & LAU-Anlagen",
  description: service.intro,
};

export default function TankplaetzeLauPage() {
  return <ServiceDetailPage service={service} />;
}
