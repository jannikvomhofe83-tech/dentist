import Image from "next/image";

/**
 * Flowstate AI logo lockup.
 * The F-mark is the original logo's F extracted onto a transparent background
 * (dark strokes, no box), so it sits directly on the white header/footer.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo-f.png"
        alt="Flowstate AI"
        width={230}
        height={230}
        priority
        className="h-10 w-10 shrink-0"
      />
      <span className="text-[18px] font-semibold tracking-tight text-navy">
        Flowstate&nbsp;AI
      </span>
    </span>
  );
}
