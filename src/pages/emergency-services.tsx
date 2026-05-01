import { emergencyTowImage } from "@/components/roadlines/assets";
import { emergencyServices, serviceSlug } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServiceSection,
} from "@/components/roadlines/sections";

// Document: Towing, Roadside Assistance, Vehicle Recovery, Battery Boost, Fuel Delivery, Lockout
// Mobile Mechanic is NOT in the Emergency page per document
const emergencyPageServices = emergencyServices.filter(
  (s) => s.title !== "Mobile Mechanic"
);

export default function EmergencyServicesPage() {
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

        {emergencyPageServices.map((service) => (
          <ServiceSection
            key={service.title}
            id={serviceSlug(service.title)}
            service={service}
          />
        ))}

        <DispatchWorkflow variant="emergency" />
        <CTASection
          title="NEED EMERGENCY HELP RIGHT NOW?"
          text="Fast response across St. John's & Avalon Peninsula."
          secondLabel="Request Emergency Service"
        />
      </main>
    </PageShell>
  );
}
