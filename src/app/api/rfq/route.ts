import { NextResponse } from "next/server";

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

  // In production, this would persist the inquiry (DB write) and/or notify
  // the export desk (e.g. via an email provider or CRM webhook). For now we
  // log the structured inquiry server-side so it's visible in deployment logs.
  console.log("[RFQ] New quote request received:", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
