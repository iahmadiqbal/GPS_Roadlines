import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, PhoneCall, RadioTower, Route } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "./motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  containerLogisticsImage,
  dispatchControlImage,
  emergencyTowImage,
  sectionAboutOverviewImage,
  serviceBatteryBoostImage,
  serviceCommercialLogisticsImage,
  serviceContainerTransportImage,
  serviceEquipmentTransportImage,
  serviceFleetTransportImage,
  serviceFuelDeliveryImage,
  serviceLockoutImage,
  serviceMobileMechanicImage,
  serviceOversizedTransportImage,
  serviceRoadsideAssistanceImage,
  serviceTowingImage,
  serviceVehicleRecoveryImage,
  serviceVehicleTransportImage,
  transportImage,
} from "./assets";
import { company, coreServices, integratedFlowBullets, serviceSlug, steps, whyChoose, whyProcessWorksBullets, type Service, type ServiceDetail } from "./data";

const heroSlides = [
  {
    image: emergencyTowImage,
    title: "Reliable Roadside Assistance & Transport Services in St. John's",
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
  "Towing Services": serviceTowingImage,
  Towing: serviceTowingImage,
  "Roadside Assistance": serviceRoadsideAssistanceImage,
  "Vehicle Recovery": serviceVehicleRecoveryImage,
  "Mobile Mechanic": serviceMobileMechanicImage,
  "Battery Boost": serviceBatteryBoostImage,
  "Fuel Delivery": serviceFuelDeliveryImage,
  Lockout: serviceLockoutImage,
  "Container Transport": serviceContainerTransportImage,
  "Commercial Logistics": serviceCommercialLogisticsImage,
  Logistics: serviceCommercialLogisticsImage,
  "Fleet Transport": serviceFleetTransportImage,
  "Vehicle Transport": serviceVehicleTransportImage,
  "Equipment Transport": serviceEquipmentTransportImage,
  "Oversized Transport": serviceOversizedTransportImage,
};

export function SectionHeader({
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal direction="up" className="mx-auto mb-10 max-w-4xl text-center">
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p>}
    </Reveal>
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
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-screen-2xl items-center px-4 py-24 sm:px-6 lg:px-8 2xl:px-16">
        <Reveal direction="left" className="max-w-4xl text-brand-dark-foreground">
          <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Reliable Roadside Assistance & Transport Services in St. John's
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-brand-dark-foreground/82">
            Fast towing, roadside support, vehicle recovery, mobile mechanic &amp; logistics
            solutions.
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
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  text,
  image = transportImage,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  text: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
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
      <Reveal direction="down" className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-brand-dark-foreground/80">{text}</p>
        {ctaLabel && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {ctaHref ? (
              <Button size="xl" variant="hero" asChild>
                <Link to={ctaHref}>
                  {ctaLabel} <ArrowRight />
                </Link>
              </Button>
            ) : (
              <Button size="xl" variant="hero" asChild>
                <a href={company.phoneHref}>
                  <PhoneCall /> {ctaLabel}
                </a>
              </Button>
            )}
            <Button size="xl" variant="light" asChild>
              <a href={company.phoneHref}>
                <PhoneCall /> Call Now
              </a>
            </Button>
          </div>
        )}
      </Reveal>
    </section>
  );
}

