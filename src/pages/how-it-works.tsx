import { CheckCircle2 } from "lucide-react";

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
import { coreServices, whyProcessWorksBullets } from "@/components/roadlines/data";

export default function HowItWorksPage() {
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
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
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
            <ul className="grid gap-3">
              {whyProcessWorksBullets.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
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
