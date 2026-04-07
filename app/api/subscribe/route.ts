import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/contacts";

const LIST_IDS: Record<string, number[]> = {
  lead_magnet: [6],   // Website Lead Magnet
  newsletter: [5],    // Website Newsletter
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  let body: { email: string; name?: string; phone?: string; source: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { email, name, phone, source } = body;

  if (!email || !source) {
    return NextResponse.json(
      { error: "Email and source are required" },
      { status: 400 }
    );
  }

  const listIds = LIST_IDS[source === "newsletter" ? "newsletter" : "lead_magnet"];

  const firstName = name?.split(" ")[0] || "";
  const lastName = name?.split(" ").slice(1).join(" ") || "";

  const brevoPayload = {
    email,
    attributes: {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      ...(phone && { SMS: phone }),
      SOURCE: source,
      FUNNEL_STAGE: "lead",
      CUSTOMER_TYPE: "free",
    },
    listIds,
    updateEnabled: true,
  };

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Brevo API error:", response.status, error);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo API request failed:", err);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 502 }
    );
  }
}
