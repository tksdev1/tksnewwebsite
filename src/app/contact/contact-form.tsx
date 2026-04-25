"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactState } from "./actions";

const initialState: ContactState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <span>{pending ? "Sending..." : "Send message"}</span>
      <span aria-hidden="true">→</span>
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-6">
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
        <SubmitButton />
        {state.message && (
          <p
            className={`text-[13px] ${
              state.ok ? "text-accent-ink" : "text-red-700"
            }`}
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

function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
  rows,
}: FieldProps) {
  const shared =
    "block w-full bg-transparent border-0 border-b border-line-strong py-3 text-[15px] text-ink placeholder:text-muted focus:border-ink focus:outline-none transition";
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows ?? 5}
          required={required}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={shared}
        />
      )}
    </label>
  );
}
