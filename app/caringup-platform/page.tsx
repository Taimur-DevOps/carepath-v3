import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { PlatformMockup } from "@/components/shared/platform-mockup";
import { CtaBanner } from "@/components/shared/cta-banner";
import { platformFeatures, evidenceHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "CaringUp Platform",
  description:
    "CaringUp is the technology that powers the Carepath monitoring service, validated in Asia's largest RPM randomised controlled trial and listed on the WHO Digital Health Atlas.",
  alternates: { canonical: "/caringup-platform" },
};

export default function CaringUpPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="CaringUp Platform"
        title="The Technology Behind Every Carepath Programme"
        description="CaringUp is how Carepath delivers the monitoring service — it supports the programme, it doesn't replace the people running it."
      />

      <section className="py-24 sm:py-28">
        <div className="container-c1">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="One Platform, Two Views"
                title="A Connected App for Patients, a Clear View for Your Care Team"
                description="Patients report symptoms and progress from the CaringUp app. Carepath's care team reviews that same information on a live dashboard, against the protocol your clinic defines."
                align="left"
                className="mx-0"
              />
            </div>
            <PlatformMockup className="mx-auto w-full max-w-md" />
          </div>
        </div>
      </section>

      <section className="bg-path-950 py-20 sm:py-24">
        <div className="container-c1">
          <SectionHeader
            eyebrow="Clinically Validated"
            title="Backed by Evidence, Not Just Engineering"
            description="CaringUp isn't an unproven app — it has been evaluated in a formal clinical trial and is recognised on a global health registry."
            tone="white"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {evidenceHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-400">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <div className="container-c1">
          <SectionHeader
            eyebrow="What CaringUp Does"
            title="Every Feature Supports the Monitoring Programme"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((item, i) => (
              <FeatureCard
                key={item.title}
                icon={<item.icon className="h-6 w-6" aria-hidden="true" />}
                title={item.title}
                description={item.description}
                index={i}
                tone={i % 2 === 0 ? "path" : "amber"}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="See CaringUp Behind a Live Programme"
        description="We'll show you how the app, dashboard and escalation workflow come together for a real monitoring programme."
      />
    </>
  );
}
