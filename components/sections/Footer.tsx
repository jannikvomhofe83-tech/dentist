import Logo from "@/components/ui/Logo";

/* Minimal footer — Impressum & Datenschutz only. No further links / exits. */
export default function Footer() {
  return (
    <footer className="border-t border-line bg-base py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <nav aria-label="Rechtliches" className="flex items-center gap-6">
          <a
            href="/impressum"
            className="text-[14px] text-ink/70 transition-colors hover:text-navy"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-[14px] text-ink/70 transition-colors hover:text-navy"
          >
            Datenschutz
          </a>
        </nav>
        <p className="text-[13px] text-ink/50">
          © {new Date().getFullYear()} Flowstate AI
        </p>
      </div>
    </footer>
  );
}
