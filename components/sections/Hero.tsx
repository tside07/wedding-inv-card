import Image from "next/image";
import { ArchWave } from "@/components/ui/ArchWave";
import { BotanicalOrnament } from "@/components/ui/BotanicalOrnament";

// Signature section: full-bleed romantic wedding photo, white serif ALL-CAPS
// headline, white CTA, and an organic arch-wave transition into the cream below.
//
// NOTE: /hero/hero.jpg is a free-license placeholder (Unsplash). Replace with a
// licensed romantic wedding photo (couple outdoors / pampas / sunset) before
// launch. Do NOT hotlink.
export function Hero() {
  return (
    <>
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <Image
          src="/hero/hero.jpg"
          alt="Cặp đôi trong ngày cưới"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Main scrim — darkens the bottom so the headline keeps WCAG-AA contrast. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(60,40,25,.50) 0%, rgba(60,40,25,.10) 45%, rgba(120,110,110,.15) 100%)",
          }}
        />
        {/* Thin top scrim — keeps the transparent navbar's light text legible
            over the bright sun-flare area of the photo. */}
        <div
          className="absolute inset-x-0 top-0 h-[160px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(60,40,25,.42), rgba(60,40,25,0))",
          }}
        />

        {/* Headline + CTA */}
        <div className="absolute inset-x-0 bottom-[90px] z-10 px-6 text-center md:bottom-[120px]">
          <h1 className="mx-auto max-w-[760px] font-serif text-[30px] font-medium uppercase leading-[1.12] tracking-[0.04em] text-[#F5EEE6] md:text-[56px]">
            Thiệp cưới đẹp cho
            <br />
            ngày trọng đại
          </h1>

          <p className="mx-auto mt-4 mb-6 max-w-[440px] font-sans text-[13px] font-light tracking-[0.02em] text-[#F2EAE0] md:text-[15px]">
            Tạo thiệp cưới online, cá nhân hoá từng chi tiết, chia sẻ chỉ trong
            vài phút.
          </p>

          <a
            href="#templates"
            className="inline-flex items-center justify-center rounded-[2px] bg-[#F5EEE6] px-8 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#4A3728] transition-colors duration-150 hover:bg-white"
          >
            Tạo thiệp ngay
          </a>
        </div>

        {/* Organic arch-wave transition into the cream section below. */}
        <ArchWave fill="#F5EEE6" />
      </section>

      {/* Botanical bouquet overlapping the wave, in the cream area. */}
      <div className="bg-bg text-center">
        <BotanicalOrnament
          variant="bouquet"
          className="mx-auto -mt-2 mb-2 w-16"
        />
      </div>
    </>
  );
}

export default Hero;
