import type { Metadata } from "next";
import LegalShell, { Ph } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Flowstate AI",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell title="Datenschutzerklärung" stand="Juli 2026">
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p>
        Sehorz Lukas und vom Hofe Jannik GbR
        <br />
        Orlfing 1
        <br />
        84405 Dorfen
        <br />
        E-Mail:{" "}
        <a href="mailto:lukas.sehorz@flowstate-ai.net">
          lukas.sehorz@flowstate-ai.net
        </a>
        <br />
        Telefon: 0172 3465896
      </p>

      <h2>2. Allgemeine Hinweise</h2>
      <p>
        Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
        den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung. Die Nutzung dieser Website ist ohne Angabe
        personenbezogener Daten möglich; Daten werden nur erhoben, soweit Sie
        uns diese aktiv mitteilen (insbesondere über unser Anfrageformular)
        oder soweit dies technisch erforderlich ist.
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird gehostet bei Netlify, Inc., 512 2nd Street, Suite
        200, San Francisco, CA 94107, USA („Netlify"). Mit Netlify besteht ein
        Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO. Soweit dabei
        personenbezogene Daten in die USA übermittelt werden, erfolgt dies auf
        Grundlage der EU-Standardvertragsklauseln nach Art. 46 DSGVO. Weitere
        Informationen finden Sie in der Datenschutzerklärung von Netlify:{" "}
        <a
          href="https://www.netlify.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          netlify.com/privacy
        </a>
        .
      </p>
      <p>
        Beim Aufruf der Website verarbeitet der Server automatisch technische
        Zugriffsdaten (sogenannte Server-Logfiles), insbesondere IP-Adresse,
        Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp und
        Betriebssystem. Diese Daten dienen der Sicherstellung eines
        störungsfreien Betriebs sowie der Sicherheit der Website und werden
        nach kurzer Zeit gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der
        Website).
      </p>

      <h2>4. Anfrage- und Qualifikationsformular</h2>
      <p>
        Wenn Sie unser Formular „Kostenlose Potenzial-Analyse" nutzen,
        verarbeiten wir die von Ihnen angegebenen Daten:
      </p>
      <ul>
        <li>
          Angaben zu Ihrer Praxis (Behandlungsschwerpunkt, Anzahl der
          Behandler, bisherige Wege der Patientengewinnung, aktuelle
          Herausforderung, Beratungskapazität, Werbebudget, Ihre Rolle in der
          Praxis, Website Ihrer Praxis)
        </li>
        <li>Name</li>
        <li>Geschäftliche E-Mail-Adresse</li>
        <li>Telefonnummer</li>
      </ul>
      <p>
        Zweck der Verarbeitung ist die Bearbeitung Ihrer Anfrage, die
        Erstellung der kostenlosen Potenzial-, Website- und SEO-Analyse, die
        Kontaktaufnahme zur Terminvereinbarung sowie die Anbahnung einer
        möglichen Zusammenarbeit. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b
        DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage) sowie Ihre
        Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie im Formular
        erteilen.
      </p>
      <p>
        Ihre Daten werden gelöscht, sobald sie für die genannten Zwecke nicht
        mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen. Eine Weitergabe an Dritte erfolgt nicht, ausgenommen
        die unter dieser Erklärung genannten Auftragsverarbeiter.
      </p>

      <h2>5. Terminbuchung (Calendly)</h2>
      <p>
        Für die Vereinbarung des kostenlosen Erstgesprächs nutzen wir den
        Terminbuchungsdienst Calendly des Anbieters Calendly LLC, 271 17th St
        NW, Atlanta, Georgia 30363, USA („Calendly"). Wenn Sie über Calendly
        einen Termin buchen, verarbeitet Calendly die von Ihnen eingegebenen
        Daten (insbesondere Name, E-Mail-Adresse, gewählter Termin) sowie
        technische Zugriffsdaten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Terminvereinbarung auf
        Ihre Anfrage). Mit Calendly besteht ein Vertrag über
        Auftragsverarbeitung nach Art. 28 DSGVO; die Übermittlung in die USA
        erfolgt auf Grundlage der EU-Standardvertragsklauseln nach Art. 46
        DSGVO. Weitere Informationen:{" "}
        <a
          href="https://calendly.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          calendly.com/privacy
        </a>
        .
      </p>

      <h2>6. Cookies</h2>
      <p>
        Diese Website setzt derzeit keine Cookies ein, die einer Einwilligung
        bedürfen. Es werden keine Analyse- oder Marketing-Cookies gesetzt.
        Sollte sich dies ändern (z. B. durch Einbindung von Analyse- oder
        Werbetools), werden wir Sie vor dem Setzen solcher Cookies über ein
        Einwilligungsbanner um Ihre Zustimmung nach § 25 TDDDG bitten und
        diese Erklärung aktualisieren.
      </p>

      <h2>7. Conversion-Tracking und Werbeanzeigen</h2>
      <p>
        <Ph>Nur aufnehmen, wenn Meta Pixel / Google Ads Tag tatsächlich
        eingebunden werden — dann zwingend zusätzlich ein Consent-Banner
        einsetzen und hier Anbieter, Zweck, Rechtsgrundlage (Einwilligung,
        Art. 6 Abs. 1 lit. a DSGVO), Speicherdauer und Widerrufsmöglichkeit
        beschreiben.</Ph>
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die
        Zukunft widerrufen, etwa formlos per E-Mail an{" "}
        <a href="mailto:lukas.sehorz@flowstate-ai.net">
          lukas.sehorz@flowstate-ai.net
        </a>
        . Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
        bleibt unberührt.
      </p>
      <p>
        Ihnen steht zudem ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO). Für unseren Sitz
        zuständig ist das Bayerische Landesamt für Datenschutzaufsicht
        (BayLDA), Promenade 18, 91522 Ansbach.
      </p>

      <h2>9. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.
        Eine verschlüsselte Verbindung erkennen Sie daran, dass die
        Adresszeile des Browsers mit „https://" beginnt. Daten, die Sie über
        unser Formular übermitteln, können nicht von Dritten mitgelesen
        werden.
      </p>

      <h2>10. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
        stets den aktuellen rechtlichen Anforderungen entspricht oder um
        Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch
        gilt dann die neue Datenschutzerklärung.
      </p>
    </LegalShell>
  );
}
