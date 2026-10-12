import type { Metadata } from "next";
import RfqForm from "@/components/RfqForm";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a commercial quotation for turmeric, moringa, ashwagandha, or beetroot powder, or reach the Crossway Global trade desk directly.",
  alternates: { canonical: "/contact" },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="py-20 md:py-28 border-b border-brand-border bg-white">
        <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3 block">
                Direct Commercial Desk
              </span>
              <h1 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-4">
                Request a Commercial Export Quotation
              </h1>
              <p className="text-[16px] text-brand-text-muted leading-relaxed mb-6">
                Complete the inquiry form with your required specifications
                and destination port. Our export desk reviews each request
                and provides a formal proforma indication within 1 business
                day.
              </p>
              <div className="space-y-4 pt-4 border-t border-brand-border text-[15px] text-brand-text">
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-[20px] text-brand mr-3 mt-0.5">
                    mail
                  </span>
                  <div>
                    <span className="block text-brand-text-muted text-[13px]">
                      Official Export Email
                    </span>
                    <span className="font-medium">{siteConfig.email}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-[20px] text-brand mr-3 mt-0.5">
                    phone_iphone
                  </span>
                  <div>
                    <span className="block text-brand-text-muted text-[13px]">
                      Direct WhatsApp / Trade Desk
                    </span>
                    <span className="font-medium">
                      {siteConfig.phone} ({siteConfig.hours})
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-[20px] text-brand mr-3 mt-0.5">
                    location_on
                  </span>
                  <div>
                    <span className="block text-brand-text-muted text-[13px]">
                      Logistics Office
                    </span>
                    <span className="font-medium">{siteConfig.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-brand-surface rounded border border-brand-border text-[14px] text-brand-text-muted">
              <span className="font-semibold text-brand block mb-1">
                Evaluation Samples
              </span>
              Complimentary 500g commercial evaluation samples are available
              to registered companies with an active import tax or corporate
              registration ID. Courier shipping arranged via DHL or FedEx.
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-surface border border-brand-border rounded-lg p-6 md:p-8">
            <RfqForm />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
