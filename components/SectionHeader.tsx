import Reveal from "./Reveal";

type SectionHeaderProps = {
  index?: string;
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  intro,
}: SectionHeaderProps) {
  return (
    <Reveal className="section-heading max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
      ) : null}
    </Reveal>
  );
}
