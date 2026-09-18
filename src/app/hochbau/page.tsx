import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("hochbau")!;

export const metadata: Metadata = {
  title: "Hochbau",
  description: service.intro,
};

export default function HochbauPage() {
  return <ServiceDetail service={service} />;
}
