import { CheckCircle2, Route, Siren, ShieldCheck, Truck, Wrench } from "lucide-react";

import { dispatchControlImage } from "@/components/roadlines/assets";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  InfoBand,
  IntegratedModelSection,
  PageHero,
  SectionHeader,
  TimelineSection,
} from "@/components/roadlines/sections";
import { whyProcessWorksBullets } from "@/components/roadlines/data";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/roadlines/motion";

// Document: 5 service type cards
const serviceTypes = [
  { title: "Towing", icon: Truck },
  { title: "Roadside Assistance", icon: Siren },
  { title: "Vehicle Recovery", icon: ShieldCheck },
  { title: "Mobile Mechanic", icon: Wrench },
  { title: "Transport & Logistics", icon: Route },
];

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

        {/* Step-by-step process — detailed with bullets */}
        <TimelineSection detailed showHeader />

        {/* Integrated Service Flow */}
        <IntegratedModelSection showBullets showImage />

        {/* Service Types Covered — 5 cards */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
          <div className="mx-auto max-w-screen-2xl">
            <SectionHeader
              title="Service Types Covered in Process"
              text="Every request follows the same structured dispatch workflow."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {serviceTypes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} direction="up" delay={i * 0.08}>
                    <Card className="rounded-lg shadow-road transition-all hover:-translate-y-1 hover:shadow-glow">
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
                          <Icon className="size-6" />
                        </div>
                        <h3 className="font-bold">{item.title}</h3>
                      </CardContent>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why This Process Works */}
        <InfoBand>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Built for Speed, Safety &amp; Reliability
              </h2>
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
          secondLabel="Get a Quote"
        />
      </main>
    </PageShell>
  );
}
