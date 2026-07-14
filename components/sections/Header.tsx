"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowRight } from "@/components/ui/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-base transition-all duration-300 ${
        scrolled
          ? "border-b border-line py-2.5 shadow-soft"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4">
        {/* Logo left — no navigation, no exits */}
        <Link href="#top" aria-label="Flowstate AI, zur Startseite" className="shrink-0">
          <Logo />
        </Link>

        {/* Single visible path — to the form */}
        <Link
          href="#formular"
          className="group inline-flex items-center gap-2.5 rounded-full bg-amber px-4 py-2.5 text-[14px] font-semibold text-white shadow-cta transition-colors duration-200 hover:bg-amber-600 sm:px-5"
        >
          <span className="hidden sm:inline">Kostenlose Potenzial-Analyse</span>
          <span className="sm:hidden">Potenzial-Analyse</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </header>
  );
}
