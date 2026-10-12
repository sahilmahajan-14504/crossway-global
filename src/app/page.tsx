import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProductsOverview from "@/components/home/ProductsOverview";
import WhyUs from "@/components/home/WhyUs";
import CertificationsStrip from "@/components/CertificationsStrip";
import RfqBand from "@/components/home/RfqBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsOverview />
      <WhyUs />
      <CertificationsStrip />
      <RfqBand />
    </>
  );
}
