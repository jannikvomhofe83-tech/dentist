/**
 * Real-photography placeholder. Clearly labels which asset goes here —
 * never an AI duotone render. Swap for a real <Image> before launch.
 */
export default function ImagePlaceholder({
  label,
  path,
  ratio = "aspect-[4/5]",
  className = "",
}: {
  label: string;
  path: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-card border border-line bg-[#F5F6F8] ${ratio} ${className}`}
    >
      {/* subtle neutral frame texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #F0F2F5 0%, #F7F8FA 50%, #E9ECF1 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-base/70">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8A9099"
            strokeWidth={1.6}
            className="h-5 w-5"
            aria-hidden
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="10" r="1.6" />
            <path d="M3 16l4.5-4 4 3.2L15 11l6 5.5" />
          </svg>
        </span>
        <span className="text-[13px] font-semibold text-navy/70">{label}</span>
        <code className="rounded bg-base/70 px-2 py-0.5 text-[11px] text-ink/60">
          {path}
        </code>
      </div>
    </div>
  );
}
