import Link from "next/link";
import { Mail, MessageCircle, Globe, Share2, AtSign } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/site";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-path-950 text-white/70">
      <div className="container-c1 grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo className="text-white" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Carepath is a clinical monitoring services partner that helps hospitals
            and clinics extend care beyond the consultation. We manage
            structured Remote Patient Monitoring programmes on the CaringUp
            platform, following each clinic&apos;s protocol — clinical
            decisions always remain with the treating physician.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Company
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Legal
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Talk to us
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Globe, label: "LinkedIn" },
              { icon: Share2, label: "Twitter" },
              { icon: AtSign, label: "Facebook" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-c1 flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p>Carepath is a monitoring services partner — not a hospital, telemedicine, or treatment provider.</p>
        </div>
      </div>
    </footer>
  );
}
