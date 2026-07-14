import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Planbar mehr qualifizierte Implantat-Patientenanfragen | Flowstate AI",
  description:
    "Performance-Marketing ausschließlich für Premium-Implantologie. Wir übernehmen die komplette Patientengewinnung für Implantatpraxen, Zahnzentren und Zahnkliniken, über Meta Ads, Google Ads und eine spezialisierte Behandlungs-Landingpage.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <a
          href="#formular"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Direkt zum Formular springen
        </a>
        {children}
      </body>
    </html>
  );
}
