import {
  BedDouble,
  Building2,
  Home,
  Layers,
  PenTool,
  Ruler,
  Sun,
  Triangle,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const loftConversionsConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroEyebrow: "Loft Conversions London",
  heroHeadline: "Loft Conversion London — Design, Build & Project Management",
  heroHeadlineMobile: "Loft Conversion London",
  heroSubheading:
    "Turn unused roof space into a bedroom, home office or en-suite — with full design and build from one team. We handle structural work, building regulations, windows, insulation, plumbing and finishing. Based in Sidcup, serving homeowners and residential landlords across London within the M25.",
  alertBox:
    "🏠 Most London loft conversions add a full bedroom and bathroom — and significantly increase your property's value. Book a free site visit and we'll tell you what's possible on your roof.",
  heroBullets: [
    "Velux, dormer, L-shaped and mansard conversions",
    "Full design, supply and build — merchant trade discounts passed on",
    "Building regulations and structural work managed in-house",
    "Homeowners and residential landlords welcome",
  ],
  heroCtaLabel: "Get a Free Loft Survey",
  heroFormTitle: "Book a Free Loft Survey",
  heroFormSubtitle: "Tell us about your property and we'll arrange a no-obligation visit.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "Full", label: "Design & Build" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Design & Build Under One Roof",
      desc: "We design the layout, specify materials, and build it — kitchens, bathrooms, electrics, plastering and decorating included. No chasing separate trades or architects unless you want one.",
    },
    {
      title: "Every Type of Loft Conversion",
      desc: "Velux and rooflight conversions for smaller budgets. Rear dormers, L-shaped dormers, hip-to-gable and mansard conversions when you need maximum headroom and floor space.",
    },
    {
      title: "Trade Discounts on Materials",
      desc: "We supply fixtures, fittings and building materials through our merchant accounts — so you benefit from trade pricing on top of a single, itemised quote.",
    },
    {
      title: "Trusted Since 2000",
      desc: "Family-run, fully insured, and established across South London and Kent. One point of contact from first survey to final sign-off.",
    },
  ],
  problemHeading: "Why Loft Conversions Go Wrong",
  problemBody:
    "Loft conversions involve structure, insulation, fire safety, stairs and building regulations — not just boarding out the roof. The horror stories usually start with a builder who underquoted, skipped the regs, or left you coordinating electricians and plasterers yourself.",
  problemBullets: [
    "Insufficient head height not spotted until work starts",
    "Building regulations and fire separation overlooked",
    "Quotes that exclude stairs, plumbing and finishing",
    "No single contractor accountable for the full job",
  ],
  problemClosing:
    "We survey your loft properly upfront, explain what's achievable, and quote for the complete conversion — not just the shell.",
  servicesHeading: "Types of Loft Conversion We Build",
  servicesSubheading: "The right solution depends on your roof type, budget and how much space you need.",
  servicesColumns: 4,
  services: [
    { icon: Sun, title: "Velux & Rooflight Conversions", subtitle: "Cost-effective extra space" },
    { icon: Triangle, title: "Rear Dormer Conversions", subtitle: "Maximum headroom & floor area" },
    { icon: Layers, title: "L-Shaped Dormer Conversions", subtitle: "Victorian & Edwardian terraces" },
    { icon: Building2, title: "Hip-to-Gable Conversions", subtitle: "End-of-terrace & detached homes" },
    { icon: Ruler, title: "Mansard Conversions", subtitle: "Near-vertical rear roof slope" },
    { icon: BedDouble, title: "Bedroom & En-Suite Lofts", subtitle: "Extra bedroom with bathroom" },
    { icon: Home, title: "Home Office Lofts", subtitle: "Quiet workspace away from the house" },
    { icon: PenTool, title: "Full Design & Planning Support", subtitle: "Layouts, specs and building regs" },
  ],
  showVideoSection: false,
  domesticBooking: true,
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "Loft Conversions That Add Real Space",
    body: "Bedrooms, offices and en-suites created from unused roof space — structural work, insulation, stairs and finishing by one team.",
    src: "/images/service-loft-new.png",
    alt: "Loft conversion completed by Focus Refurbishment in London",
  },
  processSteps: [
    {
      number: "1",
      title: "Free Site Survey",
      desc: "We visit your property, measure head height, check roof structure and discuss what you want from the space. No charge, no obligation.",
    },
    {
      number: "2",
      title: "Design & Written Quote",
      desc: "You receive a clear itemised quote covering structure, windows, insulation, stairs, plumbing, electrics and finishing — with a realistic timeline.",
    },
    {
      number: "3",
      title: "Build & Project Management",
      desc: "Our team manages the conversion on site. Building regulations, structural work and all trades coordinated under one roof.",
    },
    {
      number: "4",
      title: "Sign-Off & Handover",
      desc: "Completed to building regs, cleaned up and ready to use. Documentation provided for your records and future buyers.",
    },
  ],
  testimonials: [
    {
      quote:
        "Craig's team converted our loft into a proper bedroom with an en-suite. One team handled everything — we didn't have to find separate plumbers or electricians.",
      name: "Homeowner",
      role: "Greenwich",
    },
    {
      quote:
        "We needed a loft conversion between tenancies. Focus Refurbishment quoted clearly, stuck to the timeline, and the property was let again on schedule.",
      name: "Residential Landlord",
      role: "South London",
    },
    {
      quote:
        "Professional from start to finish. They explained what was possible with our roof and didn't oversell — exactly what we needed.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "How much does a loft conversion cost in London?",
      a: "It depends on the type and size. A simple Velux or rooflight conversion is the most affordable option. Full dormer conversions in London typically run from around £50,000 to £90,000+ for a complete bedroom with bathroom — depending on spec, access and structural work. We provide a free survey and itemised written quote so you know exactly where you stand before committing.",
    },
    {
      q: "Can you do a loft conversion for £20,000?",
      a: "A basic Velux or rooflight conversion — adding habitable space without a full dormer — can cost less than a major dormer build. A full loft conversion with stairs, insulation, electrics, plastering and a bathroom will typically cost more than £20,000 in London. We'll be honest about what's achievable on your budget after the free survey.",
    },
    {
      q: "Is it worth doing a loft conversion in London?",
      a: "For most homeowners and landlords, yes. London property values are high and usable floor space is scarce — a loft conversion is often cheaper than moving and adds a bedroom, office or rental room without extending your footprint. We can advise on what's realistic for your property and area.",
    },
    {
      q: "What is the 4 year rule for loft conversions?",
      a: "The '4 year rule' refers to planning enforcement — if building work was carried out without planning permission, the local authority generally cannot take enforcement action after four years (for physical works). This is separate from building regulations, which still apply. Many loft conversions fall under permitted development, but not all. We check what's required for your property during the survey.",
    },
    {
      q: "Do I need planning permission for a loft conversion?",
      a: "Many loft conversions qualify as permitted development — especially rear dormers within size limits. Listed buildings, conservation areas and some flats need full planning permission. We advise on this at survey stage and can support the application if needed.",
    },
    {
      q: "What types of loft conversion do you build?",
      a: "Velux and rooflight conversions, rear dormers, L-shaped dormers, hip-to-gable conversions and mansard conversions. We'll recommend the best option for your roof type, budget and how you plan to use the space.",
    },
    {
      q: "Do you work with residential landlords?",
      a: "Yes. We regularly convert lofts on rental properties — adding bedrooms or improving layouts between tenancies. Fast turnarounds and clear documentation for agents and insurers.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We're based in Sidcup — well placed for South London, South East London and across into Kent.",
    },
  ],
  finalCtaHeading: "Ready to Convert Your Loft?",
  finalCtaBullets: [
    "Free site survey — no obligation",
    "Full design, supply and build",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Book a Free Loft Survey",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "Loft conversions London — Velux, dormer & mansard — Design & build — Free surveys — Fully insured",
};

const LoftConversionsLondonPage = () => <ServiceLandingPage config={loftConversionsConfig} />;

export default LoftConversionsLondonPage;
