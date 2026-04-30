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
  address: "215 Water Street, St John's NL, A1C 6C9, Canada",
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

export type ServiceDetail = Service & {
  bullets: string[];
};

export const serviceSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ─── Core Services (Home / About / How It Works) ───────────────────────────

export const coreServices: Service[] = [
  {
    title: "Towing Services",
    description: "Fast local towing for cars, vans, and light commercial vehicles across St. John's.",
    icon: Truck,
  },
  {
    title: "Roadside Assistance",
    description: "Help for breakdowns, flat tires, lockouts, battery issues, and urgent roadside needs.",
    icon: Siren,
  },
  {
    title: "Vehicle Recovery",
    description: "Safe recovery support for disabled, stuck, or damaged vehicles with careful handling.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Mechanic",
    description: "On-site diagnostics and minor repair coordination to reduce delays and downtime.",
    icon: Wrench,
  },
  {
    title: "Container Transport",
    description: "Container movement and scheduled freight support for business and site operations.",
    icon: Container,
  },
  {
    title: "Commercial Logistics",
    description: "Coordinated transport planning for fleets, commercial clients, and recurring moves.",
    icon: Route,
  },
];

// ─── Emergency Services Page ───────────────────────────────────────────────

export const emergencyServices: ServiceDetail[] = [
  {
    title: "Towing",
    description:
      "24/7 emergency towing across St. John's & Avalon Peninsula. Flatbed towing for safe vehicle transport with fast dispatch and damage-free handling.",
    icon: Truck,
    bullets: [
      "24/7 emergency towing across St. John's & Avalon Peninsula",
      "Handles breakdowns, accidents, non-start vehicles",
      "Flatbed towing for safe vehicle transport",
      "Light-duty cars, SUVs, vans, pickups supported",
      "Fast dispatch system with nearest operator assignment",
      "Accident scene response and safety coordination",
      "Vehicle transported to garage, home or requested location",
      "Insurance documentation support available",
      "Real-time job tracking and dispatch logging",
      "Safe loading and damage-free handling",
    ],
  },
  {
    title: "Roadside Assistance",
    description:
      "Battery boost, flat tire replacement, fuel delivery, vehicle lockout, and minor roadside repairs. On-site diagnostics before towing decision.",
    icon: Siren,
    bullets: [
      "Battery boost / jump-start service",
      "Flat tire replacement and support",
      "Fuel delivery for stranded vehicles",
      "Vehicle lockout assistance",
      "Minor roadside mechanical repairs",
      "On-site diagnostics before towing decision",
      "Fast response across highways & city areas",
      "Cold weather and snow emergency support",
      "Prevents unnecessary towing where possible",
      "Mobile technician dispatched immediately",
    ],
  },
  {
    title: "Vehicle Recovery",
    description:
      "Off-road vehicle recovery from ditch, snow, and mud. Accident recovery and winching service with safe extraction using professional equipment.",
    icon: ShieldCheck,
    bullets: [
      "Off-road vehicle recovery (ditch, snow, mud)",
      "Accident recovery and winching service",
      "Safe extraction using professional equipment",
      "Controlled towing from difficult terrain",
      "Damage prevention handling procedures",
      "Construction site and highway recovery",
      "Multi-angle winch recovery when required",
      "Operator safety assessment before recovery",
      "Emergency stuck vehicle extraction",
      "Winter condition recovery specialist service",
    ],
  },
  {
    title: "Mobile Mechanic",
    description:
      "On-site diagnostics and minor repair coordination. Reduces unnecessary towing by resolving issues roadside with a dispatched mobile technician.",
    icon: Wrench,
    bullets: [
      "On-site vehicle diagnostics and assessment",
      "Minor roadside mechanical repairs performed",
      "Reduces unnecessary towing costs",
      "Mobile technician dispatched immediately",
      "Engine, electrical and fluid issue support",
      "Fast response across St. John's region",
      "Repair attempt before towing decision",
      "Available for cars, SUVs, vans and light trucks",
      "Cold weather and emergency mechanical support",
      "24/7 availability across Avalon Peninsula",
    ],
  },
  {
    title: "Battery Boost",
    description:
      "Dead battery jump-start service with portable boosting equipment. Battery health check included. Usually resolved within minutes. 24/7 availability.",
    icon: BatteryCharging,
    bullets: [
      "Dead battery jump-start service",
      "Portable boosting equipment used",
      "Quick roadside response",
      "Battery health check included",
      "Alternator issue detection",
      "Prevents unnecessary towing",
      "Available for all light vehicles",
      "Safe electrical connection process",
      "Usually resolved within minutes",
      "24/7 availability",
    ],
  },
  {
    title: "Fuel Delivery",
    description:
      "Emergency fuel delivery for empty vehicles. Gasoline and diesel support. Highway and remote area coverage. Prevents towing due to fuel shortage.",
    icon: Fuel,
    bullets: [
      "Fuel delivery for empty vehicles",
      "Gasoline and diesel support",
      "Highway and remote area coverage",
      "Small fuel quantity for nearest station",
      "Fast dispatch emergency response",
      "Prevents towing due to fuel shortage",
      "Safe fuel handling procedures",
      "24/7 availability",
      "Roadside restart assistance after fueling",
      "Supports stranded drivers anytime",
    ],
  },
  {
    title: "Lockout",
    description:
      "Non-destructive vehicle entry for keys locked inside. Professional unlocking tools with no damage to doors or windows. 24/7 emergency availability.",
    icon: KeyRound,
    bullets: [
      "Non-destructive vehicle entry",
      "Keys locked inside vehicle support",
      "Fast roadside response",
      "Professional unlocking tools",
      "No damage to doors or windows",
      "Verification before access",
      "Works on cars, SUVs, vans",
      "Emergency cold weather assistance",
      "Usually resolved in minutes",
      "24/7 emergency availability",
    ],
  },
];

