import {
  AlertTriangle,
  Flame,
  Home,
  Layers,
  Triangle,
  Droplets,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const roofingConfig: ServiceLandingConfig = {
  formAnchorId: "roofing-enquiry-form",
  mobileOptimizations: true,
  heroEyebrow: "Roof Repair & Replacement",
  heroHeadline: "Roof Repair & Replacement in London & Kent — Fast, Reliable, Fully Insured",
  heroSubheading:
    "Leaking roof? Needs replacing? Focus Refurbishment have been repairing and replacing roofs across London and Kent for over 25 years — trusted by landlords, property managers and homeowners alike. Craig offers same-day callouts for emergency repairs, and we respond within 48 hours on everything else.",
  alertBox:
    "⚠️ A leaking roof causes structural damage fast. Whether it's your own home or a rental property, same-day emergency callouts are available — book a free inspection today.",
  heroBullets: [
    "Flat roofs, pitched roofs — all types covered",
    "Same-day emergency callouts for urgent leaks and storm damage",
    "Landlords, homeowners & commercial properties",
    "Fully insured with workmanship guarantee",
  ],
  heroCtaLabel: "Get a Free Roof Inspection",
  heroFormTitle: "Get a Free Roof Inspection",
  heroFormSubtitle: "Tell us about your property and we will respond within hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "All Types", label: "Flat & Pitched Roofs" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Fast Emergency Response",
      desc: "Craig offers same-day callouts for emergency roofing repairs — active leaks, storm damage and tenant safety issues. For non-urgent work, we aim to be on site within 48 hours and stop the damage spreading.",
    },
    {
      title: "All Roof Types",
      desc: "Flat roofs, pitched roofs, felt, EPDM, GRP fibreglass, tiles, slates, flashing and more. If it's a roof, we work on it.",
    },
    {
      title: "Fully Insured & Guaranteed",
      desc: "Every job is fully insured with a written workmanship guarantee. No hidden costs, no surprises.",
    },
    {
      title: "Trusted Across London Since 2000",
      desc: "Serving landlords, property managers and homeowners across Greater London and Kent for over 25 years.",
    },
  ],
  problemHeading: "The Real Cost of a Leaking Roof",
  problemBody:
    "Most people wait too long. What starts as a minor leak becomes water ingress, wet insulation, rotting timbers and structural damage — turning a £300 repair into a £5,000 replacement job.",
  problemBullets: [
    "Water damage spreads through ceilings and walls quickly",
    "Damp and mould — a health risk at home, a legal liability for landlords",
    "Prolonged leaks can void building insurance claims",
    "Structural rot is expensive — and avoidable",
  ],
  servicesSubheading: "What We Fix",
  services: [
    {
      icon: Layers,
      title: "Flat Roof Repair & Replacement",
      subtitle: "Felt, EPDM, GRP Fibreglass",
    },
    {
      icon: Triangle,
      title: "Pitched Roof Repair",
      subtitle: "Tiles, Slates, Ridge, Flashing",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Roof Repairs",
      subtitle: "Same-day callouts available",
    },
    {
      icon: Home,
      title: "Full Roof Replacement",
    },
    {
      icon: Flame,
      title: "Chimney & Flashing Repair",
    },
    {
      icon: Droplets,
      title: "Guttering, Fascia & Soffit",
    },
  ],
  showVideoSection: false,
  roofingProjectGallery: true,
  formEmbed: {
    src: "https://app.focusrefurbishmentltd.com/widget/form/uFrY24Fk2ADJKEnNz5IU",
    title: "FR - Roofing",
    iframeId: "inline-uFrY24Fk2ADJKEnNz5IU",
    formName: "FR - Roofing",
    formId: "uFrY24Fk2ADJKEnNz5IU",
    source: "roofing-london",
    iframeHeight: "672px",
    minHeightClassName: "min-h-[672px]",
  },
  processSteps: [
    {
      number: "1",
      title: "Contact Us",
      desc: "Call or fill in the form. We respond within 2 hours, Mon–Sat.",
    },
    {
      number: "2",
      title: "Free Roof Inspection",
      desc: "We come to site, assess the damage honestly, and give you a clear written quote.",
    },
    {
      number: "3",
      title: "We Get to Work",
      desc: "Our experienced team get on site fast and complete the work to the highest standard.",
    },
    {
      number: "4",
      title: "Guaranteed & Done",
      desc: "You receive a written workmanship guarantee and the job is signed off properly.",
    },
  ],
  testimonials: [
    {
      quote:
        "Craig and his team sorted our flat roof quickly and professionally. No mess, no fuss — and the leak hasn't come back since. Highly recommend.",
      name: "James T.",
      role: "Landlord, South East London",
    },
    {
      quote:
        "We've used Focus for two roofing jobs across our properties in Kent. Reliable, competitive pricing and they actually turn up when they say they will.",
      name: "Sarah M.",
      role: "Property Manager, Kent",
    },
    {
      quote:
        "Had a leak over our bedroom and they were on site within 48 hours. Sorted same day, no mess, and the price was fair. Would use again.",
      name: "David R.",
      role: "Homeowner, Streatham",
    },
  ],
  faqs: [
    {
      q: "How quickly can you respond to an emergency roof repair?",
      a: "For emergency repairs — active leaks, storm damage or tenant safety issues — Craig offers same-day callouts where possible across London and Kent. For non-urgent enquiries, we aim to be on site within 48 hours. We'll assess the situation and get the roof made watertight as quickly as possible.",
    },
    {
      q: "Do you work on both flat and pitched roofs?",
      a: "Yes — we work on all roof types including felt flat roofs, EPDM rubber roofing, GRP fibreglass, pitched tile roofs, slate roofs, and all associated flashing, guttering and chimney work.",
    },
    {
      q: "How do I know if I need a repair or a full replacement?",
      a: "We'll tell you honestly after our free inspection. If a repair will do the job properly, that's what we'll recommend. We won't push for a full replacement unless it's genuinely needed.",
    },
    {
      q: "What areas do you cover?",
      a: "We cover all of Greater London (within the M25) and Kent. Based in Sidcup, we're well placed for South and South East London, and across into Kent.",
    },
    {
      q: "Do you work on domestic homes?",
      a: "Yes. We work on owner-occupied homes as well as rental and commercial properties. Same service, same guarantee — whether you live there or let it out.",
    },
    {
      q: "Do you work on HMOs and multi-unit properties?",
      a: "Yes. We regularly work with landlords and property managers on portfolios of properties. Ongoing maintenance relationships available.",
    },
  ],
  finalCtaHeading: "Got a Roof Problem? Let's Fix It.",
  finalCtaBullets: [
    "Free inspection — no obligation",
    "Same-day emergency callouts available",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Book a Free Inspection",
  bottomStrip:
    "Roof repair & replacement — London & Kent — Same-day emergency callouts — Free inspections — Fully insured",
};

const RoofingLondonPage = () => <ServiceLandingPage config={roofingConfig} />;

export default RoofingLondonPage;
