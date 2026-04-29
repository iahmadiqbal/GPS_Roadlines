import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { containerLogisticsImage } from "@/components/roadlines/assets";
import { transportServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServicesGrid,
  TimelineSection,
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
  // Scroll to hash section after page renders
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageShell>
      <main>
        <PageHero
          title="Reliable Transport & Moving Services in St. John's, NL"
          text="Container transport, fleet logistics, equipment moving & vehicle delivery solutions"
          image={containerLogisticsImage}
          ctaLabel="Get a Quote"
          ctaHref="/get-in-touch"
        />
        <ServicesGrid
          services={transportServices}
          title="Commercial Transport Capabilities"
          text="Detailed transport support for businesses, sites, fleets, and freight movement across planned and urgent timelines."
        />
        <TimelineSection />
        <DispatchWorkflow />
        <CTASection
          title="NEED RELIABLE TRANSPORT OR MOVING SERVICES?"
          text="Container, fleet, equipment or vehicle transport across Newfoundland."
        />
      </main>
    </PageShell>
  );
}
