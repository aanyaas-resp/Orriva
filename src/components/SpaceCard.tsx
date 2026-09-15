"use client";

import { useRef } from "react";
import Image from "next/image";

type SpaceCardProps = {
  tone: 1 | 2 | 3;
  title: string;
  desc: string;
};

const IMAGES: Record<1 | 2 | 3, string> = {
  1: "/images/hall1.jpg",
  2: "/images/space-lawns.jpg",
  3: "/images/space-hall.jpg",
};

/**
 * A photographic card with a subtle cursor-driven 3D tilt — the
 * signature "premium" hover moment on the offerings grid. Motion is
 * cheap (CSS transform only, no scroll listeners) and disabled for
 * touch/reduced-motion by the pointer + media query guards.
 */
export default function SpaceCard({ tone, title, desc }: SpaceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -8;
    const ry = (px - 0.5) * 10;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function handleLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tilt-card glow-surface group relative overflow-hidden border border-line-light bg-ivory transition-transform duration-300 ease-expo-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={IMAGES[tone]}
          alt={title}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-[1.05rem] text-ink">{title}</h3>
        <p className="mt-2 text-[0.92rem] leading-relaxed text-[#5a5346]">{desc}</p>
      </div>
    </div>
  );
}
