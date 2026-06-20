"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { ArchCard } from "@/components/cards/ArchCard";
import type { ThemeKey } from "@/lib/tokens";

const inputClass =
  "h-11 flex-1 rounded-[2px] border-[0.5px] border-[#C8B09A] bg-white px-3 font-sans text-[13px] text-[#4A3728] outline-none transition-colors focus:border-[#6B4A36]";

// 8 cards in a 3D cover-flow. Light/tonal themes alternate; the dark Midnight
// anchors the end. Names typed above render live on every card.
const ORDER: ThemeKey[] = [
  "ivory",
  "blush",
  "sage",
  "champagne",
  "rose",
  "lavender",
  "dusk",
  "midnight",
];
const AUTO_MS = 5000;
const SWIPE_PX = 40;

export function CardThemes() {
  const [groom, setGroom] = useState("Minh");
  const [bride, setBride] = useState("Linh");

  const [index, setIndex] = useState(Math.floor(ORDER.length / 2));
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const startX = useRef<number | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % ORDER.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + ORDER.length) % ORDER.length),
    [],
  );

  // Auto-advance every 5s; re-armed on each change so a swipe/click resets it.
  // Paused on hover, and skipped entirely under reduced-motion.
  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setTimeout(next, AUTO_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduce, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current !== null) {
      const dx = e.clientX - startX.current;
      if (dx > SWIPE_PX) prev();
      else if (dx < -SWIPE_PX) next();
    }
    startX.current = null;
    setPaused(false);
  };

  return (
    <section
      id="templates"
      className="scroll-mt-[84px] border-y-[0.5px] border-[#E5D8C7] bg-[#FBF6EF] py-[52px]"
    >
      <div className="px-6 sm:px-10">
        <h2 className="mb-7 text-center font-serif text-[28px] uppercase tracking-[0.12em] text-[#4A3728]">
          Mẫu <span className="font-medium">thiệp</span>
        </h2>

        {/* live name inputs */}
        <div className="mx-auto mb-2 flex max-w-[440px] gap-3">
          <input
            value={groom}
            onChange={(e) => setGroom(e.target.value)}
            placeholder="Tên chú rể"
            aria-label="Tên chú rể"
            className={inputClass}
          />
          <input
            value={bride}
            onChange={(e) => setBride(e.target.value)}
            placeholder="Tên cô dâu"
            aria-label="Tên cô dâu"
            className={inputClass}
          />
        </div>
        <p className="mb-8 text-center font-sans text-[11px] text-[#8A7A68]">
          Tên hiện trực tiếp trên thiệp — vuốt để xem các mẫu
        </p>

        {/* cover-flow carousel */}
        <div
          className="relative mx-auto flex h-[360px] w-full max-w-[900px] touch-pan-y select-none items-center justify-center overflow-hidden md:h-[400px] [perspective:1000px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            startX.current = null;
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {ORDER.map((key, i) => {
            const total = ORDER.length;
            let pos = ((i - index) % total + total) % total;
            if (pos > Math.floor(total / 2)) pos -= total;

            const isCenter = pos === 0;
            const isAdjacent = Math.abs(pos) === 1;
            const visible = Math.abs(pos) <= 1;

            return (
              <div
                key={key}
                onClick={() => !isCenter && visible && setIndex(i)}
                aria-hidden={!isCenter}
                className="absolute h-[300px] w-[200px] transition-all duration-500 ease-in-out md:h-[340px] md:w-[230px]"
                style={{
                  transform: `translateX(${pos * 48}%) scale(${
                    isCenter ? 1 : isAdjacent ? 0.85 : 0.7
                  }) rotateY(${pos * -12}deg)`,
                  zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                  opacity: isCenter ? 1 : isAdjacent ? 0.45 : 0,
                  filter: isCenter ? "blur(0px)" : "blur(3px)",
                  visibility: visible ? "visible" : "hidden",
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                <ArchCard themeKey={key} groom={groom} bride={bride} />
              </div>
            );
          })}

          {/* nav arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Mẫu trước"
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[0.5px] border-[#C8B09A] bg-[#F5EEE6] text-[#6B4A36] transition-colors hover:bg-white sm:left-6"
          >
            <CaretLeft size={18} weight="bold" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Mẫu kế tiếp"
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[0.5px] border-[#C8B09A] bg-[#F5EEE6] text-[#6B4A36] transition-colors hover:bg-white sm:right-6"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {ORDER.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Mẫu ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 20 : 6,
                backgroundColor: i === index ? "#6B4A36" : "#C8B09A",
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="/templates"
            className="inline-flex items-center justify-center rounded-[2px] border-[0.5px] border-[#6B4A36] px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B4A36] transition-colors hover:bg-[#6B4A36] hover:text-[#F5EEE6]"
          >
            Tạo thiệp riêng của bạn
          </a>
        </div>
      </div>
    </section>
  );
}

export default CardThemes;
