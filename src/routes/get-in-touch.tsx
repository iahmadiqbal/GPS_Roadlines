import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness, CheckCircle2, PhoneCall, ShieldCheck, Zap } from "lucide-react";

import { emergencyTowImage } from "@/components/roadlines/assets";
import { company } from "@/components/roadlines/data";
import { ServiceContactForm } from "@/components/roadlines/forms";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  InfoBand,
  PageHero,
  WhyChooseSection,
} from "@/components/roadlines/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/get-in-touch")({
  head: () => ({
    meta: [
      { title: "Get in Touch | GPS Roadlines Service Request" },
      {
        name: "description",
        content:
          "Submit a GPS Roadlines lead form for towing, roadside assistance, transport, logistics, fleet, or business service needs.",
      },
      { property: "og:title", content: "Get in Touch | GPS Roadlines" },
      {
        property: "og:description",
        content: "Request roadside, transport, or logistics support from GPS Roadlines.",
      },
    ],
  }),
  component: GetInTouchPage,
});

function GetInTouchPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          title="Get in Touch With GPS Roadlines"
          text="Submit a detailed service request for emergency roadside help, transport planning, fleet movement, or commercial logistics."
          image={emergencyTowImage}
        />
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="grid gap-5">
              <Card className="rounded-lg bg-primary text-primary-foreground shadow-glow">
                <CardContent className="p-7">
                  <PhoneCall className="mb-4 size-8" />
                  <h2 className="text-2xl font-black">Emergency shortcut</h2>
                  <p className="mt-3 text-primary-foreground/82">
                    If you are stopped roadside or in an unsafe location, call dispatch now.
                  </p>
                  <Button className="mt-6" variant="dark" asChild>
                    <a href={company.phoneHref}>{company.phone}</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-road">
                <CardContent className="p-7">
                  <BriefcaseBusiness className="mb-4 size-8 text-primary" />
                  <h2 className="text-2xl font-black">Business inquiry</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    Use the form for fleet moves, container transport, recurring logistics,
                    equipment transport, and business service coordination.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="rounded-lg shadow-road">
              <CardContent className="p-6 sm:p-8">
                <ServiceContactForm variant="lead" />
              </CardContent>
            </Card>
          </div>
        </section>
        <InfoBand>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Responsive dispatch", icon: Zap },
              { title: "Professional handling", icon: ShieldCheck },
              { title: "Clear follow-up", icon: CheckCircle2 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-lg">
                  <CardContent className="p-7">
                    <Icon className="mb-4 size-8 text-primary" />
                    <h2 className="text-xl font-black">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      A modern service process built for urgent roadside needs and planned
                      commercial work.
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </InfoBand>
        <WhyChooseSection />
        <CTASection
          title="READY TO BOOK SERVICE?"
          text="Request help online or call the GPS Roadlines team for immediate dispatch."
        />
      </main>
    </PageShell>
  );
}
