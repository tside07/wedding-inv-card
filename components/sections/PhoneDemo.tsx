"use client";

import { useState } from "react";
import { themes, type ThemeKey } from "@/lib/tokens";

// Click-driven interactive demo: a sticky step list drives a phone preview whose
// wedding-card content + theme change per step. No scroll-hijack. Names in the
// phone are illustrative ("Minh & Linh"), not the live input from Mẫu thiệp.
const STEP_THEME: ThemeKey[] = ["ivory", "lavender", "sage", "midnight"];

const NAV = [
  { title: "Nhập tên", sub: "Tên cặp đôi hiện lên thiệp ngay lập tức" },
  { title: "Chọn phong cách", sub: "Màu, font, hoa văn đổi theo thời gian thực" },
  { title: "Thêm RSVP", sub: "Khách xác nhận tham dự ngay trong thiệp" },
  { title: "Chia sẻ link", sub: "Gửi qua Zalo, Facebook hoặc in QR code" },
];

const DETAIL: { title: string; desc: string; box: React.ReactNode }[] = [
  {
    title: "Nhập tên cặp đôi",
    desc: "Gõ tên vào ô — tên xuất hiện ngay trên thiệp. Không cần lưu, không reload.",
    box: (
      <>
        <b>Ví dụ:</b> “Nguyễn Văn Minh” hiển thị thành “Minh”. Bạn chọn tên đầy
        đủ hoặc tên gọi.
      </>
    ),
  },
  {
    title: "Chọn phong cách",
    desc: "Nhấn một theme — màu, font, hoa văn toàn bộ thiệp đổi tức thì.",
    box: (
      <>
        <b>8 theme:</b> Ivory Romance · Garden Sage · Lavender Luxe · Midnight
        Gold · Rose Bloom · Blush Peach · Champagne · Dusk Blue
      </>
    ),
  },
  {
    title: "Bật RSVP online",
    desc: "Một cú nhấn — khách xác nhận tham dự ngay trong thiệp, bạn thấy danh sách real-time.",
    box: (
      <>
        <b>Thu thập:</b> Tên · Số điện thoại · Số người. Xuất Excel bất cứ lúc
        nào.
      </>
    ),
  },
  {
    title: "Chia sẻ cho khách mời",
    desc: "Copy link một chạm hoặc tải QR in lên thiệp giấy. Sửa lại sau khi gửi vẫn được.",
    box: (
      <>
        <b>Gửi qua:</b> Zalo · Facebook · SMS · QR trên thiệp giấy/phong bì
      </>
    ),
  },
];

