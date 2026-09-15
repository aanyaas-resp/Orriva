"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError(""); setSubmitted(false); setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: formData.get("name"), phone: formData.get("phone"), email: formData.get("email"), eventType: formData.get("event-type"), preferredDate: formData.get("date") || undefined, guests: formData.get("guests") ? Number(formData.get("guests")) : undefined, message: formData.get("message") || undefined, company: formData.get("company") }) });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to send your enquiry.");
      setSubmitted(true); form.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to send your enquiry.");
    } finally { setIsSubmitting(false); }
  }

  return <form onSubmit={handleSubmit} className="mx-auto grid max-w-xl gap-5 text-left">
    <input name="company" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
    <div className="grid gap-5 sm:grid-cols-2"><Field id="name" label="Full Name" type="text" required /><Field id="phone" label="Phone Number" type="tel" required /></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field id="email" label="Email Address" type="email" required /><div><label htmlFor="event-type" className="mb-1.5 block text-[0.74rem] uppercase tracking-[0.08em] text-white/40">Event Type</label><select id="event-type" name="event-type" className="w-full border-0 border-b border-line-dark bg-transparent py-2.5 text-[0.95rem] text-white focus:border-gold focus:outline-none"><option className="bg-ink">Wedding / Reception</option><option className="bg-ink">Engagement / Sangeet</option><option className="bg-ink">Corporate Event</option><option className="bg-ink">Birthday / Anniversary</option><option className="bg-ink">Other</option></select></div></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field id="date" label="Preferred Date" type="date" /><Field id="guests" label="Guest Count" type="number" min={1} placeholder="e.g. 300" /></div>
    <div><label htmlFor="message" className="mb-1.5 block text-[0.74rem] uppercase tracking-[0.08em] text-white/40">Tell us more</label><textarea id="message" name="message" rows={4} placeholder="Share any details that will help us plan" className="w-full resize-y border-0 border-b border-line-dark bg-transparent py-2.5 text-[0.95rem] text-white placeholder:text-white/25 focus:border-gold focus:outline-none" /></div>
    <div className="flex flex-col items-start gap-3 pt-2"><button type="submit" disabled={isSubmitting} className="border border-gold px-8 py-3 text-[0.8rem] uppercase tracking-[0.12em] text-gold-pale transition-colors hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Sending…" : "Submit Enquiry"}</button>{submitted && <p className="text-sm text-gold-pale" role="status">Thank you — your enquiry has been sent. Our team will reach out shortly.</p>}{error && <p className="text-sm text-red-200" role="alert">{error}</p>}</div>
  </form>;
}

function Field({ id, label, type, required, min, placeholder }: { id: string; label: string; type: string; required?: boolean; min?: number; placeholder?: string }) {
  return <div><label htmlFor={id} className="mb-1.5 block text-[0.74rem] uppercase tracking-[0.08em] text-white/40">{label}</label><input id={id} name={id} type={type} required={required} min={min} placeholder={placeholder} className="w-full border-0 border-b border-line-dark bg-transparent py-2.5 text-[0.95rem] text-white placeholder:text-white/25 focus:border-gold focus:outline-none" /></div>;
}
