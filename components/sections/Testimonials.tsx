"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Interactive testimonials: one large quote that cross-fades, with an avatar pill
// row below (initials only — no faces). Auto-advances every 5s; clicking a pill
// jumps to it and resets the timer; hovering the row pauses autoplay so names can
// be read. Mix of couples + a studio partner (B2B).
const ITEMS = [
  {
    initials: "TL",
    name: "Thanh Linh",
    role: "Cô dâu, 2025",
    quote:
      "Tạo xong thiệp chưa đến 15 phút. Khách ai cũng khen, RSVP thì cực tiện.",
    tone: "#8A6F58",
  },
  {
    initials: "AM",
    name: "Anh Minh",
    role: "Chú rể, 2025",
    quote:
      "Thiệp Garden Sage đúng gu. Khách mở link là thấy bản đồ luôn, rất tiện cho tiệc ngoài trời.",
    tone: "#A1846A",
  },
  {
    initials: "QA",
    name: "Quỳnh Anh",
    role: "Cô dâu, 2024",
    quote:
      "Mình mù công nghệ mà vẫn làm được. Đổi màu, đổi ảnh nền trong vài phút.",
    tone: "#B7997E",
  },
  {
    initials: "ĐH",
    name: "Đức & Hà",
    role: "Cặp đôi, 2025",
    quote:
      "Gửi link qua Zalo, khách phản hồi tham dự ngay. Không phải gọi điện từng người.",
    tone: "#6B4A36",
  },
  {
    initials: "HP",
    name: "Hồng Phúc Studio",
    role: "Đối tác studio",
    quote:
      "Studio mình dùng để gửi khách hàng. Chuyên nghiệp hơn hẳn so với gửi file PDF.",
    tone: "#9A8268",
  },
];

const ROTATE_MS = 5000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0); // index whose text is currently rendered
  const [animating, setAnimating] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const goTo = (index: number) => {
    if (index === active || animating) return;
    setActive(index);
    setAnimating(true);
    // swap the text mid-fade, then fade back in
    window.setTimeout(() => {
      setShown(index);
      window.setTimeout(() => setAnimating(false), 400);
    }, 200);
  };

  // Autoplay — re-armed whenever `active` changes, so a click resets the 5s clock.
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => {
      goTo((active + 1) % ITEMS.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  const current = ITEMS[shown];

  return (
    <section className="bg-bg py-[56px]">
      <div className="mx-auto max-w-[1000px] px-10">
        <h2 className="mb-10 text-center font-serif text-[28px] uppercase tracking-[0.12em] text-[#4A3728]">
          Khách hàng <span className="font-medium">nói gì</span>
        </h2>

        {/* Quote */}
        <div className="relative mx-auto max-w-[640px] px-8">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 -top-7 select-none font-serif text-7xl"
            style={{ color: "rgba(74,55,40,0.10)" }}
          >
            “
          </span>

          <p
            className={cn(
              "text-center font-serif text-[22px] italic leading-[1.5] text-[#4A3728] transition-all duration-[400ms] ease-out md:text-[28px]",
              animating
                ? "scale-[0.98] opacity-0 blur-sm"
                : "scale-100 opacity-100 blur-0",
            )}
          >
            {current.quote}
          </p>

          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-1 select-none font-serif text-7xl"
            style={{ color: "rgba(74,55,40,0.10)" }}
          >
            ”
          </span>
        </div>

        {/* Attribution */}
        <p
          className={cn(
            "mt-7 text-center font-sans text-[11px] uppercase tracking-[0.2em] text-[#8A7A68] transition-all duration-500 ease-out",
            animating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100",
          )}
        >
          {current.name} · {current.role}
        </p>

        {/* Avatar pill row */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setHovered(null);
          }}
        >
          {ITEMS.map((t, i) => {
            const isActive = active === i;
            const showName = isActive || (hovered === i && !isActive);
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => goTo(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                aria-label={`${t.name} — ${t.role}`}
                className={cn(
                  "relative flex items-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive
                    ? "bg-[#6B4A36] py-1.5 pl-1.5 pr-4 shadow-[0_4px_14px_rgba(74,55,40,0.18)]"
                    : showName
                      ? "bg-[#EFE7DB] py-1.5 pl-1.5 pr-4"
                      : "bg-transparent p-1 hover:bg-[#EFE7DB]",
                )}
              >
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-serif text-[13px] text-[#F5EEE6]"
                  style={{ backgroundColor: t.tone }}
                >
                  {t.initials}
                </span>
                <span
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    showName
                      ? "ml-2 grid-cols-[1fr] opacity-100"
                      : "ml-0 grid-cols-[0fr] opacity-0",
                  )}
                >
                  <span className="overflow-hidden">
                    <span
                      className={cn(
                        "block whitespace-nowrap font-sans text-[13px]",
                        isActive ? "text-[#F5EEE6]" : "text-[#4A3728]",
                      )}
                    >
                      {t.name}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
