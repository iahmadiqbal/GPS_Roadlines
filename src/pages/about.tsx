import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { sectionAboutOverviewImage } from "@/components/roadlines/assets";
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
import { Card, CardContent } from "@/components/ui/card";

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

        {/* Company Overview + Mission + Vision */}
        <InfoBand>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Who We Are */}
            <Card id="overview" className="scroll-mt-28 rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Who We Are</h2>
                <ul className="mt-4 grid gap-2">
                  {companyOverviewPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card id="mission" className="scroll-mt-28 rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Our Mission</h2>
                <ul className="mt-4 grid gap-2">
                  {missionPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card id="vision" className="scroll-mt-28 rounded-lg">
              <CardContent className="p-7">
                <h2 className="text-2xl font-black">Our Vision</h2>
                <ul className="mt-4 grid gap-2">
                  {visionPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
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

        {/* Why Customers Trust Us */}
        <section id="trust" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">Why Customers Trust Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Built around fast response, safety and professional service execution across Newfoundland & Labrador.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyTrustPoints.map((point, i) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-lg border bg-card p-5 shadow-road transition-all hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium leading-6">{point}</span>
                </div>
              ))}
            </div>
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
