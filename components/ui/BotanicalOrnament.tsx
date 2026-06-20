// Botanical line-art ornaments — stroke-only, no fill. Used as section dividers,
// under the hero wave, and beside headings. Decorative → aria-hidden.
// Size via `className` (e.g. w-16). Stroke color defaults to a muted tan.

type Variant = "bouquet" | "divider" | "sprig";

interface BotanicalOrnamentProps {
  variant?: Variant;
  className?: string;
  stroke?: string;
}

export function BotanicalOrnament({
  variant = "sprig",
  className,
  stroke = "#9A8268",
}: BotanicalOrnamentProps) {
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    opacity: 0.6,
  };

  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 160 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className={className}
      >
        <g {...common}>
          {/* baseline with a central flourish + symmetric leaves */}
          <path d="M4 12 H64" />
          <path d="M156 12 H96" />
          <path d="M80 4 C 74 9, 74 15, 80 20 C 86 15, 86 9, 80 4 Z" />
          <path d="M64 12 C 70 8, 76 8, 80 11" />
          <path d="M96 12 C 90 8, 84 8, 80 11" />
          <path d="M70 12 c -4 -3 -9 -3 -12 1" />
          <path d="M90 12 c 4 -3 9 -3 12 1" />
        </g>
      </svg>
    );
  }

  if (variant === "bouquet") {
    return (
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className={className}
      >
        <g {...common}>
          {/* central stem */}
          <path d="M32 58 V 20" />
          {/* bud */}
          <path d="M32 20 C 26 14, 26 6, 32 2 C 38 6, 38 14, 32 20 Z" />
          {/* left branch + leaves */}
          <path d="M32 44 C 22 40, 16 32, 14 24" />
          <path d="M22 36 c -6 -1 -10 -5 -11 -10" />
          <path d="M27 41 c -5 1 -10 -1 -13 -6" />
          {/* right branch + leaves */}
          <path d="M32 44 C 42 40, 48 32, 50 24" />
          <path d="M42 36 c 6 -1 10 -5 11 -10" />
          <path d="M37 41 c 5 1 10 -1 13 -6" />
        </g>
      </svg>
    );
  }

  // sprig — single small stem with three leaves
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <g {...common}>
        <path d="M20 38 V 8" />
        <path d="M20 8 C 16 4, 16 -1, 20 -2" transform="translate(0 4)" />
        <path d="M20 22 c -8 -1 -12 -6 -13 -12" />
        <path d="M20 28 c 8 -1 12 -6 13 -12" />
      </g>
    </svg>
  );
}

export default BotanicalOrnament;
