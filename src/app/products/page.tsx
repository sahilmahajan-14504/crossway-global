import type { Metadata } from "next";
import ProductsOverview from "@/components/home/ProductsOverview";
import SpecTables from "@/components/products/SpecTables";
import RfqBand from "@/components/home/RfqBand";
import JsonLd from "@/components/JsonLd";
import { products, siteConfig } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Export Products",
  description:
    "High-curcumin turmeric, organic moringa leaf powder, dehydrated beetroot powder, and premium ashwagandha root powder — full export specifications, packaging, and MOQ.",
  alternates: { canonical: "/products" },
};

const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      "@id": `${siteConfig.url}/products#${product.id}`,
      name: product.name,
      description: product.description,
      image: `${siteConfig.url}${product.image}`,
      brand: { "@type": "Brand", name: siteConfig.name },
      category: "Agricultural & Botanical Powders",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${siteConfig.url}/contact`,
        seller: { "@id": `${siteConfig.url}/#organization` },
      },
    },
  })),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
]);

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={productListJsonLd} />
      <section className="py-14 md:py-20 border-b border-brand-border bg-white">
        <div className="max-w-site mx-auto px-6">
          <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
            Export Products
          </p>
          <h1 className="font-serif text-[36px] md:text-[46px] font-semibold text-brand tracking-tight max-w-[24ch] leading-[1.15]">
            Botanical exports &amp; technical specifications.
          </h1>
        </div>
      </section>
      <ProductsOverview />
      <SpecTables />
      <RfqBand />
    </>
  );
}