// ─── Transport & Moving Page ───────────────────────────────────────────────

export const transportServices: ServiceDetail[] = [
  {
    title: "Container Transport",
    description:
      "Professional shipping container pickup and delivery across St. John's. Supports 20ft and 40ft containers. Coordination with ports, depots, construction sites and storage yards.",
    icon: Container,
    bullets: [
      "Professional shipping container pickup and delivery across St. John's and surrounding areas",
      "Supports 20ft and 40ft container transport depending on load capacity",
      "Safe loading, securing and unloading procedures for all container types",
      "Coordination with ports, depots, construction sites and storage yards",
      "Empty and loaded container movement for residential and commercial clients",
      "Designed for contractors, retailers, marine suppliers and logistics companies",
      "Real-time scheduling for planned or urgent container movement jobs",
      "Secure handling to prevent damage during transit or lifting operations",
      "Flexible booking slots for one-time or recurring container transport",
      "Ideal for business inventory relocation and seasonal storage movement",
      "GPS-based route planning for efficient delivery timelines",
      "Fully insured container handling and transport operations",
    ],
  },
  {
    title: "Logistics",
    description:
      "Planned transport solutions for businesses and individuals. Flexible daily, weekly or contract-based logistics scheduling with efficient route planning.",
    icon: MapPinned,
    bullets: [
      "Planned transport solutions for businesses and individuals in St. John's",
      "Reliable scheduled pickup and delivery across Newfoundland regions",
      "Supports business goods, retail stock, and supply chain movement",
      "Flexible daily, weekly or contract-based logistics scheduling",
      "Efficient route planning to reduce delivery delays and costs",
      "Ideal for small businesses requiring regular transport support",
      "Coordination of multiple pickups and drop-offs in one route",
      "Time-sensitive deliveries handled with priority dispatch system",
      "Includes tracking updates for transparency and reliability",
      "Suitable for both short-distance and regional transport needs",
      "Reduces dependency on multiple logistics providers",
      "Professional handling for commercial goods and packaged cargo",
    ],
  },
  {
    title: "Fleet Transport",
    description:
      "Dedicated transport support for business fleets and commercial operators. Emergency and scheduled relocation of company vehicles with priority response.",
    icon: BriefcaseBusiness,
    bullets: [
      "Dedicated transport support for business fleets and commercial operators",
      "Emergency and scheduled relocation of company vehicles",
      "Breakdown pickup and transfer for delivery and service fleets",
      "Priority response system for registered business accounts",
      "Monthly reporting and billing options for corporate clients",
      "Supports contractors, delivery companies and trade businesses",
      "Minimizes downtime with fast dispatch fleet response system",
      "Coordination of multi-vehicle transport assignments",
      "Includes inter-city and local fleet movement support",
      "Ideal for dealerships and logistics companies managing inventory",
      "Helps maintain operational continuity during breakdowns",
      "Professional handling of branded and commercial vehicles",
    ],
  },
  {
    title: "Vehicle Transport",
    description:
      "Safe transport of vehicles between dealerships, auctions and buyers. Flatbed transport available for non-running or damaged vehicles. GPS-tracked routes.",
    icon: Car,
    bullets: [
      "Safe transport of vehicles between dealerships, auctions and buyers",
      "Supports private vehicle relocation within St. John's and beyond",
      "Auction pickup and delivery for purchased or sold vehicles",
      "Dealer-to-customer delivery service with inspection handling",
      "Flatbed transport available for non-running or damaged vehicles",
      "Secure loading to ensure zero damage during transit",
      "Scheduling options for planned vehicle movement",
      "Ideal for dealerships managing inventory movement efficiently",
      "Residential vehicle relocation for individuals moving locations",
      "GPS-tracked transport routes for delivery transparency",
      "Fast dispatch for urgent vehicle pickup requirements",
      "Insurance-supported transport handling for high-value vehicles",
    ],
  },
  {
    title: "Equipment Transport",
    description:
      "Transport of construction machinery and heavy equipment. Supports contractors, builders and infrastructure projects. Equipment loading with safety-first procedures.",
    icon: Wrench,
    bullets: [
      "Transport of construction machinery and heavy equipment",
      "Supports contractors, builders and infrastructure projects",
      "Safe relocation of tools, machinery and site materials",
      "Delivery to construction zones, industrial sites and warehouses",
      "Scheduled logistics for ongoing project requirements",
      "Handles pallets, generators, compressors and small machinery",
      "Equipment loading and securing with safety-first procedures",
      "Flexible transport options for short-term and long-term projects",
      "Helps reduce downtime for construction and trade operations",
      "Efficient route planning for heavy load transportation",
      "Supports both residential and commercial construction needs",
      "Professional handling for valuable and sensitive equipment",
    ],
  },
  {
    title: "Oversized Transport",
    description:
      "Transport of oversized or non-standard items requiring special handling. Customized loading solutions based on item dimensions and weight with route assessment.",
    icon: Gauge,
    bullets: [
      "Transport of oversized or non-standard items requiring special handling",
      "Supports large equipment, long materials and irregular cargo loads",
      "Customized loading solutions based on item dimensions and weight",
      "Safe transport planning with route assessment before dispatch",
      "Suitable for industrial equipment and unique delivery requests",
      "Coordination for difficult pickup and delivery locations",
      "Secure fastening and protective handling during transit",
      "Flexible scheduling for one-time special transport jobs",
      "Ideal for business relocation of large assets or machinery",
      "Ensures compliance with road safety and transport regulations",
      "Professional operators trained for non-standard cargo movement",
      "Available across St. John's and surrounding Avalon regions",
    ],
  },
];

