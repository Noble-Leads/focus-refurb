import {
  Briefcase,
  Building,
  Building2,
  ClipboardList,
  Home,
  Paintbrush,
  Users,
} from "lucide-react";
import { commercialFormEmbed } from "@/lib/commercialFormEmbed";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const commercialPaintingConfig: ServiceLandingConfig = {
  formAnchorId: "commercial-painting-enquiry-form",
  mobileOptimizations: true,
  heroFormLayout: "stacked",
  heroEyebrow: "Commercial Painting London",
  heroHeadline: "Commercial Painting London — Voids, HMOs, Portfolios & Communal Areas",
  heroSubheading:
    "Void property turnarounds, HMO decoration, communal areas and multi-property painting contracts for landlords, agents and commercial clients across London and the M25.",
  alertBox:
    "📋 Multi-property specialists — fast void turnarounds, portfolio programmes and full documentation as standard.",
  heroBullets: [
    "Void properties repainted and ready to relet fast",
    "HMOs, communal areas & multi-unit blocks",
    "Ongoing maintenance contracts available",
    "Landlords, agents & commercial clients",
  ],
  heroCtaLabel: "See Our Work",
  heroCtaAnchorId: "commercial-painting-our-work",
  heroFormTitle: "Get a Commercial Painting Quote",
  heroFormSubtitle: "Tell us about your property or portfolio and we will respond within hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects" },
    { value: "98%", label: "Client Retention" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Multi-Property Specialists",
      desc: "We work with landlords and managing agents across portfolios, not just one-off jobs. Ongoing maintenance contracts at preferential rates.",
    },
    {
      title: "Fast Void Turnarounds",
      desc: "Tenant out? We get the property repainted and ready to relet quickly, protecting your rental income.",
    },
    {
      title: "Full Documentation",
      desc: "Job sheets and before/after photographs provided as standard — everything your letting agent or insurer might need.",
    },
    {
      title: "Trusted Since 2000",
      desc: "25 years working with property professionals across London and Kent.",
    },
  ],
  problemHeading: "What Property Managers Need From a Painting Contractor",
  problemBody:
    "You have probably had a decorator who does not show up, takes twice as long as quoted, or leaves a finish your tenants complain about. We spent 25 years building a reputation on being the opposite.",
  problemBullets: [
    "Reliability — we show up, do the job, do not need chasing",
    "Speed — fast void turnarounds mean less time between tenancies",
    "Quality — work that lasts and tenants cannot fault",
    "Documentation — before/after photos and job records as standard",
  ],
  positiveProblemBullets: true,
  services: [
    { icon: Paintbrush, title: "Void Property Painting & Decoration" },
    { icon: Building2, title: "HMO Interior Painting" },
    { icon: Users, title: "Communal Areas & Stairwells" },
    { icon: Building, title: "Multi-Unit Block Decoration" },
    { icon: Home, title: "External & Exterior Painting" },
    { icon: Briefcase, title: "Commercial & Office Painting" },
    { icon: ClipboardList, title: "Multi-Property Maintenance Contracts" },
  ],
  showVideoSection: false,
  featurePhoto: {
    placement: "afterValueCards",
    anchorId: "commercial-painting-our-work",
    eyebrow: "Recent project",
    heading: "Commercial Office Decorating",
    body:
      "Full redecoration on a modern office floor plate — walls, ceilings and communal areas finished to a high standard, documented and handed over on programme.",
    src: "/images/commercial/office-painting-feature.png",
    alt: "Completed commercial office fit-out with Focus Refurbishment branding, open-plan desks and polished concrete floor",
    reverse: true,
  },
  formEmbed: {
    ...commercialFormEmbed,
    iframeId: "inline-commercial-painting-e6NuUzUMAfN2MKNTqFnI",
    source: "commercial-painting-decorating-london",
  },
  processSteps: [
    {
      number: "1",
      title: "Tell Us What You Need",
      desc: "Call or fill in the form. We respond within 2 hours, Mon–Sat.",
    },
    {
      number: "2",
      title: "Site Visit & Written Quote",
      desc: "We visit, assess the scope, and give you a clear written quote with timeline.",
    },
    {
      number: "3",
      title: "Work Begins on Schedule",
      desc: "Professional team on site when agreed. Work completed on time.",
    },
    {
      number: "4",
      title: "Sign-Off & Documentation",
      desc: "Job photographed and documented. Before/after photos provided for your records.",
    },
  ],
  testimonials: [
    {
      quote:
        "We have used Focus Refurbishment for painting across four of our HMOs in South London. Consistent quality, always on time.",
      name: "David R.",
      role: "HMO Landlord, South London",
    },
    {
      quote:
        "Needed three void properties turned around quickly between tenancies. They delivered on every one, on time, and the standard was excellent.",
      name: "Claire B.",
      role: "Letting Agent, Kent",
    },
    {
      quote:
        "Finally found a painting contractor we can rely on. The before/after photos they send over are great for our records.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "Do you take on domestic painting jobs?",
      a: "Our commercial work focuses on void turnarounds, HMOs, communal areas and portfolio contracts. For full-home homeowner projects, see our domestic painting page.",
    },
    {
      q: "Can you handle multiple properties at the same time?",
      a: "Yes. We can work across multiple properties simultaneously. Tell us your timeline and portfolio size and we will structure the programme accordingly.",
    },
    {
      q: "How quickly can you turn around a void property?",
      a: "It depends on size and scope, but we understand empty properties cost you money. We give you a realistic timeline upfront and stick to it.",
    },
    {
      q: "Do you offer ongoing maintenance contracts?",
      a: "Yes. We work with several landlords and property managers on regular painting and decorating maintenance contracts.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. Based in Sidcup.",
    },
  ],
  finalCtaHeading: "Let's Talk About Your Portfolio",
  finalCtaBullets: [
    "Multi-property contracts welcome",
    "Fast void turnarounds",
    "Full documentation as standard",
  ],
  finalCtaLabel: "Get a Commercial Painting Quote",
  bottomStrip:
    "Commercial painting — London & M25 — Void turns, HMOs & portfolios — Full documentation as standard",
  audienceAltLink: {
    prefix: "Looking for whole-home painting for your property?",
    label: "See domestic painting & decorating →",
    href: "/domestic/painting-decorating-london",
  },
};

const CommercialPaintingDecoratingLondonPage = () => (
  <ServiceLandingPage config={commercialPaintingConfig} />
);

export default CommercialPaintingDecoratingLondonPage;
