import {
  BatteryCharging,
  BriefcaseBusiness,
  Car,
  Container,
  Fuel,
  Gauge,
  KeyRound,
  MapPinned,
  Route,
  ShieldCheck,
  Siren,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "GPS Roadlines",
  legalName: "17888147 CANADA INC. O/A GPS Roadlines",
  website: "www.gpsroadlines.com",
  address: "215 Water Street, St John’s NL, A1C 6C9, Canada",
  phone: "905-781-5278",
  phoneHref: "tel:9057815278",
  email: "info@gpsroadlines.com",
  emailHref: "mailto:info@gpsroadlines.com",
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const serviceSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const coreServices: Service[] = [
  {
    title: "Towing Services",
    description:
      "Fast local towing for cars, vans, and light commercial vehicles across St. John’s.",
    icon: Truck,
  },
  {
    title: "Roadside Assistance",
    description:
      "Help for breakdowns, flat tires, lockouts, battery issues, and urgent roadside needs.",
    icon: Siren,
  },
  {
    title: "Vehicle Recovery",
    description:
      "Safe recovery support for disabled, stuck, or damaged vehicles with careful handling.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Mechanic",
    description: "On-site diagnostics and minor repair coordination to reduce delays and downtime.",
    icon: Wrench,
  },
  {
    title: "Container Transport",
    description:
      "Container movement and scheduled freight support for business and site operations.",
    icon: Container,
  },
  {
    title: "Commercial Logistics",
    description:
      "Coordinated transport planning for fleets, commercial clients, and recurring moves.",
    icon: Route,
  },
];

export const emergencyServices: Service[] = [
  {
    title: "Towing",
    description:
      "24/7 emergency towing across St. John's & Avalon Peninsula. Handles breakdowns, accidents, non-start vehicles with flatbed towing for safe vehicle transport.",
    icon: Truck,
  },
  {
    title: "Roadside Assistance",
    description:
      "Battery boost, flat tire replacement, fuel delivery, vehicle lockout, and minor roadside repairs. On-site diagnostics before towing decision.",
    icon: Siren,
  },
  {
    title: "Vehicle Recovery",
    description:
      "Off-road vehicle recovery from ditch, snow, and mud. Accident recovery and winching service with safe extraction using professional equipment.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Mechanic",
    description:
      "On-site diagnostics and minor repair coordination. Reduces unnecessary towing by resolving issues roadside with a dispatched mobile technician.",
    icon: Wrench,
  },
  {
    title: "Battery Boost",
    description:
      "Dead battery jump-start service with portable boosting equipment. Battery health check included. Usually resolved within minutes. 24/7 availability.",
    icon: BatteryCharging,
  },
  {
    title: "Fuel Delivery",
    description:
      "Emergency fuel delivery for empty vehicles. Gasoline and diesel support. Highway and remote area coverage. Prevents towing due to fuel shortage.",
    icon: Fuel,
  },
  {
    title: "Lockout",
    description:
      "Non-destructive vehicle entry for keys locked inside. Professional unlocking tools with no damage to doors or windows. 24/7 emergency availability.",
    icon: KeyRound,
  },
];

export const transportServices: Service[] = [
  {
    title: "Container Transport",
    description:
      "Professional shipping container pickup and delivery across St. John's. Supports 20ft and 40ft containers. Coordination with ports, depots, construction sites and storage yards.",
    icon: Container,
  },
  {
    title: "Logistics",
    description:
      "Planned transport solutions for businesses and individuals. Flexible daily, weekly or contract-based logistics scheduling with efficient route planning.",
    icon: MapPinned,
  },
  {
    title: "Fleet Transport",
    description:
      "Dedicated transport support for business fleets and commercial operators. Emergency and scheduled relocation of company vehicles with priority response.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Vehicle Transport",
    description:
      "Safe transport of vehicles between dealerships, auctions and buyers. Flatbed transport available for non-running or damaged vehicles. GPS-tracked routes.",
    icon: Car,
  },
  {
    title: "Equipment Transport",
    description:
      "Transport of construction machinery and heavy equipment. Supports contractors, builders and infrastructure projects. Equipment loading with safety-first procedures.",
    icon: Wrench,
  },
  {
    title: "Oversized Transport",
    description:
      "Transport of oversized or non-standard items requiring special handling. Customized loading solutions based on item dimensions and weight with route assessment.",
    icon: Gauge,
  },
];

export const whyChoose = [
  {
    title: "Safety First",
    description: "Safety of people, vehicles & cargo always prioritized.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    description: "Quick dispatch system for emergencies.",
    icon: Zap,
  },
  {
    title: "Easy Booking",
    description: "Simple online + phone booking system.",
    icon: MapPinned,
  },
  {
    title: "Professional Team",
    description: "Skilled operators & mechanics.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Transparency",
    description: "Clear pricing and documentation.",
    icon: Gauge,
  },
];

export const steps = [
  {
    title: "Request Service",
    description:
      "Call dispatch or submit a service request with vehicle, location, and urgency details.",
  },
  {
    title: "Location Review",
    description:
      "The team reviews your location, access needs, vehicle status, and the safest response path.",
  },
  {
    title: "Operator Assigned",
    description:
      "The best-fit towing, roadside, recovery, mechanic, or logistics resource is selected.",
  },
  {
    title: "Dispatch",
    description:
      "Your operator is dispatched with job context so the response is efficient and prepared.",
  },
  {
    title: "Completion",
    description:
      "The service is completed with clear closeout communication and next-step support if needed.",
  },
];
