import Link from "next/link";
import Reveal from "./Reveal";

type CTASectionProps = {
  title: string;
  lede: string;
  buttonLabel: string;
  href?: string;
};

export default function CTASection({
  title,
  lede,
  buttonLabel,
  href = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-ink via-ink to-charcoal py-24 text-center">
      <Reveal className="container-xl">
        <p className="kicker kicker-dark justify-center">Celebrate Differently</p>
        <h2 className="mx-auto mt-4 max-w-[20ch] text-3xl text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-white/55">{lede}</p>
        <Link
          href={href}
          className="mt-9 inline-block bg-gold px-9 py-3.5 text-[0.8rem] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold-light"
        >
          {buttonLabel}
        </Link>
      </Reveal>
    </section>
  );
}
