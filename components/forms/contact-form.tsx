"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

import type { ContactFormState } from "@/app/[locale]/(site)/contact/actions";
import { submitContact } from "@/app/[locale]/(site)/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  useEffect(() => {
    if (state.status === "success") {
      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    }
  }, [state.status]);

  return (
    <motion.form
      id="contact-form"
      action={formAction}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6 rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_70px_rgba(15,23,32,0.08)] md:grid-cols-2"
    >
      <Field label="First name" name="firstName" autoComplete="given-name" required />
      <Field label="Last name" name="lastName" autoComplete="family-name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone" name="phone" autoComplete="tel" />
      <Field label="Company" name="company" autoComplete="organization" className="md:col-span-2" />
      <Field
        label="Message"
        name="message"
        as="textarea"
        required
        minLength={20}
        className="md:col-span-2"
      />

      <div className="md:col-span-2">
        <SubmitButton />
        {state.status === "error" && (
          <p className="mt-4 text-sm text-red-500" role="alert">
            {state.message}
          </p>
        )}
        {state.status === "success" && (
          <p className="mt-4 text-sm text-green-600" role="status">
            {state.message}
          </p>
        )}
        {state.status === "error" && state.issues && (
          <ul className="mt-2 list-disc pl-5 text-sm text-red-500">
            {state.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  autoComplete?: string;
  required?: boolean;
  type?: string;
  className?: string;
  as?: "input" | "textarea";
  minLength?: number;
};

function Field({
  label,
  name,
  autoComplete,
  required,
  type = "text",
  className,
  as = "input",
  minLength,
}: FieldProps) {
  const Component = as === "textarea" ? "textarea" : "input";

  return (
    <label className={className}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
        {label}
        {required ? " *" : ""}
      </span>
      <Component
        name={name}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-foreground shadow-sm outline-none transition focus:border-[var(--brand-primary-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-400)]"
        {...(as === "textarea"
          ? { rows: 5 }
          : { type })}
      />
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_16px_44px_rgba(65,70,167,0.22)] transition hover:shadow-[0_18px_52px_rgba(65,70,167,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Submit"}
    </button>
  );
}
