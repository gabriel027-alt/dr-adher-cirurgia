import { z } from "zod";

export const JointEnum = z.enum(["Ombro", "Joelho"]);
export type JointType = z.infer<typeof JointEnum>;

export const DoctorInfoSchema = z.object({
  name: z.string().min(1),
  crm: z.string().min(1),
  rqe: z.string().min(1),
  clinicName: z.string().min(1),
  title: z.string().min(1),
  bio: z.string().min(1),
  whatsappNumber: z.string().min(1),
  whatsappUrl: z.string().url(),
  address: z.string().min(1).optional(),
  hospitals: z.string().min(1).optional(),
});

export const HeroSchema = z.object({
  badge: z.string().min(1),
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  ctaPrimaryText: z.string().min(1),
  ctaSecondaryText: z.string().min(1),
  surgeryFocus: z.array(z.string().min(1)).min(1),
});

export const PathologyItemSchema = z.object({
  id: z.string().min(1),
  joint: JointEnum,
  title: z.string().min(1),
  indication: z.string().min(1),
  techniqueDescription: z.string().min(1),
  recoveryTime: z.string().min(1),
  tag: z.string().min(1),
});

export const ClinicStatSchema = z.object({
  number: z.string().min(1),
  label: z.string().min(1),
});

export const ScheduleDaySchema = z.object({
  day: z.string().min(1),
  period: z.string().min(1),
});

export const ScheduleNoticeSchema = z.object({
  title: z.string().min(1),
  badge: z.string().min(1),
  description: z.string().min(1),
  days: z.array(ScheduleDaySchema).min(1),
  location: z.string().min(1),
  address: z.string().min(1),
  reimbursementNotice: z.string().min(1),
  particularNotice: z.string().min(1),
  ctaText: z.string().min(1),
});

export const ClinicAuthoritySchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
  stats: z.array(ClinicStatSchema).min(1),
  scheduleNotice: ScheduleNoticeSchema,
});

export const FaqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const SurgicalProtocolStepSchema = z.object({
  stepNumber: z.union([z.number(), z.string()]),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const FooterSchema = z.object({
  legalNotice: z.string().min(1),
  crmDisclaimer: z.string().min(1),
  location: z.string().min(1),
  copyright: z.string().min(1),
});

export const DoctorContentSchema = z.object({
  doctor: DoctorInfoSchema,
  hero: HeroSchema,
  pathologyGrid: z.array(PathologyItemSchema).min(1),
  clinicAuthority: ClinicAuthoritySchema,
  faq: z.array(FaqItemSchema).min(1),
  surgicalProtocol: z.array(SurgicalProtocolStepSchema).min(1),
  footer: FooterSchema,
});

export type DoctorContent = z.infer<typeof DoctorContentSchema>;
export type DoctorInfo = z.infer<typeof DoctorInfoSchema>;
export type HeroContent = z.infer<typeof HeroSchema>;
export type PathologyItem = z.infer<typeof PathologyItemSchema>;
export type ClinicAuthorityContent = z.infer<typeof ClinicAuthoritySchema>;
export type ScheduleNoticeContent = z.infer<typeof ScheduleNoticeSchema>;
export type FaqItem = z.infer<typeof FaqItemSchema>;
export type SurgicalProtocolStep = z.infer<typeof SurgicalProtocolStepSchema>;
export type FooterContent = z.infer<typeof FooterSchema>;
