import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Carepath about building a Remote Patient Monitoring programme for your hospital, clinic or specialist practice.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Monitoring Programme"
        description="Whether you are a specialist clinic, hospital or healthcare group, we'd love to discuss how Carepath can help improve patient retention and deliver better continuity of care."
      />

      <section className="py-24 sm:py-28">
        <div className="container-c1">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-8">
            <div className="space-y-4">
              <ContactInfoCard
                icon={Mail}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactInfoCard
                icon={MessageCircle}
                label="WhatsApp"
                value={siteConfig.whatsapp}
                href={siteConfig.whatsappLink}
                external
              />
              <ContactInfoCard icon={MapPin} label="Address" value={siteConfig.address} />
            </div>

            <div className="rounded-3xl border border-line bg-white p-8 shadow-[0_1px_2px_rgba(11,21,38,0.04)] sm:p-10">
              <h2 className="text-xl font-semibold text-ink">Send an Enquiry</h2>
              <p className="mt-2 text-[15px] text-slate-500">
                Tell us about your clinic and we&apos;ll get back to you within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-path-50 text-path-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{label}</div>
        <div className="mt-1 text-[15px] font-medium text-ink">{value}</div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block transition-transform hover:-translate-y-0.5"
    >
      {content}
    </a>
  );
}
