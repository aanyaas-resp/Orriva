import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import LotusMark from "@/components/LotusMark";

export const metadata: Metadata = {
  title: "About Orriva",
  description:
    "The story behind Orriva by Lotus — a pure-vegetarian wedding and event venue in Raj Nagar Extension, Ghaziabad, built around refined elegance and meaningful celebration.",
  alternates: { canonical: "/about" },
};

function GoldDivider() {
  return (
    <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About Orriva" title="A full-circle moment, from the ground up" crumb="About" />

      {/* The name — given room to breathe as a standalone moment */}
      <section className="bg-ivory py-24">
        <Reveal>
          <SectionHeading
            kicker="Our Name"
            title="Where the story begins"
            lede="Orriva marks the beginning of something extraordinary — the start of a journey into the finest in luxury, elegance and timeless beauty."
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-8 sm:gap-12">
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
            <span className="absolute inset-0 rounded-full bg-gold/25 blur-xl" />
            <LotusMark className="relative h-14 w-14 text-gold sm:h-16 sm:w-16" />
          </span>
          <p className="text-left text-[0.98rem] leading-relaxed text-[#5a5346]">
            For us, the{" "}
            <span className="font-medium text-gold-dark">&lsquo;O&rsquo;</span> is
            more than a letter — it&rsquo;s a full circle moment. And{" "}
            <span className="font-medium text-gold-dark">&lsquo;Riva&rsquo;</span>{" "}
            is the gentle flow of time. Together, they express a journey that
            begins with intention and grows into something timeless.
          </p>
        </Reveal>

        <div className="mt-16 px-6">
          <GoldDivider />
        </div>
      </section>

      <section className="relative bg-ivory-dim py-24">
        <Reveal>
          <SectionHeading
            kicker="Born From Intention"
            title="Redefining what luxury feels like"
            lede="Born from a desire to redefine luxury, Orriva celebrates the start of a new chapter in refined elegance and sophistication — where every detail is meticulously designed."
          />
        </Reveal>

        <Reveal className="mx-auto mt-6 max-w-2xl text-center text-[0.98rem] leading-relaxed text-[#5a5346]">
          <p>
            Orriva is for those who seek to begin their journey in style —
            whether it&rsquo;s a new chapter in life or a defining moment
            that leaves a lasting impact. We don&rsquo;t just create luxury;
            we create the beginning of something extraordinary.
          </p>
        </Reveal>

        <Reveal className="container-xl mt-14">
          <div className="relative mx-auto aspect-[16/9] max-w-3xl overflow-hidden rounded-sm border border-gold/30 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/about-story.jpg"
              alt="Orriva by Lotus — the story behind the venue"
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
        </Reveal>
      </section>

      {/* Pillars — no numbering, since these are parallel qualities, not a sequence */}
      <section className="relative bg-ink py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <Reveal>
          <SectionHeading dark kicker="What We Stand For" title="Creation, moment and emotion" />
        </Reveal>

        <Reveal
          stagger
          className="container-xl mt-16 grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          <div className="px-6 py-8 text-center first:pt-0 sm:py-0 sm:first:pl-0 sm:last:pr-0">
            <h3 className="font-display text-lg text-gold-pale">Refined Elegance</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Every space is designed with intention — ornate without excess,
              warm without clutter.
            </p>
          </div>
          <div className="px-6 py-8 text-center sm:px-10 sm:py-0">
            <h3 className="font-display text-lg text-gold-pale">Exclusively Vegetarian</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Our kitchens serve pure-vegetarian cuisine only, curated with
              the same care as everything else.
            </p>
          </div>
          <div className="px-6 py-8 text-center last:pb-0 sm:py-0 sm:last:pr-0">
            <h3 className="font-display text-lg text-gold-pale">Personal Attention</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Led by our General Manager and events team, every celebration
              gets a single point of contact.
            </p>
          </div>
        </Reveal>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </section>

      <CTASection
        title="Come see Orriva for yourself"
        lede="Schedule a walk-through of the hall and lawns with our events team."
        buttonLabel="Book a Visit"
      />
    </>
  );
}