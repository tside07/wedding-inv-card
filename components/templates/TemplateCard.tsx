import Link from "next/link";
import { ArchCard } from "@/components/cards/ArchCard";
import type { Template } from "@/lib/templates";

// Một ô mẫu thiệp trong lưới. Bấm vào → trang chi tiết. Preview dùng tên mẫu.
export function TemplateCard({ template }: { template: Template }) {
  const { slug, themeKey, name, tagline, tags, badge, sample } = template;

  return (
    <Link
      href={`/templates/${slug}`}
      className="group block transition-transform duration-300 ease-out hover:-translate-y-1"
    >
      <div className="relative">
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-[2px] bg-[#6B4A36] px-2 py-1 font-sans text-[9px] font-medium uppercase tracking-[0.12em] text-[#F5EEE6]">
            {badge}
          </span>
        )}
        <div className="aspect-[3/4] w-full overflow-hidden rounded-[4px] border-[0.5px] border-[#E5D8C7] shadow-[0_1px_10px_rgba(74,55,40,0.05)] transition-shadow duration-300 group-hover:shadow-[0_6px_22px_rgba(74,55,40,0.12)]">
          <ArchCard themeKey={themeKey} groom={sample.groom} bride={sample.bride} />
        </div>
      </div>

      <div className="mt-3 px-0.5">
        <h3 className="font-serif text-[17px] tracking-[0.02em] text-[#4A3728]">
          {name}
        </h3>
        <p className="mt-0.5 font-sans text-[11px] font-light leading-[1.5] text-[#8A7A68]">
          {tagline}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[2px] border-[0.5px] border-[#E5D8C7] px-2 py-0.5 font-sans text-[10px] font-light text-[#9A8268]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default TemplateCard;
