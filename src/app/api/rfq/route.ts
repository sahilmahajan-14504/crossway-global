import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildRfqEmailHtml, buildRfqEmailText } from "@/lib/rfq-email";
import { siteConfig } from "@/lib/site-data";

export interface RfqPayload {
  fullName: string;
  companyCountry: string;
  email: string;
  phone?: string;
  product: string;
  quantity: string;
  incoterm: string;
  destinationPort: string;
  requirements?: string;
  sampleRequested: boolean;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<RfqPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const requiredFields: Array<keyof RfqPayload> = [
    "fullName",
    "companyCountry",
    "email",
    "product",
    "quantity",
    "incoterm",
    "destinationPort",
  ];

  for (const field of requiredFields) {
    if (!isNonEmptyString(body[field] as unknown)) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  if (!EMAIL_RE.test(body.email as string)) {
    return NextResponse.json(
      { error: "Please provide a valid business email address." },
      { status: 400 }
    );
  }

  const payload = body as RfqPayload;

  console.log("[RFQ] New quote request received:", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.RFQ_NOTIFY_EMAIL || siteConfig.email;

  if (!apiKey) {
    // Email isn't configured yet — don't fail the user's submission, but
    // make the gap loud in server logs so it gets noticed and fixed.
    console.error(
      "[RFQ] RESEND_API_KEY is not set — inquiry was logged but NOT emailed."
    );
    return NextResponse.json({ ok: true, emailed: false }, { status: 200 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RFQ_FROM_EMAIL || "Crossway Global <onboarding@resend.dev>",
      to: notifyTo,
      replyTo: payload.email,
      subject: `New RFQ — ${payload.companyCountry} (${payload.product})`,
      html: buildRfqEmailHtml(payload),
      text: buildRfqEmailText(payload),
    });

    if (error) {
      console.error("[RFQ] Resend API error:", error);
      return NextResponse.json(
        { ok: true, emailed: false },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error("[RFQ] Failed to send notification email:", err);
    // The inquiry was still logged above — don't block the user on an
    // email delivery failure, but surface it wasn't emailed.
    return NextResponse.json({ ok: true, emailed: false }, { status: 200 });
  }

  return NextResponse.json({ ok: true, emailed: true }, { status: 200 });
}
