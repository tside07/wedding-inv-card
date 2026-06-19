"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cardThemes } from "@/lib/data";
import { CardPreview } from "./CardPreview";
import { Button } from "./Button";

// Spatial movement spring (x / z / rotateY). Calm, no overshoot.
const BASE_SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;
// Bouncier spring for the center card's scale: the subtle "tap" feedback.
const TAP_SPRING = { type: "spring", stiffness: 450, damping: 18 } as const;

const SWIPE_THRESHOLD = 8000;

/**
 * Section 4 - the centrepiece. Couple types their names once; the names render
 * live across all five card themes (the product's core magic).
 *
 * FocusRail interactions ported into the page's design system: drag / swipe,
 * horizontal-wheel (vertical wheel is left to the page so scroll is never
 * hijacked), arrow keys, deeper 3D with depth-blur, prev/next + counter, and an
 * animated info panel. Light theme, terracotta accent, locked radii throughout.
 */
export function Carousel() {
  const themes = cardThemes;
  const n = themes.length;

  const [groom, setGroom] = useState("Minh");
  const [bride, setBride] = useState("Linh");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const lastWheel = useRef(0);

  const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);
  const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);

  // Auto-play, paused on hover and under reduced motion.
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(next, 3600);
    return () => clearInterval(id);
  }, [reduce, paused, next]);

  // Horizontal wheel / trackpad only. Vertical wheel keeps scrolling the page.
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      const now = Date.now();
      if (now - lastWheel.current < 400) return;
      if (Math.abs(e.deltaX) > 20) {
        e.deltaX > 0 ? next() : prev();
        lastWheel.current = now;
      }
    },
    [next, prev],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    const power = Math.abs(info.offset.x) * info.velocity.x;
    if (power < -SWIPE_THRESHOLD) next();
    else if (power > SWIPE_THRESHOLD) prev();
  };

  function animateFor(i: number) {
    let offset = i - active;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    const abs = Math.abs(offset);
    const isCenter = abs === 0;
    return {
      x: `${offset * 52}%`,
      z: -abs * 130,
      rotateY: offset * -18,
      scale: isCenter ? 1 : 0.84,
      opacity: isCenter ? 1 : abs === 1 ? 0.72 : 0.4,
      filter: `blur(${isCenter ? 0 : abs * 2.5}px)`,
      zIndex: 50 - abs,
    };
  }

  const cardTransition = reduce
    ? { duration: 0 }
    : { default: BASE_SPRING, scale: TAP_SPRING, opacity: { duration: 0.4 } };

  const activeTheme = themes[active];

  return (
    <section
      id="templates"
      className="bg-bg py-16 outline-none md:py-24"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Mẫu thiệp cưới"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        {/* Eyebrow #2 of 3 - justified as the first product moment. */}
        <p className="text-[11px] uppercase tracking-[0.06em] text-ink-muted">
          Mẫu thiệp
        </p>
        <h2 className="mt-3 max-w-[20ch] font-display text-[26px] leading-[1.25] text-ink md:text-[34px]">
          Tên hai bạn, hiện ngay trên mọi mẫu thiệp
        </h2>

        {/* Live name input. */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Field label="Chú rể" value={groom} onChange={setGroom} />
          <Field label="Cô dâu" value={bride} onChange={setBride} />
        </div>
      </div>

      {/* 3D rail: draggable, perspective stage. */}
      <motion.div
        className="relative mt-12 flex h-[360px] w-full cursor-grab touch-pan-y items-center justify-center overflow-hidden active:cursor-grabbing md:h-[440px]"
        style={{ perspective: 1200 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragEnd={onDragEnd}
        onWheel={onWheel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {themes.map((theme, i) => {
          const isCenter = i === active;
          return (
            <motion.div
              key={theme.id}
              className="absolute -ml-[105px] -mt-[150px] left-1/2 top-1/2 h-[300px] w-[210px] rounded-[12px] border-[0.5px] border-line shadow-[0_24px_60px_-28px_rgba(61,43,31,0.5)] md:-ml-[130px] md:-mt-[180px] md:h-[360px] md:w-[260px]"
              style={{ transformStyle: "preserve-3d" }}
              initial={false}
              animate={animateFor(i)}
              transition={cardTransition}
              onClick={() => !isCenter && setActive(i)}
              role={isCenter ? undefined : "button"}
              aria-hidden={!isCenter}
              aria-label={isCenter ? undefined : `Xem mẫu ${theme.name}`}
            >
              <div className="pointer-events-none h-full w-full">
                <CardPreview theme={theme} groom={groom} bride={bride} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        {/* Animated info panel. */}
        <div className="mt-10 flex min-h-[68px] items-start justify-center text-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTheme.id}
              initial={reduce ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-[42ch]"
            >
              <h3 className="font-display text-[18px] text-ink">
                {activeTheme.name}
              </h3>
              <p className="mt-1 text-[14px] leading-[1.6] text-ink-body">
                {activeTheme.blurb}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / counter / next. */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-1 rounded-[12px] border-[0.5px] border-line bg-surface p-1">
            <button
              type="button"
              onClick={prev}
              aria-label="Mẫu trước"
              className="rounded-[8px] p-2.5 text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink active:translate-y-[1px]"
            >
              <CaretLeft size={18} weight="light" />
            </button>
            <span className="min-w-[52px] text-center font-mono text-[12px] text-ink-muted">
              {active + 1} / {n}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Mẫu sau"
              className="rounded-[8px] p-2.5 text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink active:translate-y-[1px]"
            >
              <CaretRight size={18} weight="light" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/xem-thu" variant="ghost">
            Xem thiệp đầy đủ
          </Button>
          <Button href="/editor" variant="accent">
            Dùng mẫu này →
          </Button>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-1 flex-col gap-2" style={{ minWidth: 160 }}>
      <span className="text-[11px] uppercase tracking-[0.06em] text-ink-muted">
        {label}
      </span>
      <input
        type="text"
        value={value}
        maxLength={14}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nhập tên"
        className="rounded-[8px] border-[0.5px] border-line bg-surface px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-muted focus:border-accent"
      />
    </label>
  );
}
