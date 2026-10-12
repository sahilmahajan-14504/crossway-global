import type { RfqPayload } from "@/app/api/rfq/route";

const PRODUCT_LABELS: Record<string, string> = {
  turmeric: "Turmeric (Salem / Waigaon)",
  moringa: "Moringa Leaf Powder",
  beetroot: "Beetroot Powder",
  ashwagandha: "Ashwagandha Root Powder",
  multiple: "Multiple Products / Combined Shipment",
};

const INCOTERM_LABELS: Record<string, string> = {
  cif: "CIF (Port of Destination)",
  fob: "FOB (Nhava Sheva / Chennai)",
  cfr: "CFR (Cost & Freight)",
  exw: "Ex-Works Factory",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #e5e0d8;color:#526058;font-size:13px;width:180px;vertical-align:top;">${escapeHtml(
        label
      )}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #e5e0d8;color:#1c2420;font-size:14px;vertical-align:top;">${escapeHtml(
        value
      )}</td>
    </tr>`;
}

export function buildRfqEmailHtml(payload: RfqPayload): string {
  const productLabel = PRODUCT_LABELS[payload.product] ?? payload.product;
  const incotermLabel = INCOTERM_LABELS[payload.incoterm] ?? payload.incoterm;

  const rows = [
    row("Full Name", payload.fullName),
    row("Company & Country", payload.companyCountry),
    row("Business Email", payload.email),
    payload.phone ? row("Phone / WhatsApp", payload.phone) : "",
    row("Product of Interest", productLabel),
    row("Estimated Quantity", payload.quantity),
    row("Preferred Incoterm", incotermLabel),
    row("Destination Port & City", payload.destinationPort),
    row("Evaluation Sample Requested", payload.sampleRequested ? "Yes" : "No"),
  ].join("");

  const requirementsBlock = payload.requirements
    ? `
    <tr>
      <td colspan="2" style="padding:16px;">
        <div style="color:#526058;font-size:13px;margin-bottom:6px;">Specific Quality Requirements / Notes</div>
        <div style="color:#1c2420;font-size:14px;white-space:pre-wrap;">${escapeHtml(
          payload.requirements
        )}</div>
      </td>
    </tr>`
    : "";

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#faf8f4;padding:32px 16px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e0d8;border-radius:8px;overflow:hidden;">
      <div style="background:#162b23;padding:20px 24px;">
        <span style="color:#ffffff;font-size:18px;font-weight:600;">New Request for Quote</span>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${rows}
        ${requirementsBlock}
      </table>
      <div style="padding:16px 24px;background:#f3efe9;font-size:12px;color:#526058;">
        Submitted via crosswayglobal.co.in contact form at ${new Date().toLocaleString(
          "en-IN",
          { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }
        )} IST.
      </div>
    </div>
  </div>`;
}

export function buildRfqEmailText(payload: RfqPayload): string {
  const productLabel = PRODUCT_LABELS[payload.product] ?? payload.product;
  const incotermLabel = INCOTERM_LABELS[payload.incoterm] ?? payload.incoterm;

  const lines = [
    "New Request for Quote",
    "",
    `Full Name: ${payload.fullName}`,
    `Company & Country: ${payload.companyCountry}`,
    `Business Email: ${payload.email}`,
    payload.phone ? `Phone / WhatsApp: ${payload.phone}` : "",
    `Product of Interest: ${productLabel}`,
    `Estimated Quantity: ${payload.quantity}`,
    `Preferred Incoterm: ${incotermLabel}`,
    `Destination Port & City: ${payload.destinationPort}`,
    `Evaluation Sample Requested: ${payload.sampleRequested ? "Yes" : "No"}`,
    payload.requirements ? `\nRequirements / Notes:\n${payload.requirements}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}
