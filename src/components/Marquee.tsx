import LotusMark from "./LotusMark";

const REPEAT = 8;

/**
 * A single signature moving moment on the page — a slow, continuous
 * marquee of the brand tagline. CSS-driven (not GSAP) since it never
 * needs to start/stop with scroll, keeping it cheap and always smooth.
 *
 * Distinctive touches:
 * - Edge fade mask so text dissolves at the container edges instead of
 *   hard-cutting, giving it a more premium, "floating" feel.
 * - Pauses on hover — a small interactive cue that rewards attention.
 * - Alternating opacity per repeat so the row doesn't read as a flat,
 *   mechanically identical loop.
 * - Gold hairline borders (gradient, not flat) + a soft glow behind the
 *   lotus mark, echoing the gold accents used across the rest of the site.
 */
export default function Marquee() {
  return (
    <div className="relative bg-ink py-6">
      {/* top hairline — gold gradient instead of a flat border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div
        className="group overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-10 will-change-transform group-hover:[animation-play-state:paused]">
          {Array.from({ length: REPEAT }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-10"
              style={{ opacity: i % 2 === 0 ? 1 : 0.55 }}
            >
              <span className="font-display text-lg font-medium tracking-[0.2em] text-gold-pale transition-colors duration-300 sm:text-xl">
                CELEBRATE DIFFERENTLY
              </span>
              <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gold/30 blur-md" />
                <LotusMark className="relative h-5 w-5 text-gold-light" />
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* bottom hairline — mirrors the top */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}