export function PhoneDemo() {
  const [step, setStep] = useState(0);
  const t = themes[STEP_THEME[step]];
  const ink = t.label;

  return (
    <section
      id="how-it-works"
      className="scroll-mt-[84px] border-y-[0.5px] border-[#E5D8C7] bg-[#FBF6EF] px-10 py-[52px]"
    >
      <h2 className="mb-9 text-center font-serif text-[28px] uppercase tracking-[0.12em] text-[#4A3728]">
        Cách <span className="font-medium">hoạt động</span>
      </h2>

      <div className="mx-auto grid max-w-[980px] items-start gap-10 md:grid-cols-[240px_1fr]">
        {/* LEFT — step list */}
        <div className="flex flex-col gap-2 md:sticky md:top-[80px]">
          {NAV.map((item, i) => {
            const active = step === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                className={`rounded-[6px] p-3 text-left transition-colors duration-150 ${
                  active
                    ? "border-[0.5px] border-[#C8B09A] bg-[#F5EEE6]"
                    : "border-[0.5px] border-transparent hover:bg-[#F5EEE6]/60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="font-serif text-[22px] leading-none"
                    style={{ color: active ? "#6B4A36" : "#C8B09A" }}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span
                      className="block font-serif text-[13px] uppercase tracking-[0.10em]"
                      style={{ color: active ? "#4A3728" : "#9A8268" }}
                    >
                      {item.title}
                    </span>
                    <span className="mt-[3px] block font-sans text-[11px] font-light leading-[1.5] text-[#8A7A68]">
                      {item.sub}
                    </span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT — phone + detail */}
        <div className="flex flex-col items-start gap-8 md:flex-row">
          {/* PHONE */}
          <div className="mx-auto flex-shrink-0">
            <div className="w-[184px] rounded-[28px] border-2 border-[#4A3728]/20 bg-white p-2">
              <div
                className="flex min-h-[290px] w-full flex-col overflow-hidden rounded-[18px] transition-[background] duration-300 md:min-h-[310px]"
                style={{ background: `linear-gradient(160deg, ${t.from}, ${t.to})` }}
              >
                {/* HERO — vertically centered in the tall card */}
                <div className="flex flex-1 flex-col items-center justify-center gap-[6px] p-5 text-center">
                  <span
                    className="font-serif text-[10px]"
                    style={{ color: ink, opacity: 0.7 }}
                  >
                    ❀ ❀
                  </span>
                  <span
                    className="font-serif text-[7px] uppercase tracking-[0.22em]"
                    style={{ color: ink, opacity: 0.7 }}
                  >
                    Trân trọng kính mời
                  </span>
                  <span
                    className="font-serif text-[17px] italic transition-colors duration-300"
                    style={{ color: ink }}
                  >
                    Minh &amp; Linh
                  </span>
                  <span
                    className="h-px w-10"
                    style={{ backgroundColor: ink, opacity: 0.3 }}
                  />
                  <span
                    className="font-sans text-[9px] font-light tracking-[0.1em]"
                    style={{ color: ink }}
                  >
                    15 · 09 · 2025
                  </span>
                  <span
                    className="font-sans text-[8px] font-light"
                    style={{ color: ink, opacity: 0.65 }}
                  >
                    Nhà hàng Emerald, Q.1
                  </span>
                </div>

                {/* EXTRA */}
                {step === 2 && (
                  <div className="mx-2 mb-2 rounded-[8px] bg-white/70 p-2">
                    <p className="mb-1 text-[8px] text-[#4A3728]">
                      Bạn có tham dự không?
                    </p>
                    <div className="flex gap-1">
                      <span className="rounded-[2px] border-[0.5px] border-[#C8B09A] bg-[#4A3728] px-2 py-1 text-[7px] text-white">
                        Sẽ đến
                      </span>
                      <span className="rounded-[2px] border-[0.5px] border-[#C8B09A] px-2 py-1 text-[7px] text-[#4A3728]">
                        Vắng
                      </span>
                      <span className="rounded-[2px] border-[0.5px] border-[#C8B09A] px-2 py-1 text-[7px] text-[#4A3728]">
                        Chưa
                      </span>
                    </div>
                    <div className="mt-1 flex h-5 w-full items-center rounded-[2px] border-[0.5px] border-[#C8B09A] px-1 text-[7px] text-[#8A7A68]">
                      Họ và tên...
                    </div>
                    <div className="mt-1 w-full rounded-[2px] bg-[#6B4A36] py-1 text-center text-[7px] text-white">
                      Xác nhận →
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="mx-2 mb-2 rounded-[8px] bg-white/70 p-2">
                    <p className="text-[7px] text-[#8A7A68]">Link thiệp:</p>
                    <p className="break-all text-[8px] text-[#6B4A36]">
                      thiepcuoi.vn/minh-linh-2025
                    </p>
                    <div className="mt-1 flex gap-1">
                      <span className="rounded-[2px] border-[0.5px] border-[#C8B09A] px-2 py-1 text-[7px] text-[#4A3728]">
                        Copy
                      </span>
                      <span className="rounded-[2px] border-[0.5px] border-[#C8B09A] px-2 py-1 text-[7px] text-[#4A3728]">
                        QR
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* progress bar */}
            <div className="mx-auto mt-3 w-[184px]">
              <div className="h-[2px] rounded-full bg-[#D8C5AE]">
                <div
                  className="h-[2px] rounded-full bg-[#6B4A36] transition-[width] duration-[400ms] ease-out"
                  style={{ width: `${(step + 1) * 25}%` }}
                />
              </div>
            </div>
          </div>

          {/* DETAIL */}
          <div className="flex-1 pt-1">
            <h3 className="mb-2 font-serif text-[18px] tracking-[0.04em] text-[#4A3728]">
              {DETAIL[step].title}
            </h3>
            <p className="mb-4 font-sans text-[13px] font-light leading-[1.7] text-[#6B6258]">
              {DETAIL[step].desc}
            </p>
            <div className="rounded-[8px] border-[0.5px] border-[#D8C5AE] bg-[#F5EEE6] p-[14px] font-sans text-[12px] font-light leading-[1.65] text-[#6B6258] [&_b]:font-medium [&_b]:text-[#4A3728]">
              {DETAIL[step].box}
            </div>

            {/* NAV */}
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="rounded-[2px] border-[0.5px] border-[#C8B09A] px-5 py-2 font-sans text-[11px] uppercase tracking-[0.08em] text-[#5C4636] transition-colors disabled:opacity-40"
              >
                ‹ Trước
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(3, s + 1))}
                  className="rounded-[2px] bg-[#6B4A36] px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#F5EEE6] transition-colors hover:bg-[#7A5740]"
                >
                  Tiếp ›
                </button>
              ) : (
                <a
                  href="/templates"
                  className="rounded-[2px] bg-[#6B4A36] px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#F5EEE6] transition-colors hover:bg-[#7A5740]"
                >
                  Dùng mẫu này →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhoneDemo;
