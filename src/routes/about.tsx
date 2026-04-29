import { createFileRoute } from "@tanstack/react-router";
import { sectionAboutOverviewImage } from "@/components/roadlines/assets";
import { coreServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  InfoBand,
  IntegratedModelSection,
  PageHero,
  ServicesGrid,
  TimelineSection,
  WhyChooseSection,
} from "@/components/roadlines/sections";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GPS Roadlines | Roadside & Logistics" },
      {
        name: "description",
        content:
          "Learn about GPS Roadlines, a St. John’s roadside assistance and transport company serving drivers and businesses.",
      },
      { property: "og:title", content: "About GPS Roadlines" },
      {
        property: "og:description",
        content: "A modern St. John’s road support and logistics partner.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          title="Your Trusted Road Support & Transport Partner"
          text="GPS Roadlines brings emergency roadside response and logistics coordination together for drivers, fleets, and businesses in St. John’s."
          image={sectionAboutOverviewImage}
        />
        <InfoBand>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Company overview</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  GPS Roadlines is a St. John’s based roadside assistance and transport company
                  offering towing, recovery, mobile mechanic, container transport, and logistics
                  services through a practical dispatch model.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Mission</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  To provide safe, fast, and transparent support when drivers and businesses need
                  roadside or transport help, reducing stress and downtime through one reliable
                  contact point.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Vision</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  To become a trusted regional road support platform where emergency service,
                  transport planning, and modern dispatch work together seamlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </InfoBand>
        <ServicesGrid
          services={coreServices}
          title="Services that work together"
          text="Roadside, recovery, mobile mechanic, container transport, and commercial logistics under one coordinated operating model."
        />
        <TimelineSection detailed />
        <IntegratedModelSection />
        <WhyChooseSection />
        <CTASection />
      </main>
    </PageShell>
  );
}
