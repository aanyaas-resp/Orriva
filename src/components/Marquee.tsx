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
 */
export default function Marquee() {
  return (
    <div
      className="group overflow-hidden border-y border-line-dark bg-ink py-6"
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
            <span className="font-display text-lg tracking-[0.2em] text-gold-pale sm:text-xl">
              CELEBRATE DIFFERENTLY
            </span>
            <LotusMark className="h-5 w-5 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}