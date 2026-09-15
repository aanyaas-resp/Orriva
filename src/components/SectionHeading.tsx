import clsx from "clsx";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  lede?: string;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  lede,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx("mx-auto max-w-2xl text-center", className)}>
      <p className={clsx("kicker justify-center", dark && "kicker-dark")}>{kicker}</p>
      <h2
        className={clsx(
          "mt-4 text-3xl sm:text-4xl md:text-[2.4rem]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={clsx(
            "mx-auto mt-4 max-w-[52ch] text-[0.98rem] leading-relaxed",
            dark ? "text-white/60" : "text-[#5a5346]"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
