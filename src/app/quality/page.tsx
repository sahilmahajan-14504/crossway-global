import type { Metadata } from "next";
import CertificationsStrip from "@/components/CertificationsStrip";
import ProcessSteps from "@/components/quality/ProcessSteps";
import Faq from "@/components/quality/Faq";
import RfqBand from "@/components/home/RfqBand";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "Certifications, laboratory testing process, export shipping parameters, and frequently asked questions for Crossway Global's agricultural exports.",
  alternates: { canonical: "/quality" },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Quality & Compliance", path: "/quality" },
]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqJsonLd} />
      <section className="py-14 md:py-20 border-b border-brand-border bg-white">
        <div className="max-w-site mx-auto px-6">
          <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
            Quality &amp; Compliance
          </p>
          <h1 className="font-serif text-[36px] md:text-[46px] font-semibold text-brand tracking-tight max-w-[24ch] leading-[1.15]">
            Verified at every stage, documented at every step.
          </h1>
        </div>
      </section>
      <CertificationsStrip />
      <ProcessSteps />
      <Faq />
      <RfqBand />
    </>
  );
}
