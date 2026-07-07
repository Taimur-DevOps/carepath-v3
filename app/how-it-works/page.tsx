import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Timeline } from "@/components/shared/timeline";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { howItWorksSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how a Carepath monitoring programme runs end to end — from the doctor's prescription to onboarding, ongoing engagement, escalation and clinical review.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From Prescription to Escalation, Every Step Stays on Protocol"
        description="A Carepath monitoring programme is a closed loop: it starts with your clinic and always returns to your clinic."
      />

      <section className="py-24 sm:py-28">
        <div className="container-c1">
          <SectionHeader
            title="The Monitoring Journey"
            description="Eight steps, run by three people: the clinic, Carepath, and the patient."
            align="left"
            className="mx-0"
          />
          <div className="mt-16">
            <Timeline
              steps={howItWorksSteps.map((step) => ({
                ...step,
                icon: <step.icon className="h-5 w-5" aria-hidden="true" />,
              }))}
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="See This Workflow Running for Your Patients"
        description="We'll walk through your protocol and show exactly how onboarding, monitoring and escalation would work for your clinic."
      />
    </>
  );
}
