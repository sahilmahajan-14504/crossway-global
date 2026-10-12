import type { Metadata } from "next";
import CompanyProfile from "@/components/about/CompanyProfile";
import TradeOperations from "@/components/about/TradeOperations";
import WaigaonHeritage from "@/components/about/WaigaonHeritage";
import RfqBand from "@/components/home/RfqBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Crossway Global is an Indian merchant exporter of high-curcumin turmeric — including traditional GI-tagged Waigaon turmeric — and organic moringa leaf powder, with direct farmer relationships and institutional export accountability.",
};

export default function AboutPage() {
  return (
    <>
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
