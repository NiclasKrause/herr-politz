import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/ansprechpartner", "/karriere", "/hinweisgeberschutzgesetz"];

  const serviceRoutes = services.map((s) => `/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${company.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
