"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger direct children instead of animating the wrapper as one block */
  stagger?: boolean;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Fades + rises content into view on scroll. When `stagger` is set, it
 * animates the wrapper's direct children in sequence (feature lists,
 * card grids) rather than the block as a whole.
 * Standard tier: 400-600ms, power2.out, 24px rise — per design system.
 */
export default function Reveal({
  children,
  className,
  stagger = false,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = stagger ? ref.current.children : ref.current;

      gsap.from(targets, {
        opacity: 0,
        y: 24,
        duration: 0.55,
        delay,
        stagger: stagger ? 0.08 : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={clsx(className)}>
      {children}
    </Component>
  );
}
