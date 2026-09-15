type TestimonialProps = {
  quote: string;
  source: string;
};

export default function Testimonial({ quote, source }: TestimonialProps) {
  return (
    <div className="border border-line-dark px-7 py-9 text-center">
      <p className="text-gold" aria-hidden="true">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </p>
      <p className="mx-auto mt-4 max-w-[32ch] italic text-white/65">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-[0.78rem] uppercase tracking-[0.08em] text-gold-pale">
        {source}
      </p>
    </div>
  );
}
