import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { containerLogisticsImage } from "@/components/roadlines/assets";
import { company, transportServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServicesGrid,
  TimelineSection,
} from "@/components/roadlines/sections";

export default function TransportMovingPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location.hash]);

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
          secondLabel="Call for Transport Support"
          secondHref={company.phoneHref}
        />
      </main>
    </PageShell>
  );
}
