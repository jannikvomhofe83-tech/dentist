import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function FinalCta() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="amber">Ihr nächster Schritt</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-3 max-w-2xl font-serif text-[clamp(30px,4.2vw,50px)] leading-[1.06] text-navy">
              Planbar mehr hochwertige Implantatfälle — statt auf Empfehlungen zu
              warten.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink">
              Für Implantatpraxen und Zahnzentren mit freien Beratungs- und
              Behandlungskapazitäten.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center">
              <CtaButton href="#formular">
                Kostenlose Potenzial-Analyse anfragen
              </CtaButton>
              <p className="mt-3 text-[13px] text-ink/65">
                Kostenlos &amp; unverbindlich · Nur für Praxen mit
                Implantat-Schwerpunkt
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
