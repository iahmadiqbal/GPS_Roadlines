import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { type ReactNode } from "react";

import { Reveal } from "./motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  containerLogisticsImage,
  dispatchControlImage,
  emergencyTowImage,
  sectionAboutOverviewImage,
  sectionServiceRequestImage,
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
import { company, coreServices, integratedFlowBullets, steps, whyChoose, type Service, type ServiceDetail } from "./data";

const heroSlides = [
  {
    image: emergencyTowImage,
    title: "Reliable Roadside Assistance & Transport Services in St. John's",
    text: "Fast towing, roadside support, vehicle recovery, mobile mechanic & logistics solutions",
    className: "animate-slide-fade",
  },
  {
    image: containerLogisticsImage,
    title: "Complete Road Support When You Need It Most",
    text: "From breakdowns to container transport — one trusted provider for all road needs",
    className: "animate-slide-fade-delayed",
  },
  {
    image: dispatchControlImage,
    title: "Smart Dispatch + Faster Response",
    text: "Modern booking system with quick assignment, tracking & service updates",
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
  secondLabel,
  secondHref,
}: {
  title: string;
  text: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondLabel?: string;
  secondHref?: string;
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
            {secondLabel && (
              secondHref ? (
                <Button size="xl" variant="light" asChild>
                  <Link to={secondHref}>{secondLabel} <ArrowRight /></Link>
                </Button>
              ) : (
                <Button size="xl" variant="light" asChild>
                  <Link to="/get-in-touch">{secondLabel} <ArrowRight /></Link>
                </Button>
              )
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}

export function ServiceSection({
  service,
  id,
}: {
  service: Service | ServiceDetail;
  id?: string;
}) {
  const Icon = service.icon;
  const image = serviceImages[service.title] ?? transportImage;
  const bullets = (service as ServiceDetail).bullets;

  return (
    <section
      id={id}
      className="px-4 py-16 sm:px-6 lg:px-8 2xl:px-16"
      style={{ animation: "expandIn 0.35s ease-out both", scrollMarginTop: "var(--header-height, 96px)" }}
    >
      <div className="mx-auto max-w-screen-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-road">
        <div className="grid lg:grid-cols-[1fr_1.6fr]">
          {/* Image */}
          <img
            src={image}
            alt={`${service.title} by GPS Roadlines`}
            width={1600}
            height={1000}
            className="h-full max-h-[540px] w-full object-cover"
          />
          {/* Content */}
          <div className="flex flex-col p-8 lg:p-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                <Icon className="size-6 text-primary" />
              </span>
              <h2 className="text-2xl font-black">{service.title}</h2>
            </div>
            <p className="mb-6 text-sm leading-7 text-muted-foreground">
              {service.description}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mb-8 grid gap-2 sm:grid-cols-2">
                {bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/get-in-touch">Request Service <ArrowRight /></Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={company.phoneHref}><PhoneCall /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({
  services = coreServices,
  title,
  text,
  id = "services",
  simple = false,
}: {
  services?: Service[];
  title?: string;
  text?: string;
  id?: string;
  simple?: boolean;
}) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16" style={{ scrollMarginTop: "var(--header-height, 96px)" }}>
      <div className="mx-auto max-w-screen-2xl">
        {(title || text) && <SectionHeader eyebrow="Services" title={title ?? ""} text={text} />}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const image = serviceImages[service.title] ?? transportImage;
            if (simple) {
              return (
                <Reveal key={service.title} direction={["left", "up", "right"][index % 3] as "left" | "up" | "right"} delay={index * 0.08}>
                  <Card className="group flex flex-col rounded-lg border-border/80 bg-card shadow-road transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="mb-4 text-lg font-black">{service.title}</h3>
                      <Button variant="outline" asChild>
                        <Link to="/contact">
                          Request Service <ArrowRight />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            }
            return (
              <Reveal key={service.title} direction={["left", "up", "right"][index % 3] as "left" | "up" | "right"} delay={index * 0.08}>
                <Card className="group flex flex-col overflow-hidden rounded-lg border-border/80 bg-card shadow-road transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <img
                    src={image}
                    alt={`${service.title} by GPS Roadlines`}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mb-3 text-lg font-black">{service.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Request Service <ArrowRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
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
        {content}
      </div>
    </section>
  );
}

const stepIds = ["request", "review", "assigned", "dispatch", "completion"];

const stepImages = [
  sectionServiceRequestImage,   // Step 1 — Request Service
  dispatchControlImage,          // Step 2 — Location & Issue Review
  serviceFleetTransportImage,    // Step 3 — Operator Assigned
  emergencyTowImage,             // Step 4 — Fast Dispatch & Arrival
  serviceTowingImage,            // Step 5 — Service Completion
];

export function TimelineSection({ detailed = false, showHeader = false }: { detailed?: boolean; showHeader?: boolean }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <div className="mx-auto max-w-screen-2xl">
        {showHeader && (
          <SectionHeader
            eyebrow="How it works"
            title="A dispatch flow designed for speed and clarity"
            text="From first contact to completion, GPS Roadlines keeps every request moving through a practical service workflow."
          />
        )}
        <div className="grid gap-8">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <Reveal key={step.title} direction={isEven ? "right" : "left"} delay={0.05}>
                <div
                  id={stepIds[index]}
                  className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-road lg:grid-cols-2"
                  style={{ scrollMarginTop: "var(--header-height, 96px)" }}
                >
                  {/* Step content */}
                  <div className={`flex flex-col justify-center p-8 lg:p-12 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="mb-5 flex items-center gap-4">
                      <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl font-black text-primary-foreground shadow-glow">
                        {index + 1}
                      </span>
                      <h3 className="text-2xl font-black">{step.title}</h3>
                    </div>
                    <p className="mb-6 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                    {detailed && step.bullets && (
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Step image */}
                  <div className={`relative overflow-hidden ${isEven ? "lg:order-1" : ""}`}>
                    <img
                      src={stepImages[index]}
                      alt={`${step.title} — GPS Roadlines`}
                      loading="lazy"
                      width={1400}
                      height={900}
                      className="h-full min-h-[280px] w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IntegratedModelSection({ showBullets = false, showImage = false, altTitle = false }: { showBullets?: boolean; showImage?: boolean; altTitle?: boolean }) {
  return (
    <section className="bg-brand-dark px-4 py-20 text-brand-dark-foreground sm:px-6 lg:px-8 2xl:px-16">
      <div className={`mx-auto max-w-screen-2xl ${showImage ? "grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center" : ""}`}>
        <Reveal direction="left">
          <h2 className="text-3xl font-black sm:text-5xl">
            {altTitle ? "One System. Multiple Solutions." : "One Call Solves Everything"}
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-dark-foreground/76">
            Unlike traditional towing companies, GPS Roadlines combines towing, roadside assistance,
            mobile mechanic services and logistics support. We don't just move vehicles — we solve
            the full problem from breakdown to recovery or transport completion.
          </p>
          {showBullets && (
            <ul className="mt-6 grid gap-2">
              {integratedFlowBullets.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm leading-6 text-brand-dark-foreground/75">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
        {showImage && (
          <Reveal direction="right">
            <img
              src={containerLogisticsImage}
              alt="GPS Roadlines integrated road support and logistics"
              loading="lazy"
              width={1400}
              height={900}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-road"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function CTASection({
  title = "NEED IMMEDIATE ROAD HELP?",
  text = "Fast response available 24/7 across St. John's and surrounding areas.",
  secondLabel = "Book Now",
  secondHref,
}: {
  title?: string;
  text?: string;
  secondLabel?: string;
  secondHref?: string;
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
            {secondHref ? (
              <a href={secondHref}>{secondLabel}</a>
            ) : (
              <Link to="/get-in-touch">{secondLabel}</Link>
            )}
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

// Home page — simple numbered flow, no images
export function SimpleHowItWorks() {
  const homeSteps = [
    "Request Service",
    "Location & Issue Review",
    "Dispatch Operator",
    "Service Delivery",
    "Completion",
  ];
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 2xl:px-16">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
          {homeSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-3 shadow-road">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                  {i + 1}
                </span>
                <span>{step}</span>
              </div>
              {i < homeSteps.length - 1 && (
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Customer requests are processed via phone or online system with fast assignment
        </p>
      </div>
    </section>
  );
}

export function DispatchWorkflow({ variant = "emergency" }: { variant?: "emergency" | "transport" }) {
  const emergencySteps = [
    "Request received (call/app/web)",
    "Location + issue confirmed",
    "Nearest operator assigned",
    "Technician dispatched immediately",
    "Service completed or tow initiated",
  ];

  const transportSteps = [
    "Customer submits transport request (online or phone)",
    "Load type, size and pickup/drop details reviewed",
    "Route planning and pricing confirmation provided",
    "Assigned driver/operator scheduled",
    "Transport completed with delivery confirmation",
  ];

  const steps = variant === "transport" ? transportSteps : emergencySteps;
  const title = variant === "transport" ? "How Transport Requests Work" : "How Dispatch Works";

  return (
    <InfoBand>
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="mb-8 text-3xl font-black sm:text-4xl">{title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col gap-3 rounded-lg border bg-card p-5 shadow-road">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-black text-primary-foreground shadow-glow">
                {i + 1}
              </span>
              <p className="text-sm font-medium leading-6">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </InfoBand>
  );
}
