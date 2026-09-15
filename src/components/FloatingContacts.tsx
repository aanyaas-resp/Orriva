"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "917428217500";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Orriva by Lotus, I'd like to enquire about hosting an event with you."
);
const INSTAGRAM_URL = "https://www.instagram.com/orrivabylotus/";

export default function FloatingContacts() {
  const [hovered, setHovered] = useState<"whatsapp" | "instagram" | null>(null);

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

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        onMouseEnter={() => setHovered("instagram")}
        onMouseLeave={() => setHovered(null)}
        className="group relative flex items-center"
      >
        <span
          className={`absolute right-full mr-3 whitespace-nowrap rounded-full border border-gold/40 bg-ink px-3.5 py-1.5 text-[0.72rem] uppercase tracking-[0.08em] text-gold-pale shadow-lg transition-all duration-200 ${
            hovered === "instagram" ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
          }`}
        >
          Follow on Instagram
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_4px_18px_rgba(0,0,0,0.35)] ring-2 ring-gold/0 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold/70">
          <InstagramIcon className="h-6 w-6" />
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}