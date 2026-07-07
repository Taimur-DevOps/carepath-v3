"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "amber",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "amber" | "path" | "white";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "white" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "white" ? "text-white/70" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
