import Image from "next/image";
import { waigaonFacts } from "@/lib/site-data";

export default function WaigaonHeritage() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3 block">
              Regional Heritage
            </span>
            <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-6">
              What makes Waigaon turmeric special?
            </h2>
            <p className="text-[16px] text-brand-text-muted leading-relaxed max-w-[52ch] mb-6">
              Waigaon turmeric is a traditional turmeric variety grown in the
              Wardha district of Maharashtra, particularly around Waigaon
              village in Samudrapur taluka. It is known for its rich yellow
              colour, strong aroma, and curcumin content — a distinctive
              regional product recognized with a registered Geographical
              Indication (GI) tag.
            </p>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-brand-border">
              <Image
                src="/images/product-turmeric.jpg"
                alt="Whole Waigaon turmeric fingers and powder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <dl className="divide-y divide-brand-border border-t border-b border-brand-border">
              {waigaonFacts.map((fact) => (
                <div key={fact.label} className="py-6 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-8">
                  <dt className="text-[14px] font-semibold text-brand uppercase tracking-wide">
                    {fact.label}
                  </dt>
                  <dd className="text-[15px] text-brand-text-muted leading-relaxed">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-[13px] text-brand-text-muted mt-6">
              Curcumin content figures are commercial descriptions and vary
              by batch — each consignment&apos;s actual content is confirmed
              through independent laboratory testing prior to dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
