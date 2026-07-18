# Landingpage — Premium-Implantat-Patientengewinnung ([Agenturname])

Produktionsreife, video-first B2B-Landingpage. Struktur aus dem Blueprint (Dokument A),
Copy 1:1 aus dem Content-Deck (Dokument B).

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · `next/font`
(DM Serif Display + Inter).

## Entwicklung
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Section-Reihenfolge (= Dokument A / B)
1. Sticky Header — Logo + einziger CTA, keine Navigation
2. Hero (video-first) — Founder-Video dominant, Headline + 3 Nutzen-Checks + CTA
3. Spezialisierungs-Leiste (Trust-Bar)
4. Pain Point — „Ihr Problem sind nicht zu wenige Anfragen …"
5. Mechanismus — „Ein spezialisiertes System statt Zufallstreffer."
6. Navy CTA-Band (wiederholter CTA)
7. Leistungspaket
8. Zielgruppe / Fit-Klarheit
9. Differenzierung — „Warum Lukas & Jannik"
10. FAQ (Accordion)
11. Mehrstufiges Qualifikationsformular (3 Schritte) → 12. Nach dem Absenden
    (Terminbuchung bei Fit / Nicht-Fit-Antwort — ersetzt das Formular in-place)
13. Abschluss-CTA + minimaler Footer

## Design-Tokens
Alle Farben/Fonts sind Tailwind-Theme-Tokens (`tailwind.config.ts`), nicht hart kodiert:
Navy `#0E2A47`, Amber `#FF7A1A` (einzige laute Farbe), Teal `#12A9A2`,
Success `#22C55E`, Cream `#F5F1EA`, Line `#E7E1D6`.

## ⚠️ Platzhalter / Assets, die vor dem Livegang ersetzt werden müssen

| Platzhalter | Ort | Ersetzen durch |
|---|---|---|
| **Founder-Video** | `/public/founder-video.mp4` | Echtes 60–90 s Vorstellungs-Video (Lukas & Jannik) |
| **Video-Poster** | `/public/founder-poster.svg` → `founder-poster.jpg` | Gebrandeter Poster-Frame (16:9), Referenz in `components/ui/FounderVideo.tsx` anpassen |
| **Untertitel** | `/public/founder-captions.de.vtt` | Echte deutsche `.vtt`-Untertitel |
| **`[Agenturname]` + Logo** | Header, Footer, `<title>`, `components/ui/Logo.tsx` | Finaler Agenturname + Logo |
| **Gründer-Foto** | `/images/hero-founders.jpg` (Section „Warum Lukas & Jannik") | Echtes Foto, warm-neutral |
| **`[Kalender]`-Embed** | Post-Submit-Zustand in `components/sections/LeadForm.tsx` | Calendly / cal.com Embed |
| **Impressum / Datenschutz** | Footer-Links `/impressum`, `/datenschutz` | Rechtssichere Seiten (HWG + DSGVO) |
| **Exklusivitäts-FAQ** | letzte FAQ-Frage, Marker `[Policy bestätigen]` | Nur behalten, wenn Regional-Exklusivität tatsächlich zugesagt wird |

### Bewusst NICHT auf der Seite
- **Garantie / konkrete Ergebnis-Zahlen** — laut Content-Deck erst im Erstgespräch.
- Keine erfundenen Referenzen, Testimonials oder Case-Studys (leere Slots statt Fakes).

## Formular-Logik
3-stufig (leichte Klick-Fragen → Qualifizierung → Kontakt), Fortschritts-Stepper,
Client-Validierung, aria-Labels, Fehlerzustände. Telefon ist Pflicht (B2B), E-Mail
validiert, DSGVO-Einwilligung Pflicht. Nach Absenden wird abhängig von den Antworten
der Fit- (Terminbuchung) oder Nicht-Fit-Zustand gezeigt. Die Fit-Schwelle steht in
`isFit()` in `components/sections/LeadForm.tsx` und kann angepasst werden.

## Rechtliches (vor Livegang ausfüllen!)

Unter `/impressum`, `/datenschutz` und `/agb` liegen die Rechtsseiten.
Firmendaten (Sehorz Lukas und vom Hofe Jannik GbR, Orlfing 1, 84405 Dorfen)
sind eingetragen; das Impressum ist vollständig. Noch offene, blau markierte
`[Platzhalter]`:

- **Datenschutz:** Hosting-Anbieter (+ ggf. Drittland-Hinweis), Terminbuchungs-Tool,
  Tracking-Abschnitt (erst bei Pixel-Einbau)
- **AGB:** Zahlungsziel, Standard-Laufzeit/Kündigungsfrist, Nutzungsrechte nach
  Vertragsende

- **Cookies:** Aktuell setzt die Seite keine einwilligungspflichtigen Cookies —
  ein Cookie-Banner ist daher (noch) nicht erforderlich.
- **WICHTIG:** Sobald Meta Pixel / Google Ads Tag eingebunden wird, ist ein
  Consent-Banner (§ 25 TDDDG) zwingend und Abschnitt 7 der
  Datenschutzerklärung muss aktiviert werden.
- Die Texte sind sorgfältig erstellte Vorlagen, aber **keine Rechtsberatung** —
  vor Livegang von Anwalt oder Generator (z. B. eRecht24) prüfen lassen.
