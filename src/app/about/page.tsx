import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureBlock from "@/components/FeatureBlock";
import CTASection from "@/components/CTASection";
import LotusMark from "@/components/LotusMark";

export const metadata: Metadata = {
  title: "About Orriva",
  description:
    "The story behind Orriva by Lotus — a pure-vegetarian wedding and event venue in Raj Nagar Extension, Ghaziabad, built around refined elegance and meaningful celebration.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About Orriva" title="A full-circle moment, from the ground up" crumb="About" />

      <section className="bg-ivory py-24">
        <Reveal>
          <SectionHeading
            kicker="Our Name"
            title="Where the story begins"
            lede="Orriva is a name that marks the beginning of something extraordinary. It symbolises the start of an exceptional journey — one that introduces the finest in luxury, elegance and timeless beauty."
          />
        </Reveal>
        <Reveal className="mx-auto mt-8 flex max-w-2xl justify-center">
          <LotusMark className="h-16 w-16 opacity-80" />
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-2xl text-center text-[0.98rem] leading-relaxed text-[#5a5346]">
          <p>
            For us, the &lsquo;O&rsquo; in Orriva is more than a letter — it&rsquo;s a full
            circle moment. And &lsquo;Riva&rsquo; is the gentle flow of time. Together,
            they express a journey that begins with intention and grows into
            something timeless, where every detail is nurtured with thought
            and emotion.
          </p>
        </Reveal>
      </section>

      <section className="relative bg-ivory-dim py-24">
        <Reveal>
          <SectionHeading
            kicker="Born From Intention"
            title="Redefining what luxury feels like"
            lede="Born from a desire to redefine luxury, Orriva celebrates the start of a new chapter in refined elegance and sophistication. It marks the beginning of an unforgettable experience, where every detail is meticulously designed."
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
          <div className="relative mx-auto aspect-[16/9] max-w-3xl overflow-hidden">
            <Image
              src="/images/about-story.jpg"
              alt="Orriva by Lotus — the story behind the venue"
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-ink py-24">
        <Reveal>
          <SectionHeading dark kicker="What We Stand For" title="Creation, moment and emotion" />
        </Reveal>
        <Reveal stagger className="container-xl mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <FeatureBlock dark index="01" title="Refined Elegance" desc="Every space is designed with intention — ornate without excess, warm without clutter." />
          <FeatureBlock dark index="02" title="Exclusively Vegetarian" desc="Our kitchens serve pure-vegetarian cuisine only, curated with the same care as everything else." />
          <FeatureBlock dark index="03" title="Personal Attention" desc="Led by our General Manager and events team, every celebration gets a single point of contact." />
        </Reveal>
      </section>

      <CTASection
        title="Come see Orriva for yourself"
        lede="Schedule a walk-through of the hall and lawns with our events team."
        buttonLabel="Book a Visit"
      />
    </>
  );
}
