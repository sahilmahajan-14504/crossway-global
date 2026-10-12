import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { articles } from "@/lib/insights-data";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Buyer guides and quality notes on Waigaon and Salem turmeric, moringa, ashwagandha, and beetroot powder — sourcing, specifications, and how to read export documentation.",
  alternates: { canonical: "/insights" },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Insights", path: "/insights" },
]);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="py-14 md:py-20 border-b border-brand-border bg-white">
        <div className="max-w-site mx-auto px-6">
          <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
            Insights
          </p>
          <h1 className="font-serif text-[36px] md:text-[46px] font-semibold text-brand tracking-tight max-w-[26ch] leading-[1.15]">
            Buyer guides &amp; quality notes.
          </h1>
          <p className="text-[17px] text-brand-text-muted max-w-[62ch] mt-5">
            Practical, specific notes on sourcing Indian turmeric, moringa,
            ashwagandha, and beetroot powder — written for buyers evaluating
            specifications, origin, and documentation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-surface">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex flex-col border border-brand-border rounded-lg bg-white overflow-hidden hover:border-brand-border-dark transition-colors"
              >
                <div className="relative h-56 overflow-hidden bg-brand-surface-alt">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[12.5px] text-brand-text-muted mb-3">
                    <span className="font-medium text-brand-gold uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h2 className="font-serif text-[20px] font-semibold text-brand mb-2.5 leading-snug group-hover:text-brand-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[14.5px] text-brand-text-muted leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
