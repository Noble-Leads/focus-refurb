import {
  Building,
  ChefHat,
  Car,
  Home,
  Layers,
  PenTool,
  Ruler,
  Warehouse,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const extensionsConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroEyebrow: "House Extensions London",
  heroHeadline: "House Extension London — Rear, Side & Wrap-Around Extensions",
  heroHeadlineMobile: "House Extension London",
  heroSubheading:
    "Need more space without moving? We design and build rear extensions, side returns, wrap-arounds and garage conversions — full structural work, foundations, roofing and interior finishing from one team. Serving homeowners and landlords across London within the M25.",
  alertBox:
    "🏗️ A well-planned extension can add more usable space than moving house — and for less disruption. Book a free site visit and we'll explain what's possible on your property.",
  heroBullets: [
    "Rear, side return and wrap-around extensions",
    "Kitchen extensions and open-plan living",
    "Garage conversions and new build work",
    "Full design, supply and build with trade material pricing",
  ],
  heroCtaLabel: "Book a Free Quote Visit",
  heroFormTitle: "Get a Free Extension Quote",
  heroFormSubtitle: "Tell us about your property and what extra space you need.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "Full", label: "Design & Build" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Extension Builders, Not Just Architects",
      desc: "We design practical layouts, handle structural work and build the extension — foundations, steelwork, roofing, bi-folds, kitchens and finishes included.",
    },
    {
      title: "Every Extension Type",
      desc: "Single-storey rear extensions, side returns, wrap-arounds, two-storey extensions and garage conversions. We match the solution to your home and budget.",
    },
    {
      title: "Planning & Building Regs Support",
      desc: "We advise on permitted development and planning requirements, and build to building regulations with structural calculations managed properly.",
    },
    {
      title: "Trade Discounts on Materials",
      desc: "Bricks, timber, glazing and finishes supplied through trade accounts — better pricing than going retail and buying labour separately.",
    },
  ],
  problemHeading: "Why Extensions Overrun and Overcharge",
  problemBody:
    "Extension horror stories usually involve a low opening quote, unexpected groundworks, and three different contractors blaming each other when the bi-folds don't fit.",
  problemBullets: [
    "Quotes that exclude foundations and structural steel",
    "No clear project manager on site",
    "Planning and building regs left to the homeowner",
    "Interior finishing quoted separately — costs spiral",
  ],
  problemClosing:
    "We survey properly, quote the full build, and manage every trade under one roof from dig to decoration.",
  servicesHeading: "Extension Types We Build",
  servicesSubheading: "More living space tailored to how you actually use your home.",
  servicesColumns: 4,
  services: [
    { icon: Home, title: "Rear Extensions", subtitle: "Kitchen-diner & open-plan living" },
    { icon: Layers, title: "Side Return Extensions", subtitle: "Victorian terrace side infills" },
    { icon: Ruler, title: "Wrap-Around Extensions", subtitle: "Rear and side combined" },
    { icon: Building, title: "Two-Storey Extensions", subtitle: "Extra space upstairs & down" },
    { icon: ChefHat, title: "Kitchen Extensions", subtitle: "Bi-folds, islands & utility rooms" },
    { icon: Car, title: "Garage Conversions", subtitle: "Extra room without extending out" },
    { icon: Warehouse, title: "New Build Work", subtitle: "Ground-up residential builds" },
    { icon: PenTool, title: "Design & Planning Support", subtitle: "Layouts, drawings and applications" },
  ],
  showVideoSection: false,
  domesticBooking: true,
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "Extensions Built to Last",
    body: "Rear extensions, side returns and wrap-arounds — designed and built by one team from foundations to final finish.",
    src: "/images/service-extensions.png",
    alt: "House extension completed by Focus Refurbishment in London",
  },
  processSteps: [
    {
      number: "1",
      title: "Free Site Survey",
      desc: "We visit your property, discuss your brief, check access and advise on what's achievable within planning rules.",
    },
    {
      number: "2",
      title: "Design & Written Quote",
      desc: "Layout proposals and a clear itemised quote covering structure, roof, glazing, plumbing, electrics and finishing.",
    },
    {
      number: "3",
      title: "Build & Project Management",
      desc: "Foundations, steel, brickwork, roof, windows and interior fit-out — all coordinated by one team on site.",
    },
    {
      number: "4",
      title: "Completion & Sign-Off",
      desc: "Building regs signed off, snagging completed, and your new space ready to use.",
    },
  ],
  testimonials: [
    {
      quote:
        "Rear extension with bi-fold doors completed on time. One team handled everything from the steel beam to the kitchen fit.",
      name: "Homeowner",
      role: "Bromley",
    },
    {
      quote:
        "Side return extension on our Victorian terrace — they knew the property type and didn't cut corners on the structure.",
      name: "Homeowner",
      role: "Greenwich",
    },
    {
      quote:
        "Clear quote, no hidden extras. The wrap-around gave us the kitchen-diner we wanted without moving.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "How much does it cost to extend a house in London?",
      a: "Architect-designed house extensions in London typically cost around £3,000–£5,000 per square metre for a quality build, excluding VAT and professional fees. A single-storey rear extension might total £50,000–£80,000+ depending on size, spec and ground conditions. We provide a free survey and itemised quote for your specific property.",
    },
    {
      q: "Is £50,000 enough for an extension?",
      a: "For a modest single-storey rear extension with a standard spec, £50,000 can be a realistic starting budget in London — but ground conditions, glazing, kitchen fit-out and structural complexity all affect the final figure. Two-storey and wrap-around extensions typically cost more. We'll give you an honest assessment after the site visit.",
    },
    {
      q: "Can I build an extension for £20,000?",
      a: "A small single-storey extension or garage conversion with a simple spec may come in lower than a full rear extension with bi-folds and a new kitchen. Most full house extensions in London cost significantly more than £20,000. We'll tell you what's achievable on your budget.",
    },
    {
      q: "What is the 50% rule for house extensions?",
      a: "Under permitted development, the total area of extensions and other buildings must not cover more than 50% of the total area of land around the original house. There are additional limits on height, depth and proximity to boundaries. We check what applies to your property during the survey.",
    },
    {
      q: "Do I need planning permission for an extension?",
      a: "Many single-storey rear extensions fall under permitted development, but restrictions apply — especially in conservation areas, on listed buildings and for flats. Larger extensions and two-storey builds usually need full planning permission. We advise at survey stage.",
    },
    {
      q: "Do you build garage conversions?",
      a: "Yes. Converting an existing garage into a habitable room is often more cost-effective than a new extension, subject to building regulations and parking requirements.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We're based in Sidcup — well placed for South London and South East London.",
    },
  ],
  finalCtaHeading: "Need More Space at Home?",
  finalCtaBullets: [
    "Free site survey — no obligation",
    "Rear, side and wrap-around extensions",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Book a Free Quote Visit",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "House extensions London — Rear, side return & wrap-around — Design & build — Free surveys",
};

const ExtensionsNewBuildsLondonPage = () => <ServiceLandingPage config={extensionsConfig} />;

export default ExtensionsNewBuildsLondonPage;
