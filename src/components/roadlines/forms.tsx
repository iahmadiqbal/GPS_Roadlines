import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, PhoneCall, Send } from "lucide-react";
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

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  serviceType: z.string().trim().min(1, "Select a service"),
  location: z.string().trim().min(2, "Enter a location").max(180),
  message: z.string().trim().min(10, "Add a few details").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Towing",
  "Roadside Assistance",
  "Vehicle Recovery",
  "Mobile Mechanic",
  "Container Transport",
  "Commercial Logistics",
  "Fleet / Business Inquiry",
];

export function ServiceContactForm({ variant = "standard" }: { variant?: "standard" | "lead" }) {
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
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="Phone number" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="serviceType" render={({ field }) => (
            <FormItem><FormLabel>Service Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger></FormControl><SelectContent>{serviceOptions.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
          )} />
        </div>
        <FormField control={form.control} name="location" render={({ field }) => (
          <FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="Street, area, or pickup location" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea className="min-h-32" placeholder={variant === "lead" ? "Tell us about your route, fleet, timeline, and service requirements" : "Tell us what happened and what you need"} {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="xl" variant="hero"><Send /> Submit Request</Button>
          <Button type="button" size="xl" variant="outline" asChild><a href={company.phoneHref}><PhoneCall /> Call {company.phone}</a></Button>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="size-4 text-primary" /> Your details open in a prepared email so you can review before sending.</p>
      </form>
    </Form>
  );
}
