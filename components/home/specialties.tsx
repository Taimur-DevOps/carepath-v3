"use client";

import { motion } from "framer-motion";
import { specialties } from "@/lib/data";

export function Specialties() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {specialties.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-path-100 hover:shadow-[0_24px_48px_-12px_rgba(10,38,71,0.12)]"
        >
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-path-50 text-path-700">
            <group.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="text-base font-semibold text-ink">{group.category}</h3>
          <ul className="mt-4 space-y-2">
            {group.items.map((item) => (
              <li key={item} className="text-sm text-slate-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
