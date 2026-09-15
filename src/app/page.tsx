import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureBlock from "@/components/FeatureBlock";
import SpaceCard from "@/components/SpaceCard";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import LotusMark from "@/components/LotusMark";
import AboutPage from "./about/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPage />

      {/* Story */}
      <section className="bg-ivory-dim py-24">
        <Reveal>
          <SectionHeading
            kicker="The Story Behind Orriva"
            title="Every great story has a beginning"
            lede="The &lsquo;O&rsquo; is a full-circle moment; &lsquo;Riva&rsquo; is the gentle flow of time. Together they express a journey that begins with intention and grows into something lasting."
          />
        </Reveal>

        <Reveal
          stagger
          className="container-xl mt-14 grid grid-cols-3 gap-8 sm:grid-cols-3"
        >
          <Stat value="1,400+" label="Celebrations Hosted" />
          <Stat value="100%" label="Pure Vegetarian" />
          <Stat value="4.5★" label="Guest Rated" />
        </Reveal>
      </section>

      {/* Offerings */}
      <section className="bg-ivory py-24">
        <Reveal>
          <SectionHeading
            kicker="What We Offer"
            title="Spaces built for every occasion"
          />
        </Reveal>
        <Reveal
          stagger
          className="container-xl mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          <SpaceCard
            tone={1}
            title="Grand Banquet Hall"
            desc="Air-conditioned interiors with ornate finishes for weddings and receptions."
          />
          <SpaceCard
            tone={2}
            title="Manicured Lawns"
            desc="Open-air celebrations under the sky, dressed for the season."
          />
          <SpaceCard
            tone={3}
            title="Vegetarian Catering"
            desc="Curated pure-vegetarian menus crafted for every palate."
          />
        </Reveal>
      </section>

      {/* Why Orriva */}
      <section className="bg-ink py-24">
        <Reveal>
          <SectionHeading
            dark
            kicker="Why Orriva"
            title="Details, nurtured with thought"
          />
        </Reveal>
        <Reveal
          stagger
          className="container-xl mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4"
        >
          <FeatureBlock
            dark
            index="01"
            title="Pure Vegetarian, Always"
            desc="Every menu at Orriva is exclusively vegetarian — refined, seasonal and generous."
          />
          <FeatureBlock
            dark
            index="02"
            title="Flexible Spaces"
            desc="From an ornate hall to open lawns, scale your celebration your way."
          />
          <FeatureBlock
            dark
            index="03"
            title="Dedicated Support"
            desc="A single point of contact guides décor, catering and logistics."
          />
          <FeatureBlock
            dark
            index="04"
            title="Central Location"
            desc="Easy to reach for guests across Ghaziabad and the wider NCR."
          />
        </Reveal>
      </section>

      {/* Testimonials */}
      {/* Testimonials */}
      <section className="bg-gradient-to-b from-ink to-[#151310] py-24">
        <Reveal>
          <SectionHeading
            dark
            kicker="In Their Words"
            title="Celebrated at Orriva"
          />
        </Reveal>
        <Reveal
          stagger
          className="container-xl mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          <Testimonial
            quote="Great ambience with great food and service — the staff is also good."
            source="Google Review"
          />
          <Testimonial
            quote="Great place for a wedding or other events — good location with delicious food."
            source="Google Review"
          />
          <Testimonial
            quote="An excellent destination for our dream wedding — elegant spaces and refined ambience."
            source="Guest Feedback"
          />
        </Reveal>
        <Reveal className="container-xl mt-14 flex justify-center">
          <a
            href="https://share.google/Ud2BaWgBSmW4DAkA9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/40 px-7 py-3 text-[0.8rem] uppercase tracking-[0.14em] text-gold-pale transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Show more reviews
          </a>
        </Reveal>
      </section>

      <CTASection
        title="Let's begin your story at Orriva"
        lede="Share your date and guest count — our team will get back with availability and a tailored proposal."
        buttonLabel="Enquire Now"
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex items-center gap-2 font-display text-3xl text-bronze">
        <LotusMark className="h-5 w-5" />
        {value}
      </span>
      <span className="mt-2 text-[0.76rem] uppercase tracking-[0.08em] text-[#8a8171]">
        {label}
      </span>
    </div>
  );
}
