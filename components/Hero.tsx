import { Button } from "./Button";
import { CardPreview } from "./CardPreview";
import { cardThemes } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FBF5F0 0%, #F5EDE6 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-24">
        {/* Left: copy */}
        <div className="max-w-[36rem]">
          {/* Hero eyebrow (the page's 1 reserved eyebrow). */}
          <span className="mb-6 inline-flex items-center rounded-[4px] border-[0.5px] border-line bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-[0.06em] text-ink-muted">
            Thiệp cưới online · không cần cài app
          </span>

          <h1 className="font-display text-[38px] leading-[1.15] tracking-[-0.02em] text-ink md:text-[52px]">
            Thiệp cưới đẹp và{" "}
            <em className="font-display italic leading-[1.15]">riêng</em>, chỉ
            trong vài phút
          </h1>

          {/* Subtext capped at 20 words; the "no app install" point is carried by the eyebrow. */}
          <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.75] text-ink-body">
            Tạo thiệp cưới online có RSVP, bản đồ và link chia sẻ. Khách mở ngay
            trên điện thoại.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#templates" variant="accent">
              Chọn mẫu thiệp →
            </Button>
            <Button href="#how-it-works" variant="ghost">
              Xem cách hoạt động
            </Button>
          </div>
        </div>

        {/* Right: card teaser (peek of the templates, not the full carousel). */}
        <div className="relative mx-auto h-[360px] w-full max-w-[420px] md:h-[440px]">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[225px] -translate-x-[58%] -translate-y-[46%] -rotate-6 md:h-[360px] md:w-[270px]">
            <div className="h-full w-full rounded-[12px] border-[0.5px] border-line shadow-[0_18px_50px_-24px_rgba(61,43,31,0.35)]">
              <CardPreview
                theme={cardThemes[4]}
                groom="Hoàng"
                bride="Mai"
                date="20.11.2026"
                animateNames={false}
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[240px] -translate-x-[40%] -translate-y-[52%] rotate-3 md:h-[380px] md:w-[285px]">
            <div className="h-full w-full rounded-[12px] border-[0.5px] border-line shadow-[0_24px_60px_-26px_rgba(61,43,31,0.45)]">
              <CardPreview
                theme={cardThemes[0]}
                groom="Minh"
                bride="Linh"
                animateNames={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
