"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

export default function MobileStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 640;
      setShow(y > 560 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-base/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Link
        href="#formular"
        className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-amber px-6 py-3.5 text-[15px] font-semibold text-white shadow-cta"
      >
        Kostenlose Potenzial-Analyse anfragen
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}
