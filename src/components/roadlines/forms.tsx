import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, PhoneCall, Send, Upload } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { company } from "./data";

// Standard contact form schema (Contact page)
const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  serviceType: z.string().trim().min(1, "Select a service"),
  location: z.string().trim().min(2, "Enter a location").max(180),
  message: z.string().trim().min(10, "Add a few details").max(1000),
});

// Lead form schema (Get in Touch page) — document requires extra fields
const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  serviceType: z.string().trim().min(1, "Select a service"),
  vehicleType: z.string().trim().min(1, "Select a vehicle type"),
  pickupLocation: z.string().trim().min(2, "Enter pickup location").max(180),
  dropoffLocation: z.string().trim().max(180).optional(),
  message: z.string().trim().min(10, "Add a few details").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type LeadFormValues = z.infer<typeof leadSchema>;

const serviceOptions = [
  "Towing",
  "Roadside Assistance",
  "Vehicle Recovery",
  "Mobile Mechanic",
  "Container Transport",
  "Commercial Logistics",
  "Fleet / Business Inquiry",
  "Other",
];

const vehicleTypeOptions = [
  "Car",
  "SUV",
  "Truck",
  "Commercial Vehicle",
  "Equipment",
  "Other",
];

// Standard form for Contact page
export function ServiceContactForm({ variant = "standard" }: { variant?: "standard" | "lead" }) {
  if (variant === "lead") {
    return <LeadForm />;
  }
  return <StandardForm />;
}

function StandardForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      location: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    const body = encodeURIComponent(
      `Service request from ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nService: ${values.serviceType}\nLocation: ${values.location}\n\n${values.message}`,
    );
    window.location.href = `${company.emailHref}?subject=GPS Roadlines Service Request&body=${body}`;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Street, area, or pickup location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-32"
                  placeholder="Tell us what happened and what you need"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="xl" variant="hero">
            <Send /> Submit Request
          </Button>
          <Button type="button" size="xl" variant="outline" asChild>
            <a href={company.phoneHref}>
              <PhoneCall /> Call {company.phone}
            </a>
          </Button>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-primary" /> Your details open in a prepared email so
          you can review before sending.
        </p>
      </form>
    </Form>
  );
}

// Lead form for Get in Touch page — document requires: Vehicle Type, Pickup Location, Drop-off Location, Upload Photos
function LeadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      vehicleType: "",
      pickupLocation: "",
      dropoffLocation: "",
      message: "",
    },
  });

  function onSubmit(values: LeadFormValues) {
    const body = encodeURIComponent(
      `Service request from ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nService: ${values.serviceType}\nVehicle Type: ${values.vehicleType}\nPickup Location: ${values.pickupLocation}\nDrop-off Location: ${values.dropoffLocation || "N/A"}\n\n${values.message}`,
    );
    window.location.href = `${company.emailHref}?subject=GPS Roadlines Quote Request&body=${body}`;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Required</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vehicleType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vehicle Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {vehicleTypeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="pickupLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Location</FormLabel>
              <FormControl>
                <Input placeholder="Street address or area for pickup" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dropoffLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Drop-off Location (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="Destination address (optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Description</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-32"
                  placeholder="Describe your situation, route, fleet, timeline, and service requirements"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Upload Photos — document requirement */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">Upload Photos (optional)</label>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed bg-secondary/40 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary/70"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="size-4 shrink-0 text-primary" />
            <span>Click to attach photos of your vehicle or situation</span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            aria-label="Upload photos"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="xl" variant="hero">
            <Send /> Request Quote
          </Button>
          <Button type="button" size="xl" variant="outline" asChild>
            <a href={company.phoneHref}>
              <PhoneCall /> Call {company.phone}
            </a>
          </Button>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-primary" /> Dispatch team reviews request
          immediately and responds with confirmation.
        </p>
      </form>
    </Form>
  );
}
