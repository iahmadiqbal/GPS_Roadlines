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
    description: "Responsive towing dispatch for breakdowns, collisions, and vehicle relocations.",
    icon: Truck,
  },
  {
    title: "Roadside Assistance",
    description: "Immediate support for common roadside interruptions and trip delays.",
    icon: Siren,
  },
  {
    title: "Vehicle Recovery",
    description: "Recovery coordination for stuck, disabled, or hard-to-access vehicles.",
    icon: ShieldCheck,
  },
  {
    title: "Battery Boost",
    description: "Jump-start service designed to get drivers moving quickly and safely.",
    icon: BatteryCharging,
  },
  {
    title: "Fuel Delivery",
    description: "Emergency fuel delivery when drivers run out before reaching a station.",
    icon: Fuel,
  },
  {
    title: "Lockout",
    description:
      "Professional lockout assistance with driver-focused care and clear communication.",
    icon: KeyRound,
  },
];

export const transportServices: Service[] = [
  {
    title: "Container Transport",
    description:
      "Reliable container moves for yards, worksites, warehouses, and commercial facilities.",
    icon: Container,
  },
  {
    title: "Logistics",
    description:
      "Dispatch planning, routing, and transport coordination for time-sensitive business needs.",
    icon: MapPinned,
  },
  {
    title: "Fleet Transport",
    description: "Organized vehicle movement for dealerships, fleet managers, and operators.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Vehicle Transport",
    description:
      "Point-to-point vehicle transport with careful loading, scheduling, and delivery updates.",
    icon: Car,
  },
  {
    title: "Equipment Transport",
    description: "Support for moving equipment and operational assets between sites.",
    icon: Wrench,
  },
  {
    title: "Oversized Transport",
    description:
      "Coordinated planning for larger moves that require extra care and route awareness.",
    icon: Gauge,
  },
];

export const whyChoose = [
  {
    title: "Safety First",
    description:
      "Every dispatch prioritizes driver safety, secure handling, and controlled roadside procedures.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    description: "A streamlined intake process helps match the right operator to the job faster.",
    icon: Zap,
  },
  {
    title: "Easy Booking",
    description:
      "Clear service requests, direct contact options, and modern intake forms simplify support.",
    icon: MapPinned,
  },
  {
    title: "Professional Team",
    description: "Courteous operators and coordinators focused on reliable communication.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Transparency",
    description: "Straightforward service details, clear next steps, and no confusing process.",
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
