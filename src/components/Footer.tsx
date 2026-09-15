import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-8 pt-16 text-white/55 sm:pt-20">
      <div className="container-xl relative">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-[1.3fr_1fr_1fr] sm:gap-8 sm:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-display text-xl tracking-[0.2em] text-gold-pale">
                ORRIVA
              </span>
            </Link>
            <p className="mt-4 max-w-[34ch] text-sm">
              A premium pure-vegetarian wedding and event venue in Raj Nagar
              Extension, Ghaziabad.
            </p>
            <a
              href="https://www.instagram.com/orrivabylotus/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-[0.78rem] uppercase tracking-[0.08em] hover:text-gold-pale"
            >
              @orrivabylotus
            </a>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-[0.72rem] uppercase tracking-[0.14em] text-gold-pale">
              Explore
            </p>
            <nav className="mt-4 flex flex-col items-center gap-3 text-sm sm:items-start">
              <Link href="/about" className="hover:text-gold-pale">About</Link>
              <Link href="/weddings-events" className="hover:text-gold-pale">Weddings &amp; Events</Link>
              <Link href="/cuisine" className="hover:text-gold-pale">Cuisine</Link>
              <Link href="/gallery" className="hover:text-gold-pale">Gallery</Link>
              <Link href="/contact" className="hover:text-gold-pale">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-[0.72rem] uppercase tracking-[0.14em] text-gold-pale">
              Visit
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 text-sm sm:items-start">
              <p className="max-w-[30ch]">
                Plot no. 915, near Tyagi Chowk, Raj Nagar Extension, Ghaziabad,
                Uttar Pradesh 201003
              </p>
              <a href="tel:+917428217500" className="hover:text-gold-pale">
                +91 74282 17500
              </a>
              <a href="mailto:orriva.lotus@gmail.com" className="hover:text-gold-pale">
                orriva.lotus@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 rule rule-dark" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs tracking-wide text-white/35 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Orriva by Lotus. All rights reserved.</p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://aniketwebdev.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-gold-pale"
            >
              aniketwebdev.in
            </a>
          </p>
        </div>
      </div>

      {/* Big oversized wordmark, rising from the bottom edge, clearly visible */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -mb-6 select-none text-center sm:-mb-10">
        <span
          className="font-display block text-[22vw] font-semibold leading-none tracking-[0.05em] text-gold-pale/25 sm:text-[16vw]"
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