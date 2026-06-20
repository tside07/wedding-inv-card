"use client";

import * as React from "react";
import { List } from "@phosphor-icons/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// DREAMDAY navbar: centered serif logo, links split left/right. Transparent over
// the hero, turns solid cream after a small scroll. Inner bar is capped to the
// 1240px page-frame width so the solid state aligns with the framed page.

const LEFT_LINKS = [
  { label: "Mẫu thiệp", href: "#templates" },
  { label: "Tính năng", href: "#how-it-works" },
];
const RIGHT_LINKS = [
  { label: "Thiệp của tôi", href: "/me" },
  { label: "Liên hệ", href: "#footer" },
];
const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="font-sans text-[11px] font-normal uppercase tracking-[0.18em] transition-opacity duration-150 hover:opacity-70"
    >
      {label}
    </a>
  );
}

// `solid` forces the cream/brown bar (used on interior pages that have no dark
// hero behind the navbar — cream text on cream would otherwise be invisible).
export function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const showSolid = solid || scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto grid h-[72px] max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center px-6 transition-[background-color,color,border-color,box-shadow] duration-200 md:h-[84px] md:px-14 lg:px-[72px]",
          showSolid
            ? "border-b-[0.5px] border-[#D8C5AE] bg-[#F5EEE6] text-[#4A3728] shadow-[0_1px_12px_rgba(74,55,40,0.06)]"
            : "border-b-[0.5px] border-transparent text-[#F5EEE6]",
        )}
      >
        {/* LEFT — desktop links / mobile hamburger */}
        <div className="flex items-center justify-start">
          <div className="hidden items-center gap-9 md:flex">
            {LEFT_LINKS.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Mở menu"
              className="-ml-1 inline-flex items-center md:hidden"
            >
              <List size={22} weight="regular" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="px-6 pt-14">
              <SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
              <nav className="flex flex-col">
                {ALL_LINKS.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="border-b-[0.5px] border-[#D8C5AE] py-4 font-serif text-[16px] uppercase tracking-[0.08em] text-[#4A3728]"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <a
                  href="/templates"
                  className="mt-7 inline-flex items-center justify-center rounded-[2px] bg-[#6B4A36] px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#F5EEE6]"
                >
                  Tạo thiệp ngay
                </a>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>

        {/* CENTER — serif logo, always */}
        <a
          href="/"
          className="font-serif text-[22px] font-medium tracking-[0.22em] transition-colors duration-200"
        >
          thiệpcưới
        </a>

        {/* RIGHT — desktop links (empty on mobile to keep logo centered) */}
        <div className="hidden items-center justify-end gap-9 md:flex">
          {RIGHT_LINKS.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
