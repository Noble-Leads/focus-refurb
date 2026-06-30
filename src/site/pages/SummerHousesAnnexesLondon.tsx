import {
  Building2,
  Home,
  Laptop,
  PenTool,
  Sparkles,
  Sun,
  Trees,
  Warehouse,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const gardenRoomsConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroEyebrow: "Garden Rooms London",
  heroHeadline: "Garden Room London — Bespoke Offices, Annexes & Garden Buildings",
  heroHeadlineMobile: "Garden Room London",
  heroSubheading:
    "Bespoke garden rooms, home offices and annexes designed and built by our team — insulated, wired and finished to a proper standard. Installations from 3 weeks. Homeowners and landlords across London within the M25.",
  alertBox:
    "🌿 A garden room adds usable space without a full extension — home office, gym, guest room or annexe. Book a free garden survey and we'll design something that fits your space.",
  heroBullets: [
    "Garden rooms, offices, gyms and guest annexes",
    "Bespoke design, supply and build",
    "Installations from 3 weeks on site",
    "Insulated, electrics and finishes included",
  ],
  heroCtaLabel: "Get a Free Garden Survey",
  heroFormTitle: "Get a Free Garden Room Quote",
  heroFormSubtitle: "Tell us how you want to use the space and we'll visit your garden.",
  trustStats: [
    { value: "3 Wks+", label: "Typical Install" },
    { value: "25+", label: "Years Trading" },
    { value: "Bespoke", label: "Design & Build" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Built to Last, Not Flat-Pack",
      desc: "Proper foundations, insulation, weatherproofing and electrics — built as a permanent garden building, not a thin summer house from a catalogue.",
    },
    {
      title: "Designed Around Your Garden",
      desc: "We measure your space, discuss how you'll use the room, and design a building that fits the plot — offices, studios, gyms, guest rooms and granny annexes.",
    },
    {
      title: "From 3 Weeks to Install",
      desc: "Once design and materials are agreed, many garden room builds complete on site from around 3 weeks — faster than a full extension.",
    },
    {
      title: "Full Design & Build",
      desc: "One team handles base, structure, glazing, insulation, electrics, plastering and finishing. Trade-supply pricing on materials.",
    },
  ],
  problemHeading: "Why Cheap Garden Rooms Disappoint",
  problemBody:
    "Thin panels, no proper base, freezing in winter, boiling in summer, and electrics that wouldn't pass an inspection. Most budget garden rooms look fine in photos but don't work as year-round space.",
  problemBullets: [
    "No insulation or proper damp proofing",
    "Flat-pack kits with no project management",
    "Planning rules ignored — enforcement risk",
    "No electrics or plumbing when you need a bathroom annexe",
  ],
  problemClosing:
    "We build properly insulated, permitted garden buildings designed for how you'll actually use them — all year round.",
  servicesHeading: "Garden Buildings We Design & Build",
  servicesSubheading: "Extra space at the bottom of your garden — without moving house.",
  servicesColumns: 4,
  services: [
    { icon: Laptop, title: "Garden Offices", subtitle: "Quiet workspace at home" },
    { icon: Home, title: "Garden Annexes", subtitle: "Guest space or granny flat" },
    { icon: Sparkles, title: "Garden Gyms & Studios", subtitle: "Exercise and hobby rooms" },
    { icon: Sun, title: "Summer Houses", subtitle: "Leisure and entertaining space" },
    { icon: Trees, title: "Bespoke Garden Rooms", subtitle: "Designed to your brief" },
    { icon: Building2, title: "Rooms with Bathrooms", subtitle: "En-suite garden annexes" },
    { icon: Warehouse, title: "Insulated Year-Round Builds", subtitle: "Not seasonal sheds" },
    { icon: PenTool, title: "Planning Advice", subtitle: "Permitted development guidance" },
  ],
  showVideoSection: false,
  domesticBooking: true,
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "Bespoke Summer Houses & Annexes",
    body: "Garden rooms, home offices and annexes designed and built in as little as three weeks — adding usable space without moving home.",
    src: "/images/service-summer-house-new.png",
    alt: "Summer house or garden annex built by Focus Refurbishment in London",
  },
  processSteps: [
    {
      number: "1",
      title: "Garden Survey",
      desc: "We visit, measure the plot, check access and discuss how you want to use the building.",
    },
    {
      number: "2",
      title: "Design & Quote",
      desc: "Layout, spec and itemised quote — structure, insulation, glazing, electrics and finishing.",
    },
    {
      number: "3",
      title: "Build On Site",
      desc: "Foundations, frame, roof, insulation and interior fit-out. Most builds from around 3 weeks on site.",
    },
    {
      number: "4",
      title: "Handover",
      desc: "Electrics tested, snagging done, and your garden room ready to move into.",
    },
  ],
  testimonials: [
    {
      quote:
        "Garden office built in three weeks. Proper insulation — usable all year. Much cheaper than extending the house.",
      name: "Homeowner",
      role: "Sidcup",
    },
    {
      quote:
        "They designed an annexe for elderly parents with a small kitchenette. Professional build, not a flat-pack kit.",
      name: "Homeowner",
      role: "Kent",
    },
    {
      quote:
        "Clear quote, tidy site, and the room looks like part of the garden not an afterthought.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "How much does a garden room cost in London?",
      a: "Garden rooms and annexes in London typically cost from around £15,000–£25,000 for a quality insulated build, with larger annexes and buildings with bathrooms costing £25,000–£45,000+. We provide a free survey and itemised quote based on size, spec and foundations required.",
    },
    {
      q: "Do I need permission to put a garden room in my garden?",
      a: "Many garden rooms fall under permitted development if they meet size, height and location rules — usually no planning permission needed. Listed buildings, conservation areas and flats have stricter rules. Buildings used as separate self-contained accommodation may need permission. We advise during the survey.",
    },
    {
      q: "What is the 2.5 metre garden room rule?",
      a: "Under permitted development, outbuildings within 2 metres of a boundary generally cannot exceed 2.5 metres in eaves height. Further from the boundary, maximum overall height is usually 4 metres for a dual-pitched roof or 3 metres for other roof types. We design within these limits or support a planning application where needed.",
    },
    {
      q: "Is a garden room cheaper than a conservatory?",
      a: "A properly insulated garden room is often better value long-term than a conservatory — usable year-round, better insulation, and usually cheaper per square metre than a full house extension. Conservatories can overheat in summer and lose heat in winter.",
    },
    {
      q: "How long does a garden room take to build?",
      a: "Once design and materials are agreed, many of our garden room installations complete on site from around 3 weeks — depending on size, foundations and whether plumbing is included.",
    },
    {
      q: "Can you build a garden annexe with a bathroom?",
      a: "Yes. We design and build annexes with kitchenettes and bathrooms where the plot, services and planning rules allow.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We're based in Sidcup — well placed for South London and South East London.",
    },
  ],
  finalCtaHeading: "Want Extra Space in Your Garden?",
  finalCtaBullets: [
    "Free garden survey — no obligation",
    "Installations from 3 weeks",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Get a Free Garden Room Quote",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "Garden rooms London — Offices, annexes & summer houses — From 3 weeks — Free surveys",
};

const SummerHousesAnnexesLondonPage = () => <ServiceLandingPage config={gardenRoomsConfig} />;

export default SummerHousesAnnexesLondonPage;
