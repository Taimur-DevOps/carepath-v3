import {
  Users,
  Clock,
  ClipboardList,
  TrendingUp,
  HeartHandshake,
  ShieldCheck,
  BellRing,
  BookOpen,
  Pill,
  Gift,
  Activity,
  HeartPulse,
  Brain,
  Ribbon,
  BedDouble,
  Stethoscope,
  ClipboardCheck,
  UserPlus,
  MessageSquareText,
  Smartphone,
  UsersRound,
  LayoutDashboard,
  FileCheck2,
  ArrowUpRightSquare,
  BarChart3,
  Lock,
  FlaskConical,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export interface Specialty {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export const specialties: Specialty[] = [
  {
    category: "Chronic Disease",
    icon: HeartPulse,
    items: [
      "Diabetes",
      "Hypertension",
      "Heart Failure",
      "Coronary Artery Disease",
      "COPD",
      "Asthma",
      "Chronic Kidney Disease",
    ],
  },
  {
    category: "Psychiatry",
    icon: Brain,
    items: ["Depression", "Anxiety", "Bipolar Disorder", "Schizophrenia"],
  },
  {
    category: "Oncology",
    icon: Ribbon,
    items: ["Chemotherapy Monitoring", "Cancer Recovery"],
  },
  {
    category: "Post-Hospital Care",
    icon: BedDouble,
    items: ["Discharge Monitoring", "Surgical Recovery", "Readmission Prevention"],
  },
];

export const whyPartner = [
  {
    icon: TrendingUp,
    title: "Improve Patient Retention",
    description:
      "Patients remain connected to your clinic between appointments, instead of drifting toward whichever provider answers first.",
  },
  {
    icon: Clock,
    title: "Protect Doctor Time",
    description:
      "Doctors spend less time on routine follow-up and more time delivering the clinical care only they can provide.",
  },
  {
    icon: Users,
    title: "Empower Clinical Assistants",
    description:
      "Structured workflows turn nurses and clinical assistants into programme coordinators who run monitoring day to day.",
  },
  {
    icon: HeartHandshake,
    title: "Improve Outcomes",
    description:
      "Continuous engagement supports earlier intervention, better adherence, and stronger continuity of care.",
  },
];

export const patientBenefits = [
  { icon: ShieldCheck, title: "Peace of Mind", description: "Patients know someone is watching for changes between visits." },
  { icon: ClipboardList, title: "Better Adherence", description: "Regular check-ins keep patients on their treatment plan." },
  { icon: Activity, title: "Fewer Emergency Visits", description: "Early warning signs are caught before they become crises." },
  { icon: BedDouble, title: "Reduced Hospitalisation", description: "Timely escalation helps prevent avoidable admissions." },
  { icon: BookOpen, title: "Ongoing Education", description: "Patients learn to manage their condition with confidence." },
  { icon: Pill, title: "Medication Reminders", description: "Consistent nudges support day-to-day treatment routines." },
  { icon: Users, title: "Family Participation", description: "Loved ones stay informed and involved in daily care." },
  { icon: Gift, title: "Rewards & Incentives", description: "Monthly rewards recognise patients and family members for staying engaged." },
];

export const clinicResponsibilities = [
  "Diagnose",
  "Treat",
  "Prescribe",
  "Define monitoring protocol",
  "Set escalation criteria",
  "Make clinical decisions",
];

export const c1Responsibilities = [
  "Patient onboarding",
  "Continuous engagement",
  "Monitoring",
  "Follow-up",
  "Documentation",
  "Escalation",
  "Referral back to clinic",
];

export const howItWorksSteps = [
  { icon: Stethoscope, actor: "Clinic", title: "Doctor prescribes monitoring", description: "The treating physician determines that a patient should join a structured monitoring programme." },
  { icon: ClipboardCheck, actor: "Clinic", title: "Patient enrolled", description: "The patient is enrolled under the protocol defined by the hospital or clinic." },
  { icon: UserPlus, actor: "Carepath", title: "Carepath onboards patient", description: "Carepath introduces the programme, sets up the patient on CaringUp, and confirms how monitoring will work." },
  { icon: MessageSquareText, actor: "Patient", title: "Patient submits health information", description: "The patient regularly submits symptoms and health information through the CaringUp app." },
  { icon: Activity, actor: "Carepath", title: "Carepath monitors per protocol", description: "Carepath reviews submissions against the clinical protocol set by the treating clinic." },
  { icon: BellRing, actor: "Carepath", title: "Ongoing engagement", description: "Patients receive reminders, education, motivation and continuous engagement to stay on track." },
  { icon: ArrowUpRightSquare, actor: "Carepath", title: "Escalation when needed", description: "If escalation criteria are met, Carepath refers the patient back to the treating clinic without delay." },
  { icon: Stethoscope, actor: "Clinic", title: "Doctor reviews and decides", description: "The doctor reviews the escalation and decides the next clinical action." },
];

export const platformFeatures = [
  { icon: Smartphone, title: "Patient Mobile App", description: "Health tracking, symptom reporting, medication reminders, health education, appointment reminders and secure messaging in one place." },
  { icon: UsersRound, title: "Family Participation", description: "Family members can support patients and encourage adherence to the care plan." },
  { icon: LayoutDashboard, title: "Care Team Dashboard", description: "Patient overview, monitoring status, alerts and programme management for the Carepath team." },
  { icon: FileCheck2, title: "Protocol-Based Monitoring", description: "Every programme follows the protocol defined by the partnering clinic — nothing is monitored outside those rules." },
  { icon: ArrowUpRightSquare, title: "Clinical Escalation", description: "Patients meeting predefined criteria are referred back to the treating clinic for review." },
  { icon: BarChart3, title: "Reports & Analytics", description: "Clear patient progress and adherence reports for the care team and the partnering clinic." },
  { icon: Lock, title: "Secure Platform", description: "Built for the operational and data-handling standards healthcare programmes require." },
];

export interface SolutionGroup {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const solutionGroups: SolutionGroup[] = [
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    description:
      "Structured monitoring for the conditions that most benefit from continuous engagement between visits.",
    items: ["Diabetes", "Hypertension", "Heart Failure", "Chronic Kidney Disease", "COPD", "Asthma"],
  },
  {
    icon: Brain,
    title: "Mental Health",
    description:
      "Consistent check-ins and structured support for patients under long-term psychiatric care.",
    items: ["Depression", "Anxiety", "Bipolar Disorder", "Schizophrenia", "Long-Term Psychiatric Care"],
  },
  {
    icon: Ribbon,
    title: "Oncology",
    description:
      "Monitoring that follows patients through treatment and into survivorship, on your protocol.",
    items: ["Chemotherapy Support", "Symptom Monitoring", "Treatment Adherence", "Recovery Monitoring", "Cancer Survivorship"],
  },
  {
    icon: BedDouble,
    title: "Post-Hospital Care",
    description:
      "Structured follow-up in the weeks after discharge, when readmission risk is highest.",
    items: ["Discharge Monitoring", "Surgical Recovery", "Readmission Prevention", "Rehabilitation Support"],
  },
];

export interface EvidenceHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const evidenceHighlights: EvidenceHighlight[] = [
  {
    icon: FlaskConical,
    title: "Proven in Asia's Largest RPM Trial",
    description:
      "CaringUp has been evaluated in the largest Remote Patient Monitoring randomised controlled trial conducted in Asia, led by Universiti Malaya.",
  },
  {
    icon: Globe2,
    title: "Listed on the WHO Digital Health Atlas",
    description:
      "CaringUp is listed on the World Health Organization's Digital Health Atlas, a global registry of digital health initiatives.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based, Not Experimental",
    description:
      "Every Carepath programme runs on a platform with published clinical evidence behind it — not an unproven app.",
  },
];

export const challenges = [
  "Patients disengage",
  "Treatment adherence declines",
  "Early warning signs are missed",
  "Emergency visits increase",
  "Preventable hospitalisations occur",
  "Clinics lose long-term patient relationships",
];
