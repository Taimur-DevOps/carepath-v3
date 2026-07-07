"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon,
  title,
  description,
  index = 0,
  tone = "path",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
  tone?: "path" | "amber";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="h-full">
        <div
          className={cn(
            "mb-6 flex h-12 w-12 items-center justify-center rounded-2xl",
            tone === "path"
              ? "bg-path-50 text-path-700"
              : "bg-amber-50 text-amber-600"
          )}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