// ─── About Page Content ────────────────────────────────────────────────────

export const companyOverviewPoints = [
  "GPS Roadlines is a St. John's based roadside assistance and transport company",
  "We provide towing, recovery, mobile mechanic and logistics services",
  "Designed for both emergency and scheduled transport needs",
  "Serving private drivers, businesses, contractors and fleet operators",
  "Operating across St. John's and Avalon Peninsula corridors",
  "Built around fast response, safety and professional service execution",
  "Combines multiple road support services under one system",
  "Focused on reducing downtime for vehicles and businesses",
  "Uses modern dispatch and online booking integration",
  "Supports both individual and commercial customers",
  "Designed as a full-service road mobility solution",
  "Expanding toward integrated logistics and fleet support systems",
];

export const missionPoints = [
  "To deliver dependable towing, roadside assistance and transport services",
  "To ensure fast and safe response for every customer situation",
  "To provide mobile solutions that reduce waiting time and stress",
  "To integrate towing, mechanic and logistics into one service model",
  "To improve roadside safety across Newfoundland & Labrador",
  "To offer transparent pricing and clear communication",
  "To build long-term trust with individuals and businesses",
  "To support both emergency and scheduled transport needs",
  "To use technology for faster dispatch and better coordination",
  "To deliver consistent, professional roadside support",
  "To prioritize customer safety and vehicle protection at all times",
  "To become a leading road support brand in Atlantic Canada",
];

