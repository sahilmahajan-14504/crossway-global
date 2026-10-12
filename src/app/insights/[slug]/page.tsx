import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/insights/ArticleBody";
import { articles, getArticleBySlug } from "@/lib/insights-data";
import { siteConfig } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      images: [{ url: article.image }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${article.slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/insights/${article.slug}`,
  };

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={articleJsonLd} />

      <section className="py-14 md:py-20 border-b border-brand-border bg-white">
        <div className="max-w-site mx-auto px-6">
          <nav className="text-[13.5px] text-brand-text-muted mb-6">
            <Link href="/insights" className="hover:text-brand transition-colors">
              Insights
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-brand">{article.category}</span>
          </nav>
          <h1 className="font-serif text-[32px] md:text-[42px] font-semibold text-brand tracking-tight max-w-[32ch] leading-[1.15] mb-5">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-[13.5px] text-brand-text-muted">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-surface">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-brand-border mb-10">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                />
              </div>
              <ArticleBody blocks={article.body} />
            </div>

            <aside className="lg:col-span-4">
              <div className="bg-white border border-brand-border rounded-lg p-6 sticky top-28">
                <h2 className="font-serif text-[18px] font-semibold text-brand mb-4">
                  Need a quotation?
                </h2>
                <p className="text-[14px] text-brand-text-muted leading-relaxed mb-5">
                  Request specifications, a Certificate of Analysis, or a
                  commercial quote for turmeric, moringa, ashwagandha, or
                  beetroot powder.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded text-[14.5px] font-medium bg-brand text-white hover:bg-brand-dark transition-colors"
                >
                  Request a Quote
                </Link>

                {related.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-brand-border">
                    <h3 className="text-[13px] font-semibold uppercase tracking-wide text-brand-text-muted mb-3">
                      Related reading
                    </h3>
                    <ul className="space-y-3">
                      {related.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/insights/${item.slug}`}
                            className="text-[14px] text-brand font-medium hover:text-brand-gold transition-colors leading-snug block"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
