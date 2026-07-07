"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

interface FormState {
  fullName: string;
  organisation: string;
  jobTitle: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  organisation: "",
  jobTitle: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type Status = "idle" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.fullName.trim()) next.fullName = "Enter your full name.";
    if (!values.organisation.trim()) next.organisation = "Enter your hospital or clinic name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!emailPattern.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Enter a subject.";
    if (!values.message.trim()) next.message = "Enter a message.";
    else if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");

    if (!validate()) return;

    setSubmitting(true);
    try {
      // ---------------------------------------------------------------
      // This is a static site with no backend. Replace the block below
      // with a real API call when a backend/CRM endpoint is available:
      //
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(values),
      // });
      // if (!res.ok) throw new Error("Request failed");
      //
      // Until then, we fall back to a pre-filled mailto link so the
      // enquiry still reaches Carepath directly.
      // ---------------------------------------------------------------
      const body = [
        `Full Name: ${values.fullName}`,
        `Hospital / Clinic: ${values.organisation}`,
        `Job Title: ${values.jobTitle || "—"}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || "—"}`,
        "",
        values.message,
      ].join("\n");

      const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(body)}`;

      await new Promise((resolve) => setTimeout(resolve, 500));
      window.location.href = mailto;

      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 transition-colors focus:border-path-500 focus:outline-none focus:ring-2 focus:ring-path-100";

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            className={inputClasses}
            value={values.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field label="Hospital / Clinic" htmlFor="organisation" error={errors.organisation}>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={inputClasses}
            value={values.organisation}
            onChange={(e) => handleChange("organisation", e.target.value)}
            aria-invalid={!!errors.organisation}
            aria-describedby={errors.organisation ? "organisation-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Job Title" htmlFor="jobTitle" error={errors.jobTitle} optional>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            autoComplete="organization-title"
            className={inputClasses}
            value={values.jobTitle}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone" error={errors.phone} optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Field>
      </div>

      <Field label="Email Address" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClasses}
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </Field>

      <Field label="Subject" htmlFor="subject" error={errors.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          className={inputClasses}
          value={values.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClasses} resize-none`}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={submitting} className="sm:w-auto">
          <Send className="h-4.5 w-4.5" aria-hidden="true" />
          {submitting ? "Sending…" : "Send Enquiry"}
        </Button>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-success)]"
          >
            <CheckCircle2 className="h-4.5 w-4.5" aria-hidden="true" />
            Thanks — your email app should now be open to send this enquiry.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-error)]"
          >
            <AlertCircle className="h-4.5 w-4.5" aria-hidden="true" />
            Something went wrong. Please email us directly at {siteConfig.email}.
          </motion.p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {optional && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-sm text-[var(--color-error)]">
          {error}
        </p>
      )}
    </div>
  );
}
