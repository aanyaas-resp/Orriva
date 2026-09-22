"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "917428217500";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Orriva, I'd like to enquire about hosting an event with you."
);
const CALL_NUMBER = "+917428217500";

export default function FloatingContacts() {
  const [hovered, setHovered] = useState<"whatsapp" | "call" | null>(null);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-4 sm:bottom-8 sm:right-8">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered("whatsapp")}
        onMouseLeave={() => setHovered(null)}
        className="group relative flex items-center"
      >
        <span
          className={`absolute right-full mr-3 whitespace-nowrap rounded-full border border-gold/40 bg-ink px-3.5 py-1.5 text-[0.72rem] uppercase tracking-[0.08em] text-gold-pale shadow-lg transition-all duration-200 ${
            hovered === "whatsapp" ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
          }`}
        >
          Chat on WhatsApp
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_4px_18px_rgba(0,0,0,0.35)] ring-2 ring-gold/0 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold/70">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${CALL_NUMBER}`}
        aria-label="Call us"
        onMouseEnter={() => setHovered("call")}
        onMouseLeave={() => setHovered(null)}
        className="group relative flex items-center"
      >
        <span
          className={`absolute right-full mr-3 whitespace-nowrap rounded-full border border-gold/40 bg-ink px-3.5 py-1.5 text-[0.72rem] uppercase tracking-[0.08em] text-gold-pale shadow-lg transition-all duration-200 ${
            hovered === "call" ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
          }`}
        >
          Call Us
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-pale text-ink shadow-[0_4px_18px_rgba(0,0,0,0.35)] ring-2 ring-gold/0 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold/70">
          <CallIcon className="h-6 w-6" />
        </span>
      </a>
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

function CallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}