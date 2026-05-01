import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { containerLogisticsImage } from "@/components/roadlines/assets";
import { company, transportServices, serviceSlug } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServiceSection,
  TimelineSection,
} from "@/components/roadlines/sections";

export default function TransportMovingPage() {
  const location = useLocation();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) {
      setActiveSlug(null);
      return;
    }
    const matched = transportServices.find((s) => serviceSlug(s.title) === hash);
    if (matched) {
      setActiveSlug(hash);
      setTimeout(() => {
        document.getElementById("service-detail")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
    }
  }, [location.hash]);

  const activeService = transportServices.find((s) => serviceSlug(s.title) === activeSlug) ?? null;

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

        {/* Active service section */}
        {activeService && (
          <ServiceSection
            id="service-detail"
            service={activeService}
          />
        )}

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
