import Hero from "@/components/home/Hero";
import ProductsOverview from "@/components/home/ProductsOverview";
import WhyUs from "@/components/home/WhyUs";
import CertificationsStrip from "@/components/CertificationsStrip";
import RfqBand from "@/components/home/RfqBand";

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
