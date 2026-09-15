import Link from "next/link";
import Reveal from "./Reveal";

type PageHeroProps = {
  kicker: string;
  title: string;
  crumb: string;
};

export default function PageHero({ kicker, title, crumb }: PageHeroProps) {
  return (
    <section className="bg-ink pb-16 pt-[calc(84px+3.5rem)] text-center">
      <Reveal className="container-xl">
        <p className="kicker kicker-dark justify-center">{kicker}</p>
        <h1 className="mx-auto mt-4 max-w-[20ch] text-4xl text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-white/40">
          <Link href="/" className="hover:text-gold-pale">Home</Link> / {crumb}
        </p>
      </Reveal>
    </section>
  );
}
