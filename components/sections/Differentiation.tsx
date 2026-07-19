import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { Check } from "@/components/ui/icons";

const points = [
  {
    lead: "Ausschließlich Premium-Implantologie.",
    rest: " Wir streuen unser Budget nicht über zehn Branchen. Unsere gesamte Erfahrung fließt in genau Ihre Nische.",
  },
  {
    lead: "Ein nachvollziehbares System statt leerer Versprechen.",
    rest: " Sie sehen genau, wie Anfragen entstehen und qualifiziert werden.",
  },
  {
    lead: "Die Gründer arbeiten persönlich an Ihrem Account.",
    rest: " Direkter Draht, schnelle Entscheidungen, kein Weiterreichen an Praktikanten.",
  },
  {
    lead: "Keine Knebelverträge.",
    rest: " Faire Laufzeiten. Wir wollen überzeugen, nicht binden.",
  },
  {
    lead: "Rechtssicher.",
    rest: " Wir arbeiten konform mit Heilmittelwerbegesetz (HWG) und DSGVO.",
  },
];

export default function Differentiation() {
  return (
    <section className="section-pad border-t border-line bg-base">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          {/* Portrait Jannik */}
          <Reveal className="order-2 lg:order-1">
            <Image
              src="/images/jannik.jpg"
              alt="Jannik vom Hofe, Gründer von Flowstate AI"
              width={880}
              height={1100}
              className="w-full rounded-card border border-line object-cover shadow-card"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="nums text-[13px] font-semibold text-amber">
                  05
                </span>
                <Eyebrow tone="amber">Differenzierung · Ehrlich</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-serif text-[clamp(28px,3.6vw,44px)] leading-[1.08] text-navy">
                Über Jannik
              </h2>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {points.map((p, i) => (
                <Reveal as="li" key={p.lead} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                      <Check className="h-3.5 w-3.5 text-success" />
                    </span>
                    <p className="text-[16px] leading-relaxed text-ink">
                      <strong className="font-semibold text-navy">
                        {p.lead}
                      </strong>
                      {p.rest}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
