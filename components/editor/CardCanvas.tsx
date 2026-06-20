import { BotanicalOrnament } from "@/components/ui/BotanicalOrnament";
import { themes, type ThemeKey } from "@/lib/tokens";

export interface CardData {
  themeKey: ThemeKey;
  groom: string;
  bride: string;
  date: string;
  venue: string;
  address: string;
  message: string;
  rsvp: boolean;
}

// Live preview của tấm thiệp thật (khác ArchCard ở chỗ KHÔNG có banner tên mẫu —
// đây là thiệp của người dùng). Mọi field điền trong Editor hiện ngay tại đây.
export function CardCanvas({ data }: { data: CardData }) {
  const t = themes[data.themeKey];
  const ink = t.label;

  return (
    <div
      className="relative flex w-full flex-col overflow-hidden"
      style={{
        borderRadius: "110px 110px 8px 8px",
        background: `linear-gradient(160deg, ${t.from}, ${t.to})`,
      }}
    >
      <div
        className="flex flex-1 flex-col items-center justify-center gap-3 px-8 py-12 text-center"
        style={{ color: ink }}
      >
        <BotanicalOrnament variant="sprig" stroke={ink} className="w-8 opacity-80" />

        <span className="font-serif text-[11px] uppercase tracking-[0.28em] opacity-80">
          Trân trọng kính mời
        </span>

        {data.message && (
          <span className="max-w-[240px] font-sans text-[10px] font-light italic leading-[1.6] opacity-75">
            {data.message}
          </span>
        )}

        <span className="mt-1 font-serif text-[30px] italic leading-tight">
          {data.groom || "Chú rể"} <span className="opacity-70">&amp;</span>{" "}
          {data.bride || "Cô dâu"}
        </span>

        <span className="my-1 h-px w-12 bg-current opacity-30" />

        <span className="font-sans text-[12px] font-light tracking-[0.14em]">
          {data.date || "Ngày · Tháng · Năm"}
        </span>

        {data.venue && (
          <span className="font-serif text-[14px] tracking-[0.04em]">
            {data.venue}
          </span>
        )}
        {data.address && (
          <span className="max-w-[240px] font-sans text-[10px] font-light leading-[1.6] opacity-75">
            {data.address}
          </span>
        )}

        {data.rsvp && (
          <span
            className="mt-3 rounded-[2px] px-5 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.12em]"
            style={{ backgroundColor: ink, color: t.to }}
          >
            Xác nhận tham dự
          </span>
        )}
      </div>
    </div>
  );
}

export default CardCanvas;
