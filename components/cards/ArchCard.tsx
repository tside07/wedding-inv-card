"use client";

import { motion } from "motion/react";
import { themes, type ThemeKey } from "@/lib/tokens";

// Arch-shaped wedding-card preview. The couple's names render live and re-fade
// when they change. `t.label` is the theme's contrast-safe text/accent color
// (gold for the dark Midnight theme).
export function ArchCard({
  themeKey,
  groom,
  bride,
}: {
  themeKey: ThemeKey;
  groom: string;
  bride: string;
}) {
  const t = themes[themeKey];
  const nameSize = (groom + bride).length > 14 ? 16 : 19;

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: "90px 90px 6px 6px",
        background: `linear-gradient(160deg, ${t.from}, ${t.to})`,
      }}
    >
      {/* centered content — currentColor = t.label so the divider/date inherit it */}
      <div
        className="flex h-full flex-col items-center justify-center gap-[6px] px-5 text-center"
        style={{ color: t.label }}
      >
        <span className="font-serif text-[8px] uppercase tracking-[0.2em] opacity-75">
          Trân trọng kính mời
        </span>

        <motion.span
          key={`${groom}&${bride}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.12 }}
          className="font-serif italic leading-tight"
          style={{ fontSize: `${nameSize}px` }}
        >
          {groom} &amp; {bride}
        </motion.span>

        <span className="h-px w-10 bg-current opacity-30" />

        <span className="font-sans text-[9px] font-light tracking-[0.1em]">
          15 · 09 · 2025
        </span>
      </div>

      {/* bottom overlay — theme name in white over a soft dark gradient */}
      <div
        className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-6 text-center"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,.35), transparent)",
        }}
      >
        <span className="font-serif text-[14px] uppercase tracking-[0.18em] text-white">
          {t.name}
        </span>
      </div>
    </div>
  );
}

export default ArchCard;
