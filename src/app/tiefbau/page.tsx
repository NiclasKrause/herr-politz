import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("tiefbau")!;

export const metadata: Metadata = {
  title: "Tiefbau",
  description: service.intro,
};

export default function TiefbauPage() {
  return <ServiceDetailPage service={service} />;
}
