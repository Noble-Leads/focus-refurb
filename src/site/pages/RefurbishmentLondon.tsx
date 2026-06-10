import {
  Bath,
  Building,
  Building2,
  Hammer,
  Home,
  Landmark,
  Paintbrush,
  Wrench,
} from "lucide-react";
import { gradeIiCaseStudy, muralRoomCaseStudy } from "@/lib/caseStudies";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const refurbishmentConfig: ServiceLandingConfig = {
  formAnchorId: "refurbishment-enquiry-form",
  mobileOptimizations: true,
  heroEyebrow: "Full Property Refurbishment",
  heroHeadline:
    "Full Property Refurbishment in London & Kent — Design, Build & Fit-Out Under One Roof",
  heroHeadlineMobile: "Full Property Refurbishment in London & Kent",
  heroSubheading:
    "From HMOs and flats to full house renovations and listed buildings. Focus Refurbishment manage everything start to finish — one team, one point of contact, zero stress.",
  alertBox:
    "🏗️ We handle everything in-house — design, structural work, kitchens, bathrooms, painting, plumbing and more. No subcontractors to manage, no fingers to point.",
  heroBullets: [
    "HMOs, flats, houses and listed buildings",
    "Full design and project management included",
    "Single point of contact start to finish",
    "Free callout across London & Kent",
  ],
  heroCtaLabel: "See the Quality of Our Work",
  heroCtaAnchorId: "refurbishment-recent-projects",
  heroFormTitle: "Get a Free Refurbishment Quote",
  heroFormSubtitle: "Tell us about your property and we will respond within hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "Grade II", label: "Listed Experience" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Everything In House",
      desc: "Design, structural, kitchens, bathrooms, painting, plumbing — we do it all. One team, one quote, one consistent standard of work throughout.",
    },
    {
      title: "Full Project Management",
      desc: "You get a single point of contact from first call to final sign-off. No coordinating multiple trades, no chasing contractors, no surprises.",
    },
    {
      title: "All Property Types",
      desc: "HMOs, flats, houses, period properties and Grade II listed buildings. If it needs refurbishing, we have the experience to do it properly.",
    },
    {
      title: "Trusted Since 2000",
      desc: "25 years working with landlords, property managers and homeowners across London and Kent. 98% of clients come back for the next job.",
    },
  ],
  problemHeading: "Why Most Refurbishments Go Wrong",
  problemBody:
    "Most property owners who've been burned share the same story — too many contractors, no one taking ownership, work taking twice as long as quoted, and a finish that doesn't match what was promised.",
  problemBullets: [
    "Multiple trades with no one coordinating",
    "Delays that cost money in lost rent",
    "Corners cut when nobody's watching",
    "No documentation for insurers or letting agents",
  ],
  problemClosing:
    "We work differently. One team. One point of contact. Everything managed from first call to final sign-off.",
  servicesHeading: "What We Cover",
  servicesColumns: 4,
  services: [
    { icon: Home, title: "Full Property Refurbishment" },
    { icon: Building2, title: "HMO Renovation & Fit-Out" },
    { icon: Building, title: "Flat & Apartment Refurbishment" },
    { icon: Bath, title: "Kitchen & Bathroom Refurbishment" },
    { icon: Landmark, title: "Listed & Period Property Renovation" },
    { icon: Paintbrush, title: "Painting & Decoration" },
    { icon: Wrench, title: "Plumbing & Heating Works" },
    { icon: Hammer, title: "Carpentry & Joinery" },
  ],
  showVideoSection: false,
  caseStudies: {
    anchorId: "refurbishment-recent-projects",
    placement: "afterValueCards",
    eyebrow: "Recent projects",
    heading: "Recent Projects",
    subheading:
      "Two recent refurbishments completed by the Focus Refurbishment team — including a Grade II listed property in London. See the standard we deliver on every job.",
    studies: [gradeIiCaseStudy, muralRoomCaseStudy],
    ctaHref: "#refurbishment-enquiry-form",
    ctaLabel: "Get a Free Quote",
  },
  formEmbed: {
    src: "https://app.focusrefurbishmentltd.com/widget/form/SXKJ1hbNc4q8oilhBk7Q",
    title: "FR - Refurb",
    iframeId: "inline-SXKJ1hbNc4q8oilhBk7Q",
    formName: "FR - Refurb",
    formId: "SXKJ1hbNc4q8oilhBk7Q",
    iframeHeight: "609px",
    minHeightClassName: "min-h-[609px]",
  },
  processSteps: [
    {
      number: "1",
      title: "Free Callout & Consultation",
      desc: "We come to site, assess the property and understand exactly what you need. No charge, no obligation, no hard sell.",
    },
    {
      number: "2",
      title: "Detailed Written Quote",
      desc: "You receive a clear itemised quote covering all works, timeline and costs. No hidden extras.",
    },
    {
      number: "3",
      title: "Work Begins",
      desc: "Our team manages everything on site. One point of contact throughout — you always know what's happening and when.",
    },
    {
      number: "4",
      title: "Sign-Off & Documentation",
      desc: "Job completed, photographed and fully documented. Before/after photos and paperwork provided as standard.",
    },
  ],
  testimonials: [
    {
      quote:
        "Focus Refurbishment took our HMO from tired to tenant-ready in three weeks. Craig and his team managed everything — we didn't have to lift a finger.",
      name: "David K.",
      role: "HMO Landlord, South London",
    },
    {
      quote:
        "Two full flat refurbishments now with the same team. Professional, reliable, excellent finish. The documentation they provide is exactly what our letting agent needs.",
      name: "Sarah P.",
      role: "Property Investor, Kent",
    },
    {
      quote:
        "Hired them for a Grade II listed property — which most contractors won't touch. They knew exactly what they were doing and the result was exceptional.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "What types of property do you refurbish?",
      a: "All types — HMOs, flats, houses, apartments, period properties and Grade II listed buildings. Residential and commercial. We've worked across all of them over 25 years.",
    },
    {
      q: "Do you work on Grade II listed and period properties?",
      a: "Yes. We have specific experience with listed and heritage buildings, which require a different approach to standard refurbishment. We know the restrictions and how to work within them.",
    },
    {
      q: "What's included — just the labour or full project management too?",
      a: "Full project management is included as standard. We handle every trade in-house and you have one point of contact throughout. You don't need to coordinate anything.",
    },
    {
      q: "How long does a full refurbishment take?",
      a: "It depends on the scope. We'll give you a realistic timeline upfront and stick to it. A full flat refurbishment typically takes 2–4 weeks. Larger properties and listed buildings take longer — we'll be upfront about this from day one.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London (within the M25) and Kent. We're based in Sidcup — well positioned for South and South East London and across into Kent.",
    },
  ],
  finalCtaHeading: "Ready to Refurbish Your Property?",
  finalCtaBullets: [
    "Free callout — no hidden charges",
    "Full project management included",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Get a Free Quote",
  finalCtaBulletsAsList: true,
  showBottomStrip: false,
};

const RefurbishmentLondonPage = () => <ServiceLandingPage config={refurbishmentConfig} />;

export default RefurbishmentLondonPage;
