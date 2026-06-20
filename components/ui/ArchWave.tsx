// Organic concave wave that transitions a full-bleed photo (or dark band) into
// the cream section below. Place it at the bottom of the upper section:
//   <ArchWave fill="#F5EEE6" />  inside a `relative` parent.
// `fill` must match the color of the section BELOW so there is no seam.
export function ArchWave({
  fill,
  className,
}: {
  fill: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      // bottom-[-1px] closes any sub-pixel seam between the two sections.
      className={`absolute bottom-[-1px] left-0 right-0 h-[60px] w-full ${className ?? ""}`}
    >
      <path
        d="M0,30 Q300,62 600,38 Q900,14 1200,38 L1200,60 L0,60Z"
        fill={fill}
      />
    </svg>
  );
}

export default ArchWave;
