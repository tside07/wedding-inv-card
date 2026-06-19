"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { faqs } from "@/lib/data";

// Section 8 - owned accordion (no shadcn install needed). No eyebrow (budget spent).
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[760px] px-5 md:px-10">
        <h2 className="font-display text-[26px] leading-[1.25] text-ink md:text-[34px]">
          Câu hỏi thường gặp
        </h2>

        <div className="mt-10 border-t-[0.5px] border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b-[0.5px] border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[16px] font-medium text-ink">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-accent">
                    {isOpen ? (
                      <Minus size={18} weight="light" />
                    ) : (
                      <Plus size={18} weight="light" />
                    )}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-[250ms] ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-5 text-[15px] leading-[1.7] text-ink-body">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
