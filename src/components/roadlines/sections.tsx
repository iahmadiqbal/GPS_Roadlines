import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, PhoneCall, RadioTower, Route } from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import hero1 from "@/assets/gps-roadlines-hero-1.jpg";
import hero2 from "@/assets/gps-roadlines-hero-2.jpg";
import hero3 from "@/assets/gps-roadlines-hero-3.jpg";
import containerLogisticsImage from "@/assets/gps-roadlines-container-logistics.jpg";
import dispatchControlImage from "@/assets/gps-roadlines-dispatch-control.jpg";
import emergencyTowImage from "@/assets/gps-roadlines-emergency-tow.jpg";
import mobileMechanicImage from "@/assets/gps-roadlines-mobile-mechanic.jpg";
import transportImage from "@/assets/gps-roadlines-transport.jpg";
import { company, coreServices, steps, transportServices, type Service } from "./data";

const heroSlides = [
  {
    image: emergencyTowImage,
    title: "Reliable Roadside Assistance & Transport Services in St. John’s",
    text: "Fast towing, roadside support, recovery, mobile mechanic & logistics",
    className: "animate-slide-fade",
  },
  {
    image: containerLogisticsImage,
    title: "Complete Road Support When You Need It Most",
    text: "One trusted provider for all roadside + transport needs",
    className: "animate-slide-fade-delayed",
  },
  {
    image: dispatchControlImage,
    title: "Smart Dispatch + Faster Response",
    text: "Modern tracking & booking system",
    className: "animate-slide-fade-late",
  },
];

const serviceImages: Record<string, string> = {
  "Towing Services": emergencyTowImage,
  Towing: emergencyTowImage,
  "Roadside Assistance": mobileMechanicImage,
  "Vehicle Recovery": emergencyTowImage,
  "Mobile Mechanic": mobileMechanicImage,
  "Battery Boost": mobileMechanicImage,
  "Fuel Delivery": mobileMechanicImage,
  Lockout: mobileMechanicImage,
  "Container Transport": containerLogisticsImage,
  "Commercial Logistics": dispatchControlImage,
  Logistics: dispatchControlImage,
  "Fleet Transport": containerLogisticsImage,
  "Vehicle Transport": transportImage,
  "Equipment Transport": containerLogisticsImage,
  "Oversized Transport": containerLogisticsImage,
};

export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <Badge variant="secondary" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function HeroSlideshow({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-brand-dark ${compact ? "min-h-[520px]" : "min-h-[760px]"}`}
    >
      {heroSlides.map((slide, index) => (
        <img
          key={slide.title}
          src={slide.image}
          alt="GPS Roadlines emergency roadside and logistics service"
          width={1600}
          height={900}
          className={`absolute inset-0 h-full w-full object-cover ${slide.className} ${index !== 0 ? "opacity-0" : ""}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/78 to-brand-dark/20" />
      <div className="absolute inset-0 road-grid opacity-25" />
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-brand-dark-foreground">
          <Badge className="mb-5 bg-primary text-primary-foreground">
            24/7 St. John’s Dispatch
          </Badge>
          <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Reliable Roadside Assistance & Transport Services in St. John’s
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-brand-dark-foreground/82">
            Fast towing, roadside support, recovery, mobile mechanic & logistics from one integrated
            local team.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="xl" variant="hero" asChild>
              <Link to="/get-in-touch">
                Book Service <ArrowRight />
              </Link>
            </Button>
            <Button size="xl" variant="light" asChild>
              <a href={company.phoneHref}>
                <PhoneCall /> Call Dispatch
              </a>
            </Button>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 text-sm font-semibold text-brand-dark-foreground/78">
            <span className="rounded-lg border border-brand-dark-foreground/15 bg-brand-dark-foreground/10 p-3 backdrop-blur">
              Towing
            </span>
            <span className="rounded-lg border border-brand-dark-foreground/15 bg-brand-dark-foreground/10 p-3 backdrop-blur">
              Recovery
            </span>
            <span className="rounded-lg border border-brand-dark-foreground/15 bg-brand-dark-foreground/10 p-3 backdrop-blur">
              Logistics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  text,
  image = transportImage,
}: {
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark py-28 text-brand-dark-foreground sm:py-36">
      <img
        src={image}
        alt="GPS Roadlines service operations"
        width={1400}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/84 to-brand-dark/35" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-5 bg-primary text-primary-foreground">GPS Roadlines</Badge>
        <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-brand-dark-foreground/80">{text}</p>
      </div>
    </section>
  );
}

