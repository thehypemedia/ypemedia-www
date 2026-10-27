import type { MetadataRoute } from "next";
import { marka } from "@/data/tresc";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const teraz = new Date();
  return ["/", "/terms/", "/privacy/"].map((p) => ({
    url: `${marka.domena}${p}`,
    lastModified: teraz,
    changeFrequency: p === "/" ? "weekly" : "yearly",
    priority: p === "/" ? 1 : 0.3,
  }));
}
