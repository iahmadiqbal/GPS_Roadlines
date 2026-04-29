import { createFileRoute } from "@tanstack/react-router";
import { RadioTower, ShieldCheck, Timer, Workflow } from "lucide-react";

import { dispatchControlImage } from "@/components/roadlines/assets";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  InfoBand,
  PageHero,
  TimelineSection,
} from "@/components/roadlines/sections";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | GPS Roadlines Dispatch" },
      {
        name: "description",
        content:
          "See how GPS Roadlines manages requests from service intake through dispatch, operator assignment, and completion.",
      },
      { property: "og:title", content: "How It Works | GPS Roadlines" },
      {
        property: "og:description",
        content: "A clear dispatch flow for roadside and transport services.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const benefits = [
    { title: "Less downtime", icon: Timer },
    { title: "One coordinated request", icon: Workflow },
    { title: "Safety-led response", icon: ShieldCheck },
    { title: "Clear communication", icon: RadioTower },
  ];
  return (
    <PageShell>
      <main>
        <PageHero
          title="How GPS Roadlines Works"
          text="A clear service path for emergency roadside calls, planned transport, business logistics, and recovery needs."
          image={dispatchControlImage}
        />
        <TimelineSection detailed />
        <DispatchWorkflow />
        <InfoBand>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Integrated service flow</h2>
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
        <CTASection title="START A SERVICE REQUEST" />
      </main>
    </PageShell>
  );
}
