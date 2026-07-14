import Reveal from "@/components/ui/Reveal";
import { Check } from "@/components/ui/icons";

const signals = [
  "100 % auf Premium-Implantologie spezialisiert, kein Bauchladen",
  "Meta, Google & Landingpage aus einer Hand",
  "Vorqualifizierte Anfragen statt reiner Preisjäger",
  "Persönlich betreut von den Gründern, kein Junior-Praktikant",
];

export default function TrustBar() {
  return (
    <section aria-label="Spezialisierung" className="border-t border-line bg-base">
      <div className="container-page py-6 md:py-7">
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s, i) => (
            <Reveal
              as="li"
              key={s}
              delay={i * 0.06}
              y={12}
              className="flex items-start gap-2.5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10">
                <Check className="h-3 w-3 text-teal-600" />
              </span>
              <span className="text-[13.5px] font-medium leading-snug text-navy">
                {s}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
