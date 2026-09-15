import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vegetarian Cuisine & Catering",
  description:
    "Exclusively vegetarian, thoughtfully served — a sample of the live counters, starters, mains and desserts our culinary team tailors for every celebration at Orriva by Lotus.",
  alternates: { canonical: "/cuisine" },
};

const MENU: { letter: string; category: string; items: { name: string; tag?: string }[] }[] = [
  {
    letter: "A",
    category: "Live Counters",
    items: [
      { name: "Chaat & Golgappa Station", tag: "Popular" },
      { name: "Tawa Griddle Specials", tag: "Hot" },
      { name: "Wood-Fired Breads" },
      { name: "Fresh Juice & Mocktail Bar" },
    ],
  },
  {
    letter: "B",
    category: "Starters",
    items: [
      { name: "Paneer Tikka" },
      { name: "Corn & Spinach Seekh" },
      { name: "Crispy Vegetable Rolls" },
      { name: "Dahi Ke Kebab" },
    ],
  },
  {
    letter: "C",
    category: "Main Course",
    items: [
      { name: "Paneer Lababdar" },
      { name: "Dal Makhani" },
      { name: "Vegetable Handi" },
      { name: "Jeera & Kashmiri Pulao" },
    ],
  },
  {
    letter: "D",
    category: "Desserts",
    items: [
      { name: "Gulab Jamun" },
      { name: "Rabri Kulfi" },
      { name: "Live Dessert Counter", tag: "Popular" },
      { name: "Seasonal Fruit Display" },
    ],
  },
];

const PROCESS = [
  { num: "01", title: "Menu Consultation", desc: "Share your guest count, occasion and preferences with our culinary team." },
  { num: "02", title: "Tasting Session", desc: "Sample dishes ahead of your event and refine the final spread." },
  { num: "03", title: "Event-Day Service", desc: "Live counters, plated service or buffet — served exactly as planned." },
];

export default function CuisinePage() {
  return (
    <>
      <PageHero
        kicker="Cuisine"
        title="Exclusively vegetarian, thoughtfully served"
        crumb="Cuisine"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            kicker="Our Kitchen Philosophy"
            title="A sample of what guests are served"
            lede="Every menu at Orriva is pure vegetarian and built around your guest list, season and occasion. Below is an indicative spread — our culinary team will tailor a final menu with you."
          />
        </Reveal>
      </section>

      {/* Editorial menu — full-bleed image opener, then serial-lettered rows */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative aspect-[4/5] w-full xs:aspect-[16/10] sm:aspect-[16/7] lg:aspect-[16/6]">
          <Image
            src="/images/gallery2.png"
            alt="Vegetarian catering spread at Orriva"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="absolute inset-0 flex items-end justify-center px-6 pb-8 sm:pb-14">
            <h2 className="font-display text-center text-2xl leading-tight tracking-[0.02em] text-gold-pale xs:text-3xl sm:text-5xl">
              The Tasting Menu
            </h2>
          </div>
        </div>

        <div className="container-xl px-5 sm:px-6">
          {MENU.map((section, i) => (
            <Reveal key={section.category}>
              <div
                className={`flex flex-col gap-5 border-b border-white/10 py-10 sm:flex-row sm:items-start sm:gap-10 sm:py-16 ${
                  i === 0 ? "pt-12 sm:pt-20" : ""
                }`}
              >
                <div className="flex shrink-0 items-center gap-3 sm:w-56 sm:gap-4">
                  <span
                    className="font-display select-none text-[3.25rem] font-semibold leading-none text-transparent sm:text-[4.5rem] lg:text-[5.5rem]"
                    style={{ WebkitTextStroke: "1.25px rgba(203,164,104,0.55)" }}
                    aria-hidden="true"
                  >
                    {section.letter}
                  </span>
                  <h3 className="font-display text-lg text-gold-pale sm:text-xl lg:text-2xl">
                    {section.category}
                  </h3>
                </div>

                <ul className="grid flex-1 grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b border-white/5 pb-3 text-[0.92rem] text-white/70 sm:text-[0.98rem]"
                    >
                      <span>{item.name}</span>
                      {item.tag && (
                        <span className="shrink-0 rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.64rem] uppercase tracking-[0.08em] text-gold-pale sm:px-3 sm:py-1 sm:text-[0.68rem]">
                          {item.tag}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process — same outlined-numeral identity, scaled up since it's a real 3-step sequence */}
      <section className="relative bg-ivory py-20 sm:py-28 lg:py-36">
        <Reveal>
          <SectionHeading kicker="How It Works" title="Building your menu" />
        </Reveal>

        <div className="container-xl mt-12 flex flex-col divide-y divide-line-light px-5 sm:mt-20 sm:px-6 lg:mt-24">
          {PROCESS.map((step) => (
            <Reveal key={step.num}>
              <div className="grid grid-cols-1 items-start gap-3 py-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:py-12 lg:grid-cols-[auto_1fr_1.4fr] lg:gap-12">
                <span
                  className="font-display select-none text-[3.75rem] font-semibold leading-none text-transparent sm:text-[5.5rem] lg:text-[7.5rem]"
                  style={{ WebkitTextStroke: "1.25px rgba(180,140,80,0.35)" }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <h3 className="text-lg text-ink sm:text-xl lg:text-2xl">{step.title}</h3>
                <p className="max-w-[42ch] text-[0.92rem] leading-relaxed text-[#5a5346] sm:text-[0.98rem]">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Book a tasting with our culinary team"
        lede="Get in touch to discuss your menu for weddings, receptions or corporate events."
        buttonLabel="Enquire Now"
      />
    </>
  );
}