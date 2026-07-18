import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Impressum | Flowstate AI",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Sehorz Lukas und vom Hofe Jannik GbR
        <br />
        Orlfing 1
        <br />
        84405 Dorfen
        <br />
        Deutschland
      </p>

      <h2>Vertreten durch die Gesellschafter</h2>
      <p>
        Lukas Sehorz
        <br />
        Jannik vom Hofe
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 0172 3465896
        <br />
        E-Mail:{" "}
        <a href="mailto:lukas.sehorz@flowstate-ai.net">
          lukas.sehorz@flowstate-ai.net
        </a>
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
        <br />
        Lukas Sehorz, Orlfing 1, 84405 Dorfen
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen. Unser Angebot
        richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
        Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
        unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
        der Kenntnis einer konkreten Rechtsverletzung möglich.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält gegebenenfalls Links zu externen Websites
        Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden
        Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar.
      </p>
    </LegalShell>
  );
}
