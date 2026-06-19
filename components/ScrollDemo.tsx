"use client";

import { useState } from "react";
import {
  MapPin,
  LinkSimple,
  Copy,
  QrCode,
  ArrowLeft,
  ArrowRight,
  Check,
} from "@phosphor-icons/react";
import { cardThemes, demoSteps } from "@/lib/data";
import { CardPreview } from "./CardPreview";

/**
 * Section 5 - click-driven walkthrough (not scroll-hijacked). The phone preview
 * visibly changes per step: that change is the reward for clicking Tiếp/Trước.
 * Step state is discrete (useState is correct here).
 */
export function ScrollDemo() {
  const [step, setStep] = useState(0);
  const last = demoSteps.length - 1;
  const theme = cardThemes[step % cardThemes.length];

  return (
    <section id="how-it-works" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <h2 className="max-w-[22ch] font-display text-[26px] leading-[1.25] text-ink md:text-[34px]">
          Bốn bước để có thiệp cưới của riêng bạn
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr]">
          {/* Sticky step list (left). */}
          <ol className="flex gap-3 overflow-x-auto md:sticky md:top-[84px] md:h-fit md:flex-col md:gap-1 md:overflow-visible">
            {demoSteps.map((s, i) => {
              const activeStep = i === step;
              return (
                <li key={s.title} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setStep(i)}
                    className="flex w-full items-center gap-3 rounded-[8px] px-3 py-2.5 text-left transition-colors"
                    style={{
                      background: activeStep ? "var(--color-surface-alt)" : "transparent",
                    }}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] font-mono text-[12px] transition-colors"
                      style={{
                        background: activeStep ? "var(--color-accent)" : "var(--color-surface-alt)",
                        color: activeStep ? "#fff" : "var(--color-ink-muted)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-[14px] transition-colors"
                      style={{
                        color: activeStep ? "var(--color-ink)" : "var(--color-ink-muted)",
                        fontWeight: activeStep ? 500 : 400,
                      }}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Phone preview + step detail (right). */}
          <div className="grid items-start gap-8 md:grid-cols-[260px_1fr]">
            {/* Phone frame: solid border + padding, no glass. */}
            <div className="mx-auto w-[240px]">
              <div className="rounded-[24px] border-[6px] border-ink bg-ink p-1.5">
                <div className="flex aspect-[9/18] flex-col overflow-hidden rounded-[16px] bg-surface">
                  <div className="h-[58%] p-2.5">
                    <CardPreview
                      theme={theme}
                      groom="Minh"
                      bride="Linh"
                      animateNames={false}
                    />
                  </div>
                  <div className="flex-1 border-t-[0.5px] border-line px-3 py-3">
                    <StepControls step={step} theme={theme} />
                  </div>
                </div>
              </div>
            </div>

            {/* Detail card. */}
            <div className="rounded-[16px] border-[0.5px] border-line bg-bg p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Bước {step + 1} trên {demoSteps.length}
              </div>
              <h3 className="mt-3 font-display text-[20px] text-ink">
                {demoSteps[step].title}
              </h3>
              <p className="mt-2 max-w-[42ch] text-[15px] leading-[1.7] text-ink-body">
                {demoSteps[step].detail}
              </p>

              {/* Progress bar (orients the user in the 4-step flow). */}
              <div className="mt-6 h-1 w-full overflow-hidden rounded-[4px] bg-surface-alt">
                <div
                  className="h-full rounded-[4px] bg-accent transition-[width] duration-[400ms] ease-out"
                  style={{ width: `${((step + 1) / demoSteps.length) * 100}%` }}
                />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 rounded-[8px] border-[0.5px] border-line px-4 py-2 text-[14px] text-ink-body transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink-body"
                >
                  <ArrowLeft size={16} weight="light" /> Trước
                </button>
                {step < last ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(last, s + 1))}
                    className="inline-flex items-center gap-2 rounded-[8px] bg-accent-dark px-4 py-2 text-[14px] font-medium text-[#f5ede6] transition-colors hover:bg-[#2c1f15]"
                  >
                    Tiếp <ArrowRight size={16} weight="light" />
                  </button>
                ) : (
                  <a
                    href="/editor"
                    className="inline-flex items-center gap-2 rounded-[8px] bg-accent px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#a96d4c]"
                  >
                    Bắt đầu tạo thiệp <ArrowRight size={16} weight="light" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepControls({
  step,
  theme,
}: {
  step: number;
  theme: (typeof cardThemes)[number];
}) {
  if (step === 0) {
    return (
      <div className="flex h-full flex-col justify-center gap-2">
        <Row label="Tên" value="Minh & Linh" />
        <Row label="Ngày" value="12.10.2026" />
        <Row label="Nơi" value="Tư gia nhà gái" />
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="flex h-full flex-col justify-center gap-3">
        <span className="text-[11px] text-ink-muted">Bảng màu</span>
        <div className="flex gap-2">
          {cardThemes.map((t) => (
            <span
              key={t.id}
              aria-hidden
              className="h-6 w-6 rounded-[4px] border-[0.5px] border-line"
              style={{
                background: t.acc,
                outline: t.id === theme.id ? "2px solid var(--color-ink)" : "none",
                outlineOffset: 1,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="flex h-full flex-col justify-center gap-2.5">
        <div className="flex items-center gap-2 text-[12px] text-ink-body">
          <MapPin size={15} weight="light" className="text-accent" />
          Trung tâm tiệc cưới Riverside
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-[4px] bg-accent px-2.5 py-1 text-[11px] font-medium text-white">
            <Check size={12} weight="bold" /> Có mặt
          </span>
          <span className="inline-flex items-center rounded-[4px] border-[0.5px] border-line px-2.5 py-1 text-[11px] text-ink-muted">
            Vắng mặt
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      <div className="flex items-center gap-2 rounded-[8px] border-[0.5px] border-line bg-surface-alt px-2.5 py-2 text-[11px] text-ink-body">
        <LinkSimple size={14} weight="light" className="text-accent" />
        <span className="truncate">thiepcuoi.vn/minh-linh</span>
        <Copy size={14} weight="light" className="ml-auto text-ink-muted" />
      </div>
      <div className="flex items-center gap-2 text-[11px] text-ink-muted">
        <QrCode size={15} weight="light" className="text-accent" />
        Hoặc in mã QR lên thiệp giấy
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[12px]">
      <span className="text-ink-muted">{label}</span>
      <span className="text-ink">{value}</span>
    </div>
  );
}
