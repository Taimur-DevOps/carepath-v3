"use client";

import { motion } from "framer-motion";

export function StatCard({
  value,
  label,
  index = 0,
}: {
  value: string;
  label: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
    >
      <div className="text-3xl font-semibold text-white sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </motion.div>
  );
}
