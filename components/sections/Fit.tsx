import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check, Cross } from "@/components/ui/icons";

const fitYes = [
  "Implantologie als echten Schwerpunkt betreibt: feste Zähne, All-on-X, umfangreiche Sanierungen",
  "monatlich mindestens 10 zusätzliche Beratungen annehmen kann",
  "durchschnittliche Fallwerte ab ca. 8.000 € (ideal 12.000 €+) hat",
  "Anfragen innerhalb weniger Minuten nachfassen kann",
  "ca. 2.500–4.000 € monatliches Werbebudget einsetzen kann",
];

const fitNo = [
  "Ihre Praxis keinen Implantat-Schwerpunkt hat",
  "keine freien Behandlungskapazitäten vorhanden sind",
  "niemand Anfragen zeitnah bearbeiten kann",
  "der Fokus auf Regelversorgung, Prophylaxe oder einzelnen günstigen Implantaten liegt",
];

export default function Fit() {
  return (
    <section className="section-pad border-t border-line bg-base">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Zielgruppe · Fit-Klarheit"
          title="Passt das zu Ihrer Praxis?"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* YES */}
          <Reveal className="rounded-card border border-success/25 bg-success/[0.04] p-7 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/15">
                <Check className="h-4 w-4 text-success" />
              </span>
              <h3 className="font-serif text-[22px] leading-tight text-navy">
                Richtig für Sie, wenn Ihre Praxis…
              </h3>
            </div>
            <ul className="space-y-3.5">
              {fitYes.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-success" />
                  <span className="text-[15px] leading-snug text-ink">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* NO */}
          <Reveal
            delay={0.08}
            className="rounded-card border border-line bg-cream p-7 md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/8">
                <Cross className="h-4 w-4 text-navy/60" />
              </span>
              <h3 className="font-serif text-[22px] leading-tight text-navy">
                Noch nicht das Richtige, wenn…
              </h3>
            </div>
            <ul className="space-y-3.5">
              {fitNo.map((f) => (
                <li key={f} className="flex gap-3">
                  <Cross className="mt-1 h-4 w-4 shrink-0 text-navy/40" />
                  <span className="text-[15px] leading-snug text-ink/85">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
