"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import Logo from "./Logo";

const LEFT_LINKS = [
  { href: "/about", label: "About" },
  { href: "/weddings-events", label: "Weddings & Events" },
];

const RIGHT_LINKS = [
  { href: "/cuisine", label: "Cuisine" },
  { href: "/gallery", label: "Gallery" },
];

const ALL_LINKS = [
  { href: "/", label: "Home" },
  ...LEFT_LINKS,
  ...RIGHT_LINKS,
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] transition-colors duration-500",
        scrolled || open
          ? "border-b border-gold/15 bg-ink/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-xl relative flex h-[84px] items-center justify-between">
        {/* Desktop: left links */}
        <nav className="hidden flex-1 items-center gap-8 md:flex">
          {LEFT_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname === l.href}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Centered logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9 sm:h-10 sm:w-10" priority />
          <span className="font-display text-lg tracking-[0.2em] text-gold-pale">
            ORRIVA
          </span>
        </Link>

        {/* Desktop: right links + CTA */}
        <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {RIGHT_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname === l.href}>
              {l.label}
            </NavLink>
          ))}
          <Link
            href="/contact"
            className="border border-gold px-5 py-2 text-[0.76rem] uppercase tracking-[0.1em] text-gold-pale transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-gold-pale"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-gold-pale"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-gold-pale"
          />
        </button>
      </div>

      {/* Mobile overlay nav — centered, per brand direction */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[calc(100vh-84px)] flex-col items-center justify-center gap-8 bg-ink md:hidden"
          >
            {ALL_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "font-display text-xl tracking-wide transition-colors",
                    pathname === l.href
                      ? "text-gold-pale"
                      : "text-white/85 hover:text-gold-pale"
                  )}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "relative text-[0.8rem] uppercase tracking-[0.08em] transition-colors duration-300",
        active ? "text-gold-pale" : "text-white/55 hover:text-gold-pale"
      )}
    >
      {children}
      <span
        className={clsx(
          "absolute -bottom-1.5 left-0 right-0 h-px bg-gold transition-transform duration-300 origin-left",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
}
