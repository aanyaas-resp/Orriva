import Link from "next/link";
import LotusMark from "@/components/LotusMark";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <LotusMark className="h-16 w-16 opacity-70" />
      <p className="kicker kicker-dark mt-8 justify-center">404</p>
      <h1 className="mt-4 max-w-[18ch] text-3xl text-white sm:text-4xl">
        This page has wandered off
      </h1>
      <p className="mx-auto mt-4 max-w-[42ch] text-white/55">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back to Orriva.
      </p>
      <Link
        href="/"
        className="mt-9 inline-block bg-gold px-8 py-3.5 text-[0.8rem] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold-light"
      >
        Back to Home
      </Link>
    </section>
  );
}
