import { containerLogisticsImage } from "@/components/roadlines/assets";
import { company, transportServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  CTASection,
  DispatchWorkflow,
  PageHero,
  ServiceSection,
} from "@/components/roadlines/sections";

export default function TransportMovingPage() {
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

        {/* All 6 transport services — each as a full section */}
        {transportServices.map((service) => (
          <ServiceSection
            key={service.title}
            id={service.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
            service={service}
          />
        ))}

        <DispatchWorkflow variant="transport" />
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
