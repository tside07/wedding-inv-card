import { BotanicalOrnament } from "@/components/ui/BotanicalOrnament";

const PRODUCT_LINKS = [
  { label: "Mẫu thiệp", href: "#templates" },
  { label: "Tính năng", href: "#how-it-works" },
  { label: "Bảng giá", href: "/pricing" },
  { label: "Studio / API", href: "/studio" },
];
const SUPPORT_LINKS = [
  { label: "Hướng dẫn", href: "/huong-dan" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "Chính sách bảo mật", href: "/bao-mat" },
];

// `cta` toggles the conversion banner. Pages already inside the create-card
// flow (/templates, editor) pass cta={false} so it doesn't loop back on itself.
export function CTAFooter({ cta = true }: { cta?: boolean }) {
  return (
    <>
      {/* CTA banner — accent brown so it reads as the conversion "moment",
          distinct from the espresso footer below (cream → brown → espresso). */}
      {cta && (
      <section className="bg-[#6B4A36] px-10 py-[64px] text-center">
        <BotanicalOrnament
          variant="sprig"
          stroke="#E8D6C4"
          className="mx-auto mb-4 w-10 opacity-70"
        />
        <h2 className="font-serif text-[26px] uppercase tracking-[0.06em] text-[#F5EEE6]">
          Bắt đầu tạo thiệp cưới của bạn
        </h2>
        <p className="mt-2 mb-6 font-sans text-[12px] font-light text-[#E8D6C4]">
          Miễn phí · Không cần tài khoản · Sẵn sàng chia sẻ trong 10 phút
        </p>
        <a
          href="/templates"
          className="inline-flex items-center justify-center rounded-[2px] bg-[#F5EEE6] px-8 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#4A3728] transition-colors hover:bg-white"
        >
          Tạo thiệp ngay
        </a>
      </section>
      )}

      {/* Footer */}
      <footer
        id="footer"
        className="scroll-mt-[84px] border-t-[0.5px] border-[#5C4332] bg-[#3D2B1C] px-10 py-10"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-[20px] tracking-[0.18em] text-[#F5EEE6]">
              thiệpcưới
            </p>
            <p className="mt-1 font-sans text-[12px] font-light text-[#9A8268]">
              Tạo bởi người Việt, dành cho người Việt.
            </p>
          </div>

          <FooterCol title="Sản phẩm" links={PRODUCT_LINKS} />
          <FooterCol title="Hỗ trợ" links={SUPPORT_LINKS} />
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t-[0.5px] border-[#5C4332] pt-4 text-[11px] text-[#6B5240] sm:flex-row sm:justify-between">
          <span>© 2025 thiệpcưới.vn</span>
          <span>Zalo: 0909 xxx xxx</span>
        </div>
      </footer>
    </>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 font-serif text-[12px] uppercase tracking-[0.12em] text-[#C4A88F]">
        {title}
      </h3>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="block py-1 font-sans text-[12px] font-light text-[#9A8268] transition-colors hover:text-[#C4A88F]"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default CTAFooter;
