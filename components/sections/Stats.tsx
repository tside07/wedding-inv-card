import { Fragment } from "react";

// Stats band — serif numbers. SAMPLE DATA: replace with real figures before launch.
const STATS = [
  { value: "59,000+", label: "Cặp đôi tin dùng" },
  { value: "200+", label: "Mẫu thiệp" },
  { value: "4.9", label: "Đánh giá trung bình" },
];

export function Stats() {
  return (
    <section className="border-y-[0.5px] border-[#E5D8C7] bg-[#EFE7DB] px-10 py-[40px]">
      <div className="flex items-stretch justify-center text-center">
        {STATS.map((s, i) => (
          <Fragment key={s.label}>
            {i > 0 && (
              <span className="mx-10 w-px self-stretch bg-[#C8B09A] md:mx-16" />
            )}
            <div className="flex flex-col justify-center">
              <div className="font-serif text-[32px] font-medium leading-none text-[#4A3728]">
                {s.value}
              </div>
              <div className="mt-2 font-sans text-[11px] font-light tracking-[0.04em] text-[#8A7A68]">
                {s.label}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Stats;
