import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpaceCard from "@/components/SpaceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Weddings & Events",
  description:
    "Spaces that rise to the occasion — the Grand Banquet Hall, manicured lawns and pre-function foyer at Orriva by Lotus, Ghaziabad, for weddings, receptions and every milestone in between.",
  alternates: { canonical: "/weddings-events" },
};

const OCCASIONS = [
  "Weddings & Receptions",
  "Sangeet, Mehndi & Haldi Ceremonies",
  "Engagements & Ring Ceremonies",
  "Corporate Events & Conferences",
  "Birthday & Anniversary Celebrations",
  "Social & Community Gatherings",
];

const INCLUSIONS = [
  {
    title: "Dedicated Event Manager",
    desc: "A single point of contact to coordinate décor, catering, seating and timelines.",
  },
  {
    title: "In-House Vegetarian Catering",
    desc: "Customisable menus across cuisines, all prepared pure vegetarian.",
  },
  {
    title: "Décor & Vendor Coordination",
    desc: "Work with our preferred décor and photography partners, or bring your own.",
  },
  {
    title: "Ample Parking & Guest Comfort",
    desc: "On-site parking and well-appointed guest amenities throughout the venue.",
  },
];

export default function WeddingsEventsPage() {
  return (
    <>
      <PageHero
        kicker="Weddings & Events"
        title="Spaces that rise to the occasion"
        crumb="Weddings & Events"
      />

      <section className="bg-ivory py-24">
        <Reveal>
          <SectionHeading kicker="The Spaces" title="Choose the setting for your celebration" />
        </Reveal>
        <Reveal stagger className="container-xl mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <SpaceCard
            tone={1}
            title="Grand Banquet Hall"
            desc="Air-conditioned, ornately finished, built for weddings, receptions and large gatherings."
          />
          <SpaceCard
            tone={2}
            title="Manicured Lawns"
            desc="Open-air celebrations with landscaped greens — ideal for sangeet, haldi and cocktail evenings."
          />
          <SpaceCard
            tone={3}
            title="Pre-Function Foyer"
            desc="A refined welcome space for registration, photo moments and guest arrival."
          />
        </Reveal>
      </section>

      <section className="bg-ivory-dim py-24">
        <Reveal>
          <SectionHeading kicker="Occasions We Host" title="One venue, every milestone" />
        </Reveal>
        <Reveal
          stagger
          className="container-xl mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {OCCASIONS.map((occasion) => (
            <span
              key={occasion}
              className="flex items-center gap-2.5 border border-line-light px-5 py-2.5 text-[0.85rem] text-[#5a5346]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {occasion}
            </span>
          ))}
        </Reveal>
      </section>

      {/* Inclusions — four parallel benefits, not a sequence, so no numbering */}
      <section className="bg-ink py-24">
        <Reveal>
          <SectionHeading dark kicker="Included With Every Booking" title="Support from enquiry to send-off" />
        </Reveal>
        <Reveal
          stagger
          className="container-xl mt-16 grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x md:grid-cols-4 md:divide-y-0"
        >
          {INCLUSIONS.map((item) => (
            <div key={item.title} className="px-6 py-8 text-center first:pt-0 sm:py-8 md:py-0">
              <h3 className="font-display text-lg text-gold-pale">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <CTASection
        title="Check availability for your date"
        lede="Tell us your event date and guest count for a tailored proposal."
        buttonLabel="Enquire Now"
      />
    </>
  );
}