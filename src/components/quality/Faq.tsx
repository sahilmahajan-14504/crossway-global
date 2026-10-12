import { faqs } from "@/lib/site-data";

export default function Faq() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-brand-surface">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[65ch] mb-14">
          <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[17px] text-brand-text-muted">
            Standard terms and practical considerations for commercial trade
            consignments.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border border-brand-border rounded-lg p-5 cursor-pointer"
            >
              <summary className="flex items-center justify-between font-serif text-[18px] font-semibold text-brand list-none">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-brand-text-muted faq-chevron transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 text-[15px] text-brand-text-muted leading-relaxed border-t border-brand-border pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
