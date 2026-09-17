import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("hochbau")!;

export const metadata: Metadata = {
  title: "Hochbau",
  description: service.intro,
};

export default function HochbauPage() {
  return <ServiceDetailPage service={service} />;
}
