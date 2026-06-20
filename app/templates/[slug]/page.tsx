import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { PageFrame } from "@/components/ui/PageFrame";
import { Navbar } from "@/components/layout/Navbar";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { TemplatePreview } from "@/components/templates/TemplatePreview";
import { TemplateCard } from "@/components/templates/TemplateCard";
import {
  TEMPLATES,
  getTemplate,
  getRelatedTemplates,
} from "@/lib/templates";
import { themes } from "@/lib/tokens";

const INCLUDED = [
  "Xác nhận tham dự (RSVP) online",
  "Bản đồ Google chỉ đường",
  "Link chia sẻ qua Zalo, Facebook",
  "Mã QR in lên thiệp giấy",
  "Đổi nội dung không giới hạn",
];

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tpl = getTemplate(slug);
  if (!tpl) return { title: "Không tìm thấy mẫu — thiệpcưới.vn" };
  return {
    title: `${tpl.name} — Mẫu thiệp cưới | thiệpcưới.vn`,
    description: tpl.description,
  };
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tpl = getTemplate(slug);
  if (!tpl) notFound();

  const related = getRelatedTemplates(slug, 4);

  return (
    <PageFrame>
      <Navbar solid />
      <main className="bg-bg px-6 pb-[64px] pt-[120px] sm:px-10 md:pt-[140px]">
        {/* breadcrumb */}
        <nav className="mx-auto mb-8 max-w-[1080px] font-sans text-[11px] uppercase tracking-[0.12em] text-[#9A8268]">
          <Link href="/templates" className="transition-colors hover:text-[#6B4A36]">
            Mẫu thiệp
          </Link>
          <span className="px-2 text-[#C8B09A]">/</span>
          <span className="text-[#5C4636]">{tpl.name}</span>
        </nav>

        <div className="mx-auto grid max-w-[1080px] items-start gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-16">
          {/* LEFT — preview + thử tên */}
          <div className="md:sticky md:top-[110px]">
            <TemplatePreview template={tpl} />
          </div>

          {/* RIGHT — thông tin */}
          <div className="pt-1">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#9A8268]">
              {themes[tpl.themeKey].name}
            </p>
            <h1 className="mt-2 font-serif text-[34px] leading-[1.1] tracking-[0.02em] text-[#4A3728] md:text-[40px]">
              {tpl.name}
            </h1>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {tpl.badge && (
                <span className="rounded-[2px] bg-[#6B4A36] px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[#F5EEE6]">
                  {tpl.badge}
                </span>
              )}
              {tpl.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[2px] border-[0.5px] border-[#E5D8C7] px-2 py-0.5 font-sans text-[10px] font-light text-[#9A8268]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 max-w-[440px] font-sans text-[14px] font-light leading-[1.8] text-[#6B6258]">
              {tpl.description}
            </p>

            {/* Bao gồm */}
            <div className="mt-7">
              <p className="font-serif text-[15px] uppercase tracking-[0.1em] text-[#4A3728]">
                Mẫu này bao gồm
              </p>
              <ul className="mt-3 space-y-2.5">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-[13px] font-light text-[#5C4636]"
                  >
                    <Check size={14} weight="bold" className="shrink-0 text-[#6B4A36]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={`/editor/${tpl.slug}`}
                className="inline-flex items-center justify-center rounded-[2px] bg-[#6B4A36] px-7 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#F5EEE6] transition-colors hover:bg-[#7A5740]"
              >
                Dùng mẫu này →
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center justify-center rounded-[2px] border-[0.5px] border-[#C8B09A] px-7 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#5C4636] transition-colors hover:border-[#6B4A36] hover:text-[#6B4A36]"
              >
                Xem mẫu khác
              </Link>
            </div>
          </div>
        </div>

        {/* Mẫu tương tự */}
        <section className="mx-auto mt-20 max-w-[1080px] border-t-[0.5px] border-[#E5D8C7] pt-12">
          <h2 className="mb-9 text-center font-serif text-[24px] uppercase tracking-[0.1em] text-[#4A3728]">
            Mẫu <span className="font-medium">tương tự</span>
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-4">
            {related.map((t) => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        </section>
      </main>
      <CTAFooter cta={false} />
    </PageFrame>
  );
}
