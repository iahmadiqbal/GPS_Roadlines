import { Link } from "react-router-dom";
import { sectionAboutOverviewImage } from "@/components/roadlines/assets";
import { coreServices } from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  InfoBand,
  IntegratedModelSection,
  PageHero,
  ServicesGrid,
  TimelineSection,
  WhyChooseSection,
} from "@/components/roadlines/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        {/* Hero */}
        <PageHero
          title="About GPS Roadlines – Built for Reliable Road Support in St. John's"
          text="Towing, roadside assistance, mobile mechanics & transport solutions across Newfoundland & Labrador"
          image={sectionAboutOverviewImage}
          ctaLabel="Get a Quote"
          ctaHref="/get-in-touch"
        />

        {/* Company Overview + Mission + Vision */}
        <InfoBand>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Who We Are</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  GPS Roadlines is a St. John's based roadside assistance and transport company
                  providing towing, recovery, mobile mechanic and logistics services. Designed for
                  both emergency and scheduled transport needs, serving private drivers, businesses,
                  contractors and fleet operators across St. John's and Avalon Peninsula corridors.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Our Mission</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  To deliver dependable towing, roadside assistance and transport services with fast
                  and safe response for every customer situation. To integrate towing, mechanic and
                  logistics into one service model with transparent pricing and clear communication.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Our Vision</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  To become a trusted roadside and logistics brand in Atlantic Canada. To expand
                  services across Newfoundland & Labrador, integrate modern technology into roadside
                  assistance operations, and redefine roadside assistance with reliability and speed.
                </p>
              </CardContent>
            </Card>
          </div>
        </InfoBand>

        {/* What We Do */}
        <ServicesGrid
          services={coreServices}
          title="What We Do"
          text="Roadside, recovery, mobile mechanic, container transport, and commercial logistics under one coordinated operating model."
        />

        {/* How We Operate */}
        <TimelineSection detailed />

        <IntegratedModelSection />
        <WhyChooseSection />

        {/* CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
          <div className="mx-auto max-w-screen-xl animate-rise-up rounded-lg bg-primary p-8 text-primary-foreground shadow-glow sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                WANT TO KNOW MORE ABOUT GPS ROADLINES?
              </h2>
              <p className="mt-3 text-primary-foreground/82">
                Learn how we support towing, roadside help and transport across NL.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Button size="xl" variant="dark" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="xl" variant="light" asChild>
                <Link to="/get-in-touch">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
