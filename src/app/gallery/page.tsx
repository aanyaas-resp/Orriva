import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments made at Orriva by Lotus — the Grand Hall, lawn ceremonies, décor and details from celebrations hosted in Raj Nagar Extension, Ghaziabad.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero kicker="Gallery" title="Moments, made at Orriva" crumb="Gallery" />

      <section className="bg-ivory py-20">
        <GalleryGrid />
        <p className="container-xl mt-10 text-center text-xs text-[#8a8171]">
          Photos shown are generated placeholder tiles — replace the images in{" "}
          <code className="text-bronze">public/images/</code> with real venue photography.
        </p>
      </section>

      <CTASection
        title="See it in person"
        lede="Book a walk-through and picture your celebration at Orriva."
        buttonLabel="Schedule a Visit"
      />
    </>
  );
}
