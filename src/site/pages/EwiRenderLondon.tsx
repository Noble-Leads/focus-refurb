import {
  Building,
  Droplets,
  Home,
  Layers,
  Paintbrush,
  Shield,
  Sparkles,
  Thermometer,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const ewiRenderConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroEyebrow: "EWI & Render London",
  heroHeadline: "External Wall Insulation & Render London — Warmer, Better-Looking Homes",
  heroHeadlineMobile: "External Wall Insulation London",
  heroSubheading:
    "External wall insulation with silicone render finishes — cut heat loss, stop damp and transform tired pebble-dash or bare brick exteriors. Full design, supply and installation for homeowners and landlords across London within the M25.",
  alertBox:
    "🏠 External wall insulation can reduce heating bills and completely refresh your home's exterior — one job, two benefits. Book a free survey for a clear quote.",
  heroBullets: [
    "External wall insulation (EWI) systems",
    "Silicone and mineral render finishes",
    "Pebble-dash removal and re-rendering",
    "Full supply and installation",
  ],
  heroCtaLabel: "Get a Free EWI Survey",
  heroFormTitle: "Get a Free EWI & Render Quote",
  heroFormSubtitle: "Tell us about your property and we'll assess the exterior walls.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "EWI", label: "& Render Systems" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Insulation & Render Together",
      desc: "EWI boards fixed to the exterior, meshed, base-coated and finished with a through-coloured silicone render — warmer walls and a clean modern facade in one system.",
    },
    {
      title: "Pebble-Dash & Facade Upgrades",
      desc: "Tired pebble-dash, cracked render and stained exteriors stripped back and re-finished. Your property looks new without the cost of recladding.",
    },
    {
      title: "Energy Efficiency Gains",
      desc: "External insulation reduces heat loss through solid walls — particularly effective on pre-war terraces and properties without cavity walls.",
    },
    {
      title: "Design, Supply & Build",
      desc: "Scaffolding, materials and installation managed by our team. Trade-supply pricing on render systems and insulation boards.",
    },
  ],
  problemHeading: "Why Cheap Render Fails",
  problemBody:
    "Render blown off walls, cracks at corners, and water trapped behind insulation — usually because preparation was rushed, wrong products were used, or detailing at windows and sills was ignored.",
  problemBullets: [
    "Insufficient surface preparation",
    "No mesh reinforcement at stress points",
    "Poor detailing around openings",
    "Wrong system for the substrate",
  ],
  problemClosing:
    "We specify the right EWI system for your wall type and install with proper beads, mesh and weatherproof detailing.",
  servicesHeading: "EWI & Render Services",
  servicesSubheading: "Exterior upgrades for houses, flats and rental properties.",
  servicesColumns: 4,
  services: [
    { icon: Thermometer, title: "External Wall Insulation", subtitle: "Full EWI systems" },
    { icon: Paintbrush, title: "Silicone Render", subtitle: "Through-coloured finishes" },
    { icon: Sparkles, title: "Pebble-Dash Removal", subtitle: "Strip and re-render" },
    { icon: Layers, title: "Mineral Render Systems", subtitle: "Breathable finishes" },
    { icon: Building, title: "Solid Wall Insulation", subtitle: "Pre-war & period homes" },
    { icon: Droplets, title: "Weatherproof Detailing", subtitle: "Sills, beads & trims" },
    { icon: Home, title: "House Rendering", subtitle: "Full exterior refresh" },
    { icon: Shield, title: "Landlord Exterior Upgrades", subtitle: "Portfolio properties" },
  ],
  showVideoSection: false,
  domesticBooking: { utmSource: "ewi-render" },
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "EWI & Silicone Render Systems",
    body: "External wall insulation and high-performance render — improving energy efficiency with a clean, modern exterior finish.",
    src: "/images/service-render-new.png",
    alt: "External wall insulation and render completed by Focus Refurbishment in London",
  },
  processSteps: [
    {
      number: "1",
      title: "Exterior Survey",
      desc: "We assess wall condition, substrate type, access and whether EWI is appropriate for your property.",
    },
    {
      number: "2",
      title: "System Design & Quote",
      desc: "EWI specification, render colour options and itemised quote — scaffolding included.",
    },
    {
      number: "3",
      title: "Installation",
      desc: "Preparation, insulation boards, mesh, base coat and top-coat render applied to manufacturer spec.",
    },
    {
      number: "4",
      title: "Completion",
      desc: "Detailing checked, site cleared, and your upgraded exterior ready.",
    },
  ],
  testimonials: [
    {
      quote:
        "Pebble-dash removed and silicone render applied. House looks completely different — and noticeably warmer.",
      name: "Homeowner",
      role: "South East London",
    },
    {
      quote:
        "EWI on our solid-wall terrace. Professional installation and neat finish around the windows.",
      name: "Homeowner",
      role: "Kent",
    },
    {
      quote:
        "Clear quote, scaffolding sorted, and the render still looks perfect two years on.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "How much does external wall insulation cost in the UK?",
      a: "EWI costs depend on wall area, system specification, scaffolding and render finish. As a broad guide, external wall insulation typically costs from around £100–£150 per square metre installed. We provide a free survey and itemised quote for your property.",
    },
    {
      q: "What is external wall insulation?",
      a: "Insulation boards are fixed to the outside of your walls, covered with mesh and render. It reduces heat loss through solid walls and gives a fresh exterior finish — particularly effective on properties without cavity walls.",
    },
    {
      q: "Can you remove pebble-dash and render the house?",
      a: "Yes. We strip failing pebble-dash or old render, prepare the substrate and apply a new insulated render system or re-render depending on what's appropriate for the property.",
    },
    {
      q: "Do I need planning permission for external wall insulation?",
      a: "In many cases EWI is permitted development, but there are restrictions on thickness, appearance and location — especially in conservation areas and on listed buildings. We advise during the survey.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We're based in Sidcup — well placed for South London and South East London.",
    },
  ],
  finalCtaHeading: "Ready to Insulate and Render Your Home?",
  finalCtaBullets: [
    "Free exterior survey — no obligation",
    "EWI and silicone render systems",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Get a Free Quote",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "External wall insulation London — EWI & silicone render — Free surveys — Fully insured",
};

const EwiRenderLondonPage = () => <ServiceLandingPage config={ewiRenderConfig} />;

export default EwiRenderLondonPage;
