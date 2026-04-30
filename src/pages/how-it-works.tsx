import { RadioTower, ShieldCheck, Timer, Workflow } from "lucide-react";

import { dispatchControlImage } from "@/components/roadlines/assets";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  InfoBand,
  IntegratedModelSection,
  PageHero,
  ServicesGrid,
  TimelineSection,
} from "@/components/roadlines/sections";
import { coreServices } from "@/components/roadlines/data";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorksPage() {
  const benefits = [
    { title: "Less downtime", icon: Timer },
    { title: "One coordinated request", icon: Workflow },
    { title: "Safety-led response", icon: ShieldCheck },
    { title: "Clear communication", icon: RadioTower },
  ];

  return (
    <PageShell>
      <main>
        {/* Hero */}
        <PageHero
          title="How GPS Roadlines Works – Fast, Simple & Reliable Road Support"
          text="From request to resolution – towing, roadside assistance & transport made easy"
          image={dispatchControlImage}
          ctaLabel="Request Service / Get a Quote"
          ctaHref="/get-in-touch"
        />

        {/* Step-by-step process */}
        <TimelineSection detailed />

        {/* Integrated Service Flow */}
        <IntegratedModelSection />

        {/* Service types covered */}
        <ServicesGrid
          services={coreServices}
          title="Service Types Covered in Process"
          text="Every request follows the same structured dispatch workflow — towing, roadside assistance, vehicle recovery, mobile mechanic, and transport & logistics."
        />

        <DispatchWorkflow />

        {/* Why This Process Works */}
        <InfoBand>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Built for Speed, Safety &amp; Reliability
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Whether the request is a tow, boost, recovery, container move, or fleet transport,
                GPS Roadlines uses one intake model to understand the problem, locate the asset,
                select the right service, and complete the job with clear next steps.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="rounded-lg">
                    <CardContent className="p-6">
                      <Icon className="mb-4 size-7 text-primary" />
                      <h3 className="font-bold">{benefit.title}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </InfoBand>

        {/* CTA */}
        <CTASection
          title="NEED HELP RIGHT NOW OR WANT TO BOOK A SERVICE?"
          text="Fast towing, roadside assistance & transport across St. John's."
        />
      </main>
    </PageShell>
  );
}
