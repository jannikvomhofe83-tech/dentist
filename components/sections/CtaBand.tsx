import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function CtaBand({
  eyebrow,
  title,
  note,
}: {
  eyebrow?: string;
  title: string;
  note?: string;
}) {
  return (
    <section className="border-t border-line bg-base py-16 md:py-20">
      <div className="container-page">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            {eyebrow && (
              <Reveal>
                <Eyebrow tone="amber">{eyebrow}</Eyebrow>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-serif text-[clamp(26px,3.4vw,40px)] leading-[1.1] text-navy">
                {title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="shrink-0">
            <CtaButton href="#formular">
              Kostenlose Potenzial-Analyse anfragen
            </CtaButton>
            {note && <p className="mt-3 text-[13px] text-ink/60">{note}</p>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
