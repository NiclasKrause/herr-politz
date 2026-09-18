import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("tiefbau")!;

export const metadata: Metadata = {
  title: "Tiefbau",
  description: service.intro,
};

export default function TiefbauPage() {
  return <ServiceDetail service={service} />;
}
