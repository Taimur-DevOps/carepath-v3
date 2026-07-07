"use client";

import { motion } from "framer-motion";
import { Check, Building2 } from "lucide-react";
import { clinicResponsibilities, c1Responsibilities } from "@/lib/data";
import { cn } from "@/lib/utils";

function ResponsibilityColumn({
  label,
  items,
  tone,
  index,
}: {
  label: string;
  items: string[];
  tone: "path" | "amber";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex-1 rounded-3xl border p-8 sm:p-10",
        tone === "path"
          ? "border-path-100 bg-path-50/50"
          : "border-amber-100 bg-amber-50/40"
      )}
    >
      <div
        className={cn(
          "mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white",
          tone === "path" ? "bg-path-800" : "bg-amber-600"
        )}
      >
        <Building2 className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-ink">{label}</h3>
      <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] text-slate-600">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                tone === "path" ? "text-path-700" : "text-amber-600"
              )}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ResponsibilitySplit() {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <ResponsibilityColumn label="Your Clinic" items={clinicResponsibilities} tone="path" index={0} />
        <ResponsibilityColumn label="Carepath" items={c1Responsibilities} tone="amber" index={1} />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-8 max-w-xl rounded-2xl border border-line bg-white px-6 py-4 text-center text-sm font-medium text-path-900 shadow-sm"
      >
        Clinical responsibility always remains with the treating physician.
      </motion.p>
    </div>
  );
}
