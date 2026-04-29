import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  Menu,
  Navigation,
  PhoneCall,
  Twitter,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import gpsRoadlinesLogo from "@/assets/gps-roadlines-logo-transparent.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { company, emergencyServices, serviceSlug, transportServices } from "./data";

// Document specifies these exact nav items in hamburger
const mobileNavLinks = [
  { label: "How It Works", to: "/how-it-works" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Get in Touch", to: "/get-in-touch" },
] as const;

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="GPS Roadlines home">
      <span className="flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-24 lg:h-20 lg:w-28">
        <img
          src={gpsRoadlinesLogo}
          alt="GPS Roadlines logo"
          width={220}
          height={180}
          className="h-full w-full object-contain drop-shadow-sm"
        />
      </span>
    </Link>
  );
}

function UrgentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="emergency">
          <PhoneCall /> Immediate Help
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg border-border bg-card">
        <DialogHeader>
          <DialogTitle>Need urgent roadside assistance?</DialogTitle>
          <DialogDescription>Call our 24/7 dispatch team now.</DialogDescription>
        </DialogHeader>
        <Button size="xl" variant="hero" asChild>
          <a href={company.phoneHref}>
            <PhoneCall /> {company.phone}
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function AppDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Download App</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg border-border bg-card">
        <DialogHeader>
          <DialogTitle>Mobile app launching soon...</DialogTitle>
          <DialogDescription>
            Our mobile app is launching soon to make bookings faster, easier, and more transparent.
            Stay tuned.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function Header() {
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl supports-[backdrop-filter]:bg-background/78">
      <div className="mx-auto flex h-24 max-w-screen-2xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-24 lg:px-8 xl:gap-6 2xl:px-16">
        {/* Left: Hamburger (mobile) + Logo */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="lg:hidden">
            <DropdownMenu open={mobileMenuOpen} onOpenChange={(open) => {
              setMobileMenuOpen(open);
              if (!open) {
                setEmergencyOpen(false);
                setTransportOpen(false);
              }
            }}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open navigation">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[calc(100vw-2rem)] max-w-xs max-h-[80vh] overflow-y-auto rounded-lg bg-popover p-2"
              >
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                </DropdownMenuItem>

                {/* Emergency Services — inline accordion */}
                <button
                  className="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setEmergencyOpen((v) => !v)}
                >
                  Emergency Services
                  <ChevronRight
                    className={`size-4 shrink-0 transition-transform duration-200 ${emergencyOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {emergencyOpen && (
                  <div className="ml-3 mt-0.5 border-l border-border pl-3">
                    <DropdownMenuItem asChild>
                      <Link to="/emergency-services" onClick={() => setMobileMenuOpen(false)}>
                        Overview
                      </Link>
                    </DropdownMenuItem>
                    {emergencyServices.map((service) => (
                      <DropdownMenuItem key={service.title} asChild>
                        <Link
                          to="/emergency-services"
                          hash={serviceSlug(service.title)}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                )}

                {/* Transport & Moving — inline accordion */}
                <button
                  className="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setTransportOpen((v) => !v)}
                >
                  Transport &amp; Moving
                  <ChevronRight
                    className={`size-4 shrink-0 transition-transform duration-200 ${transportOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {transportOpen && (
                  <div className="ml-3 mt-0.5 border-l border-border pl-3">
                    <DropdownMenuItem asChild>
                      <Link to="/transport-moving" onClick={() => setMobileMenuOpen(false)}>
                        Overview
                      </Link>
                    </DropdownMenuItem>
                    {transportServices.map((service) => (
                      <DropdownMenuItem key={service.title} asChild>
                        <Link
                          to="/transport-moving"
                          hash={serviceSlug(service.title)}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                )}

                <DropdownMenuSeparator />
                {mobileNavLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link to={link.to} onClick={() => setMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Logo />
        </div>

        {/* Center: Desktop nav with dropdowns */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5">
          <Link
            to="/"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          {/* Emergency Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-muted-foreground outline-none transition-colors hover:text-primary data-[state=open]:text-primary">
              Emergency Services <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 rounded-lg bg-popover p-2">
              <DropdownMenuItem asChild>
                <Link to="/emergency-services" className="font-semibold">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {emergencyServices.map((service) => (
                <DropdownMenuItem key={service.title} asChild>
                  <Link to="/emergency-services" hash={serviceSlug(service.title)}>
                    {service.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Transport & Moving Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-muted-foreground outline-none transition-colors hover:text-primary data-[state=open]:text-primary">
              Transport &amp; Moving <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 rounded-lg bg-popover p-2">
              <DropdownMenuItem asChild>
                <Link to="/transport-moving" className="font-semibold">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {transportServices.map((service) => (
                <DropdownMenuItem key={service.title} asChild>
                  <Link to="/transport-moving" hash={serviceSlug(service.title)}>
                    {service.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/how-it-works"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            How It Works
          </Link>
          <Link
            to="/about"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Contact Us
          </Link>
          <Link
            to="/get-in-touch"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Get in Touch
          </Link>
        </nav>

        {/* Right: CTA buttons */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <UrgentDialog />
          <AppDialog />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-dark-foreground">
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8 2xl:px-16">
        {/* Logo + description + social */}
        <div className="md:col-span-2">
          <Logo inverse />
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand-dark-foreground/75">
            Reliable roadside assistance, towing and transport solutions
            <br />
            in Newfoundland &amp; Labrador.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/" aria-label="Facebook">
              <Facebook className="size-5 transition-opacity hover:opacity-70" />
            </Link>
            <Link to="/" aria-label="Instagram">
              <Instagram className="size-5 transition-opacity hover:opacity-70" />
            </Link>
            <Link to="/" aria-label="X (Twitter)">
              <Twitter className="size-5 transition-opacity hover:opacity-70" />
            </Link>
          </div>
        </div>

        {/* Quick links — document: Home | Services | About | Contact | How It Works */}
        <div>
          <h3 className="font-bold">Quick links</h3>
          <div className="mt-4 grid gap-3 text-sm text-brand-dark-foreground/75">
            <Link to="/">Home</Link>
            <Link to="/emergency-services">Emergency Services</Link>
            <Link to="/transport-moving">Transport &amp; Moving</Link>
            <Link to="/about">About Us</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/get-in-touch">Get in Touch</Link>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-brand-dark-foreground/75">
            <a href={company.phoneHref} className="flex gap-2">
              <PhoneCall className="size-4" /> {company.phone}
            </a>
            <a href={company.emailHref} className="flex gap-2">
              <Mail className="size-4" /> {company.email}
            </a>
            <span className="flex gap-2">
              <Navigation className="size-4" /> {company.address}
            </span>
            <span className="flex gap-2">
              <Clock3 className="size-4" /> 24/7 emergency dispatch
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
