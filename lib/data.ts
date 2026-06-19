// ============================================================
// Static content for the thiệpcưới.vn landing page.
// All numbers here are SAMPLE / MOCK data for the marketing page.
// ============================================================

export type CardTheme = {
  id: string;
  name: string;
  bgFrom: string;
  bgTo: string;
  acc: string;
  txt: string;
  blurb: string;
};

// Template card interiors only. These gradients never bleed into page sections.
export const cardThemes: CardTheme[] = [
  { id: "ivory", name: "Ivory Romance", bgFrom: "#F2E0D0", bgTo: "#FAF4EE", acc: "#B87C5B", txt: "#2C1A10", blurb: "Kem ngà ấm, nét chữ thanh lịch cho đám cưới cổ điển." },
  { id: "sage", name: "Garden Sage", bgFrom: "#D8ECD4", bgTo: "#EDF4EC", acc: "#7AAB78", txt: "#1A3A1A", blurb: "Xanh lá dịu nhẹ, hợp tiệc cưới sân vườn ngoài trời." },
  { id: "lavender", name: "Lavender Luxe", bgFrom: "#D4CDE8", bgTo: "#F0EBF8", acc: "#9B7EC4", txt: "#2A1A5A", blurb: "Tím oải hương sang trọng, lãng mạn và nhẹ nhàng." },
  { id: "midnight", name: "Midnight Gold", bgFrom: "#1A1210", bgTo: "#2C2018", acc: "#C9A85C", txt: "#F5EDE6", blurb: "Nền tối ánh vàng, đẳng cấp cho tiệc cưới buổi tối." },
  { id: "rose", name: "Rose Bloom", bgFrom: "#F0D0D8", bgTo: "#FBF0F2", acc: "#C4849C", txt: "#5A1A2A", blurb: "Hồng phấn ngọt ngào cho cô dâu yêu sắc hồng." },
];

// Section 3 - stats bar (sample data).
export const stats = [
  { value: "59.000+", label: "cặp đôi đã tạo thiệp" },
  { value: "200+", label: "mẫu thiệp thiết kế sẵn" },
  { value: "4.9/5", label: "điểm hài lòng trung bình" },
  { value: "10 phút", label: "để hoàn thành một thiệp" },
];

// Section 5 - scroll demo steps.
export type DemoStep = {
  title: string;
  detail: string;
};

export const demoSteps: DemoStep[] = [
  {
    title: "Nhập thông tin",
    detail:
      "Điền tên cô dâu chú rể, ngày và nơi tổ chức. Thiệp cập nhật ngay khi bạn đang gõ.",
  },
  {
    title: "Chọn mẫu và màu",
    detail:
      "Lướt qua hơn 200 mẫu, đổi bảng màu chỉ với một chạm cho hợp gu của hai bạn.",
  },
  {
    title: "Bật RSVP và bản đồ",
    detail:
      "Mở phần xác nhận tham dự và gắn bản đồ Google của địa điểm tiệc cưới.",
  },
  {
    title: "Chia sẻ link",
    detail:
      "Lấy link hoặc mã QR rồi gửi cho khách. Mọi chỉnh sửa sau đó đều tự cập nhật.",
  },
];

// Section 6 - features. Icon names map to @phosphor-icons/react in Features.tsx.
export type Feature = {
  icon: "rsvp" | "map" | "share" | "device" | "wishes" | "edit";
  title: string;
  desc: string;
};

export const features: Feature[] = [
  { icon: "rsvp", title: "Xác nhận tham dự", desc: "Khách bấm xác nhận ngay trên thiệp, bạn theo dõi số người và số bàn." },
  { icon: "map", title: "Bản đồ Google", desc: "Gắn địa điểm tiệc, khách chạm một lần là có ngay chỉ đường." },
  { icon: "share", title: "Link và mã QR", desc: "Chia sẻ qua Zalo, Messenger hoặc in mã QR lên thiệp giấy." },
  { icon: "device", title: "Mở trên mọi máy", desc: "Không cần cài app, chạy mượt trên cả những điện thoại đời cũ." },
  { icon: "wishes", title: "Sổ lời chúc", desc: "Khách để lại lời chúc, bạn lưu lại trọn vẹn từng dòng." },
  { icon: "edit", title: "Đổi mẫu bất cứ lúc nào", desc: "Sửa tên, màu và ảnh kể cả sau khi đã gửi link cho khách." },
];

// Section 7 - testimonials. 2 couples + 1 studio.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tụi mình gửi link qua Zalo, ông bà ở quê mở bằng điện thoại là xem được liền. Phần xác nhận tham dự giúp chốt số bàn dễ hơn hẳn.",
    name: "Thu Hà và Quốc Anh",
    role: "Cặp đôi tại Hà Nội",
    initials: "TQ",
  },
  {
    quote:
      "Mình đổi tên với màu thiệp lúc nửa đêm mà vẫn xong trong mười phút. Khách khen thiệp nhìn sang mà không hề rập khuôn.",
    name: "Mỹ Duyên và Tấn Phát",
    role: "Cặp đôi tại TP.HCM",
    initials: "MT",
  },
  {
    quote:
      "Studio mình làm thiệp online cho gần ba mươi cặp mỗi mùa cưới. Mỗi khách một link riêng, chỉnh sửa nhanh, khỏi gửi file qua lại.",
    name: "Nguyễn Bảo Trân",
    role: "The Vow Studio",
    initials: "BT",
  },
];

// Section 8 - FAQ. Last item surfaces the B2B / studio use case.
export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Tạo thiệp có mất phí không?",
    a: "Bạn tạo và xem thử thiệp hoàn toàn miễn phí. Chỉ khi muốn gỡ logo và mở RSVP không giới hạn thì mới cần nâng cấp, chi tiết có ở trang Bảng giá.",
  },
  {
    q: "Khách có cần cài ứng dụng để mở thiệp không?",
    a: "Không. Thiệp mở trực tiếp trên trình duyệt điện thoại hoặc máy tính. Bạn chỉ cần gửi link qua Zalo, Messenger hoặc in mã QR lên thiệp giấy.",
  },
  {
    q: "Tôi sửa được thiệp sau khi đã gửi link không?",
    a: "Được. Mọi thay đổi về tên, ngày, màu hay địa điểm sẽ cập nhật ngay trên link cũ, khách không cần nhận lại link mới.",
  },
  {
    q: "Thông tin khách xác nhận tham dự có an toàn không?",
    a: "Danh sách RSVP và lời chúc chỉ riêng bạn xem được. Chúng tôi không bán dữ liệu và không chèn quảng cáo lên thiệp của bạn.",
  },
  {
    q: "Tôi làm studio cưới, dùng cho nhiều khách hàng được không?",
    a: "Có gói riêng cho studio và người tổ chức: quản lý nhiều thiệp trong một tài khoản, mỗi khách một link, chỉnh sửa và bàn giao nhanh.",
  },
];
