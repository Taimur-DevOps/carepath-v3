import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SolutionCard } from "@/components/shared/solution-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { solutionGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Structured Remote Patient Monitoring programmes for chronic disease, mental health, oncology and post-hospital care — all run on your clinical protocol.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Monitoring Programmes Built Around Your Speciality"
        description="Every programme is configured to the protocol your clinicians define — Carepath adapts the workflow, not the other way around."
      />

      <section className="py-24 sm:py-28">
        <div className="container-c1">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {solutionGroups.map((group, i) => (
              <SolutionCard
                key={group.title}
                icon={<group.icon className="h-6 w-6" aria-hidden="true" />}
                title={group.title}
                description={group.description}
                items={group.items}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Different Speciality in Mind?"
        description="If your department needs continuous patient engagement between visits, we can likely build a programme for it."
      />
    </>
  );
}
