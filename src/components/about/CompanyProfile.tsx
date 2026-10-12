import { companyValues } from "@/lib/site-data";

export default function CompanyProfile() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-brand-surface">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <span className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3 block">
              Connecting Indian Quality with Global Markets
            </span>
            <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-6">
              An India-based import-export and trading company.
            </h2>
            <div className="space-y-4 text-[16px] text-brand-text-muted leading-relaxed max-w-[70ch]">
              <p>
                Crossway Global is committed to connecting quality Indian
                products with markets around the world. We focus on building
                reliable trade partnerships by delivering quality-driven
                products, maintaining transparent business practices, and
                providing a seamless trading experience.
              </p>
              <p>
                With a focus on Indian spices and agricultural products —
                including premium turmeric varieties such as Salem turmeric
                and Waigaon turmeric, beetroot powder, moringa powder, and
                ashwagandha powder — we aim to bring the richness and
                authenticity of India&apos;s produce to international buyers.
                We strive to meet our customers&apos; requirements through
                careful product selection, consistent quality standards, and
                dependable business relationships.
              </p>
              <p>
                At Crossway Global, we believe that successful international
                trade is built on trust, integrity, and long-term
                collaboration. Our goal is to simplify global sourcing,
                create value for our partners, and establish lasting
                relationships with importers, distributors, wholesalers, and
                businesses worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-brand-border rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-[20px] font-semibold text-brand mb-3">
              Our Mission
            </h3>
            <p className="text-[15px] text-brand-text-muted leading-relaxed">
              To deliver quality products, build trusted international
              partnerships, and make global trade simpler, more reliable,
              and more accessible.
            </p>
          </div>
          <div className="bg-white border border-brand-border rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-[20px] font-semibold text-brand mb-3">
              Our Vision
            </h3>
            <p className="text-[15px] text-brand-text-muted leading-relaxed">
              To establish Crossway Global as a trusted name in
              international trade, recognized for product quality,
              professional service, and strong global business
              relationships.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-[24px] font-semibold text-brand mb-8">
            Our Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyValues.map((value) => (
              <div key={value.title}>
                <p className="text-[15px] font-semibold text-brand mb-1.5">
                  {value.title}
                </p>
                <p className="text-[14px] text-brand-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
