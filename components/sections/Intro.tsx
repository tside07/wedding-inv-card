// Editorial intro statement (DREAMDAY "WE ARE PASSIONATE…" block). Centered serif
// ALL-CAPS line with two emphasized words, a two-column body, and a serif signature.
export function Intro() {
  return (
    <section className="bg-bg py-[48px]">
      <div className="mx-auto max-w-[820px] px-10 text-center">
        {/* thin vertical line drop (the hero already placed the bouquet) */}
        <span className="mx-auto my-4 block h-[40px] w-px bg-border" />

        <p className="mx-auto max-w-[620px] font-serif text-[22px] font-normal uppercase leading-[1.5] tracking-[0.04em] text-[#5A4636] md:text-[26px]">
          Tạo thiệp cưới{" "}
          <span className="font-medium text-[#3D2B1C]">riêng</span> của bạn —
          đẹp như mơ, chia sẻ chỉ trong{" "}
          <span className="font-medium text-[#3D2B1C]">vài phút</span>.
        </p>

        <div className="mx-auto mt-7 grid max-w-[640px] gap-8 text-left font-sans text-[13px] font-light leading-[1.7] text-[#6B6258] md:grid-cols-2">
          <p>
            Chúng tôi tin mỗi đám cưới là một câu chuyện riêng. thiệpcưới.vn giúp
            bạn kể câu chuyện đó bằng tấm thiệp đẹp, cá nhân hoá đến từng chi
            tiết.
          </p>
          <p>
            Không cần biết thiết kế, không cần cài app. Chọn mẫu, điền tên, và
            chia sẻ link cho khách mời — tất cả trong vài phút, ngay trên trình
            duyệt.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="font-sans text-[12px] font-light text-[#8A7A68]">
            Với yêu thương,
          </p>
          <p className="mt-1 font-serif text-[20px] italic text-[#5A4636]">
            thiệpcưới.vn
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
