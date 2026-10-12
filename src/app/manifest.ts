import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Quality Products. Global Trade. Seamless Solutions.`,
    short_name: siteConfig.name,
    description:
      "India-based import-export and trading company supplying turmeric, moringa, ashwagandha, and beetroot powder.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#faf8f4",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo-mark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
