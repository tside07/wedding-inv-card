import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";

// Body + UI. Full Vietnamese glyph coverage. Weights capped at 400 / 500.
export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-bvp",
  display: "swap",
});

// Card ornament micro-labels only ("TRÂN TRỌNG KÍNH MỜI"). Never in page UI.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbm",
  display: "swap",
});
