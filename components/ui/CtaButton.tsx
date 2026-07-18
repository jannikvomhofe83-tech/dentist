import Link from "next/link";
import { ArrowRight } from "./icons";

type Variant = "primary" | "ghost-navy" | "ghost-white";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold transition-all duration-200 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary:
    "bg-amber text-white shadow-cta hover:bg-amber-600 active:bg-amber-700",
  "ghost-navy":
    "border border-navy/25 bg-transparent text-navy hover:border-navy/50 hover:bg-navy/[0.03]",
  "ghost-white":
    "border border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  // Mobile: full width, tighter type so the label fits one line; desktop unchanged.
  lg: "w-full px-5 py-3.5 text-[15px] sm:w-auto sm:px-7 sm:py-4 sm:text-[16px]",
};

const badgeVariants: Record<Variant, string> = {
  primary: "bg-white/20 text-white",
  "ghost-navy": "bg-navy/10 text-navy",
  "ghost-white": "bg-white/15 text-white",
};

export default function CtaButton({
  children,
  href = "#formular",
  variant = "primary",
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`hidden h-6 w-6 shrink-0 items-center justify-center rounded-full sm:flex ${badgeVariants[variant]}`}
      >
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
