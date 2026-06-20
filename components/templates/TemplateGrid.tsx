"use client";

import { useMemo, useState } from "react";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { TEMPLATE_TAGS, TEMPLATES } from "@/lib/templates";

// Hàng filter chips + lưới mẫu. Lọc client-side theo tag ("Tất cả" = không lọc).
export function TemplateGrid() {
  const [active, setActive] = useState<string>(TEMPLATE_TAGS[0]);

  const list = useMemo(
    () =>
      active === TEMPLATE_TAGS[0]
        ? TEMPLATES
        : TEMPLATES.filter((t) => t.tags.includes(active)),
    [active],
  );

  return (
    <>
      {/* filter chips */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {TEMPLATE_TAGS.map((tag) => {
          const on = tag === active;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              className={`rounded-[2px] border-[0.5px] px-4 py-2 font-sans text-[11px] uppercase tracking-[0.1em] transition-colors duration-150 ${
                on
                  ? "border-[#6B4A36] bg-[#6B4A36] text-[#F5EEE6]"
                  : "border-[#D8C5AE] text-[#5C4636] hover:border-[#6B4A36] hover:text-[#6B4A36]"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
        {list.map((t) => (
          <TemplateCard key={t.slug} template={t} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="py-16 text-center font-sans text-[13px] font-light text-[#8A7A68]">
          Chưa có mẫu nào trong nhóm này.
        </p>
      )}
    </>
  );
}

export default TemplateGrid;
