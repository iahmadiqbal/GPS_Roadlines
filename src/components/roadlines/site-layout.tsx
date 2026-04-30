import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Clock3,
  Mail,
  Menu,
  Navigation,
  PhoneCall,
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { company, emergencyServices, serviceSlug, transportServices } from "./data";

const mobileNavLinks = [
  { label: "How It Works", to: "/how-it-works" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Get in Touch", to: "/get-in-touch" },
] as const;

function NavLink({
  to,
  children,
  exact = false,
}: {
  to: string;
  children: ReactNode;
  exact?: boolean;
}) {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname === to;
  return (
    <Link
      to={to}
      className={`whitespace-nowrap text-sm font-semibold transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`}
    >
      {children}
    </Link>
  );
}

export function Logo() {
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
            <DropdownMenu
              open={mobileMenuOpen}
              onOpenChange={(open) => {
                setMobileMenuOpen(open);
                if (!open) {
                  setEmergencyOpen(false);
                  setTransportOpen(false);
                }
              }}
            >
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
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
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
                          to={`/emergency-services#${serviceSlug(service.title)}`}
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
                          to={`/transport-moving#${serviceSlug(service.title)}`}
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
          <NavLink to="/" exact>
            Home
          </NavLink>

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
                  <Link to={`/emergency-services#${serviceSlug(service.title)}`}>
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
                  <Link to={`/transport-moving#${serviceSlug(service.title)}`}>
                    {service.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/get-in-touch">Get a Quote</NavLink>
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
          <Logo />
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand-dark-foreground/75">
            Reliable roadside assistance, towing and transport solutions
            <br />
            in Newfoundland &amp; Labrador.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/" aria-label="Facebook" className="transition-opacity hover:opacity-70">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="/" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/" aria-label="X (Twitter)" className="transition-opacity hover:opacity-70">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-bold">Quick links</h3>
          <div className="mt-4 grid gap-3 text-sm text-brand-dark-foreground/75">
            <Link to="/">Home</Link>
            <Link to="/emergency-services">Emergency Services</Link>
            <Link to="/transport-moving">Transport &amp; Moving</Link>
            <Link to="/about">About Us</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/get-in-touch">Get a Quote</Link>
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
