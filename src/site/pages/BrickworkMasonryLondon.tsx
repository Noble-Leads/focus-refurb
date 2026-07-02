import {
  BrickWall,
  Building,
  Droplets,
  Hammer,
  Home,
  Landmark,
  Shield,
  Sparkles,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const brickworkConfig: ServiceLandingConfig = {
  formAnchorId: "book-quote-visit",
  mobileOptimizations: true,
  heroEyebrow: "Brickwork & Masonry London",
  heroHeadline: "Brickwork Restoration & Repointing London — Period Properties & Facades",
  heroHeadlineMobile: "Brick Repointing London",
  heroSubheading:
    "Professional brick repointing, brick cleaning and masonry restoration for London homes — yellow stock brick, period terraces and rendered facades. We match mortar correctly and leave your property looking sharp. Homeowners and landlords across the M25.",
  alertBox:
    "🧱 Crumbling mortar lets water in and devalues your property. We repoint, clean and restore brickwork properly — with the right lime or cement mortar for your building.",
  heroBullets: [
    "Brick repointing and mortar restoration",
    "Brick cleaning and paint removal",
    "Period property and London stock brick specialists",
    "Facade restoration and masonry repairs",
  ],
  heroCtaLabel: "Get a Free Masonry Survey",
  heroFormTitle: "Get a Free Brickwork Quote",
  heroFormSubtitle: "Tell us about your property and we'll assess the brickwork on site.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects Completed" },
    { value: "Period", label: "Property Experience" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Correct Mortar for Your Brick",
      desc: "London yellow stock, red brick and period properties need the right lime or cement mortar — not a one-size-fits-all mix that traps moisture and damages brick faces.",
    },
    {
      title: "Repointing That Lasts",
      desc: "Raked out properly, mixed correctly and finished neatly. We restore weatherproofing and kerb appeal without the patchy look of a rushed job.",
    },
    {
      title: "Brick Cleaning & Restoration",
      desc: "Paint removal, soot staining and grime cleaned without blasting the face off your bricks. Facades restored sympathetically.",
    },
    {
      title: "Homes & Rental Properties",
      desc: "Owner-occupied period terraces, Victorian villas and landlord portfolios — we work neatly with minimal disruption.",
    },
  ],
  problemHeading: "Why Bad Repointing Damages Brickwork",
  problemBody:
    "Hard cement mortar on soft period brick, mortar smeared across faces, and 'spot pointing' that traps water — bad repointing often causes more damage than leaving it alone.",
  problemBullets: [
    "Wrong mortar type for the brick age",
    "Mortar not raked deep enough",
    "Brick faces damaged during cleaning",
    "No scaffolding or access planning on taller walls",
  ],
  problemClosing:
    "We assess the brick type and building age first, then repoint and restore using appropriate materials and methods.",
  servicesHeading: "Masonry Services",
  servicesSubheading: "Brickwork repair and restoration for London properties.",
  servicesColumns: 4,
  services: [
    { icon: BrickWall, title: "Brick Repointing", subtitle: "Lime and cement mortar" },
    { icon: Sparkles, title: "Brick Cleaning", subtitle: "Paint removal & restoration" },
    { icon: Landmark, title: "Period Property Brickwork", subtitle: "London stock & heritage" },
    { icon: Building, title: "Facade Restoration", subtitle: "Front elevation repairs" },
    { icon: Hammer, title: "Masonry Repairs", subtitle: "Cracked brick & stone" },
    { icon: Droplets, title: "Weatherproofing", subtitle: "Stop water ingress" },
    { icon: Home, title: "Residential Repointing", subtitle: "Houses, flats & terraces" },
    { icon: Shield, title: "Landlord Portfolio Work", subtitle: "Multiple properties" },
  ],
  showVideoSection: false,
  domesticBooking: { utmSource: "brickwork-masonry" },
  featurePhoto: {
    placement: "afterValueCards",
    eyebrow: "Our work",
    heading: "Brickwork Cleaning & Restoration",
    body: "Repointing, cleaning and facade restoration to refresh tired brickwork and protect your property for years to come.",
    src: "/images/service-brickwork.png",
    alt: "Brickwork restoration completed by Focus Refurbishment in London",
  },
  processSteps: [
    {
      number: "1",
      title: "Site Assessment",
      desc: "We inspect the brickwork, identify mortar type and extent of repair needed.",
    },
    {
      number: "2",
      title: "Written Quote",
      desc: "Clear quote covering raking out, repointing, cleaning or repairs — with access requirements explained.",
    },
    {
      number: "3",
      title: "Masonry Work",
      desc: "Careful preparation and skilled repointing or cleaning. Scaffolding arranged where required.",
    },
    {
      number: "4",
      title: "Final Inspection",
      desc: "Site left tidy. Brickwork restored, weatherproof and ready to paint or leave natural.",
    },
  ],
  testimonials: [
    {
      quote:
        "Front elevation repointed on our Victorian terrace. Matched the lime mortar properly — looks like it was always that way.",
      name: "Homeowner",
      role: "South London",
    },
    {
      quote:
        "Had three rental properties repointed. Focus Refurbishment quoted clearly and the brickwork looks miles better.",
      name: "Residential Landlord",
      role: "Kent",
    },
    {
      quote:
        "Paint stripped off the brick and repointed. Transformed the front of the house.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "How much does brick repointing cost in London?",
      a: "Repointing costs depend on wall area, access, mortar type and condition of the brick. As a guide, expect from around £80–£120 per square metre for standard repointing, with scaffolding adding to taller elevations. We provide a free assessment and written quote.",
    },
    {
      q: "Should I use lime mortar or cement for repointing?",
      a: "Period properties and London stock brick usually need lime-based mortar so the wall can breathe. Modern brickwork may suit cement mortar. Using the wrong type causes cracking and spalled brick faces. We match mortar to the building.",
    },
    {
      q: "Do you clean painted brick?",
      a: "Yes. We remove inappropriate paint coatings and clean brickwork using methods appropriate to the brick type — restoring the natural finish without damaging the faces.",
    },
    {
      q: "How long does repointing last?",
      a: "Properly executed repointing with the correct mortar typically lasts 50–100 years on period properties. Cheap cement pointing on old brick may fail within years.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London within the M25 and Kent. We're based in Sidcup — well placed for South London and South East London.",
    },
  ],
  finalCtaHeading: "Need Brickwork Repaired or Restored?",
  finalCtaBullets: [
    "Free masonry survey — no obligation",
    "Lime and cement repointing",
    "25 years' experience, fully insured",
  ],
  finalCtaLabel: "Get a Free Quote",
  finalCtaBulletsAsList: true,
  bottomStrip:
    "Brick repointing London — Restoration, cleaning & masonry — Free surveys — Fully insured",
};

const BrickworkMasonryLondonPage = () => <ServiceLandingPage config={brickworkConfig} />;

export default BrickworkMasonryLondonPage;
