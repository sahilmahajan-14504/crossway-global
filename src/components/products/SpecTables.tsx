import Link from "next/link";
import { products } from "@/lib/site-data";

export default function SpecTables() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-2">
              Technical Specifications
            </h2>
            <p className="text-[17px] text-brand-text-muted max-w-[65ch]">
              Commercial baseline parameters for export consignments.
              Batch-specific Certificates of Analysis are generated prior to
              port dispatch by accredited laboratories.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-[14px] font-medium text-brand hover:underline inline-flex items-center"
            >
              <span className="material-symbols-outlined text-[18px] mr-1">
                description
              </span>
              Request a Certificate of Analysis (COA) for your batch
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-brand-border p-6 md:p-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-brand-border mb-4">
                <h3 className="font-serif text-[20px] font-semibold text-brand">
                  {product.specTitle}
                </h3>
                <span className="text-[13px] bg-brand-surface px-2.5 py-1 rounded text-brand-text-muted font-medium">
                  Export Specification
                </span>
              </div>
              <table className="w-full text-left text-[14px]">
                <tbody className="divide-y divide-brand-border">
                  {product.specs.map((spec) => (
                    <tr key={spec.label}>
                      <td className="py-3 font-medium text-brand-text-muted w-1/2">
                        {spec.label}
                      </td>
                      <td
                        className={`py-3 text-brand ${
                          spec.highlight ? "font-semibold" : ""
                        }`}
                      >
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
