"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import LotusMark from "./LotusMark";

/**
 * The site's single orchestrated page-load moment: an ink curtain with
 * the lotus mark, which draws in then lifts away to reveal the page.
 * Runs once per full page load (not on client-side route changes) and
 * is skipped entirely for reduced-motion users.
 */
export default function LoadingVeil() {
  const veilRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => setDone(true),
    });

    tl.set(veilRef.current, { display: "flex" })
      .from(markRef.current, { opacity: 0, scale: 0.6, duration: 0.6 })
      .to(markRef.current, { opacity: 0, scale: 1.15, duration: 0.5 }, "+=0.25")
      .to(
        veilRef.current,
        { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
        "-=0.15"
      );
  }, []);

  if (done) return null;

  return (
    <div ref={veilRef} className="load-veil hidden">
      <div ref={markRef} className="h-16 w-16">
        <LotusMark className="h-full w-full" />
      </div>
    </div>
  );
}
