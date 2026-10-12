import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";
import { articles } from "@/lib/insights-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified?: Date;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/products", changeFrequency: "weekly", priority: 0.9 },
    { path: "/insights", changeFrequency: "weekly", priority: 0.8 },
    { path: "/quality", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/documentation-policy", changeFrequency: "yearly", priority: 0.3 },
    ...articles.map((article) => ({
      path: `/insights/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      lastModified: new Date(article.publishedAt),
    })),
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: route.lastModified ?? lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
