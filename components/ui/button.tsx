"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn-style button, retuned to the thiệpcưới.vn token set.
// Max font weight 500. Radius locked to 8px (no pills).
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-[14px] font-medium leading-none transition-[transform,background-color,border-color,color,opacity] duration-150 outline-none focus-visible:outline-2 focus-visible:outline-[#B87C5B] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-[#3D2B1F] text-[#F5EDE6] hover:bg-[#2C1F15]",
        accent: "bg-[#B87C5B] text-white hover:opacity-90",
        ghost:
          "border-[0.5px] border-[#E8D0BB] bg-transparent text-[#5C3B25] hover:border-[#B87C5B] hover:text-[#B87C5B]",
      },
      size: {
        sm: "px-4 py-1.5 text-[13px]",
        md: "px-5 py-2 text-[13px]",
        lg: "px-6 py-3 text-[14px]",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
