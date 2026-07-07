"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/card";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-canvas pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div className="grid-noise grid-fade-mask pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-path-100/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-24 h-[340px] w-[340px] rounded-full bg-amber-100/60 blur-3xl" aria-hidden="true" />

      <div className="container-c1 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow tone="path">{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
