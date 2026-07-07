import type { Metadata } from "next";
import { Stethoscope, HeartHandshake, ShieldCheck, Building2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "About Carepath",
  description:
    "Carepath is a clinical monitoring services partner — not a hospital, telemedicine, or treatment provider. We help healthcare providers extend care beyond the consultation.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Building2,
    title: "We Partner, Not Replace",
    description:
      "Carepath works alongside hospitals and clinics as an operational partner — never as a substitute for the care they provide.",
  },
  {
    icon: Stethoscope,
    title: "Doctors Stay Central",
    description:
      "Every clinical decision, protocol and escalation criterion is defined and owned by the treating physician.",
  },
  {
    icon: HeartHandshake,
    title: "Patients Stay Supported",
    description:
      "Between appointments, patients receive continuous engagement, education and monitoring — never treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Powered by CaringUp",
    description:
      "Our monitoring service runs on the CaringUp platform, built specifically to support structured RPM programmes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Carepath"
        title="A Monitoring Partner, Not a Replacement for Your Clinic"
        description="We help healthcare providers extend care beyond the consultation through structured monitoring, patient engagement and timely clinical escalation."
      />

      <section className="py-24 sm:py-28">
        <div className="container-c1">
          <div className="mx-auto max-w-3xl">
            <SectionHeader eyebrow="Our Mission" title="Extending Care Beyond the Consultation" align="left" className="mx-0" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Carepath is a Clinical Monitoring Services Company. We partner with
              hospitals, clinics and specialists to run structured Remote
              Patient Monitoring programmes on their behalf — engaging
              patients between visits, following the protocol the clinic
              defines, and escalating anyone who needs attention back to
              their treating physician.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We are not a hospital, telemedicine provider, diagnostic
              service, or treatment provider. We don&apos;t diagnose, treat,
              or prescribe. Doctors remain responsible for every clinical
              decision. Carepath&apos;s role is to operate the monitoring
              programme: onboarding patients, keeping them engaged,
              documenting their progress, and identifying who needs to be
              seen again — sooner rather than later.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              That service runs on the CaringUp platform, built to support
              exactly this kind of structured, protocol-driven monitoring
              programme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <div className="container-c1">
          <SectionHeader eyebrow="How We Operate" title="The Principles Behind Every Programme" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, i) => (
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

      <CtaBanner
        title="Considering a Monitoring Programme for Your Clinic?"
        description="Let's talk through your protocol, your patients, and how Carepath would fit alongside your existing team."
      />
    </>
  );
}
