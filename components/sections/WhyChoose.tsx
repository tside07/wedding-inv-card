import { Palette, CheckSquare, ShareNetwork } from "@phosphor-icons/react/dist/ssr";

// 3 reasons to choose, with delicate Phosphor line icons (thin/light weight) to
// match DREAMDAY. One accent only — icons share a single muted brown.
const FEATURES = [
  {
    Icon: Palette,
    title: "Thiết kế đẹp",
    desc: "Hàng trăm mẫu thiết kế bởi chuyên gia. Đổi màu, font, ảnh dễ dàng.",
  },
  {
    Icon: CheckSquare,
    title: "RSVP online",
    desc: "Khách xác nhận tham dự ngay trong thiệp. Theo dõi danh sách real-time.",
  },
  {
    Icon: ShareNetwork,
    title: "Chia sẻ dễ dàng",
    desc: "Gửi link qua Zalo, Facebook. In QR lên thiệp giấy. Sửa sau khi gửi.",
  },
];

export function WhyChoose() {
  return (
    <section className="border-y-[0.5px] border-[#E5D8C7] bg-[#FBF6EF] py-[52px]">
      <div className="mx-auto max-w-[980px] px-10">
        <h2 className="mb-9 text-center font-serif text-[28px] uppercase tracking-[0.12em] text-[#4A3728]">
          Tại sao chọn <span className="font-medium">thiệpcưới</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center">
              <Icon size={30} weight="light" color="#8A6F58" className="mb-3" />
              <h3 className="mb-2 font-serif text-[14px] uppercase tracking-[0.12em] text-[#4A3728]">
                {title}
              </h3>
              <p className="mx-auto max-w-[240px] font-sans text-[12px] font-light leading-[1.6] text-[#6B6258]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
