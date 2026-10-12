import type { ReactNode } from "react";

export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="py-14 md:py-20 border-b border-brand-border bg-white">
        <div className="max-w-site mx-auto px-6">
          <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
            {eyebrow}
          </p>
          <h1 className="font-serif text-[34px] md:text-[42px] font-semibold text-brand tracking-tight max-w-[26ch] leading-[1.15]">
            {title}
          </h1>
          <p className="text-[14px] text-brand-text-muted mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-surface">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-[72ch] space-y-10 text-[15.5px] text-brand-text-muted leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-[21px] font-semibold text-brand mb-3">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
