import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import {
  sectionAboutOverviewImage,
  emergencyTowImage,
  transportImage,
} from "@/components/roadlines/assets";
import {
  coreServices,
  companyOverviewPoints,
  missionPoints,
  visionPoints,
  whyTrustPoints,
} from "@/components/roadlines/data";
import { PageShell } from "@/components/roadlines/site-layout";
import {
  InfoBand,
  PageHero,
  ServicesGrid,
  TimelineSection,
} from "@/components/roadlines/sections";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }, [location.hash]);

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

        {/* Company Overview — Who We Are */}
        <InfoBand>
          <div id="overview" className="scroll-mt-28 grid gap-10 lg:grid-cols-2 lg:items-center">
            <img
              src={sectionAboutOverviewImage}
              alt="GPS Roadlines fleet vehicles and roadside operation"
              loading="lazy"
              width={1400}
              height={900}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-road"
            />
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Who We Are</h2>
              <ul className="mt-5 grid gap-2">
                {companyOverviewPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </InfoBand>

        {/* Mission */}
        <section id="mission" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
          <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Our Mission</h2>
              <ul className="mt-5 grid gap-2">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={emergencyTowImage}
              alt="GPS Roadlines roadside rescue assisting customer"
              loading="lazy"
              width={1400}
              height={900}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-road"
            />
          </div>
        </section>

        {/* Vision */}
        <InfoBand>
          <div id="vision" className="scroll-mt-28 grid gap-10 lg:grid-cols-2 lg:items-center">
            <img
              src={transportImage}
              alt="GPS Roadlines highway logistics network and fleet operations"
              loading="lazy"
              width={1400}
              height={900}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-road"
            />
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Our Vision</h2>
              <ul className="mt-5 grid gap-2">
                {visionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </InfoBand>

        {/* What We Do */}
        <ServicesGrid
          services={coreServices}
          title="What We Do"
        />

        {/* How We Operate */}
        <TimelineSection detailed showHeader />

        {/* Why Customers Trust Us */}
        <section id="trust" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="mb-8 text-3xl font-black sm:text-4xl lg:text-5xl">Why Customers Trust Us</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyTrustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

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
