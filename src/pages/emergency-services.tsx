import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { emergencyTowImage } from "@/components/roadlines/assets";
import { emergencyServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServicesGrid,
} from "@/components/roadlines/sections";

export default function EmergencyServicesPage() {
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