export const visionPoints = [
  "To become a trusted roadside and logistics brand in Atlantic Canada",
  "To expand services across Newfoundland & Labrador regionally",
  "To integrate modern technology into roadside assistance operations",
  "To reduce vehicle downtime through fast and intelligent dispatch systems",
  "To provide end-to-end transport and recovery solutions",
  "To support both individual drivers and commercial fleets equally",
  "To create a seamless digital booking and service experience",
  "To expand mobile mechanic and repair capabilities",
  "To build a strong fleet and logistics infrastructure",
  "To lead in safety-first towing and recovery services",
  "To offer scalable solutions for growing business transport needs",
  "To redefine roadside assistance with reliability and speed",
];

export const whyTrustPoints = [
  "24/7 emergency roadside and towing availability",
  "Fast dispatch across St. John's and surrounding regions",
  "Skilled operators and trained recovery technicians",
  "Integrated towing, mechanic and transport services",
  "Transparent pricing and clear communication",
  "Safe handling of all vehicle types and cargo",
  "Reliable fleet and logistics support for businesses",
  "Modern booking and tracking system integration",
  "Strong focus on safety and damage prevention",
  "Professional customer service experience",
  "Local expertise in Newfoundland road conditions",
  "Trusted by individuals, contractors and commercial clients",
];

// ─── Why Choose Us ─────────────────────────────────────────────────────────

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

// ─── How It Works – Why This Process Works ────────────────────────────────

export const whyProcessWorksBullets = [
  "Reduces waiting time during emergencies",
  "Ensures correct operator is dispatched every time",
  "Minimizes unnecessary towing costs",
  "Improves service accuracy and efficiency",
  "Combines multiple services into one system",
  "Designed for harsh weather conditions in Newfoundland",
  "Supports both emergency and planned operations",
  "Improves communication between customer and dispatch",
  "Provides structured workflow for all job types",
  "Scalable system for future app integration",
  "Builds trust through transparency and process clarity",
  "Ensures consistent professional service delivery",
];

// ─── Integrated Service Flow bullets ──────────────────────────────────────

export const integratedFlowBullets = [
  "Customer issue is not limited to one service type",
  "System decides whether repair, towing or transport is best solution",
  "Example: dead battery → jump start → no tow needed",
  "Example: breakdown → repair attempt → tow if required",
  "Example: fleet breakdown → immediate replacement logistics support",
  "Reduces unnecessary towing costs for customers",
  "Improves efficiency and response success rate",
  "Combines roadside + mechanic + logistics in one workflow",
  "Dispatch system prioritizes fastest resolution outcome",
  "Designed to reduce downtime for individuals and businesses",
  "Improves customer satisfaction and trust",
  "Core advantage over traditional towing companies",
];

