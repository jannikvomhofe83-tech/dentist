export default function Eyebrow({
  children,
  tone = "teal",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "teal" | "amber" | "invert";
  className?: string;
}) {
  const tones = {
    teal: "text-teal-600",
    amber: "text-amber-600",
    invert: "text-teal",
  };
  return (
    <p className={`eyebrow ${tones[tone]} ${className}`}>{children}</p>
  );
}
