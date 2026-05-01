import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { emergencyTowImage } from "@/components/roadlines/assets";
import { emergencyServices, serviceSlug } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServiceSection,
} from "@/components/roadlines/sections";

export default function EmergencyServicesPage() {
  const location = useLocation();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) {
      setActiveSlug(null);
      return;
    }
    // Find matching service by slug
    const matched = emergencyServices.find((s) => serviceSlug(s.title) === hash);
    if (matched) {
      setActiveSlug(hash);
      setTimeout(() => {
        document.getElementById("service-detail")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
    }
  }, [location.hash]);

  const activeService = emergencyServices.find((s) => serviceSlug(s.title) === activeSlug) ?? null;

  return (
    <PageShell>
      <main>
        <PageHero
          title="24/7 Emergency Roadside Assistance in St. John's"
          text="Fast towing, recovery, lockout, fuel delivery & roadside help"
          image={emergencyTowImage}
          ctaLabel="Request Emergency Help"
          ctaHref="/get-in-touch"
        />

        {/* Active service section — only shown when a service is selected from menu */}
        {activeService && (
          <ServiceSection
            id="service-detail"
            service={activeService}
          />
        )}

        <DispatchWorkflow />
        <CTASection
          title="NEED EMERGENCY HELP RIGHT NOW?"
          text="Fast response across St. John's & Avalon Peninsula."
          secondLabel="Request Emergency Service"
        />
      </main>
    </PageShell>
  );
}
