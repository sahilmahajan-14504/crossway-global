import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Trade",
  description:
    "Commercial terms governing quotations, orders, payment, quality inspection, and shipment for Crossway Global export transactions.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Trade"
      lastUpdated="October 2026"
    >
      <p>
        These Terms of Trade govern commercial quotations, purchase orders,
        and export transactions entered into between Crossway Global
        (&quot;Crossway Global&quot;, &quot;we&quot;, &quot;us&quot;) and a
        buyer (&quot;Buyer&quot;, &quot;you&quot;). By submitting a Request
        for Quote, placing a purchase order, or accepting a proforma
        invoice, the Buyer agrees to be bound by these terms unless a
        separate signed sales contract expressly states otherwise, in which
        case that contract prevails.
      </p>

      <LegalSection title="1. Quotations &amp; Proforma Invoices">
        <p>
          Quotations provided via email, this website, or our trade desk are
          indicative and subject to confirmation. A quotation becomes
          commercially binding only upon issuance of a signed proforma
          invoice specifying product, quantity, price, Incoterm, packaging,
          and delivery timeline. Prices quoted are valid for the period
          stated on the proforma invoice and may vary thereafter based on
          raw material cost, freight rates, and currency movement.
        </p>
      </LegalSection>

      <LegalSection title="2. Orders &amp; Order Confirmation">
        <p>
          A purchase order is confirmed only after the Buyer countersigns
          the proforma invoice and, where applicable, remits the agreed
          advance payment. Crossway Global reserves the right to decline or
          cancel an order prior to confirmation, including where product
          availability, regulatory restrictions in the destination country,
          or sanctions compliance checks prevent fulfillment.
        </p>
      </LegalSection>

      <LegalSection title="3. Pricing &amp; Incoterms">
        <p>
          All prices are quoted in the currency and under the Incoterm
          (Incoterms® 2020) specified on the proforma invoice — typically
          FOB, CFR, CIF, or Ex-Works. Each party&apos;s obligations for
          freight, insurance, and risk transfer are determined by the
          selected Incoterm. Bank charges, destination-country duties,
          taxes, and local clearance costs are the Buyer&apos;s
          responsibility unless explicitly included in the quoted price.
        </p>
      </LegalSection>

      <LegalSection title="4. Samples &amp; Product Evaluation">
        <p>
          Pre-shipment samples represent the typical quality of the product
          offered but are not a binding guarantee of every attribute of the
          bulk consignment, which is subject to natural variation inherent
          to agricultural commodities. Buyers are encouraged to confirm
          critical specifications (such as curcumin content or moisture
          levels) against the batch-specific Certificate of Analysis issued
          prior to shipment.
        </p>
      </LegalSection>

      <LegalSection title="5. Payment Terms">
        <p>
          Standard payment instruments accepted include an Irrevocable
          Confirmed Letter of Credit at Sight (L/C at Sight) from a
          recognized international bank, or Telegraphic Transfer (T/T),
          typically structured as a percentage advance on order confirmation
          with the balance against shipping documents. Specific payment
          terms for a given order are fixed on the proforma invoice and do
          not vary without written agreement from both parties.
        </p>
      </LegalSection>

      <LegalSection title="6. Quality Inspection &amp; Certificates of Analysis">
        <p>
          Each export lot is tested at an accredited third-party laboratory
          prior to dispatch. The Certificate of Analysis (COA) issued for
          that batch forms part of the shipping documentation and reflects
          the quality parameters of the specific consignment shipped. Any
          quality dispute must be raised in writing within 7 days of cargo
          arrival at the destination port, accompanied by an independent
          survey report; claims raised after this period, or without
          supporting documentation, will not be accepted.
        </p>
      </LegalSection>

      <LegalSection title="7. Packaging &amp; Labeling">
        <p>
          Standard export packaging (multi-wall kraft paper bags,
          nitrogen-flushed foil, fiber drums, or private-label formats as
          agreed) is used unless the Buyer specifies alternative packaging
          in writing at the time of order confirmation. Labeling complies
          with general international shipping norms; Buyer-specific
          regulatory labeling (e.g., destination-country food labeling
          requirements) is the Buyer&apos;s responsibility to specify and
          confirm before production.
        </p>
      </LegalSection>

      <LegalSection title="8. Shipment, Delivery &amp; Delay">
        <p>
          Estimated lead times (typically 14–21 days to port loading from
          contract execution and final packaging approval) are
          good-faith estimates, not guaranteed delivery dates. Crossway
          Global is not liable for delays caused by customs processing,
          port congestion, carrier scheduling, weather, or other
          circumstances outside its reasonable control. Risk of loss
          transfers to the Buyer at the point defined by the agreed
          Incoterm.
        </p>
      </LegalSection>

      <LegalSection title="9. Force Majeure">
        <p>
          Neither party is liable for failure or delay in performance
          resulting from events beyond its reasonable control, including
          natural disasters, strikes, war, government action, pandemic
          restrictions, or disruption to shipping and port operations.
          Affected obligations are suspended for the duration of the
          force majeure event, and either party may terminate the
          affected order if the event continues beyond 60 days.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of Liability">
        <p>
          Crossway Global&apos;s liability for any claim arising from an
          order is limited to the invoice value of the affected
          consignment. We are not liable for indirect, incidental, or
          consequential losses, including loss of profit or business
          opportunity, arising from a transaction.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law &amp; Disputes">
        <p>
          These terms are governed by the laws of India. Disputes arising
          from a transaction will first be addressed through good-faith
          negotiation between the parties; if unresolved, they will be
          referred to arbitration seated in Maharashtra, India, in
          accordance with the Arbitration and Conciliation Act, 1996.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          Questions about these Terms of Trade or a specific order should be
          directed to our export desk at{" "}
          <a className="text-brand font-medium hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
