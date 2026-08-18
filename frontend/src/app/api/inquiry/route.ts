import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type Inquiry = {
  name?: unknown;
  phone?: unknown;
  company?: unknown;
  cargoType?: unknown;
  pickup?: unknown;
  destination?: unknown;
  details?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const inquiryEmail = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL || "AsiaMap Website <onboarding@resend.dev>";

  if (!apiKey || !inquiryEmail) {
    return NextResponse.json(
      { error: "Inquiry email is not configured yet. Please call AsiaMap directly." },
      { status: 503 },
    );
  }

  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const inquiry = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 40),
    company: clean(body.company, 120),
    cargoType: clean(body.cargoType, 120),
    pickup: clean(body.pickup, 160),
    destination: clean(body.destination, 160),
    details: clean(body.details, 1500),
  };

  if (!inquiry.name || !inquiry.phone || !inquiry.pickup || !inquiry.destination) {
    return NextResponse.json(
      { error: "Please complete name, phone, pickup location, and destination." },
      { status: 400 },
    );
  }

  const rows = [
    ["Name", inquiry.name],
    ["Phone", inquiry.phone],
    ["Company", inquiry.company || "—"],
    ["Cargo type", inquiry.cargoType || "—"],
    ["Pickup", inquiry.pickup],
    ["Destination", inquiry.destination],
    ["Details", inquiry.details || "—"],
  ];

  const html = `
    <h2>New AsiaMap transport inquiry</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
      ${rows.map(([label, value]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}
    </table>
  `;

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [inquiryEmail],
      subject: `AsiaMap inquiry: ${inquiry.pickup} → ${inquiry.destination}`,
      html,
    }),
  });

  if (!response.ok) {
    console.error("Resend inquiry failure", response.status, await response.text());
    return NextResponse.json(
      { error: "Unable to send the inquiry right now. Please call AsiaMap directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
