import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "@/components/ui/icons";

const services = [
  {
    title: "Wir gewinnen die richtigen Patienten",
    sub: "Gezielt Menschen mit echtem Wunsch nach festen Zähnen und Implantaten.",
  },
  {
    title: "Nur ernsthafte Selbstzahler",
    sub: "Wir filtern vor, Sie sprechen nicht mit Preisjägern.",
  },
  {
    title: "Komplettes System, fertig aufgesetzt",
    sub: "Von der Landingpage bis zur Technik im Hintergrund, laufend optimiert.",
  },
  {
    title: "Rundum betreut, ein Ansprechpartner",
    sub: "Done-for-you: Sie müssen nichts selbst aufsetzen oder koordinieren.",
  },
];

export default function Package() {
  return (
    <section className="section-pad border-t border-line bg-base">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Leistungspaket"
          title="Die komplette Patientengewinnung. Aus einer Hand."
          intro="Wir bauen Ihnen ein komplettes, betreutes System für planbar mehr Umsatz, Monat für Monat. Sie behandeln, um alles andere kümmern wir uns."
        />

        <ul className="mt-12 grid max-w-4xl gap-x-10 gap-y-6 text-left sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 2) * 0.05}
              className="flex gap-3.5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber/10">
                <Check className="h-3.5 w-3.5 text-amber" />
              </span>
              <div>
                <p className="text-[16px] font-semibold leading-snug text-navy">
                  {s.title}
                </p>
                <p className="mt-0.5 text-[14px] leading-snug text-ink/70">
                  {s.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
