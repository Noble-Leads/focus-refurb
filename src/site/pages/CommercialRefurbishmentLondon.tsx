import { Bath, Building, Building2, Briefcase, Hammer, Home, Paintbrush, Wrench } from "lucide-react";
import { muralRoomCaseStudy } from "@/lib/caseStudies";
import { commercialFormEmbed } from "@/lib/commercialFormEmbed";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const commercialRefurbishmentConfig: ServiceLandingConfig = {
  formAnchorId: "commercial-refurbishment-enquiry-form",
  mobileOptimizations: true,
  heroFormLayout: "stacked",
  heroImage: {
    src: "/images/commercial/office-fitout-complete.png",
    alt: "Completed commercial office refurbishment with polished floor and modern finish by Focus Refurbishment",
    objectPosition: "object-center",
  },
  heroEyebrow: "Commercial Refurbishment London",
  heroHeadline: "Commercial Refurbishment London — Offices, Voids, Fit-Outs & Portfolio Works",
  heroHeadlineMobile: "Commercial Refurbishment London",
  heroSubheading:
    "Office refurbishments, void property turns, flat upgrades and commercial fit-outs for landlords, agents and property managers across London and the M25 — one multi-trade team, full documentation.",
  alertBox:
    "📋 Built for professional property clients — fast void turnarounds, portfolio programmes and compliance-ready handovers.",
  heroBullets: [
    "Office & commercial fit-outs",
    "Void property refurbishment",
    "HMO & flat upgrades between tenancies",
    "Full documentation for agents & insurers",
  ],
  heroCtaLabel: "See Recent Projects",
  heroCtaAnchorId: "commercial-refurbishment-projects",
  heroFormTitle: "Get a Commercial Refurbishment Quote",
  heroFormSubtitle: "Tell us about your property or portfolio and we will respond within hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Retention" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Void & Portfolio Specialists",
      desc: "We work with landlords and managing agents across multiple properties — not just one-off domestic jobs.",
    },
    {
      title: "Fast Turnarounds",
      desc: "Empty properties cost you money. We structure works to get units back on the market quickly.",
    },
    {
      title: "Full Documentation",
      desc: "Before/after photos, job records and sign-off paperwork — everything your agent or insurer might need.",
    },
    {
      title: "One Contractor, All Trades",
      desc: "Structural, kitchens, bathrooms, decorating and compliance works under one roof. One point of contact.",
    },
  ],
  problemHeading: "What Property Managers Need From a Refurb Contractor",
  problemBody:
    "You have probably dealt with contractors who do not show up, take twice as long as quoted, or leave work that fails inspection. We built our reputation on being the opposite.",
  problemBullets: [
    "Reliability — we show up and deliver to schedule",
    "Speed — void turns completed without dragging",
    "Quality — finishes that pass agent inspections",
    "Documentation — records provided as standard",
  ],
  positiveProblemBullets: true,
  servicesHeading: "Commercial Refurbishment Services",
  servicesColumns: 4,
  services: [
    { icon: Briefcase, title: "Office Refurbishment" },
    { icon: Home, title: "Void Property Refurbishment" },
    { icon: Building2, title: "HMO Renovation & Fit-Out" },
    { icon: Building, title: "Flat & Apartment Refurbishment" },
    { icon: Hammer, title: "Commercial Fit-Out" },
    { icon: Bath, title: "Kitchen & Bathroom Upgrades" },
    { icon: Paintbrush, title: "Painting & Decoration" },
    { icon: Wrench, title: "Compliance & Making Good" },
  ],
  showVideoSection: false,
  caseStudies: {
    anchorId: "commercial-refurbishment-projects",
    placement: "afterValueCards",
    eyebrow: "Recent project",
    heading: "Recent Commercial Refurbishment",
    subheading: "A recent refurbishment completed by the Focus Refurbishment team.",
    studies: [muralRoomCaseStudy],
    ctaHref: "#commercial-refurbishment-enquiry-form",
    ctaLabel: "Get a Free Quote",
  },
  formEmbed: {
    ...commercialFormEmbed,
    iframeId: "inline-commercial-refurb-e6NuUzUMAfN2MKNTqFnI",
    source: "commercial-refurbishment-london",
  },
  processSteps: [
    {
      number: "1",
      title: "Portfolio Brief",
      desc: "Tell us about your properties, timelines and compliance requirements. We respond within hours.",
    },
    {
      number: "2",
      title: "Site Survey & Quote",
      desc: "We visit, assess scope and provide a clear written quote with programme dates.",
    },
    {
      number: "3",
      title: "Works on Site",
      desc: "Our team manages every trade. One point of contact throughout the programme.",
    },
    {
      number: "4",
      title: "Sign-Off & Records",
      desc: "Completed works photographed and documented for your records and agent handover.",
    },
  ],
  testimonials: [
    {
      quote:
        "Focus Refurbishment took our HMO from tired to tenant-ready in three weeks. Craig and his team managed everything — we did not have to lift a finger.",
      name: "David K.",
      role: "HMO Landlord, South London",
    },
    {
      quote:
        "Two full flat refurbishments now with the same team. Professional, reliable, excellent finish. The documentation is exactly what our letting agent needs.",
      name: "Sarah P.",
      role: "Property Investor, Kent",
    },
    {
      quote:
        "Needed three void properties turned around quickly between tenancies. They delivered on every one, on time.",
      name: "Claire B.",
      role: "Letting Agent, Kent",
    },
  ],
  faqs: [
    {
      q: "Do you refurbish offices and commercial premises?",
      a: "Yes. Office refurbishments, commercial fit-outs and workplace upgrades across London and the M25 are a core part of our commercial work.",
    },
    {
      q: "Can you handle void property refurbishments?",
      a: "Yes — void turns between tenancies are one of our most common commercial jobs. We work quickly to minimise lost rental income.",
    },
    {
      q: "Do you work on HMOs and flat portfolios?",
      a: "Yes. We regularly refurbish HMOs, flats and multi-unit blocks for landlords and managing agents.",
    },
    {
      q: "Is project management included?",
      a: "Yes — full project management is standard. One point of contact coordinates every trade in-house.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. Based in Sidcup — strong coverage across South London and into Kent.",
    },
  ],
  finalCtaHeading: "Ready to Refurbish Your Commercial Property?",
  finalCtaBullets: [
    "Void & portfolio programmes welcome",
    "Full documentation as standard",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Get a Commercial Quote",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "Commercial refurbishment — London & M25 — Void turns, offices & fit-outs — Full documentation as standard",
  audienceAltLink: {
    prefix: "Looking for a full home renovation instead?",
    label: "See domestic refurbishment →",
    href: "/domestic/refurbishment-london",
  },
  heroAudienceAltLink: true,
};

const CommercialRefurbishmentLondonPage = () => (
  <ServiceLandingPage config={commercialRefurbishmentConfig} />
);

export default CommercialRefurbishmentLondonPage;
