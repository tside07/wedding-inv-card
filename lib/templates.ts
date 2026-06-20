// ============================================================
// thiệpcưới.vn — danh mục mẫu thiệp (mock data, frontend-only)
// Mỗi mẫu map tới 1 ThemeKey trong lib/tokens.ts (gradient + màu chữ + tên hoa văn).
// Thứ tự khớp ORDER trong components/sections/CardThemes.tsx để nhất quán.
// ============================================================

import type { ThemeKey } from "@/lib/tokens";

export interface Template {
  slug: string; // dùng cho URL: /templates/[slug]
  themeKey: ThemeKey; // nối tới gradient/label/name trong tokens.ts
  name: string; // tên hiển thị, vd "Ivory Romance"
  tagline: string; // 1 dòng ngắn dưới tên ở trang danh sách
  description: string; // 1–2 câu cho trang chi tiết
  tags: string[]; // lái filter chips, vd ["Cổ điển", "Tối giản"]
  badge?: "Phổ biến" | "Mới";
  sample: { groom: string; bride: string; date: string; venue: string };
}

export const TEMPLATES: Template[] = [
  {
    slug: "ivory-romance",
    themeKey: "ivory",
    name: "Ivory Romance",
    tagline: "Tông ngà ấm, lãng mạn cổ điển",
    description:
      "Sắc ngà ấm áp cùng kiểu chữ serif thanh lịch — lựa chọn an toàn và sang trọng cho mọi câu chuyện tình.",
    tags: ["Cổ điển", "Sang trọng"],
    badge: "Phổ biến",
    sample: { groom: "Minh", bride: "Linh", date: "15 · 09 · 2025", venue: "Nhà hàng Emerald, Q.1" },
  },
  {
    slug: "blush-peach",
    themeKey: "blush",
    name: "Blush Peach",
    tagline: "Hồng đào dịu dàng, nữ tính",
    description:
      "Gam hồng đào nhẹ nhàng, tươi sáng — hợp với những lễ cưới ngọt ngào, ấm cúng và đầy cảm xúc.",
    tags: ["Hiện đại", "Tối giản"],
    badge: "Mới",
    sample: { groom: "Phong", bride: "Chi", date: "20 · 10 · 2025", venue: "The Log, Tây Hồ" },
  },
  {
    slug: "garden-sage",
    themeKey: "sage",
    name: "Garden Sage",
    tagline: "Xanh lá rêu, thiên nhiên trong trẻo",
    description:
      "Tông xanh sage tươi mát gợi không gian vườn — dành cho lễ cưới ngoài trời, mộc mạc mà tinh tế.",
    tags: ["Garden", "Tối giản"],
    sample: { groom: "Hải", bride: "Vy", date: "05 · 11 · 2025", venue: "Garden Villa, Đà Lạt" },
  },
  {
    slug: "champagne",
    themeKey: "champagne",
    name: "Champagne",
    tagline: "Vàng sâm panh, ấm và quý phái",
    description:
      "Sắc vàng champagne ánh kim nhẹ — sang trọng, ấm áp, hợp với tiệc cưới buổi tối lộng lẫy.",
    tags: ["Sang trọng", "Cổ điển"],
    sample: { groom: "Quân", bride: "Thảo", date: "12 · 12 · 2025", venue: "JW Marriott, Hà Nội" },
  },
  {
    slug: "rose-bloom",
    themeKey: "rose",
    name: "Rose Bloom",
    tagline: "Hồng phấn nở rộ, ngọt ngào",
    description:
      "Gam hồng phấn tươi tắn cùng nét chữ mềm mại — rạng rỡ và lãng mạn cho ngày trọng đại.",
    tags: ["Hiện đại", "Sang trọng"],
    sample: { groom: "Đức", bride: "Hà", date: "18 · 01 · 2026", venue: "Riverside Palace, Q.4" },
  },
  {
    slug: "lavender-luxe",
    themeKey: "lavender",
    name: "Lavender Luxe",
    tagline: "Tím oải hương, mộng mơ sang trọng",
    description:
      "Sắc tím lavender êm dịu, quý phái — mang đến cảm giác mộng mơ và khác biệt cho thiệp mời.",
    tags: ["Sang trọng", "Hiện đại"],
    sample: { groom: "Tuấn", bride: "An", date: "22 · 02 · 2026", venue: "Capella, Hội An" },
  },
  {
    slug: "dusk-blue",
    themeKey: "dusk",
    name: "Dusk Blue",
    tagline: "Xanh hoàng hôn, trầm và hiện đại",
    description:
      "Tông xanh dusk thanh lịch, hiện đại — lựa chọn cá tính, nhẹ nhàng mà vẫn rất tinh tế.",
    tags: ["Hiện đại", "Tối giản"],
    sample: { groom: "Nam", bride: "Trang", date: "08 · 03 · 2026", venue: "InterContinental, Đà Nẵng" },
  },
  {
    slug: "midnight-gold",
    themeKey: "midnight",
    name: "Midnight Gold",
    tagline: "Nền tối ánh vàng, lộng lẫy đẳng cấp",
    description:
      "Nền nâu thẫm điểm chữ vàng gold — đẳng cấp, kịch tính, hoàn hảo cho tiệc cưới sang trọng về đêm.",
    tags: ["Sang trọng", "Cổ điển"],
    badge: "Phổ biến",
    sample: { groom: "Khôi", bride: "My", date: "14 · 02 · 2026", venue: "Grand Ballroom, Q.1" },
  },
];

export const TEMPLATE_TAGS = [
  "Tất cả",
  "Cổ điển",
  "Tối giản",
  "Garden",
  "Sang trọng",
  "Hiện đại",
] as const;

export const getTemplate = (slug: string): Template | undefined =>
  TEMPLATES.find((t) => t.slug === slug);

// Mẫu liên quan: ưu tiên cùng tag, bù thêm mẫu kế tiếp, loại chính nó.
export const getRelatedTemplates = (slug: string, count = 4): Template[] => {
  const current = getTemplate(slug);
  if (!current) return TEMPLATES.slice(0, count);
  const sameTag = TEMPLATES.filter(
    (t) => t.slug !== slug && t.tags.some((tag) => current.tags.includes(tag)),
  );
  const rest = TEMPLATES.filter(
    (t) => t.slug !== slug && !sameTag.includes(t),
  );
  return [...sameTag, ...rest].slice(0, count);
};
