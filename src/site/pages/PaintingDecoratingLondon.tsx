import {
  Briefcase,
  Building,
  Building2,
  ClipboardList,
  Home,
  Paintbrush,
  Users,
} from "lucide-react";
import ServiceLandingPage, { type ServiceLandingConfig } from "./ServiceLandingPage";

const paintingConfig: ServiceLandingConfig = {
  formAnchorId: "painting-enquiry-form",
  heroEyebrow: "Commercial Painting & Decorating",
  heroHeadline:
    "Commercial Painting & Decorating in London & Kent — Built for Landlords and Property Managers",
  heroSubheading:
    "Void property turnarounds, HMO decoration, communal areas, multi-unit blocks and ongoing contracts. Professional work, done to schedule, with the paperwork to match.",
  alertBox:
    "📋 We specialise in multi-property and commercial painting contracts. We're not the right fit for single-room residential jobs — but if you manage properties, we almost certainly are.",
  heroBullets: [
    "Void properties repainted and ready to relet fast",
    "HMOs, communal areas, stairwells, multi-unit blocks",
    "Full interiors and exteriors",
    "Ongoing maintenance contracts available",
  ],
  heroCtaLabel: "Get a Painting Quote",
  heroFormTitle: "Get a Painting Quote",
  heroFormSubtitle: "Tell us about your properties and we will respond within hours.",
  trustStats: [
    { value: "25+", label: "Years Trading" },
    { value: "500+", label: "Projects" },
    { value: "98%", label: "Client Retention" },
    { value: "Fully", label: "Insured" },
  ],
  valueCards: [
    {
      title: "Multi-Property Specialists",
      desc: "We work with landlords and managing agents across portfolios, not just one-off jobs. Ongoing maintenance contracts available at preferential rates.",
    },
    {
      title: "Fast Void Turnarounds",
      desc: "Tenant out? We'll get the property repainted and ready to relet quickly, protecting your rental income.",
    },
    {
      title: "Full Documentation",
      desc: "Job sheets and before/after photographs provided as standard. Everything your letting agent or insurer might need.",
    },
    {
      title: "Trusted Since 2000",
      desc: "25 years working with property professionals across London and Kent. 98% of clients come back.",
    },
  ],
  problemHeading: "What Property Managers Actually Need From a Painting Contractor",
  problemBody:
    "You've probably had bad experiences. A decorator who doesn't show up, takes twice as long as quoted, or leaves a finish your tenants complain about. We've spent 25 years building a reputation on being the opposite of that.",
  problemBullets: [
    "Reliability — We show up, do the job, don't need chasing",
    "Speed — Fast void turnarounds mean less time between tenancies",
    "Quality — Work that lasts and tenants can't fault",
    "Documentation — Before/after photos and job records as standard",
  ],
  positiveProblemBullets: true,
  services: [
    {
      icon: Paintbrush,
      title: "Void Property Painting & Decoration",
    },
    {
      icon: Building2,
      title: "HMO Interior Painting",
    },
    {
      icon: Users,
      title: "Communal Areas & Stairwells",
    },
    {
      icon: Building,
      title: "Multi-Unit Block Decoration",
    },
    {
      icon: Home,
      title: "External & Exterior Painting",
    },
    {
      icon: Briefcase,
      title: "Commercial & Office Painting",
    },
    {
      icon: ClipboardList,
      title: "Multi-Property Maintenance Contracts",
    },
  ],
  showVideoSection: false,
  caseStudy: {
    label: "Real Project",
    title: "Grade II Building Refurbishment, London",
    intro:
      "This Grade II listed property was dated and in poor condition when we took it on. We transformed it into something the owners are proud of — keeping the charm of the building while bringing every room up to a modern, professional standard.",
    bulletsHeading: "What we delivered",
    bullets: [
      "Full repaint and wallpaper throughout",
      "Plaster cornice installed all the way around the room",
      "Original fireplaces restored — blacked out with tiles chosen to suit the period character",
      "Built-in wardrobes from IKEA packs, finished with MDF doors and wooden moulding for a bespoke look",
      "Designed and built in-house to maximise space with a sleek, professional finish",
      "Plumbing, electrics, curtain tracks, and in-house curtain alterations",
    ],
    scopeNote:
      "Everything in this room was designed and fitted by our team — from the wallpaper and carpentry to the plumbing and electrics. One contractor, one standard, so you do not have to coordinate multiple trades yourself.",
    quote:
      "This is the standard we bring to every job — whatever the property, whatever the scope.",
    quoteAttribution: "Focus Refurbishment Team",
    ctaLabel: "Get a Free Quote",
    vimeoVideoId: "1198024690",
    iframeTitle: "Focus Refurbishment - Grade II Building Refurb",
  },
  formEmbed: {
    src: "https://app.focusrefurbishmentltd.com/widget/form/aGIxGyqzSaQuYMOOZijO",
    title: "FR - Painting & Deco",
    iframeId: "inline-aGIxGyqzSaQuYMOOZijO",
    formName: "FR - Painting & Deco",
    formId: "aGIxGyqzSaQuYMOOZijO",
    iframeHeight: "502px",
    minHeightClassName: "min-h-[502px]",
    embedScriptSrc: "https://app.focusrefurbishmentltd.com/js/form_embed.js",
    deferLoad: true,
  },
  videoHeading: "Recent Painting & Decorating Project",
  videoCaption: "A commercial decorating contract completed by the Focus Refurbishment team.",
  processSteps: [
    {
      number: "1",
      title: "Tell Us What You Need",
      desc: "Call or fill in the form. We respond within 2 hours, Mon–Sat.",
    },
    {
      number: "2",
      title: "Site Visit & Written Quote",
      desc: "We visit, assess the scope, and give you a clear written quote with timeline.",
    },
    {
      number: "3",
      title: "Work Begins on Schedule",
      desc: "Professional team on site when agreed. Work completed on time.",
    },
    {
      number: "4",
      title: "Sign-Off & Documentation",
      desc: "Job photographed and documented. Before/after photos provided for your records.",
    },
  ],
  testimonials: [
    {
      quote:
        "We've used Focus Refurbishment for painting across four of our HMOs in South London. Consistent quality, always on time. Craig runs a tight ship.",
      name: "David R.",
      role: "HMO Landlord, South London",
    },
    {
      quote:
        "Needed three void properties turned around quickly between tenancies. They delivered on every one, on time, and the standard was excellent.",
      name: "Claire B.",
      role: "Letting Agent, Kent",
    },
    {
      quote:
        "Finally found a painting contractor we can rely on. They do what they say, when they say it. The before/after photos they send over are great for our records.",
      name: "Google Review",
      role: "★★★★★",
    },
  ],
  faqs: [
    {
      q: "Do you take on single-room residential painting jobs?",
      a: "No — we specialise in commercial and multi-property work. If you manage a portfolio, have void properties to refresh, or need ongoing decorating support, we're the right fit. Single-room residential jobs aren't something we take on.",
    },
    {
      q: "Can you handle multiple properties at the same time?",
      a: "Yes. We have an experienced team that can work across multiple properties simultaneously. Tell us your timeline and portfolio size and we'll structure the work accordingly.",
    },
    {
      q: "How quickly can you turn around a void property?",
      a: "It depends on the size and scope, but we work quickly and understand that empty properties cost you money. We'll give you a realistic timeline upfront and stick to it.",
    },
    {
      q: "Do you offer ongoing maintenance contracts?",
      a: "Yes. We work with several landlords and property managers on regular painting and decorating maintenance contracts. These typically work out more cost-effective than booking jobs individually.",
    },
    {
      q: "What areas do you cover?",
      a: "All of Greater London (within the M25) and Kent. We're based in Sidcup — well placed for South and South East London and across into Kent.",
    },
  ],
  finalCtaHeading: "Let's Talk About Your Properties",
  finalCtaBullets: [
    "Multi-property contracts welcome",
    "Fast void turnarounds",
    "Full documentation as standard",
  ],
  finalCtaLabel: "Get a Painting Quote",
  bottomStrip:
    "Commercial painting & decorating — London & Kent — Multi-property specialists — Full documentation as standard",
};

const PaintingDecoratingLondonPage = () => <ServiceLandingPage config={paintingConfig} />;

export default PaintingDecoratingLondonPage;
