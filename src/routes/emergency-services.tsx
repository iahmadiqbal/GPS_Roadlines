import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { emergencyTowImage } from "@/components/roadlines/assets";
import { emergencyServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServicesGrid,
} from "@/components/roadlines/sections";

export const Route = createFileRoute("/emergency-services")({
  head: () => ({
    meta: [
      { title: "Emergency Services | GPS Roadlines" },
      {
        name: "description",
        content:
          "Emergency towing, roadside assistance, recovery, battery boost, fuel delivery, and lockout service in St. John's.",
      },
      { property: "og:title", content: "Emergency Services | GPS Roadlines" },
      {
        property: "og:description",
        content: "Fast emergency roadside dispatch from GPS Roadlines.",
      },
    ],
  }),
  component: EmergencyServicesPage,
});

function EmergencyServicesPage() {
  // Scroll to hash section after page renders
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Small delay to let the page fully render before scrolling
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
          title="24/7 Emergency Roadside Assistance in St. John's"
          text="Fast towing, recovery, lockout, fuel delivery & roadside help"
          image={emergencyTowImage}
          ctaLabel="Request Emergency Help"
          ctaHref="/get-in-touch"
        />
        <ServicesGrid
          services={emergencyServices}
          title="Emergency Services"
          text="Towing, roadside assistance, recovery, battery boost, fuel delivery, and lockout support through one responsive dispatch flow."
        />
        <DispatchWorkflow />
        <CTASection
          title="NEED EMERGENCY HELP RIGHT NOW?"
          text="Fast response across St. John's & Avalon Peninsula."
        />
      </main>
    </PageShell>
  );
}
