import Link from "next/link";
import { Button } from "./Button";

const navLinks = [
  { label: "Mẫu thiệp", href: "#templates" },
  { label: "Cách hoạt động", href: "#how-it-works" },
  { label: "Bảng giá", href: "/pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-[0.5px] border-line bg-bg/85 backdrop-blur-[2px]">
      <nav className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="font-display text-[18px] text-ink"
          aria-label="thiệpcưới.vn trang chủ"
        >
          thiệpcưới
          <span className="text-ink-muted">.vn</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-ink-body transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-[14px] text-ink-body transition-colors hover:text-ink sm:block"
          >
            Đăng nhập
          </Link>
          <Button href="#templates" variant="primary">
            Tạo thiệp miễn phí
          </Button>
        </div>
      </nav>
    </header>
  );
}
