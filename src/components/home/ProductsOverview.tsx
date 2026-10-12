import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/site-data";

export default function ProductsOverview() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[68ch] mb-14">
          <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-3">
            Our Export Products
          </h2>
          <p className="text-[17px] text-brand-text-muted">
            We specialize in premium agricultural and botanical products where
            India holds distinct climatic and cultivation advantages. Every
            consignment is cleaned, processed, and packed in food-grade
            certified facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col border border-brand-border rounded-lg bg-brand-surface overflow-hidden hover:border-brand-border-dark transition-colors"
            >
              <div className="relative h-64 overflow-hidden bg-brand-surface-alt">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-[24px] font-semibold text-brand">
                      {product.name}
                    </h3>
                    <span className="text-[14px] font-medium text-brand-text-muted">
                      {product.hsCode}
                    </span>
                  </div>
                  <p className="text-[15px] text-brand-text-muted mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-8 text-[14px] text-brand-text">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="material-symbols-outlined text-[18px] text-brand mr-2">
                          check
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center text-[15px] font-medium text-brand hover:text-brand-gold transition-colors"
                >
                  View specifications &amp; test tolerances →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
