import {
  Bath,
  ChefHat,
  Droplets,
  Home,
  Paintbrush,
  PenTool,
  ShowerHead,
  Wrench,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const bathroomsKitchensConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroEyebrow: "Bathrooms & Kitchens London",
  heroHeadline: "Bathroom Renovation & Kitchen Installation London — Design, Supply & Build",
  heroHeadlineMobile: "Bathroom & Kitchen Fitters London",
  heroSubheading:
    "From a full bathroom refurbishment to a complete kitchen installation — we design the layout, supply materials at trade prices, and fit everything with our own team. Homeowners and residential landlords across London within the M25.",
  alertBox:
    "🛁 A well-fitted bathroom or kitchen adds value fast — and makes day-to-day living noticeably better. Book a free home visit for a clear, itemised quote.",
  heroBullets: [
    "Full bathroom renovations and kitchen installations",
    "Design, supply and build — trade discounts on materials",
    "Wet rooms, cloakrooms, utility rooms and open-plan kitchens",
    "Landlord void refits and homeowner projects welcome",
  ],
  heroCtaLabel: "Get a Free Home Visit",
  heroFormTitle: "Get a Free Bathroom or Kitchen Quote",
  heroFormSubtitle: "Tell us about your project and we'll arrange a no-obligation visit.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "Full", label: "Design & Build" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Design, Supply & Installation",
      desc: "We help you plan the layout, specify tiles, units and fittings, supply through our merchant accounts, and install with our own plumbers, electricians and finishers.",
    },
    {
      title: "Trade Pricing on Materials",
      desc: "Bathroom suites, kitchen units, tiles and sanitaryware bought through trade accounts — savings passed on compared with high-street retail pricing.",
    },
    {
      title: "One Team, One Quote",
      desc: "Plumbing, electrics, plastering, tiling and decorating covered in a single itemised quote. No coordinating separate trades yourself.",
    },
    {
      title: "Landlords & Homeowners",
      desc: "Full bathroom refits between tenancies, cloakroom upgrades for rental properties, and bespoke kitchens for owner-occupied homes.",
    },
  ],
  problemHeading: "Why Bathroom & Kitchen Jobs Go Wrong",
  problemBody:
    "The usual story: a fitter quotes for installation only, then you discover the plumbing needs moving, the electrics aren't up to scratch, and the tiling is a separate contractor who never turns up.",
  problemBullets: [
    "Quotes that exclude plumbing, electrics and making good",
    "Retail-supply-only fitters who won't design the layout",
    "Projects dragging on with no project lead",
    "Poor waterproofing and tiling behind walls you can't see",
  ],
  problemClosing:
    "We quote the full job upfront — design, supply, installation and finishing — with one point of contact throughout.",
  servicesHeading: "What We Install",
  servicesSubheading: "Bathrooms and kitchens for homes, flats and rental properties.",
  servicesColumns: 4,
  services: [
    { icon: Bath, title: "Full Bathroom Renovations", subtitle: "Complete strip-out and refit" },
    { icon: ShowerHead, title: "Wet Rooms & Walk-In Showers", subtitle: "Level-access waterproofing" },
    { icon: Droplets, title: "Cloakrooms & WC Refits", subtitle: "Compact spaces done properly" },
    { icon: ChefHat, title: "Kitchen Installation", subtitle: "Units, worktops and appliances" },
    { icon: PenTool, title: "Kitchen Design & Layout", subtitle: "Practical plans before you buy" },
    { icon: Wrench, title: "Plumbing & Electrics", subtitle: "Relocated services as required" },
    { icon: Paintbrush, title: "Tiling & Decorating", subtitle: "Walls, floors and finishes" },
    { icon: Home, title: "Landlord Void Refits", subtitle: "Fast turnaround between lets" },
  ],
  showVideoSection: false,
  domesticBooking: { utmSource: "bathrooms-kitchens" },
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "Bespoke Kitchens & Bathrooms",
    body: "From layout and plumbing to tiling and fixtures — kitchens and bathrooms designed, supplied and installed to a high standard.",
    src: "/images/service-bathrooms.png",
    alt: "Bathroom installation completed by Focus Refurbishment in London",
  },
  processSteps: [
    {
      number: "1",
      title: "Free Home Visit",
      desc: "We measure up, discuss your ideas and assess plumbing, electrics and structure. No charge, no obligation.",
    },
    {
      number: "2",
      title: "Design & Itemised Quote",
      desc: "Clear written quote covering labour, materials, disposal and timeline. Trade-supply pricing included.",
    },
    {
      number: "3",
      title: "Installation",
      desc: "Our team strip out, first-fix plumbing and electrics, fit units and sanitaryware, tile and decorate.",
    },
    {
      number: "4",
      title: "Snagging & Handover",
      desc: "Walk-through on completion. Everything left clean, watertight and ready to use.",
    },
  ],
  testimonials: [
    {
      quote:
        "New bathroom fitted in our flat in under two weeks. Craig's team handled plumbing, tiling and electrics — we just chose the tiles.",
      name: "Homeowner",
      role: "Lewisham",
    },
    {
      quote:
        "We've used Focus for bathroom refits on two rental properties. Clear quotes, tidy workers, and the flats were re-let on time.",
      name: "Residential Landlord",
      role: "Bromley",
    },
    {
      quote:
        "Kitchen installation was straightforward. They helped with the layout and the trade pricing on units saved us money.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "How much does it cost to redo a bathroom in London?",
      a: "A full bathroom refurbishment in London typically costs from around £6,000 to £15,000+ depending on size, spec and how much plumbing needs moving. Luxury shower rooms and larger bathrooms can cost £20,000–£30,000+. We provide a free visit and itemised quote so you know the full cost before work starts.",
    },
    {
      q: "Is £10,000 enough for a bathroom remodel?",
      a: "For many standard-sized bathrooms in London, £10,000 is a realistic budget for a mid-range full refurbishment including labour, materials, tiling and sanitaryware — provided the layout stays largely the same. Moving waste pipes, adding a wet room or upgrading everything to premium spec will cost more. We'll advise honestly after the survey.",
    },
    {
      q: "How much does a new kitchen cost in London?",
      a: "Kitchen installation costs vary widely with unit quality and whether you're changing the layout. A straightforward replacement kitchen might start from around £8,000–£15,000 fitted. Larger open-plan kitchens with structural changes cost more. We quote supply and installation together with trade pricing on units and worktops.",
    },
    {
      q: "Do you supply the bathroom suite and kitchen units?",
      a: "Yes. We design the layout, specify products and supply through trade merchants — so you get professional installation and trade discounts on materials in one package.",
    },
    {
      q: "How long does a bathroom renovation take?",
      a: "A standard bathroom refurbishment typically takes 1–2 weeks on site. Larger bathrooms, wet rooms and jobs requiring significant plumbing moves may take 2–3 weeks. We'll confirm a realistic timeline in your quote.",
    },
    {
      q: "Do you work with residential landlords?",
      a: "Yes. Bathroom and kitchen refits between tenancies are a regular part of our work. We understand void deadlines and provide clear documentation for agents.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We're based in Sidcup — well placed for South London and South East London.",
    },
  ],
  finalCtaHeading: "Ready for a New Bathroom or Kitchen?",
  finalCtaBullets: [
    "Free home visit — no obligation",
    "Design, supply and build",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Get a Free Quote",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "Bathroom renovation & kitchen installation London — Design, supply & build — Free quotes — Fully insured",
};

const BathroomsKitchensLondonPage = () => <ServiceLandingPage config={bathroomsKitchensConfig} />;

export default BathroomsKitchensLondonPage;
