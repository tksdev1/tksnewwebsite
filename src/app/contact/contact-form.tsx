"use client";

import { useState } from "react";

type State = { ok: boolean; message: string };

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
    .join("&");
}

export function ContactForm() {
  const [state, setState] = useState<State>({ ok: false, message: "" });
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (data.company) {
      setState({ ok: true, message: "Thanks — we'll be in touch." });
      return;
    }

    setPending(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });
      if (res.ok) {
        setState({ ok: true, message: "Thanks — we'll be in touch." });
        form.reset();
      } else {
        setState({ ok: false, message: "Something went wrong. Please email us directly." });
      }
    } catch {
      setState({ ok: false, message: "Something went wrong. Please email us directly." });
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="company"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subject" name="subject" required />
      <Field label="Message" name="message" as="textarea" rows={5} />

      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{pending ? "Sending..." : "Send message"}</span>
          <span aria-hidden="true">→</span>
        </button>
        {state.message && (
          <p
            className={`text-[13px] ${state.ok ? "text-accent-ink" : "text-red-700"}`}
            role={state.ok ? "status" : "alert"}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
};

function Field({ label, name, type = "text", required, as = "input", rows }: FieldProps) {
  const shared =
    "block w-full bg-transparent border-0 border-b border-line-strong py-3 text-[15px] text-ink placeholder:text-muted focus:border-ink focus:outline-none transition";
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} rows={rows ?? 5} required={required} className={`${shared} resize-none`} />
      ) : (
        <input type={type} name={name} required={required} className={shared} />
      )}
    </label>
  );
}
