"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { challenges } from "@/lib/data";

export function Challenge() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="container-c1">
        <SectionHeader
          eyebrow="The Challenge"
          title="Healthcare Doesn't End When Patients Leave the Clinic"
          description="Patients living with chronic conditions require continuous support between consultations. Without structured monitoring:"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {challenges.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[var(--color-error)]">
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-[15px] font-medium text-slate-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
