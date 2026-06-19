import { testimonials } from "@/lib/data";

// Section 7 - 2 couples + 1 studio. Eyebrow #3 of 3 (the last allowed).
export function Testimonials() {
  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.06em] text-ink-muted">
          Đánh giá
        </p>
        <h2 className="mt-3 max-w-[22ch] font-display text-[26px] leading-[1.25] text-ink md:text-[34px]">
          Cô dâu chú rể và cả studio cưới đều đang dùng
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[12px] border-[0.5px] border-line bg-surface p-6"
            >
              <blockquote className="text-[15px] leading-[1.7] text-ink-body">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] font-medium text-white"
                  style={{ background: "var(--color-accent)" }}
                  aria-hidden
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-[14px] font-medium text-ink">
                    {t.name}
                  </span>
                  <span className="block text-[13px] text-ink-muted">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
