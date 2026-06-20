import { Cormorant_Garamond, Be_Vietnam_Pro } from "next/font/google";

// Display / headings — serif, ALL CAPS in use. Weights capped at 400 / 500.
// 'vietnamese' subset is required so heading diacritics (ế ữ ờ ậ) render.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Body / UI — sans. Weight 300 (Light) is the default body weight (DREAMDAY feel).
export const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500"],
  variable: "--font-bvp",
  display: "swap",
});
