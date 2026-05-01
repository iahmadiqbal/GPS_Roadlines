import { PageShell } from "@/components/roadlines/site-layout";
import {
  AboutPreview,
  CTASection,
  HeroSlideshow,
  IntegratedModelSection,
  ServicesGrid,
  SimpleHowItWorks,
  WhyChooseSection,
} from "@/components/roadlines/sections";

export default function IndexPage() {
  return (
    <PageShell>
      <main>
        <HeroSlideshow />
        <ServicesGrid simple />
        <AboutPreview />
        <WhyChooseSection />
        <SimpleHowItWorks />
        <IntegratedModelSection />
        <CTASection />
      </main>
    </PageShell>
  );
}
