import type { Metadata } from "next";
import { cormorant, beVietnam } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "thiệpcưới.vn - Thiệp cưới online có RSVP và bản đồ",
  description:
    "Tạo thiệp cưới online đẹp và riêng, có xác nhận tham dự, bản đồ Google và link chia sẻ. Khách mở ngay trên điện thoại, không cần cài ứng dụng.",
  openGraph: {
    title: "thiệpcưới.vn - Thiệp cưới online cho người Việt",
    description:
      "Thiệp cưới online có RSVP, bản đồ và link chia sẻ. Hoàn thành chỉ trong vài phút.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${beVietnam.variable}`}>
      <body>{children}</body>
    </html>
  );
}
