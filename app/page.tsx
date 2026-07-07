import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Challenge } from "@/components/home/challenge";
import { Specialties } from "@/components/home/specialties";
import { CareLoop } from "@/components/shared/care-loop";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { ResponsibilitySplit } from "@/components/shared/responsibility-split";
import { CtaBanner } from "@/components/shared/cta-banner";
import { whyPartner, patientBenefits } from "@/lib/data";

export const metadata: Metadata = {
  title: "Remote Patient Monitoring for Hospitals & Clinics",
  description:
    "Carepath partners with hospitals and clinics to deliver structured Remote Patient Monitoring programmes powered by the CaringUp platform — improving retention, protecting doctor time, and supporting earlier intervention.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Challenge />

      <section className="py-24 sm:py-28">
        <div className="container-c1">
          <SectionHeader
            eyebrow="How Carepath Works"
            title="A Clear Division of Responsibility"
            description="Carepath operates alongside your clinic, never in place of it. Every programme runs on the protocol your doctors define."
          />
          {/* <div className="mt-14 overflow-hidden rounded-3xl bg-path-950 p-6 sm:p-10"> */}
            {/* <CareLoop className="mx-auto h-auto w-full max-w-xl" /> */}
          {/* </div> */}
          <div className="mt-10">
            <ResponsibilitySplit />
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <div className="container-c1">
          <SectionHeader
            eyebrow="Why Hospitals Partner with Carepath"
            title="Built for Hospitals, Clinics and the Doctors Who Run Them"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPartner.map((item, i) => (
              <FeatureCard
                key={item.title}
                icon={<item.icon className="h-6 w-6" aria-hidden="true" />}
                title={item.title}
                description={item.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-c1">
          <SectionHeader
            eyebrow="Benefits for Patients"
            title="Continuous Support Between Appointments"
            tone="path"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {patientBenefits.map((item, i) => (
              <FeatureCard
                key={item.title}
                icon={<item.icon className="h-6 w-6" aria-hidden="true" />}
                title={item.title}
                description={item.description}
                index={i}
                tone="amber"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <div className="container-c1">
          <SectionHeader
            eyebrow="Specialties We Support"
            title="Structured Monitoring Across Key Clinical Areas"
          />
          <div className="mt-14">
            <Specialties />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
