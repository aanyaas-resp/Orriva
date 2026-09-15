import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-8 pt-20 text-white/55">
      <div className="container-xl relative text-center">
        <Link href="/" className="mx-auto flex w-fit items-center gap-2.5">
          <Logo className="h-10 w-10" />
          <span className="font-display text-xl tracking-[0.2em] text-gold-pale">
            ORRIVA
          </span>
        </Link>
        <p className="mx-auto mt-4 max-w-[42ch] text-sm">
          A premium pure-vegetarian wedding and event venue in Raj Nagar
          Extension, Ghaziabad.
        </p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.78rem] uppercase tracking-[0.08em]">
          <Link href="/about" className="hover:text-gold-pale">About</Link>
          <Link href="/weddings-events" className="hover:text-gold-pale">Weddings &amp; Events</Link>
          <Link href="/cuisine" className="hover:text-gold-pale">Cuisine</Link>
          <Link href="/gallery" className="hover:text-gold-pale">Gallery</Link>
          <Link href="/contact" className="hover:text-gold-pale">Contact</Link>
        </nav>

        <div className="mx-auto mt-10 max-w-md rule rule-dark" />

        <div className="mt-8 flex flex-col items-center gap-3 text-sm">
          <p>Plot no. 915, near Tyagi Chowk, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003</p>
          <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="tel:+917428217500" className="hover:text-gold-pale">+91 74282 17500</a>
            <a href="mailto:orriva.lotus@gmail.com" className="hover:text-gold-pale">orriva.lotus@gmail.com</a>
            <a
              href="https://www.instagram.com/orrivabylotus/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-pale"
            >
              @orrivabylotus
            </a>
          </p>
        </div>

        <p className="mt-10 text-xs tracking-wide text-white/35">
          &copy; {new Date().getFullYear()} Orriva by Lotus. All rights reserved.
        </p>
      </div>

      {/* Big oversized wordmark, rising from the bottom edge, clearly visible */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -mb-6 select-none text-center sm:-mb-10">
        <span
          className="font-display block text-[18vw] font-semibold leading-none tracking-[0.05em] text-gold-pale/25 sm:text-[16vw]"
          style={{
            WebkitTextStroke: "1.5px rgba(203,164,104,0.5)",
            maskImage: "linear-gradient(to top, black 0%, black 55%, transparent 92%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, black 55%, transparent 92%)",
          }}
        >
          ORRIVA
        </span>
      </div>
    </footer>
  );
}