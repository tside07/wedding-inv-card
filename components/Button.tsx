import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-2.5 text-[14px] font-medium leading-none whitespace-nowrap transition-[transform,background-color,border-color,color] duration-200 active:translate-y-[1px]";

// Contrast audited in the brief: primary ~11:1, accent ~4.8:1, ghost ~6.2:1.
const variants: Record<Variant, string> = {
  primary: "bg-accent-dark text-[#f5ede6] hover:bg-[#2c1f15]",
  accent: "bg-accent text-white hover:bg-[#a96d4c]",
  ghost:
    "border-[0.5px] border-line bg-transparent text-[#5c3b25] hover:border-accent hover:text-accent",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
