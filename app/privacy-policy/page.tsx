import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Carepath collects, uses and protects information as part of its clinical monitoring services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This placeholder outlines how Carepath approaches data handling. Replace it with your finalised, legally reviewed policy before launch."
      />
      <section className="py-20">
        <div className="container-c1 prose prose-slate mx-auto max-w-3xl prose-headings:font-semibold prose-headings:text-ink prose-p:text-slate-600 prose-p:leading-relaxed">
          <h2>1. Information We Collect</h2>
          <p>
            As part of operating Remote Patient Monitoring programmes on
            behalf of partnering hospitals and clinics, Carepath and the CaringUp
            platform may collect patient-submitted health information,
            contact details, and programme engagement data, strictly in
            line with the protocol defined by the treating clinic.
          </p>
          <h2>2. How We Use Information</h2>
          <p>
            Information is used only to operate the monitoring programme:
            onboarding, engagement, documentation, and escalation back to
            the treating physician. Carepath does not use patient information to
            make clinical decisions.
          </p>
          <h2>3. Data Sharing</h2>
          <p>
            Monitoring data is shared with the partnering hospital or clinic
            responsible for the patient&apos;s care. Carepath does not sell
            patient information to third parties.
          </p>
          <h2>4. Data Security</h2>
          <p>
            The CaringUp platform is designed for the operational and
            data-handling standards that healthcare monitoring programmes
            require.
          </p>
          <h2>5. Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
