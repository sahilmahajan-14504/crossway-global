import { tradeOperations } from "@/lib/site-data";

export default function TradeOperations() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-brand-surface-alt">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[65ch] mb-14">
          <span className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3 block">
            How We Trade
          </span>
          <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-3">
            Domestic &amp; International Trade
          </h2>
          <p className="text-[17px] text-brand-text-muted">
            Two trade channels, one standard of quality — serving business
            partners within India and importers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {tradeOperations.map((op) => (
            <article
              key={op.id}
              className="flex flex-col border border-brand-border rounded-lg bg-white p-6 md:p-8"
            >
              <span className="material-symbols-outlined text-[28px] text-brand mb-4">
                {op.icon}
              </span>
              <span className="text-[13px] font-semibold text-brand-gold uppercase tracking-wider mb-2">
                {op.label}
              </span>
              <h3 className="font-serif text-[22px] font-semibold text-brand mb-4">
                {op.title}
              </h3>
              <p className="text-[15px] text-brand-text-muted leading-relaxed mb-5">
                {op.description}
              </p>
              <p className="text-[15px] text-brand font-medium border-t border-brand-border pt-4 mt-auto">
                {op.goal}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
