import { whyPoints } from "@/lib/site-data";

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[65ch] mb-14">
          <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-3">
            Reliable Export Standards
          </h2>
          <p className="text-[17px] text-brand-text-muted">
            Overseas buyers rely on our straightforward approach to quality
            consistency, regulatory adherence, and transparent shipping
            communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPoints.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-lg border border-brand-border bg-brand-surface"
            >
              <span className="material-symbols-outlined text-[28px] text-brand mb-4">
                {point.icon}
              </span>
              <h3 className="text-[17px] font-semibold text-brand mb-2">
                {point.title}
              </h3>
              <p className="text-[14px] text-brand-text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
