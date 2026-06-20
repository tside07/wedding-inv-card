import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Standard shadcn class-name merge helper used by components/ui/*.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// theme.acc is a 6-digit hex; append an alpha byte for translucent fills/borders
// without pulling a color library. e.g. hexAlpha("#B87C5B", 0.3) -> "#B87C5B4D".
export function hexAlpha(hex: string, alpha: number) {
  const a = Math.round(Math.min(1, Math.max(0, alpha)) * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${a}`;
}
