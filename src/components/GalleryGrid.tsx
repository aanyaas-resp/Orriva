"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const ITEMS = [
  { src: "/images/gallery-grand-hall.jpg", title: "The Grand Hall" },
  { src: "/images/gallery-reception.jpg", title: "Reception Setup" },
  { src: "/images/gallery-stage.jpg", title: "Stage Décor" },
  { src: "/images/gallery-lawn.jpg", title: "Lawn Ceremony" },
  { src: "/images/gallery-live-counter.jpg", title: "Live Counter" },
  { src: "/images/gallery-evening.jpg", title: "Evening Lights" },
  { src: "/images/gallery-seating.jpg", title: "Guest Seating" },
  { src: "/images/gallery-foyer.jpg", title: "Foyer Entrance" },
  { src: "/images/gallery-dessert.jpg", title: "Dessert Table" },
];

/**
 * The gallery's signature moment: tiles rise into place with a slight
 * 3D unfurl as the grid scrolls into view, then respond to the cursor
 * with a gentle depth-of-field tilt. Clicking opens a full-bleed
 * lightbox. Framing here is intentionally editorial — offset columns,
 * not a uniform card grid — per the brand's asymmetric-but-centered
 * layout language.
 */
export default function GalleryGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      const tiles = gridRef.current?.querySelectorAll<HTMLElement>(".g-tile");
      if (!tiles) return;

      if (media.matches) {
        gsap.set(tiles, { opacity: 1, y: 0, rotateX: 0 });
        return;
      }

      tiles.forEach((tile, i) => {
        gsap.from(tile, {
          opacity: 0,
          y: 60,
          rotateX: -35,
          transformOrigin: "50% 100%",
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: tile,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: (i % 3) * 0.06,
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: gridRef }
  );

  return (
    <>
      <div
        ref={gridRef}
        className="container-xl grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        style={{ perspective: "1400px" }}
      >
        {ITEMS.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setActive(i)}
            
            className={`g-tile tilt-card group relative overflow-hidden border border-line-dark text-left ${
              i % 5 === 0 ? "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-[4/5]" : "aspect-[4/5]"
            }`}
            style={{ transformStyle: "preserve-3d" }}
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/0 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-4 right-4 font-display text-sm tracking-[0.08em] text-gold-pale">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ITEMS[active].title}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-6 top-6 text-2xl text-white/60 hover:text-gold-pale"
          >
            &times;
          </button>
          <div className="relative aspect-[4/5] w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <Image
              src={ITEMS[active].src}
              alt={ITEMS[active].title}
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>
          <p className="absolute bottom-8 font-display text-sm tracking-[0.1em] text-gold-pale">
            {ITEMS[active].title}
          </p>
        </div>
      )}
    </>
  );
}
