import type { Metadata } from "next";
import CompanyProfile from "@/components/about/CompanyProfile";
import TradeOperations from "@/components/about/TradeOperations";
import WaigaonHeritage from "@/components/about/WaigaonHeritage";
import RfqBand from "@/components/home/RfqBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Crossway Global is an India-based import-export and trading company connecting quality Indian products — including GI-tagged Waigaon turmeric, moringa, ashwagandha, and beetroot powder — with domestic and global markets.",
  alternates: { canonical: "/about" },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="py-14 md:py-20 border-b border-brand-border bg-white">
        <div className="max-w-site mx-auto px-6">
          <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
            About Us
          </p>
          <h1 className="font-serif text-[36px] md:text-[46px] font-semibold text-brand tracking-tight max-w-[26ch] leading-[1.15]">
            Quality products. Global trade. Seamless solutions.
          </h1>
        </div>
      </section>
      <CompanyProfile />
      <TradeOperations />
      <WaigaonHeritage />
      <RfqBand />
    </>
  );
}
