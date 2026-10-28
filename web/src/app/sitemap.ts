import type { MetadataRoute } from "next";
import { marka } from "@/data/tresc";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const teraz = new Date();
  return ["/", "/editor/", "/terms/", "/privacy/"].map((p) => ({
    url: `${marka.domena}${p}`,
    lastModified: teraz,
    changeFrequency: p === "/" || p === "/editor/" ? "weekly" : "yearly",
    priority: p === "/" ? 1 : p === "/editor/" ? 0.8 : 0.3,
  }));
}
