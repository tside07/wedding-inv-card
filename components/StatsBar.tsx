import { stats } from "@/lib/data";

// Section 3 - social proof before the product demo. No eyebrow (budget saved).
export function StatsBar() {
  return (
    <section className="bg-stats">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-10 px-5 py-14 md:grid-cols-4 md:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="font-display text-[30px] text-ink md:text-[36px]">
              {stat.value}
            </div>
            <div className="mt-1 text-[13px] leading-[1.5] text-ink-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
