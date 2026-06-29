import Reveal from "./Reveal";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
}: SectionHeaderProps) {
  return (
    <Reveal className="max-w-2xl">
      <span className="eyebrow">
        {index} — {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
      ) : null}
    </Reveal>
  );
}
