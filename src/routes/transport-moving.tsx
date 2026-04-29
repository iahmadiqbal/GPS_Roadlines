import { createFileRoute } from "@tanstack/react-router";

import { transportServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  containerLogisticsImage,
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServicesGrid,
} from "@/components/roadlines/sections";

export const Route = createFileRoute("/transport-moving")({
  head: () => ({
    meta: [
      { title: "Transport & Moving | GPS Roadlines" },
      {
        name: "description",
        content:
          "Container transport, logistics, fleet transport, vehicle transport, equipment transport, and oversized transport services.",
      },
      { property: "og:title", content: "Transport & Moving | GPS Roadlines" },
      {
        property: "og:description",
        content: "Commercial transport and logistics support from GPS Roadlines.",
      },
    ],
  }),
  component: TransportMovingPage,
});

function TransportMovingPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          title="Transport & Moving Services"
          text="Coordinated container, fleet, equipment, vehicle, and oversized transport support for commercial and operational needs."
          image={containerLogisticsImage}
        />
        <ServicesGrid
          services={transportServices}
          title="Commercial Transport Capabilities"
          text="Detailed transport support for businesses, sites, fleets, and freight movement across planned and urgent timelines."
        />
        <DispatchWorkflow />
        <CTASection
          title="PLAN A TRANSPORT REQUEST"
          text="Connect with GPS Roadlines for container, fleet, equipment, or commercial logistics support."
        />
      </main>
    </PageShell>
  );
}
