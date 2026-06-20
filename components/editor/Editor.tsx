"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle, FloppyDisk } from "@phosphor-icons/react";
import { CardCanvas, type CardData } from "@/components/editor/CardCanvas";
import { themes, type ThemeKey } from "@/lib/tokens";
import type { Template } from "@/lib/templates";

const THEME_KEYS = Object.keys(themes) as ThemeKey[];

const inputClass =
  "h-11 w-full rounded-[2px] border-[0.5px] border-[#C8B09A] bg-white px-3 font-sans text-[13px] text-[#4A3728] outline-none transition-colors focus:border-[#6B4A36]";

const storageKey = (slug: string) => `thiepcuoi:draft:${slug}`;

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-[11px] uppercase tracking-[0.12em] text-[#8A7A68]">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Editor({ template }: { template: Template }) {
  const defaults: CardData = {
    themeKey: template.themeKey,
    groom: template.sample.groom,
    bride: template.sample.bride,
    date: template.sample.date,
    venue: template.sample.venue,
    address: "",
    message: "Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi",
    rsvp: true,
  };

  const [data, setData] = useState<CardData>(defaults);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const timer = useRef<number | null>(null);

  // Hydrate từ localStorage (nếu có nháp cũ cho mẫu này).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(template.slug));
      if (raw) setData({ ...defaults, ...JSON.parse(raw) });
    } catch {
      /* bỏ qua dữ liệu hỏng */
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [template.slug]);

  // Auto-save (debounce 500ms) mỗi khi data đổi, sau khi đã hydrate xong.
  useEffect(() => {
    if (!loaded) return;
    setStatus("saving");
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      try {
        localStorage.setItem(
          storageKey(template.slug),
          JSON.stringify({ ...data, slug: template.slug, updatedAt: Date.now() }),
        );
        setStatus("saved");
      } catch {
        setStatus("idle");
      }
    }, 500);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [data, loaded, template.slug]);

  const set = useCallback(
    <K extends keyof CardData>(key: K, value: CardData[K]) =>
      setData((d) => ({ ...d, [key]: value })),
    [],
  );

  const reset = () => {
    setData(defaults);
  };

  return (
    <div className="mx-auto grid max-w-[1080px] items-start gap-12 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)] md:gap-16">
      {/* TRÁI — preview live */}
      <div className="md:sticky md:top-[110px]">
        <div className="mx-auto w-[300px] max-w-full">
          <CardCanvas data={data} />
        </div>
        <p className="mt-4 flex items-center justify-center gap-1.5 font-sans text-[11px] font-light text-[#8A7A68]">
          {status === "saved" ? (
            <>
              <CheckCircle size={14} weight="fill" className="text-[#6B8A5A]" />
              Đã lưu nháp tự động
            </>
          ) : status === "saving" ? (
            "Đang lưu…"
          ) : (
            "Bản nháp lưu ngay trên trình duyệt này"
          )}
        </p>
      </div>

      {/* PHẢI — form */}
      <div className="pt-1">
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#9A8268]">
          Mẫu {template.name}
        </p>
        <h1 className="mt-2 font-serif text-[30px] leading-[1.1] tracking-[0.02em] text-[#4A3728] md:text-[36px]">
          Tùy chỉnh <span className="font-medium">thiệp của bạn</span>
        </h1>

        {/* Tên cặp đôi */}
        <div className="mt-8 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Tên chú rể">
              <input
                className={inputClass}
                value={data.groom}
                onChange={(e) => set("groom", e.target.value)}
                placeholder="Minh"
              />
            </Field>
            <Field label="Tên cô dâu">
              <input
                className={inputClass}
                value={data.bride}
                onChange={(e) => set("bride", e.target.value)}
                placeholder="Linh"
              />
            </Field>
          </div>

          <Field label="Ngày cưới">
            <input
              className={inputClass}
              value={data.date}
              onChange={(e) => set("date", e.target.value)}
              placeholder="15 · 09 · 2025"
            />
          </Field>

          <Field label="Địa điểm">
            <input
              className={inputClass}
              value={data.venue}
              onChange={(e) => set("venue", e.target.value)}
              placeholder="Nhà hàng Emerald"
            />
          </Field>

          <Field label="Địa chỉ">
            <input
              className={inputClass}
              value={data.address}
              onChange={(e) => set("address", e.target.value)}
              placeholder="123 Lê Lợi, Quận 1, TP.HCM"
            />
          </Field>

          <Field label="Lời ngỏ">
            <textarea
              className={`${inputClass} h-auto py-2.5 leading-[1.6]`}
              rows={2}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi"
            />
          </Field>
        </div>

        {/* Phong cách */}
        <div className="mt-8">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.12em] text-[#8A7A68]">
            Phong cách
          </p>
          <div className="flex flex-wrap gap-2.5">
            {THEME_KEYS.map((key) => {
              const th = themes[key];
              const on = key === data.themeKey;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => set("themeKey", key)}
                  aria-label={th.name}
                  title={th.name}
                  className={`h-9 w-9 rounded-full border transition-transform ${
                    on
                      ? "scale-110 border-[#6B4A36] ring-1 ring-[#6B4A36] ring-offset-2 ring-offset-[#FBF6EF]"
                      : "border-[#D8C5AE] hover:scale-105"
                  }`}
                  style={{
                    background: `linear-gradient(160deg, ${th.from}, ${th.to})`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* RSVP */}
        <div className="mt-8 flex items-center justify-between rounded-[4px] border-[0.5px] border-[#E5D8C7] bg-[#F5EEE6] px-4 py-3.5">
          <div>
            <p className="font-sans text-[13px] text-[#4A3728]">
              Xác nhận tham dự (RSVP)
            </p>
            <p className="mt-0.5 font-sans text-[11px] font-light text-[#8A7A68]">
              Khách bấm xác nhận ngay trong thiệp
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={data.rsvp}
            onClick={() => set("rsvp", !data.rsvp)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
              data.rsvp ? "bg-[#6B4A36]" : "bg-[#C8B09A]"
            }`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                data.rsvp ? "translate-x-[22px]" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setStatus("saved")}
            className="inline-flex items-center gap-2 rounded-[2px] bg-[#6B4A36] px-7 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#F5EEE6] transition-colors hover:bg-[#7A5740]"
          >
            <FloppyDisk size={15} weight="bold" />
            Lưu thiệp
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-[2px] border-[0.5px] border-[#C8B09A] px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#5C4636] transition-colors hover:border-[#6B4A36] hover:text-[#6B4A36]"
          >
            Đặt lại
          </button>
          <Link
            href="/templates"
            className="font-sans text-[12px] font-light text-[#8A7A68] underline-offset-4 transition-colors hover:text-[#6B4A36] hover:underline"
          >
            Chọn mẫu khác
          </Link>
        </div>

        <p className="mt-5 font-sans text-[11px] font-light leading-[1.7] text-[#9A8268]">
          Bản nháp được lưu tự động trên trình duyệt này. Tính năng tạo link chia
          sẻ và thu thập RSVP từ khách mời sẽ sớm ra mắt.
        </p>
      </div>
    </div>
  );
}

export default Editor;
