"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper that never leaves content permanently hidden:
 * - Elements already in the viewport on mount (e.g. the hero) reveal immediately.
 * - Elements below the fold reveal when scrolled into view.
 * - A safety timeout guarantees visibility even if IntersectionObserver misfires.
 * - Respects prefers-reduced-motion (renders visible, no motion).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const MotionTag = motion[as];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Above-the-fold content: reveal right away.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    obs.observe(el);

    // Safety net: never keep content hidden for long if the observer misfires.
    const t = window.setTimeout(() => setShown(true), 2500);

    return () => {
      obs.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const visible = reduce || shown;

  return (
    <MotionTag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
