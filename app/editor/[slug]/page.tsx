import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/ui/PageFrame";
import { Navbar } from "@/components/layout/Navbar";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { Editor } from "@/components/editor/Editor";
import { TEMPLATES, getTemplate } from "@/lib/templates";

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
  return {
    title: tpl
      ? `Tùy chỉnh ${tpl.name} — thiệpcưới.vn`
      : "Trình chỉnh sửa — thiệpcưới.vn",
  };
}

export default async function EditorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tpl = getTemplate(slug);
  if (!tpl) notFound();

  return (
    <PageFrame>
      <Navbar solid />
      <main className="bg-bg px-6 pb-[72px] pt-[120px] sm:px-10 md:pt-[140px]">
        <Editor template={tpl} />
      </main>
      <CTAFooter cta={false} />
    </PageFrame>
  );
}
