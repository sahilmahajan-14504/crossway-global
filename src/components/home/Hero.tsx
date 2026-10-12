import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
              Merchant Exporters &amp; Processors
            </p>
            <h1 className="font-serif text-[40px] md:text-[52px] leading-[1.18] font-semibold text-brand tracking-tight mb-6">
              Quality turmeric and moringa, exported directly from India.
            </h1>
            <p className="text-[18px] text-brand-text-muted max-w-[62ch] mb-8 font-normal leading-relaxed">
              Direct export of standardized high-curcumin turmeric and
              certified organic moringa leaf powder. Sourced directly from
              verified growers in Tamil Nadu, Maharashtra, and Andhra Pradesh
              for global food manufacturers, nutraceutical formulators, and
              overseas importers.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-[15px] font-medium bg-brand-gold text-white hover:bg-brand-gold-hover transition-colors shadow-sm"
              >
                Request a Commercial Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-[15px] font-medium border border-brand-border bg-white text-brand hover:border-brand-text-muted transition-colors"
              >
                View Product Specifications
              </Link>
            </div>
            <p className="text-[14px] text-brand-text-muted pt-4 border-t border-brand-border w-full">
              Exporting verified agricultural consignments to qualified
              commercial importers across Europe, North America, the Middle
              East, and Southeast Asia.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-brand-border bg-white shadow-sm">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/hero-turmeric.jpg"
                  alt="Whole dried turmeric roots, polished fingers, and laboratory-grade pure turmeric powder on a banana leaf"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="p-4 bg-brand-surface border-t border-brand-border flex items-center justify-between text-[14px] text-brand-text-muted">
                <span>Curcuma longa (Erode &amp; Salem origins)</span>
                <span className="font-medium text-brand">Export Grade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
