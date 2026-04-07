import { NextRequest, NextResponse } from "next/server";

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const BREVO_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";

const LIST_IDS: Record<string, number[]> = {
  lead_magnet: [6],   // Website Lead Magnet
  newsletter: [5],    // Website Newsletter
};

// Template IDs in Brevo
const TEMPLATE_IDS = {
  lead_magnet_welcome: 1,   // Welcome 1 - delivers PDF link
  newsletter_welcome: 12,   // Newsletter welcome
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  let body: { email: string; name?: string; source: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { email, name, source } = body;

  if (!email || !source) {
    return NextResponse.json(
      { error: "Email and source are required" },
      { status: 400 }
    );
  }

  const isNewsletter = source === "newsletter";
  const listIds = LIST_IDS[isNewsletter ? "newsletter" : "lead_magnet"];

  const firstName = name?.split(" ")[0] || "";
  const lastName = name?.split(" ").slice(1).join(" ") || "";

  const headers = {
    "api-key": apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // 1. Create/update contact in Brevo
  const contactPayload = {
    email,
    attributes: {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      SOURCE: source,
      FUNNEL_STAGE: "lead",
      CUSTOMER_TYPE: "free",
    },
    listIds,
    updateEnabled: true,
  };

  try {
    const contactRes = await fetch(BREVO_CONTACTS_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(contactPayload),
    });

    if (!contactRes.ok) {
      const error = await contactRes.text();
      console.error("Brevo contact API error:", contactRes.status, error);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 502 }
      );
    }

    // 2. Send welcome email
    const templateId = isNewsletter
      ? TEMPLATE_IDS.newsletter_welcome
      : TEMPLATE_IDS.lead_magnet_welcome;

    const emailPayload = {
      templateId,
      to: [{ email, name: firstName || undefined }],
    };

    const emailRes = await fetch(BREVO_EMAIL_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      const error = await emailRes.text();
      console.error("Brevo email API error:", emailRes.status, error);
      // Contact was created successfully, so still return success
      // The welcome email can be retried via Brevo automation
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
