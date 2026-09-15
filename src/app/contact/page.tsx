import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Get in touch with Orriva by Lotus in Raj Nagar Extension, Ghaziabad — call, email or send an enquiry for your wedding, reception or event date.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Let&rsquo;s talk about your celebration" crumb="Contact" />

      <section className="bg-ink py-24">
        <div className="container-xl grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal className="text-center">
            <SectionHeading dark kicker="Reach Us" title="Orriva by Lotus" />
            <dl className="mx-auto mt-8 max-w-sm space-y-6 text-center">
              <div>
                <dt className="text-[0.74rem] uppercase tracking-[0.08em] text-gold-pale">Address</dt>
                <dd className="mt-1.5 text-white/65">
                  Plot no. 915, near Tyagi Chowk, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003
                </dd>
              </div>
              <div>
                <dt className="text-[0.74rem] uppercase tracking-[0.08em] text-gold-pale">Phone</dt>
                <dd className="mt-1.5 text-white/65">
                  <a href="tel:+917428217500" className="hover:text-gold-pale">+91 74282 17500</a>
                  {" / "}
                  <a href="tel:+917428216500" className="hover:text-gold-pale">+91 74282 16500</a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.74rem] uppercase tracking-[0.08em] text-gold-pale">Email</dt>
                <dd className="mt-1.5 text-white/65">
                  <a href="mailto:orriva.lotus@gmail.com" className="hover:text-gold-pale">
                    orriva.lotus@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.74rem] uppercase tracking-[0.08em] text-gold-pale">Hours</dt>
                <dd className="mt-1.5 text-white/65">Open 24 hours — by appointment for venue tours</dd>
              </div>
            </dl>
            <a
              href="https://www.instagram.com/orrivabylotus/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-[0.8rem] uppercase tracking-[0.08em] text-gold-pale hover:text-gold-light"
            >
              Follow @orrivabylotus on Instagram &rarr;
            </a>

            <div className="mx-auto mt-10 aspect-[16/10] w-full max-w-lg overflow-hidden border border-line-dark">
              <iframe
                src="https://www.google.com/maps?q=Orriva+By+Lotus,+Plot+no.+915,+near+Tyagi+Chowk,+Raj+Nagar+Extension,+Ghaziabad,+Uttar+Pradesh+201003&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orriva by Lotus location map"
                className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
              />
            </div>
          </Reveal>

          <Reveal className="text-center">
            <SectionHeading dark kicker="Send an Enquiry" title="Tell us about your event" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
