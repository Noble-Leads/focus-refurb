import { Bath, Hammer, Home, Landmark, Paintbrush, Wrench } from "lucide-react";
import { gradeIiCaseStudy, muralRoomCaseStudy } from "@/lib/caseStudies";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const domesticRefurbishmentConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroEyebrow: "House Renovation London",
  heroHeadline: "House Renovation London — Full Home Refurbishment by One Experienced Team",
  heroHeadlineMobile: "House Renovation London",
  heroSubheading:
    "Full house and flat refurbishments for homeowners across London and Kent — kitchens, bathrooms, structural work, decorating and project management from first survey to final handover.",
  alertBox:
    "🏠 One team manages everything in-house — design, structural, kitchens, bathrooms, painting and plumbing. No juggling subcontractors.",
  heroBullets: [
    "Full house & flat renovations",
    "Victorian, period & modern homes",
    "Design and project management included",
    "Free survey across London & Kent",
  ],
  heroCtaLabel: "See Recent Projects",
  heroCtaAnchorId: "domestic-refurbishment-projects",
  heroFormTitle: "Get a Free Renovation Quote",
  heroFormSubtitle: "Tell us about your home and we will respond within hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "Grade II", label: "Listed Experience" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Everything In House",
      desc: "Design, structural, kitchens, bathrooms, painting and plumbing — one team, one quote, one consistent standard throughout your home.",
    },
    {
      title: "Full Project Management",
      desc: "A single point of contact from first call to final sign-off. No coordinating trades or chasing contractors yourself.",
    },
    {
      title: "Period & Modern Homes",
      desc: "Victorian terraces, Edwardian flats, 1930s semis and contemporary properties — we adapt our approach to your building.",
    },
    {
      title: "Trusted Since 2000",
      desc: "25 years renovating homes across London and Kent. Clear quotes, tidy sites and workmanship you can rely on.",
    },
  ],
  problemHeading: "Why Home Renovations Go Wrong",
  problemBody:
    "Most homeowners who have been burned share the same story — too many contractors, no one taking ownership, timelines slipping and a finish that does not match what was promised.",
  problemBullets: [
    "Multiple trades with nobody coordinating",
    "Quotes that creep once work has started",
    "Corners cut when nobody is watching",
    "No clear handover or documentation",
  ],
  problemClosing:
    "We work differently. One team. One point of contact. Everything managed from survey to sign-off.",
  servicesHeading: "What We Cover",
  servicesColumns: 3,
  services: [
    { icon: Home, title: "Full House Refurbishment" },
    { icon: Landmark, title: "Victorian & Period Renovation" },
    { icon: Bath, title: "Kitchen & Bathroom Renovation" },
    { icon: Paintbrush, title: "Interior Painting & Decorating" },
    { icon: Wrench, title: "Plumbing & Heating Works" },
    { icon: Hammer, title: "Carpentry & Joinery" },
  ],
  showVideoSection: false,
  caseStudies: {
    anchorId: "domestic-refurbishment-projects",
    placement: "afterValueCards",
    eyebrow: "Recent projects",
    heading: "Recent Home Renovations",
    subheading:
      "Including a Grade II listed property in London — see the standard we deliver on every home renovation.",
    studies: [gradeIiCaseStudy, muralRoomCaseStudy],
    ctaHref: "#book-quote-visit",
    ctaLabel: "Get a Free Quote",
  },
  beforeAfter: {
    eyebrow: "Before & after",
    heading: "Stairs & Landing Restoration",
    subheading:
      "A recent period home project — dated carpet and tired woodwork refreshed to a clean finish while keeping the exposed beams and character details.",
    pairs: [
      {
        label: "Main staircase",
        before: {
          src: "/images/refurb/stairs-landing-stairs-before.png",
          alt: "Before — dated staircase with dark wood banister and tired carpet",
        },
        after: {
          src: "/images/refurb/stairs-after.png",
          alt: "After — restored staircase with white spindles and polished handrail",
        },
        objectPosition: "object-center",
      },
      {
        label: "Landing",
        before: {
          src: "/images/refurb/landing-before.png",
          alt: "Before — landing with dark wood staircase, beams and dated carpet",
        },
        after: {
          src: "/images/refurb/landing-after.png",
          alt: "After — refreshed landing with white spindles and exposed ceiling beams",
        },
        objectPosition: "object-center",
      },
    ],
  },
  domesticBooking: true,
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "Full Home Refurbishments",
    body: "Complete property transformations — structural work, kitchens, bathrooms, decorating and project management from one experienced team.",
    src: "/images/service-refurbishment-new.png",
    alt: "Full home refurbishment completed by Focus Refurbishment in London",
    reverse: true,
  },
  processSteps: [
    {
      number: "1",
      title: "Free Home Survey",
      desc: "We visit, assess the property and understand what you want to achieve. No charge, no obligation.",
    },
    {
      number: "2",
      title: "Written Quote",
      desc: "Clear itemised quote covering all works, timeline and costs. No hidden extras.",
    },
    {
      number: "3",
      title: "Renovation Begins",
      desc: "Our team manages everything on site. One point of contact throughout.",
    },
    {
      number: "4",
      title: "Handover & Photos",
      desc: "Job completed, photographed and documented. Before/after photos provided as standard.",
    },
  ],
  testimonials: [
    {
      quote:
        "Focus transformed our Victorian terrace in South London — kitchen, bathrooms and full rewire. Craig managed everything and the finish was exceptional.",
      name: "James T.",
      role: "Homeowner, South London",
    },
    {
      quote:
        "Hired them for a Grade II listed property — which most contractors will not touch. They knew exactly what they were doing.",
      name: "Google Review",
      role: "★★★★★",
    },
    {
      quote:
        "Full flat refurbishment done properly. Professional, reliable, excellent finish. We are already planning the next room.",
      name: "Sarah M.",
      role: "Homeowner, Kent",
    },
  ],
  testimonialsHeading: "Trusted by Homeowners Across London & Kent",
  faqs: [
    {
      q: "How much does a house renovation cost in London?",
      a: "It depends entirely on the property size, condition and specification. A full flat refurbishment typically starts from a different point to a whole-house Victorian renovation. We provide a free survey and itemised written quote so you know exactly what you are paying for.",
    },
    {
      q: "Do you renovate Victorian and period properties?",
      a: "Yes. Victorian terraces, Edwardian flats and period homes are a core part of our work, including Grade II listed buildings where specialist care is required.",
    },
    {
      q: "Is project management included?",
      a: "Yes — full project management is standard. We coordinate every trade in-house and you have one point of contact throughout.",
    },
    {
      q: "How long does a full home refurbishment take?",
      a: "A full flat refurbishment typically takes 2–4 weeks. Whole-house renovations and listed properties take longer — we give you a realistic timeline upfront.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We are based in Sidcup — well placed for South and South East London.",
    },
  ],
  finalCtaHeading: "Ready to Renovate Your Home?",
  finalCtaBullets: [
    "Free home survey — no obligation",
    "Full project management included",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Get a Free Quote",
  finalCtaBulletsAsList: true,
  showBottomStrip: false,
  audienceAltLink: {
    prefix: "Need commercial refurbishment for offices, voids or portfolios?",
    label: "See commercial refurbishment →",
    href: "/commercial/refurbishment-london",
  },
};

const DomesticRefurbishmentLondonPage = () => (
  <ServiceLandingPage config={domesticRefurbishmentConfig} />
);

export default DomesticRefurbishmentLondonPage;
