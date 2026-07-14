import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  index,
  eyebrow,
  eyebrowTone = "teal",
  title,
  intro,
  align = "left",
  invert = false,
  maxTitle = "max-w-3xl",
}: {
  index?: string;
  eyebrow?: string;
  eyebrowTone?: "teal" | "amber" | "invert";
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  maxTitle?: string;
}) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`${alignCls} ${align === "center" ? "max-w-3xl" : ""}`}>
      {eyebrow && (
        <Reveal>
          <div
            className={`flex items-center gap-3 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {index && (
              <span className="nums text-[13px] font-semibold text-amber">
                {index}
              </span>
            )}
            <Eyebrow tone={invert ? "invert" : eyebrowTone}>{eyebrow}</Eyebrow>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-3 font-serif text-[clamp(28px,3.6vw,44px)] leading-[1.08] ${
            invert ? "text-white" : "text-navy"
          } ${maxTitle} ${align === "center" ? "mx-auto" : ""}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-[17px] leading-relaxed ${
              invert ? "text-ink-invert/85" : "text-ink"
            } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
