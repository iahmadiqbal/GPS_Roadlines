import { PageShell } from "@/components/roadlines/site-layout";
import {
  AboutPreview,
  CTASection,
  HeroSlideshow,
  IntegratedModelSection,
  ServicesGrid,
  TimelineSection,
  WhyChooseSection,
} from "@/components/roadlines/sections";

export default function IndexPage() {
  return (
    <PageShell>
      <main>
        <HeroSlideshow />
        <ServicesGrid />
        <AboutPreview />
        <WhyChooseSection />
        <TimelineSection />
        <IntegratedModelSection />
        <CTASection />
      </main>
    </PageShell>
  );
}
