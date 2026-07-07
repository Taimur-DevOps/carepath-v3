"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SolutionCard({
  icon,
  title,
  description,
  items,
  index = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-line bg-white p-8 sm:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-path-50 text-path-700">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-500">
              {description}
            </p>
          </div>
        </div>
      </div>
      <ul className="mt-7 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-slate-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
