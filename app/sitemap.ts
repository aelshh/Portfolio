import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/#about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/#projects`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/#skills`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/#experience`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/#contact`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return sections.map((s) => ({
    url: s.url,
    lastModified: new Date(),
    changeFrequency: s.changeFrequency,
    priority: s.priority,
  }));
}
