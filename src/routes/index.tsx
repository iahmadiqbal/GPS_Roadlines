import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/roadlines/site-layout";
import { AboutPreview, CTASection, HeroSlideshow, IntegratedModelSection, ServicesGrid, TimelineSection, WhyChooseSection } from "@/components/roadlines/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GPS Roadlines | Roadside Assistance St. John’s" },
      { name: "description", content: "GPS Roadlines provides towing, roadside assistance, recovery, mobile mechanic, container transport, and logistics in St. John’s." },
      { property: "og:title", content: "GPS Roadlines | Roadside Assistance St. John’s" },
      { property: "og:description", content: "Reliable roadside assistance and transport services in St. John’s, Newfoundland and Labrador." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <main>
        <HeroSlideshow />
        <ServicesGrid />
        <AboutPreview />
        <WhyChooseSection />
        <TimelineSection />
        <IntegratedModelSection />
        <CTASection />
      </main>
    </PageShell>
  );
}
