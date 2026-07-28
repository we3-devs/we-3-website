import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "we3.techinnovation@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const subject = body?.subject?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `WE-3 Contact Form <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: email,
    subject: `${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: `Failed to send message: ${error.message}` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
