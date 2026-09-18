import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("tankplaetze-lau")!;

export const metadata: Metadata = {
  title: "Tankplätze & LAU-Anlagen",
  description: service.intro,
};

export default function TankplaetzeLauPage() {
  return <ServiceDetail service={service} />;
}
