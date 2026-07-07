"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface TimelineStep {
  icon: ReactNode;
  title: string;
  description: string;
  actor?: string;
}

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        aria-hidden="true"
        className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-amber-500 via-path-300 to-path-100 sm:block"
      />
      <ol className="space-y-10">
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-6 sm:pl-0"
          >
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-path-100 bg-white text-path-700 shadow-sm">
              {step.icon}
            </div>
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-amber-600">
                  Step {i + 1}
                </span>
                {step.actor && (
                  <span className="rounded-full bg-path-50 px-3 py-0.5 text-xs font-medium text-path-700">
                    {step.actor}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
