import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureBlock from "@/components/FeatureBlock";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vegetarian Cuisine & Catering",
  description:
    "Exclusively vegetarian, thoughtfully served — a sample of the live counters, starters, mains and desserts our culinary team tailors for every celebration at Orriva by Lotus.",
  alternates: { canonical: "/cuisine" },
};

const MENU: { category: string; items: { name: string; tag?: string }[] }[] = [
  {
    category: "Live Counters",
    items: [
      { name: "Chaat & Golgappa Station", tag: "Popular" },
      { name: "Tawa Griddle Specials", tag: "Hot" },
      { name: "Wood-Fired Breads" },
      { name: "Fresh Juice & Mocktail Bar" },
    ],
  },
  {
    category: "Starters",
    items: [
      { name: "Paneer Tikka" },
      { name: "Corn & Spinach Seekh" },
      { name: "Crispy Vegetable Rolls" },
      { name: "Dahi Ke Kebab" },
    ],
  },
  {
    category: "Main Course",
    items: [
      { name: "Paneer Lababdar" },
      { name: "Dal Makhani" },
      { name: "Vegetable Handi" },
      { name: "Jeera & Kashmiri Pulao" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Gulab Jamun" },
      { name: "Rabri Kulfi" },
      { name: "Live Dessert Counter", tag: "Popular" },
      { name: "Seasonal Fruit Display" },
    ],
  },
];

export default function CuisinePage() {
  return (
    <>
      <PageHero
        kicker="Cuisine"
        title="Exclusively vegetarian, thoughtfully served"
        crumb="Cuisine"
      />

      <section className="bg-ivory py-24">
        <Reveal>
          <SectionHeading
            kicker="Our Kitchen Philosophy"
            title="A sample of what guests are served"
            lede="Every menu at Orriva is pure vegetarian and built around your guest list, season and occasion. Below is an indicative spread — our culinary team will tailor a final menu with you."
          />
        </Reveal>

        <Reveal className="container-xl mt-14">
          <div className="relative mx-auto aspect-[16/7] max-w-4xl overflow-hidden">
            <Image
              src="/images/cuisine-hero.jpg"
              alt="Vegetarian catering spread at Orriva"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal stagger className="container-xl mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {MENU.map((section) => (
            <div key={section.category} className="text-center">
              <h3 className="text-[1.05rem] text-ink">{section.category}</h3>
              <div className="mx-auto my-4 h-px w-8 bg-bronze/30" />
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.name} className="text-[0.92rem] text-[#5a5346]">
                    {item.name}
                    {item.tag && (
                      <span className="ml-2 text-[0.68rem] uppercase tracking-[0.06em] text-bronze">
                        {item.tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-ink py-24">
        <Reveal>
          <SectionHeading dark kicker="How It Works" title="Building your menu" />
        </Reveal>
        <Reveal stagger className="container-xl mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <FeatureBlock dark index="01" title="Menu Consultation" desc="Share your guest count, occasion and preferences with our culinary team." />
          <FeatureBlock dark index="02" title="Tasting Session" desc="Sample dishes ahead of your event and refine the final spread." />
          <FeatureBlock dark index="03" title="Event-Day Service" desc="Live counters, plated service or buffet — served exactly as planned." />
        </Reveal>
      </section>

      <CTASection
        title="Book a tasting with our culinary team"
        lede="Get in touch to discuss your menu for weddings, receptions or corporate events."
        buttonLabel="Enquire Now"
      />
    </>
  );
}
