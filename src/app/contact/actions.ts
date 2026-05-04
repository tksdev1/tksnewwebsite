"use server";

type State = { ok: boolean; message: string };

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContactForm(
  _prev: State,
  formData: FormData,
): Promise<State> {
  const name = (formData.get("name") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const subject = (formData.get("subject") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();
  const honeypot = (formData.get("company") ?? "").toString().trim();

  if (honeypot) {
    return { ok: true, message: "Thanks — we'll be in touch." };
  }

  if (!name || !email || !subject) {
    return { ok: false, message: "Please fill in name, email and subject." };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const to = ["yuval@thetks.com", "ross@thetks.com"];
  const from = process.env.CONTACT_FROM_EMAIL || "TKS Website <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  const html = `
    <div style="font-family: system-ui, sans-serif; color:#0b1b3a;">
      <h2>New inquiry from thetks.com</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;">${escapeHtml(message || "(no message)")}</p>
    </div>
  `;

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — logging submission instead of sending email.",
      { name, email, subject, message },
    );
    return {
      ok: true,
      message: "Thanks — we'll be in touch.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[TKS] ${subject}`,
        html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("[contact] Resend error", res.status, body);
      return {
        ok: false,
        message: "Something went wrong sending your message. Please email us directly.",
      };
    }
    return { ok: true, message: "Thanks — we'll be in touch." };
  } catch (err) {
    console.error("[contact] send failed", err);
    return {
      ok: false,
      message: "Something went wrong sending your message. Please email us directly.",
    };
  }
}

export type ContactState = State;
