"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "919266689079"; // country code + number, no + or spaces

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("company")) return;

    setError("");
    setSubmitted(false);
    setIsSubmitting(true);

    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const eventType = (formData.get("event-type") as string)?.trim();
    const date = (formData.get("date") as string)?.trim();
    const guests = (formData.get("guests") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !phone || !email) {
      setError("Please fill in your name, phone and email.");
      setIsSubmitting(false);
      return;
    }

    // Build a nicely formatted WhatsApp message
    const lines = [
      "Hello Orriva by Lotus, I'd like to enquire about an event:",
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Email:* ${email}`,
      `*Event Type:* ${eventType || "Not specified"}`,
      date ? `*Preferred Date:* ${date}` : null,
      guests ? `*Guest Count:* ${guests}` : null,
      message ? `*Message:* ${message}` : null,
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join("\n"));
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    // Best-effort: also log the enquiry to your backend, but don't block WhatsApp on it
    fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        eventType,
        preferredDate: date || undefined,
        guests: guests ? Number(guests) : undefined,
        message: message || undefined,
        company: formData.get("company"),
      }),
    }).catch(() => {
      /* silently ignore — WhatsApp is the primary channel */
    });

    window.open(waLink, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setIsSubmitting(false);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-xl gap-6 text-left">
      <input name="company" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" type="text" required />
        <Field id="phone" label="Phone Number" type="tel" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email Address" type="email" required />
        <div>
          <label htmlFor="event-type" className="mb-1.5 block text-[0.74rem] font-medium uppercase tracking-[0.08em] text-neutral-500">
            Event Type
          </label>
          <select
            id="event-type"
            name="event-type"
            className="w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[0.95rem] text-neutral-900 shadow-sm transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100"
          >
            <option>Wedding / Reception</option>
            <option>Engagement / Sangeet</option>
            <option>Corporate Event</option>
            <option>Birthday / Anniversary</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="date" label="Preferred Date" type="date" />
        <Field id="guests" label="Guest Count" type="number" min={1} placeholder="e.g. 300" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.74rem] font-medium uppercase tracking-[0.08em] text-neutral-500">
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Share any details that will help us plan"
          className="w-full resize-y rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[0.95rem] text-neutral-900 shadow-sm placeholder:text-neutral-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100"
        />
      </div>

      <div className="flex flex-col items-start gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-white shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {isSubmitting ? "Preparing…" : "Send via WhatsApp"}
        </button>

        {submitted && (
          <p className="text-sm text-emerald-600" role="status">
            Opening WhatsApp with your details — just hit send there to reach our team.
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  required,
  min,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  min?: number;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.74rem] font-medium uppercase tracking-[0.08em] text-neutral-500">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        min={min}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[0.95rem] text-neutral-900 shadow-sm placeholder:text-neutral-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100"
      />
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.2-.1-.5-.2z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 4.9 1.3h.1c5.5 0 10-4.5 10-10 0-2.7-1-5.2-2.9-7.1C17.2 3 14.7 2 12 2zm0 18.2h-.1c-1.5 0-2.9-.4-4.2-1.1l-.3-.2-2.9.8.8-2.9-.2-.3C4.4 15.2 4 13.8 4 12.3c0-4.4 3.6-8 8-8 2.1 0 4.1.8 5.6 2.3s2.3 3.5 2.3 5.6c0 4.4-3.5 8-7.9 8z" />
    </svg>
  );
}
