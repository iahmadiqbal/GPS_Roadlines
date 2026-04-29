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
  Truck,
} from "lucide-react";
import type { ReactNode } from "react";

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
    <Link to="/" className="group flex items-center gap-3" aria-label="GPS Roadlines home">
      <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">
        <Truck className="size-5" />
      </span>
      <span className="leading-tight">
        <span className={inverse ? "block text-lg font-black text-brand-dark-foreground" : "block text-lg font-black text-foreground"}>GPS Roadlines</span>
        <span className={inverse ? "block text-xs font-semibold uppercase tracking-wide text-brand-dark-foreground/70" : "block text-xs font-semibold uppercase tracking-wide text-muted-foreground"}>Roadside + Logistics</span>
      </span>
    </Link>
  );
}

function UrgentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button variant="emergency"><PhoneCall /> Immediate Help</Button></DialogTrigger>
      <DialogContent className="rounded-lg border-border bg-card">
        <DialogHeader>
          <DialogTitle>Need urgent roadside assistance?</DialogTitle>
          <DialogDescription>Call our 24/7 dispatch team now.</DialogDescription>
        </DialogHeader>
        <Button size="xl" variant="hero" asChild><a href={company.phoneHref}><PhoneCall /> {company.phone}</a></Button>
      </DialogContent>
    </Dialog>
  );
}

function AppDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button variant="outline">Download App</Button></DialogTrigger>
      <DialogContent className="rounded-lg border-border bg-card">
        <DialogHeader>
          <DialogTitle>Mobile app launching soon…</DialogTitle>
          <DialogDescription>GPS Roadlines is building a faster booking and tracking experience for customers and commercial clients.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl supports-[backdrop-filter]:bg-background/78">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline" size="icon" aria-label="Open navigation"><Menu /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72 rounded-lg bg-popover p-2">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuItem asChild><Link to="/">Home</Link></DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Emergency Services</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-64 bg-popover">
                  <DropdownMenuItem asChild><Link to="/emergency-services">Overview</Link></DropdownMenuItem>
                  {emergencyServices.slice(0, 6).map((service) => <DropdownMenuItem key={service.title}>{service.title}</DropdownMenuItem>)}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Transport & Moving</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-64 bg-popover">
                  <DropdownMenuItem asChild><Link to="/transport-moving">Overview</Link></DropdownMenuItem>
                  {transportServices.slice(0, 6).map((service) => <DropdownMenuItem key={service.title}>{service.title}</DropdownMenuItem>)}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              {navLinks.slice(1).map((link) => <DropdownMenuItem key={link.to} asChild><Link to={link.to}>{link.label}</Link></DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
          <Logo inverse />
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/emergency-services" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Emergency</Link>
          <Link to="/transport-moving" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Transport</Link>
          <Link to="/how-it-works" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">How It Works</Link>
          <Link to="/about" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">About</Link>
          <Link to="/contact" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex"><UrgentDialog /><AppDialog /></div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-dark-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand-dark-foreground/75">{company.legalName} provides roadside assistance, towing, recovery, mobile mechanic coordination, container transport, and logistics support from St. John’s, Newfoundland and Labrador.</p>
          <div className="mt-6 flex gap-3"><Facebook className="size-5" /><Instagram className="size-5" /><Linkedin className="size-5" /></div>
        </div>
        <div>
          <h3 className="font-bold">Quick links</h3>
          <div className="mt-4 grid gap-3 text-sm text-brand-dark-foreground/75">
            <Link to="/emergency-services">Emergency Services</Link><Link to="/transport-moving">Transport & Moving</Link><Link to="/how-it-works">How It Works</Link><Link to="/get-in-touch">Get in Touch</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-brand-dark-foreground/75">
            <a href={company.phoneHref} className="flex gap-2"><PhoneCall className="size-4" /> {company.phone}</a>
            <a href={company.emailHref} className="flex gap-2"><Mail className="size-4" /> {company.email}</a>
            <span className="flex gap-2"><Navigation className="size-4" /> {company.address}</span>
            <span className="flex gap-2"><Clock3 className="size-4" /> 24/7 emergency dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><Header />{children}<Footer /></>;
}
