import { Link } from "@tanstack/react-router";
import {
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Navigation,
  PhoneCall,
} from "lucide-react";
import type { ReactNode } from "react";

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
import { company, emergencyServices, transportServices } from "./data";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
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
      <span className="hidden min-w-0 leading-tight xl:block">
        <span
          className={
            inverse
              ? "block truncate text-lg font-black text-brand-dark-foreground"
              : "block truncate text-lg font-black text-foreground"
          }
        >
          GPS Roadlines
        </span>
        <span
          className={
            inverse
              ? "block truncate text-xs font-semibold uppercase tracking-wide text-brand-dark-foreground/70"
              : "block truncate text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          }
        >
          Roadside + Logistics
        </span>
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
          <DialogTitle>Mobile app launching soon…</DialogTitle>
          <DialogDescription>
            GPS Roadlines is building a faster booking and tracking experience for customers and
            commercial clients.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl supports-[backdrop-filter]:bg-background/78">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-24 lg:px-8 xl:gap-6">
        <div className="flex min-w-0 items-center gap-3">
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open navigation">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 rounded-lg bg-popover p-2">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Emergency Services</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-64 bg-popover">
                    <DropdownMenuItem asChild>
                      <Link to="/emergency-services">Overview</Link>
                    </DropdownMenuItem>
                    {emergencyServices.slice(0, 6).map((service) => (
                      <DropdownMenuItem key={service.title}>{service.title}</DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Transport & Moving</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-64 bg-popover">
                    <DropdownMenuItem asChild>
                      <Link to="/transport-moving">Overview</Link>
                    </DropdownMenuItem>
                    {transportServices.slice(0, 6).map((service) => (
                      <DropdownMenuItem key={service.title}>{service.title}</DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                {navLinks.slice(1).map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link to={link.to}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Logo />
        </div>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5">
          <Link
            to="/"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/emergency-services"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Emergency
          </Link>
          <Link
            to="/transport-moving"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Transport
          </Link>
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
            About
          </Link>
          <Link
            to="/contact"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Contact
          </Link>
          <Link
            to="/get-in-touch"
            className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Get in Touch
          </Link>
        </nav>
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo inverse />
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand-dark-foreground/75">
            {company.legalName} provides roadside assistance, towing, recovery, mobile mechanic
            coordination, container transport, and logistics support from St. John’s, Newfoundland
            and Labrador.
          </p>
          <div className="mt-6 flex gap-3">
            <Facebook className="size-5" />
            <Instagram className="size-5" />
            <Linkedin className="size-5" />
          </div>
        </div>
        <div>
          <h3 className="font-bold">Quick links</h3>
          <div className="mt-4 grid gap-3 text-sm text-brand-dark-foreground/75">
            <Link to="/emergency-services">Emergency Services</Link>
            <Link to="/transport-moving">Transport & Moving</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/get-in-touch">Get in Touch</Link>
          </div>
        </div>
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
