import {
  BriefcaseBusiness,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import { sectionServiceRequestImage } from "@/components/roadlines/assets";
import { company } from "@/components/roadlines/data";
import { ServiceContactForm } from "@/components/roadlines/forms";
import { PageShell } from "@/components/roadlines/site-layout";
import { CTASection, InfoBand, PageHero } from "@/components/roadlines/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whyContactItems = [
  { label: "24/7 availability across St. John's region", icon: Zap },
  { label: "Fast response emergency dispatch system", icon: Truck },
  { label: "Integrated towing + roadside + transport services", icon: CheckCircle2 },
  { label: "Skilled operators and trained mechanics", icon: Wrench },
  { label: "Transparent communication and pricing", icon: CheckCircle2 },
  { label: "Reliable fleet and logistics infrastructure", icon: BriefcaseBusiness },
  { label: "Safe handling of all vehicles and cargo", icon: ShieldCheck },
  { label: "Local expertise in Newfoundland conditions", icon: CheckCircle2 },
];

export default function GetInTouchPage() {
  return (
    <PageShell>
      <main>
        {/* Hero */}
        <PageHero
          title="Get in Touch with GPS Roadlines"
          text="Request a quote for towing, roadside assistance, vehicle recovery or transport"
          image={sectionServiceRequestImage}
          ctaLabel="Start Your Request"
          ctaHref="/get-in-touch"
        />

        {/* Main form + sidebar */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
          <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            {/* Lead form — main left column */}
            <Card className="rounded-lg shadow-road">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-6 text-2xl font-black">Tell Us What You Need</h2>
                <ServiceContactForm variant="lead" />
              </CardContent>
            </Card>

            {/* Right sidebar — emergency + business cards */}
            <div className="grid gap-5">
              {/* Emergency shortcut */}
              <Card className="rounded-lg bg-primary text-primary-foreground shadow-glow">
                <CardContent className="p-7">
                  <PhoneCall className="mb-4 size-8" />
                  <h2 className="text-2xl font-black">Need Immediate Assistance?</h2>
                  <p className="mt-3 text-primary-foreground/82">
                    For urgent roadside emergencies, accident recovery or breakdown support — fast
                    dispatch available 24/7.
                  </p>
                  <Button className="mt-6" variant="dark" asChild>
                    <a href={company.phoneHref}>
                      <PhoneCall /> Call Emergency Line
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Business inquiry */}
              <Card className="rounded-lg shadow-road">
                <CardContent className="p-7">
                  <BriefcaseBusiness className="mb-4 size-8 text-primary" />
                  <h2 className="text-2xl font-black">Business &amp; Fleet Partnerships</h2>
                  <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                    <li>Fleet towing and scheduled transport services</li>
                    <li>Commercial logistics support solutions</li>
                    <li>Priority roadside assistance accounts</li>
                    <li>Monthly billing options available</li>
                    <li>Custom transport contracts for businesses</li>
                    <li>Dedicated account management support</li>
                  </ul>
                  <Button className="mt-5" variant="outline" asChild>
                    <a href={company.phoneHref}>
                      <PhoneCall /> Apply for Business Account
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Contact GPS Roadlines */}
        <InfoBand>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-black sm:text-4xl">
              Why Customers Choose Us
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyContactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-lg border bg-card p-4"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium leading-6">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </InfoBand>

        <CTASection
          title="READY TO GET HELP OR A QUOTE?"
          text="Fast roadside assistance, towing & transport solutions."
          secondLabel="Submit Request"
        />
      </main>
    </PageShell>
  );
}
