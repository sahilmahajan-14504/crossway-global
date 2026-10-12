import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How Crossway Global collects, uses, and protects information submitted through our website and quotation requests.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Notice"
      lastUpdated="October 2026"
    >
      <p>
        This Privacy Notice explains how Crossway Global collects, uses,
        and protects information when you visit this website or submit a
        Request for Quote (RFQ). It applies to visitors and prospective
        business buyers interacting with our site and trade desk.
      </p>

      <LegalSection title="1. Information We Collect">
        <p>We collect information you provide directly, including:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Contact details submitted through the RFQ form — full name,
            company name and country, business email, and phone/WhatsApp
            number.
          </li>
          <li>
            Commercial details relevant to your inquiry — product of
            interest, estimated quantity, preferred Incoterm, destination
            port, and any specific quality requirements or notes you
            include.
          </li>
          <li>
            Correspondence you send us by email or WhatsApp in the course of
            discussing an order.
          </li>
        </ul>
        <p>
          We do not knowingly collect sensitive personal data, payment card
          details, or information from individuals under 18 through this
          website.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>Information submitted through this site is used to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Respond to quotation requests and prepare proforma invoices.</li>
          <li>
            Communicate about an active or prospective order, including
            samples, documentation, and shipping updates.
          </li>
          <li>
            Maintain commercial records required for export compliance and
            accounting.
          </li>
          <li>
            Improve our website and trade desk operations based on inquiry
            patterns.
          </li>
        </ul>
        <p>
          We do not sell, rent, or trade your information to third parties
          for their own marketing purposes.
        </p>
      </LegalSection>

      <LegalSection title="3. Legal Basis for Processing">
        <p>
          Where applicable data protection law requires a legal basis, we
          rely on: performance of a contract or steps taken at your request
          prior to entering a contract (responding to your RFQ), our
          legitimate business interest in operating an export trade desk,
          and compliance with legal and regulatory obligations relating to
          international trade and export documentation.
        </p>
      </LegalSection>

      <LegalSection title="4. Sharing of Information">
        <p>We share information only where necessary to fulfil an order, including with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Freight forwarders, customs agents, and shipping lines, to
            arrange and document export of your order.
          </li>
          <li>
            Accredited testing laboratories, for batch-specific quality
            certification tied to your shipment.
          </li>
          <li>
            Banks and payment intermediaries, to process Letters of Credit
            or Telegraphic Transfers connected to your order.
          </li>
          <li>
            Government and regulatory authorities, where required for
            export licensing, customs clearance, or legal compliance.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          Inquiry and order-related records are retained for as long as
          necessary to fulfil the purposes described above and to meet
          statutory recordkeeping obligations under Indian export and tax
          regulations, typically a minimum of 7 years for transaction
          records. Inquiries that do not result in an order are retained
          only as long as reasonably needed to respond to the request.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies &amp; Website Analytics">
        <p>
          This website may use minimal, functional cookies necessary for
          basic site operation. We do not currently use third-party
          advertising or cross-site tracking cookies. If this changes, this
          notice will be updated accordingly.
        </p>
      </LegalSection>

      <LegalSection title="7. Data Security">
        <p>
          We take reasonable technical and organizational measures to
          protect the information you share with us against unauthorized
          access, alteration, or disclosure. No method of electronic
          transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="8. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your
          personal information held by us, subject to our legitimate
          business and legal recordkeeping requirements. To make a request,
          contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Notice">
        <p>
          We may update this Privacy Notice from time to time to reflect
          changes in our practices or applicable law. The &quot;Last
          updated&quot; date at the top of this page indicates when it was
          last revised.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          For privacy-related questions or requests, contact us at{" "}
          <a className="text-brand font-medium hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