export function ServicesGrid({
  services = coreServices,
  title = "Services Built Around Road Reality",
  text = "One coordinated team for emergency support, recovery, mobile mechanic needs, container transport, and commercial logistics.",
  id = "services",
}: {
  services?: Service[];
  title?: string;
  text?: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <div className="mx-auto max-w-screen-2xl">
        <SectionHeader eyebrow="Services" title={title} text={text} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index = 0 }: { service: Service | ServiceDetail; index?: number }) {
  const Icon = service.icon;
  const image = serviceImages[service.title] ?? transportImage;
  const bullets = (service as ServiceDetail).bullets;
  // Alternate: left → up → right → left → up → right …
  const directions = ["left", "up", "right"] as const;
  const direction = directions[index % 3];

  return (
    <Reveal direction={direction} delay={index * 0.08}>
      <Card
        id={serviceSlug(service.title)}
        className="group scroll-mt-28 overflow-hidden rounded-lg border-border/80 bg-card shadow-road transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
      >
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
          {bullets && bullets.length > 0 ? (
            <ul className="mb-5 grid gap-1.5">
              {bullets.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-5 min-h-20 text-sm leading-7 text-muted-foreground">{service.description}</p>
          )}
          <Button variant="outline" asChild>
            <Link to="/get-in-touch">
              Request Service <ArrowRight />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export function WhyChooseSection({ embedded = false }: { embedded?: boolean }) {
  const content = (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {whyChoose.map((item, i) => (
        <Reveal key={item.title} direction="up" delay={i * 0.1}>
          <Card className="rounded-lg shadow-road">
            <CardContent className="p-6">
              <CheckCircle2 className="mb-4 size-7 text-primary" />
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );

  if (embedded) return content;

  return (
    <section className="bg-secondary/55 px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <div className="mx-auto max-w-screen-2xl">
        <SectionHeader eyebrow="Why choose us" title="Why Choose GPS Roadlines" />
        {content}
      </div>
    </section>
  );
}

export function TimelineSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <div className="mx-auto max-w-screen-2xl">
        <SectionHeader
          eyebrow="How it works"
          title="A dispatch flow designed for speed and clarity"
          text="From first contact to completion, GPS Roadlines keeps every request moving through a practical service workflow."
        />
        <div className="grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.title} direction="up" delay={index * 0.1}>
              <div className="relative rounded-lg border bg-card p-6 shadow-road">
                <span className="mb-5 flex size-11 items-center justify-center rounded-lg bg-primary text-lg font-black text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                {detailed && step.bullets ? (
                  <ul className="mt-3 grid gap-1.5">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description.split(".")[0] + "."}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntegratedModelSection() {
  return (
    <section className="bg-brand-dark px-4 py-20 text-brand-dark-foreground sm:px-6 lg:px-8 2xl:px-16">
      <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <Reveal direction="left">
          <h2 className="text-3xl font-black sm:text-5xl">One Call Solves Everything</h2>
          <p className="mt-5 text-lg leading-8 text-brand-dark-foreground/76">
            Unlike traditional towing companies, GPS Roadlines combines towing, roadside assistance,
            mobile mechanic services and logistics support. We don't just move vehicles — we solve
            the full problem from breakdown to recovery or transport completion.
          </p>
          <ul className="mt-6 grid gap-2">
            {integratedFlowBullets.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm leading-6 text-brand-dark-foreground/75">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal direction="right">
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
        </Reveal>
      </div>
    </section>
  );
}

export function CTASection({
  title = "NEED IMMEDIATE ROAD HELP?",
  text = "Fast response available 24/7 across St. John's and surrounding areas.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <Reveal direction="up" className="mx-auto max-w-screen-xl rounded-lg bg-primary p-8 text-primary-foreground shadow-glow sm:p-12 lg:flex lg:items-center lg:justify-between">
        <Reveal direction="left">
          <h2 className="text-3xl font-black sm:text-4xl">{title}</h2>
          <p className="mt-3 text-primary-foreground/82">{text}</p>
        </Reveal>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <Button size="xl" variant="dark" asChild>
            <a href={company.phoneHref}>
              <PhoneCall /> Call Now
            </a>
          </Button>
          <Button size="xl" variant="light" asChild>
            <Link to="/get-in-touch">Book Now</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left">
          <h2 className="text-3xl font-black sm:text-5xl">
            Your Trusted Road Support & Transport Partner
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            GPS Roadlines is a St. John's based roadside assistance and transport company offering
            towing, recovery, mobile mechanic support, container movement, and logistics services.
            The company is built to handle both emergency and scheduled transport needs with fast
            response and professional execution across Newfoundland and Labrador.
          </p>
          <Button className="mt-7" size="xl" variant="hero" asChild>
            <Link to="/about">
              Learn More About Us <ArrowRight />
            </Link>
          </Button>
        </Reveal>
        <Reveal direction="right">
          <img
            src={sectionAboutOverviewImage}
            alt="GPS Roadlines container transport truck"
            loading="lazy"
            width={1400}
            height={900}
            className="aspect-[4/3] rounded-lg object-cover shadow-road"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function InfoBand({ children }: { children: ReactNode }) {
  return (
    <section className="bg-secondary/60 px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <Reveal direction="up" className="mx-auto max-w-screen-2xl">
        {children}
      </Reveal>
    </section>
  );
}

export function DispatchWorkflow() {
  return (
    <InfoBand>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <Reveal direction="left">
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
        </Reveal>
        <Reveal direction="right">
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
        </Reveal>
      </div>
    </InfoBand>
  );
}
