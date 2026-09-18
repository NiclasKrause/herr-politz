import { z } from "zod";

export const inquirySchema = z.object({
  projectType: z.string().min(1, "Bitte auswählen"),
  location: z.string().min(1, "Bitte Projektort angeben"),
  startDate: z.string().optional(),
  name: z.string().min(2, "Bitte Namen angeben"),
  company: z.string().optional(),
  phone: z.string().min(3, "Bitte Telefonnummer angeben"),
  email: z.string().email("Bitte gültige E-Mail-Adresse angeben"),
  message: z.string().optional(),
  privacyAccepted: z.literal(true, { message: "Bitte Datenschutz bestätigen" }),
  website: z.string().max(0).optional(), // honeypot
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const applicationSchema = z.object({
  jobSlug: z.string().min(1),
  jobTitle: z.string().min(1),
  name: z.string().min(2, "Bitte Namen angeben"),
  skill: z.string().min(1, "Bitte auswählen"),
  phone: z.string().min(3, "Bitte Telefonnummer angeben"),
  email: z.string().email("Bitte gültige E-Mail-Adresse angeben"),
  message: z.string().optional(),
  privacyAccepted: z.literal(true, { message: "Bitte Datenschutz bestätigen" }),
  website: z.string().max(0).optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const whistleblowerSchema = z.object({
  message: z.string().min(10, "Bitte Meldung ausführen"),
  contact: z.string().optional(),
  website: z.string().max(0).optional(),
});

export type WhistleblowerInput = z.infer<typeof whistleblowerSchema>;
