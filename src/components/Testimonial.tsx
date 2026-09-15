type TestimonialProps = {
  quote: string;
  source: string;
};

export default function Testimonial({ quote, source }: TestimonialProps) {
  return (
    <figure className="group relative border border-line-dark bg-white/[0.02] px-8 py-10 text-center transition-colors duration-300 hover:border-gold/40">
      <span
        className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 font-serif text-5xl leading-none text-gold/30"
        aria-hidden="true"
      >
        &rdquo;
      </span>
      <blockquote className="mx-auto max-w-[30ch] font-serif text-[1.05rem] italic leading-relaxed text-white/75">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex flex-col items-center gap-2">
        <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
        <span className="text-[0.75rem] uppercase tracking-[0.14em] text-gold-pale">
          {source}
        </span>
      </figcaption>
    </figure>
  );
}