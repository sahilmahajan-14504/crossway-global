import { processSteps, shippingParams } from "@/lib/site-data";

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[65ch] mb-14">
          <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-3">
            Export Process &amp; Order Execution
          </h2>
          <p className="text-[17px] text-brand-text-muted">
            A predictable, transparent operational workflow from initial
            sample evaluation through to container seal and customs release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 relative">
          {processSteps.map((step) => (
            <div key={step.step} className="border-t-2 border-brand pt-4">
              <span className="text-[13px] font-semibold text-brand-gold uppercase tracking-wider block mb-1">
                {step.step}
              </span>
              <h3 className="text-[16px] font-semibold text-brand mb-2">
                {step.title}
              </h3>
              <p className="text-[14px] text-brand-text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-lg p-6 md:p-8">
          <h3 className="font-serif text-[20px] font-semibold text-brand mb-4">
            Export Shipping Parameters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px]">
            {shippingParams.map((param) => (
              <div key={param.label}>
                <span className="block font-medium text-brand-text-muted mb-1">
                  {param.label}
                </span>
                <p className="text-brand font-medium">{param.value}</p>
                <p className="text-brand-text-muted mt-1">{param.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
