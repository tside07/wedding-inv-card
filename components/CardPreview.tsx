"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { CardTheme } from "@/lib/data";

type Props = {
  theme: CardTheme;
  groom: string;
  bride: string;
  date?: string;
  /** Plays a short opacity flash when the name text changes (feedback only). */
  animateNames?: boolean;
};

/**
 * A real mini wedding card (no div-based fake screenshot). Names are live text
 * passed from the parent. The flash on change is feedback, not decoration.
 */
export function CardPreview({
  theme,
  groom,
  bride,
  date = "12.10.2026",
  animateNames = true,
}: Props) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[12px] text-center"
      style={{
        background: `linear-gradient(160deg, ${theme.bgFrom}, ${theme.bgTo})`,
        color: theme.txt,
        padding: "clamp(18px, 7%, 30px) clamp(14px, 6%, 24px)",
      }}
    >
      <p
        className="font-mono uppercase"
        style={{
          fontSize: "clamp(7px, 1.5vw, 9px)",
          letterSpacing: "0.28em",
          color: theme.acc,
        }}
      >
        Trân trọng kính mời
      </p>

      <div className="flex flex-col items-center">
        <NameLine value={groom} animate={animateNames} />
        <span
          className="font-display my-0.5"
          style={{ color: theme.acc, fontSize: "clamp(14px, 3.4vw, 22px)" }}
        >
          &
        </span>
        <NameLine value={bride} animate={animateNames} />

        <span
          className="my-3 block h-px w-10"
          style={{ background: theme.acc, opacity: 0.55 }}
        />

        <p
          className="font-mono uppercase"
          style={{
            fontSize: "clamp(7px, 1.4vw, 8.5px)",
            letterSpacing: "0.24em",
            opacity: 0.78,
          }}
        >
          Save the date {date}
        </p>
      </div>

      <p
        className="font-body"
        style={{ fontSize: "clamp(8px, 1.6vw, 10px)", opacity: 0.7 }}
      >
        Tư gia nhà gái · 18:00
      </p>
    </div>
  );
}

function NameLine({ value, animate }: { value: string; animate: boolean }) {
  const reduce = useReducedMotion();
  // Server and first client render must match, so the flash is gated behind a
  // mount flag. useReducedMotion() is client-only and would otherwise diverge
  // from the server HTML and trigger a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const display = value.trim() === "" ? "..." : value;
  const shouldFlash = mounted && animate && !reduce;

  return (
    <motion.span
      key={display}
      initial={shouldFlash ? { opacity: 0.55 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      className="font-display leading-[1.1]"
      style={{ fontSize: "clamp(20px, 5.2vw, 34px)" }}
    >
      {display}
    </motion.span>
  );
}
