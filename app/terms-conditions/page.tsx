import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing the use of Carepath's clinical monitoring services and website.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="This placeholder outlines the basic terms of engagement. Replace it with your finalised, legally reviewed terms before launch."
      />
      <section className="py-20">
        <div className="container-c1 prose prose-slate mx-auto max-w-3xl prose-headings:font-semibold prose-headings:text-ink prose-p:text-slate-600 prose-p:leading-relaxed">
          <h2>1. Nature of Service</h2>
          <p>
            Carepath is a Clinical Monitoring Services Company. Carepath is not a
            hospital, telemedicine provider, diagnostic service, or
            treatment provider. Carepath does not diagnose, treat, or prescribe.
          </p>
          <h2>2. Clinical Responsibility</h2>
          <p>
            All clinical decisions remain the responsibility of the
            patient&apos;s treating physician. Carepath operates monitoring
            programmes strictly according to the protocol and escalation
            criteria defined by the partnering hospital or clinic.
          </p>
          <h2>3. Use of the Website</h2>
          <p>
            This website is provided for informational purposes to
            hospitals, clinics and healthcare professionals evaluating Carepath&apos;s
            monitoring services. It is not intended for patients seeking
            medical advice or emergency care.
          </p>
          <h2>4. Partnering Organisations</h2>
          <p>
            Any monitoring programme is governed by a separate service
            agreement between Carepath and the partnering hospital or clinic.
          </p>
          <h2>5. Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
