import { certifications } from "@/lib/site-data";

export default function CertificationsStrip() {
  return (
    <section className="py-16 md:py-20 border-b border-brand-border bg-brand-surface-alt">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center max-w-[65ch] mx-auto mb-10">
          <h2 className="font-serif text-[28px] md:text-[32px] font-semibold text-brand mb-2">
            Regulatory Compliance &amp; Authorities
          </h2>
          <p className="text-[15px] text-brand-text-muted">
            Our consignments are handled and exported in full compliance
            with Indian trade bodies and international importing country
            standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white p-5 rounded border border-brand-border text-center"
            >
              <p className="font-semibold text-brand text-[15px]">{cert.name}</p>
              <p className="text-[13px] text-brand-text-muted mt-1">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
