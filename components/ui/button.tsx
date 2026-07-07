import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-path-gradient text-white shadow-soft hover:brightness-[1.07] hover:shadow-card hover:-translate-y-0.5 active:scale-[0.98]",
        accent:
          "bg-amber-500 text-path-950 shadow-glow hover:bg-amber-400 hover:-translate-y-0.5 active:scale-[0.98]",
        outline:
          "border border-line text-ink bg-white hover:border-path-400 hover:text-path-700 active:scale-[0.98]",
        "outline-dark":
          "border border-white/25 text-white hover:border-white/50 hover:bg-white/10 active:scale-[0.98]",
        ghost:
          "text-ink/80 hover:text-ink hover:bg-ink/5 active:scale-[0.98]",
        white:
          "bg-white text-path-700 hover:bg-white/90 shadow-soft hover:-translate-y-0.5 active:scale-[0.98]",
        subtle:
          "bg-path-50 text-path-800 hover:bg-path-100 active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-6 text-[15px]",
        lg: "h-14 px-8 text-base",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant,
  size,
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