export function ServicesGrid({
  services = coreServices,
  title = "Services Built Around Road Reality",
  text = "One coordinated team for emergency support, recovery, mobile mechanic needs, container transport, and commercial logistics.",
}: {
  services?: Service[];
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Services" title={title} text={text} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const image = serviceImages[service.title] ?? transportImage;
  return (
    <Card className="group overflow-hidden rounded-lg border-border/80 bg-card shadow-road transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <img
        src={image}
        alt={`${service.title} by GPS Roadlines`}
        loading="lazy"
        width={1600}
        height={1000}
        className="aspect-[16/10] w-full object-cover"
      />
      <CardHeader>
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-6" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="min-h-20 text-sm leading-7 text-muted-foreground">{service.description}</p>
        <Button className="mt-5" variant="outline" asChild>
          <Link to="/get-in-touch">
            Request Service <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function WhyChooseSection() {
  return (
    <section className="bg-secondary/55 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why choose us" title="Roadside urgency with logistics discipline" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {[
            "Safety First",
            "Fast Response",
            "Easy Booking",
            "Professional Team",
            "Transparency",
          ].map((item, index) => (
            <Card key={item} className="rounded-lg shadow-road">
              <CardContent className="p-6">
                <CheckCircle2 className="mb-4 size-7 text-primary" />
                <h3 className="font-bold">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {
                    [
                      "Secure handling and controlled roadside support.",
                      "Streamlined dispatch for quicker assignments.",
                      "Simple request paths for urgent and planned work.",
                      "Reliable operators with clear communication.",
                      "Clear next steps from request to completion.",
                    ][index]
                  }
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TimelineSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="A dispatch flow designed for speed and clarity"
          text="From first contact to completion, GPS Roadlines keeps every request moving through a practical service workflow."
        />
        <div className="grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-lg border bg-card p-6 shadow-road">
              <span className="mb-5 flex size-11 items-center justify-center rounded-lg bg-primary text-lg font-black text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {detailed ? step.description : step.description.split(".")[0] + "."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntegratedModelSection() {
  return (
    <section className="bg-brand-dark px-4 py-20 text-brand-dark-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <Badge className="mb-5 bg-primary text-primary-foreground">Integrated model</Badge>
          <h2 className="text-3xl font-black sm:text-5xl">One Call Solves Everything</h2>
          <p className="mt-5 text-lg leading-8 text-brand-dark-foreground/76">
            GPS Roadlines combines towing, roadside assistance, vehicle recovery, mobile mechanic
            coordination, and logistics into one dispatch-minded system. Instead of calling multiple
            providers, customers and businesses can start with one request and be routed to the
            right support.
          </p>
        </div>
        <Tabs
          defaultValue="roadside"
          className="rounded-lg border border-brand-dark-foreground/15 bg-brand-dark-foreground/10 p-3 backdrop-blur"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="roadside">Roadside</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
            <TabsTrigger value="logistics">Logistics</TabsTrigger>
          </TabsList>
          <TabsContent
            value="roadside"
            className="p-5 text-sm leading-7 text-brand-dark-foreground/78"
          >
            Breakdowns, boosts, lockouts, fuel delivery, and urgent driver support are routed
            quickly.
          </TabsContent>
          <TabsContent
            value="recovery"
            className="p-5 text-sm leading-7 text-brand-dark-foreground/78"
          >
            Disabled or stuck vehicles receive practical recovery coordination with safety-first
            handling.
          </TabsContent>
          <TabsContent
            value="logistics"
            className="p-5 text-sm leading-7 text-brand-dark-foreground/78"
          >
            Commercial transport and moving requests are planned with route awareness and clear
            timelines.
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export function CTASection({
  title = "NEED IMMEDIATE ROAD HELP?",
  text = "Talk to GPS Roadlines dispatch or submit a service request now.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-lg bg-primary p-8 text-primary-foreground shadow-glow sm:p-12 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">{title}</h2>
          <p className="mt-3 text-primary-foreground/82">{text}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <Button size="xl" variant="dark" asChild>
            <a href={company.phoneHref}>
              <PhoneCall /> Call Now
            </a>
          </Button>
          <Button size="xl" variant="light" asChild>
            <Link to="/get-in-touch">Book Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge variant="secondary" className="mb-5">
            About GPS Roadlines
          </Badge>
          <h2 className="text-3xl font-black sm:text-5xl">
            Your Trusted Road Support & Transport Partner
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            GPS Roadlines is a St. John’s based roadside assistance and transport company offering
            towing, recovery, mobile mechanic, container transport, and logistics services.
          </p>
          <Button className="mt-7" size="xl" variant="hero" asChild>
            <Link to="/about">
              Learn More <ArrowRight />
            </Link>
          </Button>
        </div>
        <img
          src={transportImage}
          alt="GPS Roadlines container transport truck"
          loading="lazy"
          width={1400}
          height={900}
          className="aspect-[4/3] rounded-lg object-cover shadow-road"
        />
      </div>
    </section>
  );
}

export function InfoBand({ children }: { children: ReactNode }) {
  return (
    <section className="bg-secondary/60 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function DispatchWorkflow() {
  return (
    <InfoBand>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <RadioTower className="mb-5 size-10 text-primary" />
          <h2 className="text-3xl font-black sm:text-4xl">
            Dispatch workflow that keeps requests moving
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            GPS Roadlines collects the essential details, reviews the safest response path, assigns
            the right operator, and keeps the service aligned from first call to completion.
          </p>
          <img
            src={dispatchControlImage}
            alt="GPS Roadlines dispatch control and route coordination"
            loading="lazy"
            width={1600}
            height={1000}
            className="mt-7 aspect-[16/10] rounded-lg object-cover shadow-road"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Confirm location",
            "Review vehicle status",
            "Match service type",
            "Coordinate completion",
          ].map((item) => (
            <Card key={item} className="rounded-lg">
              <CardContent className="flex items-center gap-3 p-5">
                <Route className="size-5 text-primary" />
                <span className="font-semibold">{item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </InfoBand>
  );
}

export {
  containerLogisticsImage,
  dispatchControlImage,
  emergencyTowImage,
  mobileMechanicImage,
  transportImage,
};
