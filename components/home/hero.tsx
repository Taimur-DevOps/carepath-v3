"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, ShieldCheck, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const programmeStats = [
  { label: "Adherence", value: "92%" },
  { label: "Check-ins This Week", value: "6/7" },
  { label: "Avg. Escalation Response", value: "4h" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div className="grid-noise grid-fade-mask pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-path-100/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-amber-100/60 blur-3xl" aria-hidden="true" />

      <div className="container-c1 relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow tone="path">Clinical Monitoring Services</Eyebrow>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
            Extend Care <span className="text-gradient-path">Beyond the Clinic</span>
          </h1>

          <p className="mt-6 text-xl font-medium leading-snug text-slate-700">
            Retain more patients. Improve outcomes. Without increasing doctor workload.
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500">
            Carepath partners with hospitals and clinics to deliver structured
            Remote Patient Monitoring programmes powered by the CaringUp
            platform. Doctors remain in control of clinical decisions while
            Carepath monitors, engages and supports patients between
            appointments according to your clinical protocols.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Monitoring Programme
              <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button href={siteConfig.whatsappLink} variant="outline" size="lg" external>
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="h-4 w-4 text-path-600" aria-hidden="true" />
              CaringUp is validated by Asia&apos;s largest RPM randomised
              controlled trial, led by Universiti Malaya
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <Globe2 className="h-4 w-4 text-path-600" aria-hidden="true" />
              Listed on the WHO Digital Health Atlas
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float card-surface rounded-3xl p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-slate-500">
                  Live Programme
                </p>
                <p className="text-lg font-semibold text-ink">
                  Amina K. — Diabetes Programme
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 font-mono text-xs text-amber-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                On Track
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-path-950 p-4">
              <svg viewBox="0 0 300 70" className="h-16 w-full text-path-300">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,35 40,35 55,10 68,60 82,35 120,35 135,20 150,35 190,35 205,8 218,62 232,35 300,35"
                />
              </svg>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {programmeStats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-surface p-3">
                  <p className="text-[10px] text-slate-500">{stat.label}</p>
                  <p className="mt-1 font-mono text-base font-semibold text-path-700">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-white p-4 shadow-soft sm:block">
            <p className="text-xs text-slate-500">Escalated to Clinic</p>
            <p className="mt-1 text-2xl font-semibold text-path-600">
              Reviewed Same Day
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
