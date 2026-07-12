import { Home, Paintbrush, Sparkles } from "lucide-react";
import { gradeIiCaseStudy } from "@/lib/caseStudies";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const domesticPaintingConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroImage: {
    src: "/images/hero-painting-decorating.png",
    alt: "Focus Refurbishment painters decorating a bright interior — roller and detail brush work in progress",
    objectPosition: "object-[center_40%]",
  },
  heroEyebrow: "Painting & Decorating London",
  heroHeadline: "Painting & Decorating London — Interior & Exterior for Homes Across London & Kent",
  heroHeadlineMobile: "Painting & Decorating London",
  heroSubheading:
    "Professional interior and exterior painting and decorating for homeowners — full-house projects, period properties and complete redecorations delivered on schedule by an experienced team.",
  alertBox:
    "🎨 We focus on whole-property work — full interiors, exterior repaints and complete home redecorations. Single-room touch-ups are not our focus.",
  heroBullets: [
    "Interior painting & decorating",
    "Exterior & front-of-house repaints",
    "Full-house redecorations",
    "Period & Victorian properties",
  ],
  heroCtaLabel: "See Our Work",
  heroCtaAnchorId: "domestic-painting-our-work",
  heroFormTitle: "Get a Painting Quote",
  heroFormSubtitle: "Tell us about your home and we will respond within hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects" },
    { value: "98%", label: "Client Retention" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Whole-Home Specialists",
      desc: "Full interior and exterior redecorations — not single-room touch-ups. We plan the programme so your home is finished properly, not piecemeal.",
    },
    {
      title: "Quality Preparation",
      desc: "Proper prep is what separates a finish that lasts from one that peels in a year. We do not skip it.",
    },
    {
      title: "Tidy, Professional Team",
      desc: "Experienced decorators who respect your home — dust sheets, clean handover and work completed to schedule.",
    },
    {
      title: "Trusted Since 2000",
      desc: "25 years painting and decorating homes across London and Kent.",
    },
  ],
  problemHeading: "What Homeowners Want From a Decorating Contractor",
  problemBody:
    "You have probably had a decorator who did not show up, rushed the prep, or left a finish you were not happy with. We built our reputation on reliability and workmanship.",
  problemBullets: [
    "Turning up when agreed and finishing on schedule",
    "Proper surface preparation before any paint goes on",
    "Clean, tidy work with a professional handover",
    "A finish that looks right and lasts",
  ],
  positiveProblemBullets: true,
  services: [
    { icon: Paintbrush, title: "Interior Painting & Decorating" },
    { icon: Home, title: "Exterior & Front-of-House Painting" },
    { icon: Sparkles, title: "Full-House Redecorations" },
    { icon: Home, title: "Period & Victorian Properties" },
  ],
  showVideoSection: false,
  domesticBooking: true,
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "Interior & Exterior Decorating",
    body: "Full-house redecorations and exterior repaints — careful preparation and finishes that look right and last.",
    src: "/images/service-painting.png",
    alt: "Interior painting and decorating completed by Focus Refurbishment in London",
    reverse: true,
  },
  caseStudy: {
    ...gradeIiCaseStudy,
    anchorId: "domestic-painting-our-work",
    placement: "afterValueCards",
    label: "Real Project",
    ctaLabel: "Get a Free Quote",
  },
  processSteps: [
    {
      number: "1",
      title: "Tell Us About Your Home",
      desc: "Call or fill in the form. We respond within 2 hours, Mon–Sat.",
    },
    {
      number: "2",
      title: "Home Visit & Quote",
      desc: "We visit, assess the scope and provide a clear written quote with timeline.",
    },
    {
      number: "3",
      title: "Decorating Begins",
      desc: "Professional team on site when agreed. Work completed on schedule.",
    },
    {
      number: "4",
      title: "Sign-Off",
      desc: "Walk-through on completion. Your home left clean and ready to enjoy.",
    },
  ],
  testimonials: [
    {
      quote:
        "Full interior repaint of our Victorian terrace — proper prep, tidy team and a finish we are really happy with. Would use again.",
      name: "Emma R.",
      role: "Homeowner, South London",
    },
    {
      quote:
        "Had the whole house decorated inside and out. Craig's team were professional, on time and the quality was excellent.",
      name: "Google Review",
      role: "★★★★★",
    },
    {
      quote:
        "Finally found decorators who care about the prep work. The finish has held up brilliantly.",
      name: "Michael H.",
      role: "Homeowner, Kent",
    },
  ],
  testimonialsHeading: "Trusted by Homeowners Across London & Kent",
  faqs: [
    {
      q: "Do you take on single-room painting jobs?",
      a: "We focus on whole-property work — full interiors, exterior repaints and complete home redecorations. Single-room touch-ups are not something we take on.",
    },
    {
      q: "Do you paint period and Victorian properties?",
      a: "Yes. Period homes often need careful preparation and the right products — we have extensive experience across London and Kent.",
    },
    {
      q: "How long does a full house decoration take?",
      a: "It depends on the size of the property and scope. We give you a realistic timeline upfront and stick to it.",
    },
    {
      q: "Do you do exterior painting?",
      a: "Yes — front-of-house, rear elevations and full exterior repaints for houses and flats.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. Based in Sidcup.",
    },
  ],
  finalCtaHeading: "Ready to Redecorate Your Home?",
  finalCtaBullets: [
    "Full-house projects welcome",
    "Interior & exterior work",
    "Free quote — no obligation",
  ],
  finalCtaLabel: "Get a Painting Quote",
  bottomStrip:
    "Painting & decorating — London & Kent — Interior, exterior & full-house projects",
  audienceAltLink: {
    prefix: "Need void or portfolio painting for landlords and agents?",
    label: "See commercial painting →",
    href: "/commercial/painting-decorating-london",
  },
};

const DomesticPaintingDecoratingLondonPage = () => (
  <ServiceLandingPage config={domesticPaintingConfig} />
);

export default DomesticPaintingDecoratingLondonPage;
