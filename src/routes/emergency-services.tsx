import { createFileRoute } from "@tanstack/react-router";

import { emergencyServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  emergencyTowImage,
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
          "Emergency towing, roadside assistance, recovery, battery boost, fuel delivery, and lockout service in St. John’s.",
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
  return (
    <PageShell>
      <main>
        <PageHero
          title="Emergency Roadside Services"
          text="Towing, roadside assistance, recovery, battery boost, fuel delivery, and lockout support through one responsive dispatch flow."
          image={emergencyTowImage}
        />
        <ServicesGrid
          services={emergencyServices}
          title="Emergency Services"
          text="Towing, roadside assistance, recovery, battery boost, fuel delivery, and lockout support through one responsive dispatch flow."
        />
        <DispatchWorkflow />
        <CTASection
          title="EMERGENCY ROADSIDE SUPPORT"
          text="Call now for urgent roadside dispatch or request service online."
        />
      </main>
    </PageShell>
  );
}
