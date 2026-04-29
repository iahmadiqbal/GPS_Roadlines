import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, MapPinned, PhoneCall, RadioTower } from "lucide-react";

import { sectionContactOfficeImage } from "@/components/roadlines/assets";
import { company } from "@/components/roadlines/data";
import { ServiceContactForm } from "@/components/roadlines/forms";
import { PageShell } from "@/components/roadlines/site-layout";
import { CTASection, InfoBand, PageHero } from "@/components/roadlines/sections";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GPS Roadlines | St. John’s NL" },
      {
        name: "description",
        content:
          "Contact GPS Roadlines for roadside assistance, towing, recovery, transport, and logistics services in St. John’s.",
      },
      { property: "og:title", content: "Contact GPS Roadlines" },
      {
        property: "og:description",
        content:
          "Reach GPS Roadlines by phone, email, service request form, or emergency dispatch.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { title: "Call", value: company.phone, icon: PhoneCall, href: company.phoneHref },
    { title: "Email", value: company.email, icon: Mail, href: company.emailHref },
    { title: "Address", value: company.address, icon: MapPinned },
    {
      title: "Emergency",
      value: "24/7 dispatch support",
      icon: RadioTower,
      href: company.phoneHref,
    },
  ];
  return (
    <PageShell>
      <main>
        <PageHero
          title="Contact GPS Roadlines"
          text="Reach our St. John’s team for immediate roadside help, planned transport, commercial logistics, or fleet support."
          image={sectionContactOfficeImage}
        />
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="h-full rounded-lg shadow-road transition-all hover:-translate-y-1 hover:shadow-glow">
                  <CardContent className="p-6">
                    <Icon className="mb-4 size-7 text-primary" />
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.value}</p>
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
        <InfoBand>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Service request form</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Send details about your vehicle, location, service type, and timing. For urgent
                roadside assistance, call dispatch directly.
              </p>
              <div className="mt-6 rounded-lg border bg-card p-6">
                <h3 className="flex items-center gap-2 font-bold">
                  <Building2 className="size-5 text-primary" /> Fleet / business inquiry
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Businesses can use this form for recurring logistics, fleet moves, container
                  transport, and planned service coordination.
                </p>
              </div>
            </div>
            <Card className="rounded-lg shadow-road">
              <CardContent className="p-6 sm:p-8">
                <ServiceContactForm />
              </CardContent>
            </Card>
          </div>
        </InfoBand>
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-dashed bg-secondary/65 p-8 text-center">
              <div>
                <MapPinned className="mx-auto mb-4 size-10 text-primary" />
                <h2 className="text-2xl font-black">Map section</h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  GPS Roadlines dispatch and business coordination operates from {company.address}.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CTASection title="NEED HELP NOW?" />
      </main>
    </PageShell>
  );
}
