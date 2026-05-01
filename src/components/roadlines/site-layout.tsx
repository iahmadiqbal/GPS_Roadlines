import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Clock3,
  Download,
  Mail,
  Menu,
  Navigation,
  PhoneCall,
  X,
} from "lucide-react";
import { useState, useRef, useEffect, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { company } from "./data";

const gpsRoadlinesLogo = "/images/gpslogowebsite.png";

// ─── Mega Menu Data ────────────────────────────────────────────────────────

type MenuLink = { label: string; to: string };

type MenuCategory = {
  id: string;
  label: string;
  to: string;
  links: MenuLink[];
  mostRequested: MenuLink[];
};

const megaMenuCategories: MenuCategory[] = [
  {
    id: "emergency",
    label: "Emergency Services",
    to: "/emergency-services",
    links: [
      { label: "Towing", to: "/emergency-services#towing" },
      { label: "Roadside Assistance", to: "/emergency-services#roadside-assistance" },
      { label: "Vehicle Recovery", to: "/emergency-services#vehicle-recovery" },
      { label: "Mobile Mechanic", to: "/emergency-services#mobile-mechanic" },
    ],
    mostRequested: [
      { label: "24/7 Towing", to: "/emergency-services#towing" },
      { label: "Battery Boost", to: "/emergency-services#battery-boost" },
      { label: "Fuel Delivery", to: "/emergency-services#fuel-delivery" },
      { label: "Vehicle Lockout", to: "/emergency-services#lockout" },
    ],
  },
  {
    id: "transport",
    label: "Transport & Moving",
    to: "/transport-moving",
    links: [
      { label: "Container Transport", to: "/transport-moving#container-transport" },
      { label: "General Logistics", to: "/transport-moving#logistics" },
      { label: "Equipment Transport", to: "/transport-moving#equipment-transport" },
    ],
    mostRequested: [
      { label: "Container Transport", to: "/transport-moving#container-transport" },
      { label: "Fleet Transport", to: "/transport-moving#fleet-transport" },
      { label: "Vehicle Transport", to: "/transport-moving#vehicle-transport" },
      { label: "Equipment Transport", to: "/transport-moving#equipment-transport" },
    ],
  },
  {
    id: "about",
    label: "About Us",
    to: "/about",
    links: [
      { label: "Company Overview", to: "/about#overview" },
      { label: "Our Mission", to: "/about#mission" },
      { label: "Our Vision", to: "/about#vision" },
      { label: "Why Trust Us", to: "/about#trust" },
    ],
    mostRequested: [
      { label: "Our Story", to: "/about" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Get in Touch", to: "/get-in-touch" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    id: "how-it-works",
    label: "How It Works",
    to: "/how-it-works",
    links: [
      { label: "Request Service", to: "/how-it-works#request" },
      { label: "Location & Issue Review", to: "/how-it-works#review" },
      { label: "Operator Assigned", to: "/how-it-works#assigned" },
      { label: "Fast Dispatch & Arrival", to: "/how-it-works#dispatch" },
      { label: "Service Completion", to: "/how-it-works#completion" },
    ],
    mostRequested: [
      { label: "Book a Service", to: "/get-in-touch" },
      { label: "Emergency Help", to: "/emergency-services" },
      { label: "Call Us Now", to: "/contact" },
      { label: "Transport Services", to: "/transport-moving" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    to: "/contact",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Get a Quote", to: "/get-in-touch" },
      { label: "Emergency Line", to: "/contact#emergency" },
      { label: "Office Location", to: "/contact#location" },
    ],
    mostRequested: [
      { label: "Call 905-781-5278", to: company.phoneHref },
      { label: "Email Us", to: company.emailHref },
      { label: "Get a Free Quote", to: "/get-in-touch" },
      { label: "Emergency Services", to: "/emergency-services" },
    ],
  },
];

// ─── Mega Menu — Canada.ca style ───────────────────────────────────────────

function MegaMenu({
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(megaMenuCategories[0]);

  return (
    <div
      className="fixed left-0 right-0 z-50 border-t-2 border-primary shadow-2xl"
      style={{ top: "var(--header-height, 96px)" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex" style={{ minHeight: 340 }}>
        {/* Left sidebar — dark, category list */}
        <div className="flex flex-col bg-brand-dark" style={{ minWidth: 260, width: 260 }}>
          {megaMenuCategories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat)}
              className={`flex w-full items-center justify-between px-6 py-3.5 text-left text-sm font-medium transition-colors ${
                activeCategory.id === cat.id
                  ? "bg-white text-gray-900"
                  : "text-brand-dark-foreground/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
              {activeCategory.id === cat.id && (
                <ChevronRight className="size-3.5 shrink-0 text-gray-500" />
              )}
            </button>
          ))}
        </div>

        {/* Right panel — white, Canada.ca layout */}
        <div className="flex flex-1 gap-16 bg-white px-10 py-7">
          {/* Left col: category title + links */}
          <div style={{ minWidth: 240 }}>
            <Link
              to={activeCategory.to}
              onClick={onClose}
              className="mb-5 block border-b-2 border-primary pb-2 text-xl font-black text-gray-900 hover:text-primary hover:underline"
            >
              {activeCategory.label}
            </Link>
            <ul className="space-y-3">
              {activeCategory.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="group flex items-start gap-2 text-sm text-primary"
                  >
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover:scale-125" />
                    <span className="underline underline-offset-2 group-hover:no-underline group-hover:text-primary/70">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right col: Most requested */}
          <div style={{ minWidth: 240 }}>
            <ul className="space-y-3 mt-7">
              {activeCategory.mostRequested.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="group flex items-start gap-2 text-sm text-primary"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400 transition-colors group-hover:bg-primary" />
                    <span className="underline underline-offset-2 group-hover:no-underline group-hover:text-primary/70">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Menu ───────────────────────────────────────────────────────────

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white" style={{ overflowY: "auto" }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <Link to="/" onClick={onClose} aria-label="GPS Roadlines home">
          <Logo />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-2">
        {megaMenuCategories.map((cat) => (
          <div key={cat.id} className="border-b border-gray-100">
            <button
              className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold text-gray-900"
              onClick={() => setOpenSection(openSection === cat.id ? null : cat.id)}
            >
              <span>{cat.label}</span>
              <ChevronRight
                className={`size-4 shrink-0 text-primary transition-transform duration-200 ${
                  openSection === cat.id ? "rotate-90" : ""
                }`}
              />
            </button>

            {openSection === cat.id && (
              <div className="mb-3 space-y-1 rounded-lg border border-primary/10 bg-gray-50 p-3">
                <Link
                  to={cat.to}
                  onClick={onClose}
                  className="block rounded-md px-3 py-2 text-sm font-bold text-primary hover:bg-primary/10"
                >
                  {cat.label} — Overview
                </Link>
                <div className="my-1 border-t border-gray-200" />
                {cat.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/40" />
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="border-t border-gray-200 px-4 py-4">
        <a
          href={company.phoneHref}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-bold text-white"
          onClick={onClose}
        >
          <PhoneCall className="size-4" /> {company.phone}
        </a>
      </div>
    </div>
  );
}

// ─── Shared Components ─────────────────────────────────────────────────────

export function Logo() {
  return (
    <img
      src={gpsRoadlinesLogo}
      alt="GPS Roadlines logo"
      width={160}
      height={112}
      className="h-20 w-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-105"
      aria-label="GPS Roadlines home"
    />
  );
}

// ─── Header ────────────────────────────────────────────────────────────────

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`,
      );
    }
  });

  useEffect(() => {
    if (!megaOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [megaOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function handleMouseEnter() {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setMegaOpen(true);
  }

  function handleMouseLeave() {
    hoverTimeoutRef.current = setTimeout(() => setMegaOpen(false), 120);
  }

  return (
    <>
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      <header
        ref={headerRef}
        className="sticky top-0 z-40 border-b border-border/80 bg-background/88 backdrop-blur-xl supports-[backdrop-filter]:bg-background/78"
      >
        <div
          className="mx-auto flex max-w-screen-2xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 xl:px-12 xl:gap-6 2xl:px-16"
          style={{ minHeight: "3.5rem" }}
        >
          {/* Left — Logo stacked above MENU (both mobile & desktop) */}
          <div className="flex min-w-0 flex-col items-center">
            <Link to="/" aria-label="GPS Roadlines home">
              <Logo />
            </Link>
            {/* Desktop MENU button */}
            <button
              className={`hidden lg:flex items-center gap-2 rounded-none border-0 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors ${
                megaOpen ? "bg-primary/85" : "bg-primary hover:bg-primary/85"
              }`}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => setMegaOpen((v) => !v)}
            >
              <Menu className="size-4" />
              MENU
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>
            {/* Mobile MENU button */}
            <button
              className="flex lg:hidden items-center gap-2 rounded-none border-0 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu className="size-3.5" />
              MENU
            </button>
          </div>

          {/* Right — desktop: original size buttons | mobile: compact one line */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Immediate Help */}
            <Dialog>
              <DialogTrigger asChild>
                {/* Desktop: big button */}
                <Button size="xl" variant="emergency" className="hidden lg:flex">
                  <PhoneCall /> Immediate Help
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-lg border-border bg-card">
                <DialogHeader>
                  <DialogTitle>Need urgent roadside assistance?</DialogTitle>
                </DialogHeader>
                <Button size="xl" variant="hero" asChild>
                  <a href={company.phoneHref}>
                    <PhoneCall /> {company.phone}
                  </a>
                </Button>
              </DialogContent>
            </Dialog>

            {/* Download App */}
            <Dialog>
              <DialogTrigger asChild>
                {/* Desktop: big button */}
                <Button size="xl" variant="outline" className="hidden lg:flex">
                  <Download className="size-4" /> Download App
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-lg border-border bg-card">
                <DialogHeader>
                  <DialogTitle>Our App is Coming Soon</DialogTitle>
                </DialogHeader>
                <p className="text-sm leading-7 text-muted-foreground">
                  Our mobile app is launching soon to make bookings faster, easier, and more transparent. Stay tuned.
                </p>
              </DialogContent>
            </Dialog>

            {/* Mobile: compact buttons — one line, full label */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex lg:hidden items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-bold text-white whitespace-nowrap">
                  <PhoneCall className="size-3.5 shrink-0" /> Immediate Help
                </button>
              </DialogTrigger>
              <DialogContent className="rounded-lg border-border bg-card">
                <DialogHeader>
                  <DialogTitle>Need urgent roadside assistance?</DialogTitle>
                </DialogHeader>
                <Button size="xl" variant="hero" asChild>
                  <a href={company.phoneHref}>
                    <PhoneCall /> {company.phone}
                  </a>
                </Button>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="flex lg:hidden items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-bold text-foreground whitespace-nowrap">
                  <Download className="size-3.5 shrink-0" /> Download App
                </button>
              </DialogTrigger>
              <DialogContent className="rounded-lg border-border bg-card">
                <DialogHeader>
                  <DialogTitle>Our App is Coming Soon</DialogTitle>
                </DialogHeader>
                <p className="text-sm leading-7 text-muted-foreground">
                  Our mobile app is launching soon to make bookings faster, easier, and more transparent. Stay tuned.
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {megaOpen && (
          <MegaMenu
            onClose={() => setMegaOpen(false)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </header>
    </>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8 xl:px-12 2xl:px-16">
        {/* Logo + description + social */}
        <div className="md:col-span-2">
          {/* Logo — no wrapper div, no overflow-hidden, no crop */}
          <Link to="/" aria-label="GPS Roadlines home" className="inline-block">
            <img
              src={gpsRoadlinesLogo}
              alt="GPS Roadlines logo"
              width={160}
              height={112}
              className="h-32 w-48 object-contain transition-opacity hover:opacity-85"
            />
          </Link>

          <p
            className="mt-5 max-w-xl text-sm leading-7"
            style={{ color: "rgba(255,255,255,0.80)" }}
          >
            Reliable roadside assistance, towing and transport solutions
            <br />
            in Newfoundland &amp; Labrador.
          </p>

          <div className="mt-6 flex gap-4" style={{ color: "rgba(255,255,255,0.75)" }}>
            <a href="/" aria-label="Facebook" className="transition-opacity hover:opacity-70">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="/" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
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
          <h3 className="font-bold text-white">Quick links</h3>
          <div className="mt-4 grid gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/emergency-services" className="hover:text-white transition-colors">
              Emergency Services
            </Link>
            <Link to="/transport-moving" className="hover:text-white transition-colors">
              Transport &amp; Moving
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/how-it-works" className="hover:text-white transition-colors">
              How It Works
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/get-in-touch" className="hover:text-white transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            <a href={company.phoneHref} className="flex gap-2 hover:text-white transition-colors">
              <PhoneCall className="size-4 shrink-0 mt-0.5" /> {company.phone}
            </a>
            <a href={company.emailHref} className="flex gap-2 hover:text-white transition-colors">
              <Mail className="size-4 shrink-0 mt-0.5" /> {company.email}
            </a>
            <span className="flex gap-2">
              <Navigation className="size-4 shrink-0 mt-0.5" /> {company.address}
            </span>
            <span className="flex gap-2">
              <Clock3 className="size-4 shrink-0 mt-0.5" /> 24/7 emergency dispatch
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <div
          className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs sm:flex-row sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
          style={{ color: "rgba(255,255,255,0.50)" }}
        >
          <span>© {new Date().getFullYear()} GPS Roadlines. All rights reserved.</span>
          <span>Newfoundland &amp; Labrador, Canada</span>
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
