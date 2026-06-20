"use client";

import { useState } from "react";
import { ArchCard } from "@/components/cards/ArchCard";
import type { Template } from "@/lib/templates";

const inputClass =
  "h-11 flex-1 rounded-[2px] border-[0.5px] border-[#C8B09A] bg-white px-3 font-sans text-[13px] text-[#4A3728] outline-none transition-colors focus:border-[#6B4A36]";

// Preview lớn của một mẫu thiệp + ô thử tên live. Tên gõ vào hiện ngay trên
// thiệp (ArchCard tự re-fade tên khi đổi). Dùng ở trang chi tiết mẫu.
export function TemplatePreview({ template }: { template: Template }) {
  const [groom, setGroom] = useState(template.sample.groom);
  const [bride, setBride] = useState(template.sample.bride);

  return (
    <div className="flex flex-col items-center">
      <div className="h-[400px] w-[270px] sm:h-[440px] sm:w-[300px]">
        <ArchCard themeKey={template.themeKey} groom={groom} bride={bride} />
      </div>

      <div className="mt-7 w-full max-w-[300px]">
        <p className="mb-2 text-center font-sans text-[11px] uppercase tracking-[0.14em] text-[#8A7A68]">
          Thử tên của bạn
        </p>
        <div className="flex gap-3">
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
      </div>
    </div>
  );
}

export default TemplatePreview;
