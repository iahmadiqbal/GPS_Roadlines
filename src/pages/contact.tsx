import { Building2, Clock, Mail, MapPinned, PhoneCall, RadioTower, Truck, Zap } from "lucide-react";

import { emergencyTowImage, sectionContactOfficeImage } from "@/components/roadlines/assets";
import { company } from "@/components/roadlines/data";
import { ServiceContactForm } from "@/components/roadlines/forms";
import { PageShell } from "@/components/roadlines/site-layout";
import { CTASection, InfoBand, PageHero } from "@/components/roadlines/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const quickContacts = [
    {
      title: "Phone Support",
      value: company.phone,
      sub: "Available 24/7 for emergency roadside assistance. Fast dispatch for towing, recovery & breakdown support",
      icon: PhoneCall,
      href: company.phoneHref,
    },
    {
      title: "Email Support",
      value: company.email,
      sub: "Response within business hours for general inquiries",
      icon: Mail,
      href: company.emailHref,
    },
    {
      title: "Service Area",
      value: "St. John's, NL + Avalon Peninsula",
      sub: "Emergency coverage and scheduled transport services",
      icon: MapPinned,
    },
  ];

  const responseItems = [
    { label: "Emergency calls", value: "Immediate dispatch", icon: Zap },
    { label: "Roadside assistance", value: "Fastest available operator assigned", icon: Truck },
    { label: "Transport requests", value: "Scheduled confirmation within short timeframe", icon: Clock },
    { label: "Email inquiries", value: "Responded during business hours", icon: Mail },
    { label: "Fleet clients", value: "Priority handling system", icon: RadioTower },
  ];

  return (
    <PageShell>
      <main>
        {/* Hero */}
        <PageHero
          title="Contact GPS Roadlines – 24/7 Roadside & Transport Support"
          text="Call, email or submit a request for towing, recovery, or logistics assistance"
          image={sectionContactOfficeImage}
          ctaLabel="Call Now"
          secondLabel="Request Service"
          secondHref="/get-in-touch"
        />

        {/* Quick Contact Options */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="mx-auto grid max-w-screen-2xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {quickContacts.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="h-full rounded-lg shadow-road transition-all hover:-translate-y-1 hover:shadow-glow">
                  <CardContent className="p-6">
                    <Icon className="mb-4 size-7 text-primary" />
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="mt-2 text-sm font-semibold text-foreground">{item.value}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.sub}</p>
                  </CardContent>
                </Card>
              );
              return item.href ? (
                <a key={item.title} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </section>

        {/* Emergency Contact Section */}
        <InfoBand>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Need Immediate Roadside Help?</h2>
              <ul className="mt-5 grid gap-3 text-muted-foreground">
                <li className="flex items-center gap-2 text-sm">
                  <RadioTower className="size-4 shrink-0 text-primary" /> 24/7 emergency towing available
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <RadioTower className="size-4 shrink-0 text-primary" /> Roadside assistance (battery, fuel, lockout, tire)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <RadioTower className="size-4 shrink-0 text-primary" /> Vehicle recovery from accidents, snow or ditch
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <RadioTower className="size-4 shrink-0 text-primary" /> Fast dispatch across St. John's region
                </li>
              </ul>
              <Button className="mt-7" size="xl" variant="hero" asChild>
                <a href={company.phoneHref}>
                  <PhoneCall /> Call Emergency Line
                </a>
              </Button>
            </div>
            <img
              src={emergencyTowImage}
              alt="GPS Roadlines emergency tow truck at night"
              loading="lazy"
              width={1400}
              height={900}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-road"
            />
          </div>
        </InfoBand>

        {/* Contact Form — Send Us a Message */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="mx-auto max-w-screen-2xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-black sm:text-4xl">Send Us a Message</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Send details about your vehicle, location, service type, and timing. For urgent
                  roadside assistance, call dispatch directly.
                </p>
              </div>
              <Card className="rounded-lg shadow-road">
                <CardContent className="p-6 sm:p-8">
                  <ServiceContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fleet & Business Support */}
        <InfoBand>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Fleet &amp; Business Support Inquiries</h2>
              <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Building2 className="size-4 shrink-0 text-primary" /> Dedicated support for commercial accounts
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="size-4 shrink-0 text-primary" /> Fleet towing and breakdown assistance
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="size-4 shrink-0 text-primary" /> Scheduled logistics and transport contracts
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="size-4 shrink-0 text-primary" /> Priority dispatch for business clients
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="size-4 shrink-0 text-primary" /> Monthly billing and service agreements
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="size-4 shrink-0 text-primary" /> Custom transport solutions available
                </li>
              </ul>
              <Button className="mt-7" variant="hero" size="xl" asChild>
                <a href={company.phoneHref}>
                  <PhoneCall /> Request Business Callback
                </a>
              </Button>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <h3 className="text-xl font-black">Response Time Commitment</h3>
              <div className="mt-5 grid gap-4">
                {responseItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div>
                        <span className="text-sm font-semibold">{item.label}:</span>{" "}
                        <span className="text-sm text-muted-foreground">{item.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </InfoBand>

        {/* Map / Location Section */}
        <section id="location" className="px-4 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ scrollMarginTop: "6rem" }}>
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="mb-6 text-3xl font-black sm:text-4xl">Our Service Coverage</h2>
            <div className="overflow-hidden rounded-lg shadow-road">
              <iframe
                title="GPS Roadlines location — 215 Water Street, St John's NL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.4856!2d-52.71481!3d47.56148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca3a7b7b7b7b7%3A0x4b0ca3a7b7b7b7b7!2s215+Water+St%2C+St.+John%27s%2C+NL+A1C+6C9%2C+Canada!5e0!3m2!1sen!2sca!4v1716000000000!5m2!1sen!2sca"
                width="100%"
                height="480"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPinned className="size-4 shrink-0 text-primary" /> St. John's metropolitan area
              </li>
              <li className="flex items-center gap-2">
                <MapPinned className="size-4 shrink-0 text-primary" /> Avalon Peninsula corridors
              </li>
              <li className="flex items-center gap-2">
                <MapPinned className="size-4 shrink-0 text-primary" /> Highway and rural roadside coverage zones
              </li>
            </ul>
          </div>
        </section>

        <CTASection
          title="NEED ROAD ASSISTANCE RIGHT NOW?"
          text="Fast towing, roadside help & transport support available 24/7."
          secondLabel="Get a Quote"
        />
      </main>
    </PageShell>
  );
}
