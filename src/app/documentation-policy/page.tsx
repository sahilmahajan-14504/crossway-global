import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Export Documentation Policy",
  description:
    "The shipping, quality, and regulatory documentation Crossway Global issues with every export consignment.",
  alternates: { canonical: "/documentation-policy" },
};

export default function DocumentationPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Export Documentation Policy"
      lastUpdated="October 2026"
    >
      <p>
        This policy describes the documentation Crossway Global prepares
        and issues for export consignments, and clarifies which documents
        are the Buyer&apos;s responsibility under standard Incoterm
        arrangements.
      </p>

      <LegalSection title="1. Standard Shipping Documents">
        <p>For every confirmed order, we issue:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Commercial Invoice, matching the agreed proforma terms.</li>
          <li>Packing List, detailing carton/bag count, net and gross weight.</li>
          <li>
            Bill of Lading (or Air Waybill for air freight), issued upon
            clean on-board loading.
          </li>
          <li>Certificate of Origin, issued by the relevant Indian chamber of commerce.</li>
          <li>
            Phytosanitary Certificate, issued by the Plant Quarantine
            authority where required by the destination country.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Certificate of Analysis (COA)">
        <p>
          Each export lot is tested at an accredited third-party laboratory
          (such as SGS, Eurofins, or Spices Board-approved labs) prior to
          dispatch. The resulting Certificate of Analysis is batch-specific
          and covers the parameters relevant to the product — for turmeric,
          this includes curcumin content (HPLC), moisture, total and acid
          insoluble ash, and heavy metals; for moringa, moisture, crude
          protein, and microbiological screening. The COA is included with
          shipping documentation and available on request before shipment
          for Buyer review.
        </p>
      </LegalSection>

      <LegalSection title="3. HS Classification">
        <p>
          Products are classified and declared under their applicable
          Harmonized System codes (e.g., HS 0910.30 for turmeric, HS
          1211.90 for moringa leaf powder) on all commercial and customs
          documentation. Buyers requiring a different classification for
          destination-country import purposes should confirm this in
          writing prior to order confirmation, as HS classification affects
          duty calculation and import permit requirements.
        </p>
      </LegalSection>

      <LegalSection title="4. Export Registration">
        <p>
          Crossway Global ships under a valid Importer-Exporter Code (IEC)
          issued by the Directorate General of Foreign Trade (DGFT), and
          holds registration with the Spices Board of India and APEDA
          where applicable to the product category being exported. Copies
          of relevant registration certificates can be provided to Buyers
          for their own import compliance records on request.
        </p>
      </LegalSection>

      <LegalSection title="5. Documentation by Incoterm">
        <p>
          Responsibility for destination-side documentation (import permits,
          customs bonds, local clearance paperwork) varies by the Incoterm
          agreed for the order:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <span className="font-medium text-brand">FOB / Ex-Works</span> —
            Buyer arranges and is responsible for destination-side import
            documentation and customs clearance.
          </li>
          <li>
            <span className="font-medium text-brand">CFR / CIF</span> — We
            arrange freight (and insurance, under CIF) to the named
            destination port; the Buyer remains responsible for import
            clearance at destination.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Sample &amp; Pre-Shipment Documentation">
        <p>
          Evaluation samples are dispatched with a product specification
          sheet and, where available, a preliminary analytical report.
          Final shipment documentation, including the batch COA, is issued
          once production and quality testing of the confirmed order is
          complete — typically alongside container stuffing and prior to
          vessel dispatch.
        </p>
      </LegalSection>

      <LegalSection title="7. Document Delivery">
        <p>
          Original shipping documents are couriered to the Buyer (or to the
          negotiating bank, under Letter of Credit terms) promptly after
          vessel departure. Scanned copies are shared by email in advance
          to support the Buyer&apos;s own import preparation.
        </p>
      </LegalSection>

      <LegalSection title="8. Requesting Documentation">
        <p>
          For a sample COA, a copy of our export registration certificates,
          or questions about documentation for a specific order, contact
          our export desk at{" "}
          <a className="text-brand font-medium hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
