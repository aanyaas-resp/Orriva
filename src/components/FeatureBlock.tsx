import clsx from "clsx";

type FeatureProps = {
  index: string;
  title: string;
  desc: string;
  dark?: boolean;
};

export default function FeatureBlock({ index, title, desc, dark = false }: FeatureProps) {
  return (
    <div className="flex flex-col items-center px-4 text-center">
      <span className={clsx("font-display text-sm text-gold", dark ? "" : "text-bronze")}>
        {index}
      </span>
      <div className={clsx("my-4 h-px w-8", dark ? "bg-gold/40" : "bg-bronze/30")} />
      <h3 className={clsx("text-[1.05rem]", dark ? "text-white" : "text-ink")}>{title}</h3>
      <p
        className={clsx(
          "mt-3 max-w-[30ch] text-[0.92rem] leading-relaxed",
          dark ? "text-white/55" : "text-[#5a5346]"
        )}
      >
        {desc}
      </p>
    </div>
  );
}
