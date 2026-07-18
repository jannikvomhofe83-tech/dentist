import type { Metadata } from "next";
import LegalShell, { Ph } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | Flowstate AI",
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <LegalShell title="Allgemeine Geschäftsbedingungen" stand="Juli 2026">
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge
        zwischen der Sehorz Lukas und vom Hofe Jannik GbR, Orlfing 1, 84405
        Dorfen (nachfolgend „Agentur") und ihren Auftraggebern (nachfolgend
        „Kunde") über
        Dienstleistungen im Bereich Performance-Marketing und
        Patientengewinnung. Das Angebot der Agentur richtet sich
        ausschließlich an Unternehmer im Sinne des § 14 BGB, insbesondere an
        Inhaber und Betreiber von Zahnarztpraxen, Implantatpraxen, Zahnzentren
        und Zahnkliniken. Entgegenstehende oder abweichende Bedingungen des
        Kunden werden nicht Vertragsbestandteil, es sei denn, die Agentur
        stimmt ihrer Geltung ausdrücklich schriftlich zu.
      </p>

      <h2>§ 2 Vertragsgegenstand</h2>
      <p>
        Gegenstand der Zusammenarbeit sind Dienstleistungen zur
        Patientengewinnung, insbesondere die Konzeption, Erstellung und
        laufende Betreuung von Werbekampagnen (u. a. Meta Ads, Google Ads),
        die Erstellung und Optimierung von Landingpages sowie ergänzende
        Leistungen (z. B. Tracking-Einrichtung, Terminbuchungs- und
        Follow-up-Automatisierung). Der konkrete Leistungsumfang ergibt sich
        aus dem jeweiligen Angebot bzw. der individuellen Vereinbarung mit dem
        Kunden.
      </p>

      <h2>§ 3 Vertragsschluss</h2>
      <p>
        Die Darstellung der Leistungen auf der Website stellt kein bindendes
        Angebot dar. Ein Vertrag kommt erst durch beidseitige Annahme eines
        individuellen Angebots in Textform (z. B. per E-Mail) oder durch
        Unterzeichnung einer Vereinbarung zustande. Die kostenlose
        Potenzial-Analyse ist unverbindlich und begründet keine
        Leistungspflicht des Kunden.
      </p>

      <h2>§ 4 Leistungserbringung, kein Erfolgsversprechen</h2>
      <p>
        Die Agentur erbringt ihre Leistungen mit der Sorgfalt eines
        ordentlichen Kaufmanns nach dem jeweils aktuellen Stand üblicher
        Marketingpraxis. Soweit nicht ausdrücklich schriftlich anders
        vereinbart, handelt es sich um Dienstleistungen; ein bestimmter
        wirtschaftlicher Erfolg (insbesondere eine bestimmte Anzahl an
        Anfragen, Terminen, Patienten oder Umsätzen) wird nicht geschuldet.
        Die Ergebnisse von Werbekampagnen hängen von Faktoren ab, die
        außerhalb des Einflussbereichs der Agentur liegen (u. a. Marktumfeld,
        Wettbewerb, Plattform-Algorithmen, Mitwirkung des Kunden).
      </p>

      <h2>§ 5 Mitwirkungspflichten des Kunden</h2>
      <p>Der Kunde stellt der Agentur rechtzeitig alle für die Leistungserbringung erforderlichen Informationen, Inhalte und Zugänge zur Verfügung, insbesondere:</p>
      <ul>
        <li>Zugänge zu Werbekonten, Website und relevanten Tools, soweit erforderlich</li>
        <li>Informationen zu Behandlungsangebot, Kapazitäten und Zielsetzung</li>
        <li>zeitnahe Bearbeitung und Nachverfolgung der übermittelten Anfragen</li>
        <li>Freigaben zu Werbemitteln und Texten innerhalb angemessener Frist</li>
      </ul>
      <p>
        Der Kunde ist für die berufs- und werberechtliche Zulässigkeit der von
        ihm freigegebenen Inhalte mitverantwortlich, insbesondere im Hinblick
        auf das Heilmittelwerbegesetz (HWG) und das zahnärztliche Berufsrecht.
      </p>

      <h2>§ 6 Vergütung und Werbebudget</h2>
      <p>
        Die Vergütung der Agentur ergibt sich aus dem individuellen Angebot.
        Das Werbebudget für Werbeplattformen (z. B. Meta, Google) ist in der
        Vergütung nicht enthalten; es wird vom Kunden direkt an die jeweilige
        Plattform gezahlt. Rechnungen sind, soweit nicht anders vereinbart,
        innerhalb von 14 Tagen ohne Abzug fällig. Alle Preise verstehen sich
        zuzüglich der gesetzlichen Umsatzsteuer.
      </p>

      <h2>§ 7 Laufzeit und Kündigung</h2>
      <p>
        Laufzeit und Kündigungsfristen ergeben sich aus der individuellen
        Vereinbarung. <Ph>Standardregelung ergänzen, z. B.: „Soweit nicht
        anders vereinbart, beträgt die Erstlaufzeit X Monate; danach ist der
        Vertrag mit einer Frist von X Wochen zum Monatsende kündbar."</Ph> Das
        Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt
        unberührt. Kündigungen bedürfen der Textform.
      </p>

      <h2>§ 8 Nutzungsrechte</h2>
      <p>
        Von der Agentur erstellte Werbemittel, Texte und Landingpages dürfen
        vom Kunden für die Dauer der Zusammenarbeit im vereinbarten Umfang
        genutzt werden. <Ph>Regelung für die Zeit nach Vertragsende ergänzen,
        z. B. Übertragung der Nutzungsrechte gegen Vergütung oder Verbleib bei
        der Agentur</Ph>
      </p>

      <h2>§ 9 Haftung</h2>
      <p>
        Die Agentur haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit
        sowie bei Verletzung von Leben, Körper und Gesundheit. Bei einfacher
        Fahrlässigkeit haftet die Agentur nur für die Verletzung wesentlicher
        Vertragspflichten (Kardinalpflichten); in diesem Fall ist die Haftung
        auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im
        Übrigen ist die Haftung ausgeschlossen. Die Haftung nach dem
        Produkthaftungsgesetz bleibt unberührt.
      </p>

      <h2>§ 10 Vertraulichkeit und Datenschutz</h2>
      <p>
        Beide Parteien verpflichten sich, über vertrauliche Informationen der
        jeweils anderen Partei Stillschweigen zu bewahren. Soweit die Agentur
        im Auftrag des Kunden personenbezogene Daten verarbeitet (z. B.
        Patientenanfragen), schließen die Parteien einen Vertrag über
        Auftragsverarbeitung nach Art. 28 DSGVO.
      </p>

      <h2>§ 11 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für
        alle Streitigkeiten aus der Geschäftsbeziehung ist, soweit gesetzlich
        zulässig, der Sitz der Agentur (Dorfen). Sollten einzelne Bestimmungen
        dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der
        übrigen Bestimmungen unberührt.
      </p>
    </LegalShell>
  );
}
