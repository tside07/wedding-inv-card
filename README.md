# thiệpcưới.vn - Marketing landing page

Trang landing cho nền tảng thiệp cưới online của người Việt. Chỉ là trang chủ (`/`):
không có editor, dashboard hay trang pricing (đúng theo design brief).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind v4 (`@tailwindcss/postcss`)
- `motion/react` cho chuyển động
- `@phosphor-icons/react` cho icon (weight `light` đồng nhất)
- `next/font` cho Be Vietnam Pro + JetBrains Mono

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # bản production
```

> Lưu ý: `next/font/google` tải font lúc build, nên lần build đầu cần có mạng.

## Về font hiển thị (PP Neue Montreal)

Brief yêu cầu **PP Neue Montreal** cho tiêu đề. Đây là font có bản quyền nên không
kèm sẵn trong repo. Hệ thống font đã được cấu hình sẵn fallback:

```
--font-display: "PP Neue Montreal", var(--font-bvp), ui-sans-serif, system-ui
```

Hiện trang chạy bằng **Be Vietnam Pro (500)** cho tiêu đề (đúng fallback brief đặt ra).
Khi có file PP Neue Montreal, chỉ cần self-host qua `next/font/local` và trỏ
`--font-display` vào là tiêu đề tự đổi sang, không phải sửa component nào khác.

## Các trang ngoài phạm vi

Vài nút trỏ tới `/pricing`, `/editor`, `/xem-thu`, `/login`. Các trang này nằm ngoài
phạm vi của task (chỉ làm landing page) nên hiện sẽ trả về 404. Đó là hành vi mong đợi.

## Cấu trúc

```
app/
  layout.tsx        font + metadata
  page.tsx          ghép 9 section
  globals.css       design tokens (Terracotta + Slate), reduced-motion
  fonts.ts          next/font
components/
  Navbar  Hero  StatsBar  Carousel  ScrollDemo
  Features  Testimonials  Faq  CtaFooter
  Button  CardPreview     (dùng chung)
lib/
  data.ts           toàn bộ nội dung tĩnh (số liệu là dữ liệu mẫu)
```
