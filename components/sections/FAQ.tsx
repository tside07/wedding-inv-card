"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BotanicalOrnament } from "@/components/ui/BotanicalOrnament";

const QA = [
  {
    q: "Tôi có cần biết thiết kế không?",
    a: "Không. Mọi mẫu đã được thiết kế chuyên nghiệp. Bạn chỉ điền tên, ngày, địa điểm.",
  },
  {
    q: "Thiệp có hoạt động trên điện thoại không?",
    a: "Có. Thiệp tối ưu mobile-first. Khách mở link là xem ngay, không cần cài app.",
  },
  {
    q: "Sau khi chia sẻ tôi sửa lại được không?",
    a: "Được. Sửa bất cứ lúc nào, link đã gửi tự cập nhật — không cần gửi lại.",
  },
  {
    q: "Khách mời có cần cài app không?",
    a: "Không. Thiệp mở trực tiếp trên trình duyệt, chỉ cần nhấn link.",
  },
  {
    q: "Studio / nhà in có mua được template không?",
    a: "Có. Gói Studio cho phép tạo không giới hạn, whitelabel domain và API. Liên hệ để được tư vấn.",
  },
];

export function FAQ() {
  return (
    <section className="border-t-[0.5px] border-[#E5D8C7] bg-[#FBF6EF] py-[52px]">
      <div className="mx-auto max-w-[720px] px-10">
        <h2 className="mb-2 text-center font-serif text-[28px] uppercase tracking-[0.12em] text-[#4A3728]">
          Câu hỏi <span className="font-medium">thường gặp</span>
        </h2>

        {/* botanical divider */}
        <div className="mb-7 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-[#C8B09A]" />
          <BotanicalOrnament variant="sprig" className="w-10" />
          <span className="h-px w-20 bg-[#C8B09A]" />
        </div>

        <Accordion type="single" collapsible>
          {QA.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
