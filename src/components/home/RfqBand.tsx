import Link from "next/link";

export default function RfqBand() {
  return (
    <section className="py-20 md:py-28 bg-brand">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
              Direct Commercial Desk
            </p>
            <h2 className="font-serif text-[30px] md:text-[36px] font-semibold text-white max-w-[20ch]">
              Ready for a formal export quotation?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded text-[15px] font-semibold bg-brand-gold text-white hover:bg-brand-gold-hover transition-colors shadow-sm shrink-0"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
