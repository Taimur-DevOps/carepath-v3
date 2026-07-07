"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CtaBanner({
  title = "Ready to Extend Care Beyond the Clinic?",
  description = "Let's discuss how Carepath can help your organisation improve patient retention and deliver continuous care.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-path-950 py-20 sm:py-24">
      <div className="container-c1">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-path-gradient px-8 py-16 text-center sm:px-16"
        >
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/30 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative text-3xl font-semibold text-balance text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={`mailto:${siteConfig.email}`} variant="white" size="lg">
              <Mail className="h-4.5 w-4.5" aria-hidden="true" />
              Email Us
            </Button>
            <Button href={siteConfig.whatsappLink} variant="outline-dark" size="lg" external>
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
