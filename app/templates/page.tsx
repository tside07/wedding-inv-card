import type { Metadata } from "next";
import { PageFrame } from "@/components/ui/PageFrame";
import { Navbar } from "@/components/layout/Navbar";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { BotanicalOrnament } from "@/components/ui/BotanicalOrnament";
import { TemplateGrid } from "@/components/templates/TemplateGrid";

export const metadata: Metadata = {
  title: "Mẫu thiệp cưới — thiệpcưới.vn",
  description:
    "Bộ sưu tập mẫu thiệp cưới online: cổ điển, tối giản, garden, sang trọng, hiện đại. Chọn mẫu, đổi tên và chia sẻ chỉ trong vài phút.",
};

export default function TemplatesPage() {
  return (
    <PageFrame>
      <Navbar solid />
      <main className="bg-bg px-6 pb-[64px] pt-[120px] sm:px-10 md:pt-[140px]">
        {/* header */}
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#9A8268]">
            Bộ sưu tập
          </p>
          <h1 className="mt-3 font-serif text-[34px] uppercase leading-[1.1] tracking-[0.08em] text-[#4A3728] md:text-[40px]">
            Mẫu <span className="font-medium">thiệp cưới</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] font-sans text-[13px] font-light leading-[1.7] text-[#6B6258]">
            Chọn một phong cách bạn yêu thích — đổi tên, ngày cưới và xem thiệp
            đổi ngay lập tức. Tất cả đều miễn phí dùng thử.
          </p>
          <BotanicalOrnament
            variant="divider"
            className="mx-auto mt-6 w-40"
            stroke="#C8B09A"
          />
        </div>

        {/* filter + grid */}
        <div className="mx-auto max-w-[1080px]">
          <TemplateGrid />
        </div>
      </main>
      <CTAFooter cta={false} />
    </PageFrame>
  );
}
