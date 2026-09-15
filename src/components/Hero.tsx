"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const HEADLINE = "A beginning worth remembering";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");

      const chars = headlineRef.current?.querySelectorAll<HTMLElement>(
        "span span"
      );

      if (media.matches) {
        gsap.set([subRef.current, ctaRef.current], { opacity: 1, y: 0 });
        if (chars) gsap.set(chars, { opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" });
        return;
      }

      // One-time entrance sequence — no scroll trigger, no pin.
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(chars ?? [], {
          opacity: 0,
          y: () => gsap.utils.random(-60, 60),
          x: () => gsap.utils.random(-40, 40),
          rotate: () => gsap.utils.random(-25, 25),
          filter: "blur(8px)",
          stagger: { each: 0.02, from: "random" },
          duration: 0.9,
        })
        .from(subRef.current, { opacity: 0, y: 24, duration: 0.7 }, "-=0.5")
        .from(
          ctaRef.current?.children ?? [],
          { opacity: 0, y: 18, stagger: 0.1, duration: 0.6 },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background photo — add the banquet image manually */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-venue.jpg"
          alt="Orriva by Lotus venue"
          fill
          priority
          sizes="(max-width: 639px) 100vw, (max-width: 1180px) 100vw, 1180px"
          className="object-cover opacity-100"
        />
      </div>

      {/* Ink wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <div className="container-xl relative z-10 flex flex-col items-center text-center">
        <p className="kicker kicker-dark justify-center">
          Raj Nagar Extension, Ghaziabad
        </p>

        <h1
          ref={headlineRef}
          className="mt-5 max-w-4xl text-[2.3rem] leading-[1.15] text-white sm:text-6xl md:text-7xl"
        >
          {HEADLINE.split("").map((c, i) => (
            <span key={i} className="inline-block overflow-visible">
              <span
                className="inline-block"
                style={{ willChange: "transform, opacity, filter" }}
              >
                {c === " " ? "\u00A0" : c}
              </span>
            </span>
          ))}
        </h1>

        <div ref={subRef} className="mt-7 flex flex-col items-center">
          <p className="max-w-[46ch] text-[1.02rem] text-white/60">
            A premium pure-vegetarian wedding and event venue — elegant
            halls, manicured lawns, and detail nurtured with intention.
          </p>

          <div ref={ctaRef} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {/* Primary — gold gradient fill with a shine sweep on hover */}
            <Link
              href="/contact"
              className="group relative overflow-hidden px-9 py-3.5 text-[0.8rem] uppercase tracking-[0.14em] text-ink"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #e7d3ad 0%, #cba468 45%, #a07b4e 100%)",
              }}
            >
              <span className="relative z-10">Plan Your Event</span>
              <span
                className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-700 ease-expo-out group-hover:translate-x-full"
                style={{ transform: "skewX(-20deg)" }}
                aria-hidden="true"
              />
            </Link>

            {/* Secondary — gold-bordered, fills on hover */}
            <Link
              href="/weddings-events"
              className="border border-gold/60 px-9 py-3.5 text-[0.8rem] uppercase tracking-[0.14em] text-white/85 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              Explore the Venue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
