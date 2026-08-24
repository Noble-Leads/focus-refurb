import {
  Building2,
  Clock,
  Flame,
  Hammer,
  KeyRound,
  Phone,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import { commercialFormEmbed } from "@/lib/commercialFormEmbed";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const buildingMaintenanceConfig: ServiceLandingConfig = {
  formAnchorId: "maintenance-enquiry-form",
  mobileOptimizations: true,
  heroFormLayout: "stacked",
  heroEyebrow: "Property Maintenance Company London",
  heroHeadline: "Property Maintenance London — For Landlords, Agents & Commercial Portfolios",
  heroHeadlineMobile: "Property Maintenance London",
  heroSubheading:
    "A property maintenance company serving London and Kent — planned maintenance agreements, reactive callouts and 24-hour emergency repairs for landlords, letting agents, facilities managers and commercial property owners. Based in Sidcup, covering the M25 with a strong presence across South London.",
  alertBox:
    "⚡ 24-hour emergency maintenance available. Leaks, fire safety issues, void repairs and urgent tenant callouts — we respond fast when your property can't wait.",
  heroBullets: [
    "Planned maintenance contracts & reactive callouts",
    "Landlords, agents, housing associations & FM companies",
    "Fire doors, roofing, plumbing, electrics and general repairs",
    "24hr emergency maintenance across London & Kent",
  ],
  heroCtaLabel: "Make a Maintenance Enquiry",
  heroFormTitle: "Make a Maintenance Enquiry",
  heroFormSubtitle: "Tell us about your property or portfolio and we'll respond within 24 hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "24/7", label: "Emergency Callouts" },
    { value: "500+", label: "Properties Serviced" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "One Contractor, Every Trade",
      desc: "Roofing, plumbing, electrics, fire doors, decorating and general repairs — one team handles it without you chasing multiple subcontractors.",
    },
    {
      title: "Planned & Reactive Maintenance",
      desc: "Scheduled maintenance contracts to keep portfolios in good order, plus responsive callouts when something breaks. Same team, same standard.",
    },
    {
      title: "Built for Property Professionals",
      desc: "We work with landlords, letting agents, housing associations, facilities managers and commercial businesses who need a contractor that actually turns up.",
    },
    {
      title: "Fire Door & Compliance Works",
      desc: "Fire door installation and surveys alongside general building repairs — one contractor for maintenance and compliance, not three.",
    },
  ],
  problemHeading: "Why Property Maintenance Falls Apart",
  problemBody:
    "The usual pattern: a different contractor for every job, no one answering the phone at weekends, and void periods dragging on because nobody is coordinating the work.",
  problemBullets: [
    "Multiple contractors with no single point of contact",
    "Slow response times on urgent tenant issues",
    "No documentation for agents or compliance",
    "Reactive-only approach — small problems become expensive repairs",
  ],
  problemClosing:
    "We offer planned maintenance contracts and fast reactive callouts — one team accountable for keeping your properties safe, functional and well-presented.",
  servicesHeading: "Maintenance Services We Provide",
  servicesSubheading: "Building maintenance services for commercial and residential portfolios.",
  servicesColumns: 4,
  services: [
    { icon: Wrench, title: "General Building Repairs", subtitle: "Doors, windows, locks & fabric" },
    { icon: Zap, title: "Planned Maintenance Contracts", subtitle: "Scheduled property upkeep" },
    { icon: Phone, title: "Reactive Maintenance", subtitle: "Fast response callouts" },
    { icon: Clock, title: "24hr Emergency Maintenance", subtitle: "Urgent leaks & safety issues" },
    { icon: Flame, title: "Fire Door Maintenance", subtitle: "Compliance & replacements" },
    { icon: Hammer, title: "Roofing & Guttering", subtitle: "Repairs and weatherproofing" },
    { icon: Building2, title: "Commercial Property Maintenance", subtitle: "Offices, retail & blocks" },
    { icon: KeyRound, title: "Void Property Works", subtitle: "Between-tenancy repairs" },
  ],
  showVideoSection: false,
  featurePhoto: {
    placement: "afterFormBand",
    eyebrow: "Commercial properties",
    heading: "Maintenance for Offices & Portfolios",
    body:
      "From office blocks and retail units to residential portfolios — planned maintenance contracts and fast reactive callouts across London and Kent.",
    src: "/images/commercial/office-building.png",
    alt: "Modern commercial office building maintained by Focus Refurbishment in London",
  },
  formEmbed: {
    ...commercialFormEmbed,
    iframeId: "inline-maintenance-e6NuUzUMAfN2MKNTqFnI",
    source: "building-maintenance-london",
  },
  processSteps: [
    {
      number: "1",
      title: "Tell Us About Your Portfolio",
      desc: "Share your properties, typical maintenance needs and response time expectations. We'll discuss planned contracts or ad-hoc arrangements.",
    },
    {
      number: "2",
      title: "Site Visit & Proposal",
      desc: "We assess the properties and provide a clear maintenance proposal — rates, response times and scope of works.",
    },
    {
      number: "3",
      title: "Ongoing Maintenance",
      desc: "Planned visits scheduled, reactive jobs logged and completed. One point of contact throughout.",
    },
    {
      number: "4",
      title: "Reporting & Documentation",
      desc: "Works photographed and documented. Paperwork provided for compliance, agents and insurers where required.",
    },
  ],
  testimonials: [
    {
      quote:
        "Focus Group have handled maintenance across several of our managed properties for the past two years. Reliable, professional, and always responsive.",
      name: "Daniel Whitmore",
      role: "Property Manager, South London",
    },
    {
      quote:
        "When a tenant reports a leak, I need someone who answers the phone. Focus Refurbishment have been that contractor for us — fast, tidy and fairly priced.",
      name: "Letting Agent",
      role: "South East London",
    },
    {
      quote:
        "We use them for void repairs between tenancies. Clear quotes, work completed on schedule, and the flats go back on the market without delay.",
      name: "Residential Landlord",
      role: "Bromley",
    },
  ],
  faqs: [
    {
      q: "What is property maintenance?",
      a: "Property maintenance covers the ongoing repair, upkeep and servicing of buildings — from fixing leaks and broken locks to planned inspections, decorating and compliance works. We provide both scheduled maintenance contracts and reactive callouts for landlords, agents and commercial property owners.",
    },
    {
      q: "Do you offer building maintenance contracts in London?",
      a: "Yes. We provide planned maintenance contracts for landlords, property managers and commercial clients — covering scheduled inspections, preventative works and priority response times. We also take on reactive maintenance without a contract.",
    },
    {
      q: "Do you offer 24-hour emergency maintenance?",
      a: "Yes. We operate 24-hour emergency callouts for urgent issues — active leaks, storm damage, security problems and tenant safety concerns. Call 020 4634 0020 or 07778 737653 for emergencies.",
    },
    {
      q: "Who do you provide property maintenance for?",
      a: "Landlords and property investors, estate and letting agents, housing associations and councils, facilities management companies, main contractors, and commercial businesses. We also work with residential landlords on void repairs and between-tenancy maintenance.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We're based in Sidcup — well placed for South London, South East London, Bromley, Greenwich and across into Kent.",
    },
    {
      q: "Do you work on HMOs and block maintenance?",
      a: "Yes. We maintain HMOs, apartment blocks and multi-unit properties — including communal areas, fire safety works and tenant turnover repairs.",
    },
    {
      q: "Do you offer commercial property maintenance in London?",
      a: "Yes. We work with commercial property owners, office buildings, retail units, blocks of flats and managed portfolios — providing planned preventative maintenance and reactive callouts under maintenance agreements tailored to your properties.",
    },
    {
      q: "Do you offer property maintenance in Kent?",
      a: "Yes. We're based in Sidcup and provide property maintenance across Kent as well as Greater London within the M25 — particularly South London, Bromley, Greenwich and surrounding areas.",
    },
    {
      q: "What is a property maintenance agreement?",
      a: "A maintenance agreement is a contract covering ongoing upkeep of your properties — scheduled inspections, preventative works and agreed response times for reactive repairs. We offer annual and rolling maintenance agreements for landlords, agents and commercial clients.",
    },
    {
      q: "Do you handle void property repairs between tenancies?",
      a: "Yes. Void repairs and between-tenancy refurbishment are a regular part of our work for residential landlords and letting agents — from minor repairs to full property refurbishment before re-letting.",
    },
    {
      q: "What's the difference between planned and reactive maintenance?",
      a: "Planned maintenance is scheduled in advance — inspections, servicing and preventative works to stop problems before they arise. Reactive maintenance is when something breaks and needs fixing now. We offer both, often combined under a maintenance agreement.",
    },
  ],
  finalCtaHeading: "Need a Reliable Maintenance Contractor?",
  finalCtaBullets: [
    "Planned contracts & reactive callouts",
    "24hr emergency maintenance",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Make a Maintenance Enquiry",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "Property maintenance company London & Kent — Commercial contracts — 24hr emergencies",
};

const BuildingMaintenanceLondonPage = () => <ServiceLandingPage config={buildingMaintenanceConfig} />;

export default BuildingMaintenanceLondonPage;
