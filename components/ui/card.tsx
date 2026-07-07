import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "card-surface group relative rounded-2xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-path-200 hover:shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "path",
}: {
  children: React.ReactNode;
  tone?: "path" | "amber" | "white";
}) {
  const toneClasses = {
    path: "border-line bg-white text-path-700",
    amber: "border-line bg-white text-amber-600",
    white: "border-white/20 bg-white/10 text-white/90",
  };
  const dotClasses = {
    path: "bg-path-500",
    amber: "bg-amber-500",
    white: "bg-amber-400",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em]",
        toneClasses[tone]
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotClasses[tone])} aria-hidden="true" />
      {children}
    </span>
  );
}
