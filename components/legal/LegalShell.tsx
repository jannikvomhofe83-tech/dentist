import Link from "next/link";
import Logo from "@/components/ui/Logo";

/* Shared frame for legal pages: simple header with a way back,
   readable prose styling, minimal footer with all legal links. */
export default function LegalShell({
  title,
  stand,
  children,
}: {
  title: string;
  stand?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-line bg-base py-3">
        <div className="container-page flex items-center justify-between gap-4">
          <Link href="/" aria-label="Flowstate AI, zur Startseite">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-[14px] font-semibold text-amber hover:underline"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="container-page py-14 md:py-20">
        <h1 className="max-w-3xl text-[clamp(30px,4vw,44px)] font-bold leading-tight text-navy">
          {title}
        </h1>
        {stand && <p className="mt-2 text-[13px] text-ink/60">Stand: {stand}</p>}
        <div
          className="mt-8 max-w-3xl text-[15.5px] leading-relaxed text-ink
            [&_h2]:mt-10 [&_h2]:text-[21px] [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-navy
            [&_h3]:mt-6 [&_h3]:text-[17px] [&_h3]:font-semibold [&_h3]:text-navy
            [&_p]:mt-3
            [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5
            [&_a]:font-medium [&_a]:text-amber [&_a]:underline"
        >
          {children}
        </div>
      </main>

      <footer className="border-t border-line py-8">
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] text-ink/60">
            © {new Date().getFullYear()} Flowstate AI
          </p>
          <nav aria-label="Rechtliches" className="flex gap-5 text-[13px]">
            <Link href="/impressum" className="text-ink/70 hover:text-navy">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-ink/70 hover:text-navy">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-ink/70 hover:text-navy">
              AGB
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

/* Visually distinct placeholder for data the founders must fill in
   before go-live. Impossible to miss in a review pass. */
export function Ph({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-amber/10 px-1 py-0.5 font-mono text-[0.85em] font-semibold text-amber-700">
      [{children}]
    </span>
  );
}
