"use client";

import { useState, type FormEvent } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full px-3.5 py-2.5 bg-white border border-brand-border rounded text-[15px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand";
const labelClass = "block text-[14px] font-semibold text-brand mb-1.5";

export default function RfqForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("full-name"),
      companyCountry: formData.get("company-country"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("product-select"),
      quantity: formData.get("estimated-quantity"),
      incoterm: formData.get("incoterm"),
      destinationPort: formData.get("destination-port"),
      requirements: formData.get("requirements"),
      sampleRequested: formData.get("sample-request") === "on",
    };

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="full-name">
            Full Name *
          </label>
          <input
            className={fieldClass}
            id="full-name"
            name="full-name"
            placeholder="e.g. David Reynolds"
            required
            type="text"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="company-country">
            Company &amp; Country *
          </label>
          <input
            className={fieldClass}
            id="company-country"
            name="company-country"
            placeholder="e.g. BioHerb GmbH, Germany"
            required
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="email">
            Business Email *
          </label>
          <input
            className={fieldClass}
            id="email"
            name="email"
            placeholder="e.g. d.reynolds@bioherb.de"
            required
            type="email"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            className={fieldClass}
            id="phone"
            name="phone"
            placeholder="+49 30 1234567"
            type="tel"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="product-select">
            Product of Interest *
          </label>
          <select
            className={fieldClass}
            id="product-select"
            name="product-select"
            required
            defaultValue="turmeric-powder"
          >
            <option value="turmeric-powder">
              Turmeric Powder (High Curcumin)
            </option>
            <option value="turmeric-fingers">
              Turmeric Whole Fingers (Double Polished)
            </option>
            <option value="moringa-powder">Organic Moringa Leaf Powder</option>
            <option value="both-combined">
              Combined Shipment (Turmeric &amp; Moringa)
            </option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="estimated-quantity">
            Estimated Quantity *
          </label>
          <input
            className={fieldClass}
            id="estimated-quantity"
            name="estimated-quantity"
            placeholder="e.g. 25 kg turmeric or 100 kg moringa"
            required
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="incoterm">
            Preferred Incoterm *
          </label>
          <select
            className={fieldClass}
            id="incoterm"
            name="incoterm"
            required
            defaultValue="cif"
          >
            <option value="cif">CIF (Port of Destination)</option>
            <option value="fob">FOB (Nhava Sheva / Chennai)</option>
            <option value="cfr">CFR (Cost &amp; Freight)</option>
            <option value="exw">Ex-Works Factory</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="destination-port">
            Destination Port &amp; City *
          </label>
          <input
            className={fieldClass}
            id="destination-port"
            name="destination-port"
            placeholder="e.g. Rotterdam, Hamburg, or LA"
            required
            type="text"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="requirements">
          Specific Quality Requirements / Mesh / Notes
        </label>
        <textarea
          className={fieldClass}
          id="requirements"
          name="requirements"
          placeholder="Please specify desired curcumin percentage (e.g. 5%), packing size (e.g. 25kg paper sacks), or private label requirements..."
          rows={3}
        />
      </div>

      <div className="flex items-center space-x-3 pt-1">
        <input
          className="rounded border-brand-border text-brand focus:ring-brand h-4 w-4"
          id="sample-request"
          name="sample-request"
          type="checkbox"
        />
        <label className="text-[14px] text-brand-text" htmlFor="sample-request">
          Request a 500g commercial evaluation sample with this quotation
        </label>
      </div>

      <div className="pt-2">
        <button
          className="w-full py-3.5 px-6 rounded bg-brand text-white text-[15px] font-semibold hover:bg-brand-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting..." : "Submit Request for Quote"}
        </button>
      </div>

      {status === "success" && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-[14px]">
          Thank you. Your quotation request has been logged with our export
          operations desk. A commercial representative will review your
          specifications and contact you with a formal estimate within 1
          business day.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800 text-[14px]">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
