import Link from "next/link";

const trust = ["Bảo mật thông tin", "Không quảng cáo", "Không bán dữ liệu"];

const footerCols = [
  {
    heading: "Sản phẩm",
    links: [
      { label: "Mẫu thiệp", href: "#templates" },
      { label: "Cách hoạt động", href: "#how-it-works" },
      { label: "Bảng giá", href: "/pricing" },
    ],
  },
  {
    heading: "Liên hệ",
    links: [
      { label: "hello@thiepcuoi.vn", href: "mailto:hello@thiepcuoi.vn" },
      { label: "Zalo", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
];

// Section 9 - CTA band (accent-dark) + footer (ink). Both stay within the warm palette.
export function CtaFooter() {
  return (
    <>
      <section className="relative overflow-hidden bg-accent-dark">
        {/* Lifestyle backdrop. PLACEHOLDER seed - swap for a real licensed wedding photo.
            Absolutely positioned (no layout shift) and lazy-loaded (below the fold). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/thiepcuoi-wedding-warm/1600/900"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Heavy warm-brown scrim: turns the photo into branded texture and keeps
            the cream copy at WCAG AA contrast over any underlying image. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(61,43,31,0.93), rgba(44,26,16,0.96))",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-20 text-center md:px-10 md:py-24">
          <h2 className="mx-auto max-w-[20ch] font-display text-[28px] leading-[1.2] text-[#f5ede6] md:text-[40px]">
            Thiệp cưới của hai bạn đã gần xong rồi
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-[#d8c3b2]">
            Chọn một mẫu, điền tên, và gửi link cho khách ngay hôm nay.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#templates"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#f5ede6] px-6 py-3 text-[15px] font-medium leading-none text-accent-dark transition-[transform,background-color] duration-200 hover:bg-white active:translate-y-[1px]"
            >
              Chọn mẫu thiệp →
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-[#b89c87]">
            {trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink text-[#d8c3b2]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-10">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
            <div className="max-w-[32ch]">
              <Link
                href="/"
                className="font-display text-[18px] text-[#f5ede6]"
              >
                thiệpcưới<span className="text-[#9a7a62]">.vn</span>
              </Link>
              <p className="mt-3 text-[14px] leading-[1.7]">
                Thiệp cưới online cho người Việt. Đẹp, riêng, và mở được trên mọi
                điện thoại.
              </p>
            </div>

            {footerCols.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="text-[12px] uppercase tracking-[0.06em] text-[#9a7a62]">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] transition-colors hover:text-[#f5ede6]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-12 border-t-[0.5px] border-[#4a3526] pt-6 text-[13px] text-[#9a7a62]">
            © 2026 thiệpcưới.vn. Giữ trọn từng khoảnh khắc.
          </div>
        </div>
      </footer>
    </>
  );
}
