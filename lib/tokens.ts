// ============================================================
// thiệpcưới.vn — card-theme tokens (DREAMDAY edition)
// These gradients live INSIDE the arch cards only — they never bleed into
// page sections. `label` is the theme's text/overlay color tuned for contrast.
// ============================================================

export const themes = {
  ivory: { from: "#F2E0D0", to: "#FAF4EE", label: "#7A4A32", name: "IVORY ROMANCE" },
  sage: { from: "#D8ECD4", to: "#EDF4EC", label: "#3B5A38", name: "GARDEN SAGE" },
  lavender: { from: "#D4CDE8", to: "#F0EBF8", label: "#5A4A8A", name: "LAVENDER LUXE" },
  midnight: { from: "#2C2018", to: "#4A3826", label: "#E8C77A", name: "MIDNIGHT GOLD" },
  rose: { from: "#F0D0D8", to: "#FBF0F2", label: "#8A4A5C", name: "ROSE BLOOM" },
  blush: { from: "#F6DBD2", to: "#FCF2EE", label: "#9C5848", name: "BLUSH PEACH" },
  champagne: { from: "#EBDCC0", to: "#F8F1E2", label: "#8A6A38", name: "CHAMPAGNE" },
  dusk: { from: "#C7D3DE", to: "#EEF2F6", label: "#3F5468", name: "DUSK BLUE" },
} as const;

export type ThemeKey = keyof typeof themes;
export type Theme = (typeof themes)[ThemeKey];