export const steps = [
  {
    title: "Request Service",
    description:
      "Customer requests help via call, website or future mobile app. Selects service type: towing, roadside, transport or mechanic support. Emergency requests are flagged for priority dispatch.",
    bullets: [
      "Customer requests help via call, website or future mobile app",
      "Selects service type: towing, roadside, transport or mechanic support",
      "Enters pickup location and basic issue description",
      "Option to upload photos for faster assessment",
      "Emergency requests are flagged for priority dispatch",
      "Business customers can use account-based booking",
      "Simple form designed for quick submission under stress",
      "Supports both emergency and scheduled bookings",
      "Data automatically sent to dispatch system",
      "Reduces call waiting time and manual errors",
      "Enables faster job assignment process",
      "Works 24/7 across St. John's and Avalon Peninsula",
    ],
  },
  {
    title: "Location & Issue Review",
    description:
      "Dispatch team reviews request immediately. Customer location is verified using GPS or provided details. Type of issue is assessed — breakdown, accident, or transport need.",
    bullets: [
      "Dispatch team reviews request immediately",
      "Customer location is verified using GPS or provided details",
      "Type of issue is assessed (breakdown, accident, transport need)",
      "Determines whether roadside repair or towing is required",
      "Safety risk is evaluated before operator dispatch",
      "Additional details may be confirmed with customer",
      "Photo uploads help identify vehicle condition",
      "Priority assigned for emergency or accident cases",
      "Commercial fleet requests are tagged separately",
      "Ensures correct equipment is sent for job type",
      "Prevents delays and wrong dispatch assignments",
      "Builds accurate job preparation before arrival",
    ],
  },
  {
    title: "Operator Assigned",
    description:
      "System assigns nearest available tow truck or technician based on location, vehicle type and service requirement. Equipment type matched to job.",
    bullets: [
      "System assigns nearest available tow truck or technician",
      "Based on location, vehicle type and service requirement",
      "Ensures fastest possible response time",
      "Mobile mechanic or recovery unit assigned if needed",
      "Commercial fleet requests prioritized if contract-based",
      "Operator receives full job details instantly",
      "Route optimization begins automatically",
      "Equipment type matched to job (flatbed, recovery gear, etc.)",
      "Driver contact and ETA shared internally",
      "Dispatch confirms operator readiness",
      "Backup operator assigned if needed",
      "Reduces delays during peak or emergency hours",
    ],
  },
  {
    title: "Fast Dispatch & Arrival",
    description:
      "Operator is immediately dispatched to location. Real-time navigation ensures fastest route is taken. On arrival, situation is assessed before action.",
    bullets: [
      "Operator is immediately dispatched to location",
      "Real-time navigation ensures fastest route is taken",
      "Customer may receive arrival updates (future app feature)",
      "Safety procedures followed during transit",
      "Emergency lights and compliance protocols activated",
      "Operator assesses traffic and weather conditions",
      "ETA optimized using road conditions and distance",
      "Communication maintained with dispatch center",
      "On arrival, situation is assessed before action",
      "Customer is contacted for confirmation on-site",
      "Service begins immediately upon safe arrival",
      "Focus on speed, safety and professionalism",
    ],
  },
  {
    title: "Service Completion",
    description:
      "Service is performed based on issue type — towing, roadside repair, or vehicle recovery. Customer is informed of resolution status. Job marked complete in system.",
    bullets: [
      "Service is performed based on issue type",
      "May include towing, roadside repair or vehicle recovery",
      "Mobile mechanic support used when repair is possible",
      "Vehicle safely loaded or repaired on-site",
      "Transport jobs proceed with secure cargo handling",
      "Safety checks completed before job finalization",
      "Customer is informed of resolution status",
      "Insurance or documentation support provided if needed",
      "Photos and job notes recorded for records",
      "Payment processed or invoiced (business clients)",
      "Customer receives service confirmation",
      "Job marked complete in system",
    ],
  },
];
