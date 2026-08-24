import { AlertTriangle, ArrowRight, CheckCircle2, Phone, Quote, ShieldCheck, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import HeroBackdrop from "@/components/HeroBackdrop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FIRE_DOOR_PHONE_DISPLAY, FIRE_DOOR_PHONE_TEL } from "@/lib/navigation";

const LANDLINE_DISPLAY = FIRE_DOOR_PHONE_DISPLAY;
const LANDLINE_TEL = FIRE_DOOR_PHONE_TEL;
const CTA_DISPLAY = LANDLINE_DISPLAY;
const CTA_TEL = LANDLINE_TEL;

const heroPoints = [
  "Internal & external FD30 & FD60 supply & installation",
  "Fire door surveys, maintenance & remedial works",
  "Intumescent strips, smoke seals & door-set hardware",
  "Compliance documentation on completion",
  "Experienced installation team",
  "Landlords, agents & commercial clients",
];

const trustStats = [
  { value: "25+", label: "Years Trading" },
  { value: "500+", label: "Projects" },
  { value: "FD30-FD60", label: "Rated Doors" },
  { value: "Docs", label: "On Completion" },
  { value: "M25", label: "Coverage" },
];

const chooseCards = [
  {
    title: "Installation & Replacement",
    desc: "FD30 and FD60 fire doors supplied, fitted and replaced to current standards. Every door installed with correct intumescent strips, closers and frames for full compliance.",
  },
  {
    title: "Surveys & Maintenance",
    desc: "Fire door surveys for landlords and managing agents — checking gaps, hinges, closers, intumescent strips and signage. In buildings over 11 metres, flat entrance doors should be checked annually and common-part doors quarterly. We survey and carry out remedial works.",
  },
  {
    title: "Door-Set Sealing",
    desc: "Correct intumescent strips, smoke seals, thresholds, closers and hardware fitted as part of every installation — the door-set details that matter for compliance, not just hanging the leaf.",
  },
  {
    title: "Full Documentation",
    desc: "Compliance pack at completion so your records are audit-ready — installer certificates, product data and evidence for agents, insurers and fire risk assessments.",
  },
];

const processSteps = [
  { number: "1", title: "Enquire", desc: "Call or submit the form and tell us what your property needs." },
  { number: "2", title: "Free Survey", desc: "We arrange a fast survey and confirm door specs and compliance requirements." },
  { number: "3", title: "Installation", desc: "Our experienced team supplies and fits the required FD30 or FD60 doors." },
  { number: "4", title: "Documentation", desc: "You receive compliance paperwork and product data for your records." },
];

const faqs = [
  {
    q: "Do you install internal and external fire doors?",
    a: "Yes. We supply and fit both internal fire doors (flat entrance, common-part and room doors) and external fire-rated doorsets across London and the M25. Every door is installed to FD30 or FD60 standard with the correct intumescent strips, smoke seals, closers and frames, and you receive full compliance documentation on completion.",
  },
  {
    q: "Do you offer fire door inspection in London?",
    a: "Yes. We carry out fire door surveys for landlords, agents and commercial property owners — checking gaps, hinges, frames, closers, intumescent strips and signage. For residential buildings over 11 metres, London Fire Brigade guidance recommends annual checks on flat entrance doors and quarterly checks on common-part fire doors. We can carry out one-off surveys or scheduled programmes across portfolios, and we carry out remedial works and replacements where needed.",
  },
  {
    q: "Do you provide compartmentation fire stopping?",
    a: "Yes. Alongside fire doors we carry out fire stopping — sealing pipe, cable and duct penetrations, fire batts, collars and compartmentation surveys — so most passive fire protection actions on a fire risk assessment can be handled under one contract. See our fire stopping page for full details.",
  },
  {
    q: "Do you replace existing fire doors?",
    a: "Yes. Fire door replacement is one of our most common jobs — upgrading non-compliant or damaged FD30 and FD60 doors with certified replacements and full documentation for your records.",
  },
  {
    q: "Are you experienced fire door installers for landlords?",
    a: "Yes. We work with residential landlords, HMO operators and commercial property owners across London. Every installation includes compliance documentation suitable for fire risk assessments and agent handovers.",
  },
  {
    q: "How quickly can you carry out a survey?",
    a: "We aim to carry out surveys within the week of your enquiry.",
  },
  {
    q: "What documentation do I receive after installation?",
    a: "You receive full compliance documentation including installer certificates and product data sheets.",
  },
  {
    q: "Can you install fire doors in a private home?",
    a: "Yes — owner-occupied flats and houses, as well as HMOs and commercial buildings. Same careful installation and full compliance documentation.",
  },
  {
    q: "Do you work on HMOs and multi-property portfolios?",
    a: "Yes — we regularly work with landlords and estate agents managing multiple HMOs and can schedule inspections and installations across multiple properties efficiently.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover London and the South East, including all areas within the M25.",
  },
  {
    q: "Is there a minimum job size?",
    a: "Our minimum call-out is £300.",
  },
];

const testimonialCards = [
  {
    quote:
      "Focus handled fire door upgrades across our 12 managed properties in South London. Everything passed inspection with the paperwork ready the same day.",
    name: "Marta Nowak",
    role: "Property Manager, South London",
  },
  {
    quote:
      "We had an inspection date looming in Greenwich SE10 and needed compliant doors quickly. Focus surveyed, installed, and certified everything in time.",
    name: "Rajiv Sharma",
    role: "Landlord, Greenwich SE10",
  },
  {
    quote:
      "Had Craig and his team at Focus install fire doors for me. The work was spot on — they know what they're doing, kept tidy and got it all done without any hassle, which is rare from contractors in London. The relevant paperwork was provided too, which is great. Will be using them again. Highly recommend if you're a landlord needing an efficient and professional service.",
    name: "Landlord",
    role: "London · Google review",
  },
];

const workCards = [
  {
    title: "Before",
    accent: "text-muted-foreground",
    note: "FD30 original door set",
    image: "/images/fd30-before.png",
    alt: "Before FD30 installation single door",
  },
  {
    title: "After - FD30 Installed Compliant",
    accent: "text-green-600",
    note: "FD30 upgraded compliant fire door",
    image: "/images/fd30-after.png",
    alt: "After FD30 installation and certification single door",
  },
  {
    title: "Before",
    accent: "text-muted-foreground",
    note: "FD60 original double doors",
    image: "/images/fd60-before.png",
    alt: "Before FD60 installation double doors",
  },
  {
    title: "After - FD60 Installed Compliant",
    accent: "text-green-600",
    note: "FD60 upgraded compliant double doors",
    image: "/images/fd60-after.png",
    alt: "After FD60 installation and certification double doors",
  },
];

const FireDoorInstallationPage = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="section-dark pt-below-header pb-12 md:pb-14 relative overflow-x-hidden overflow-y-visible">
        <HeroBackdrop />
        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollReveal className="lg:col-span-6 min-w-0">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
                Fire Door Installers London
              </p>
              <h1 className="font-heading font-extrabold text-section-dark-foreground mb-4 max-w-2xl break-words text-[1.65rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Fire Door Installation London — Internal &amp; External FD30 &amp; FD60
              </h1>
              <p className="text-hero-muted text-sm sm:text-base md:text-lg mb-2 max-w-xl">
                Experienced fire door installers for landlords, estate agents and commercial clients across London and the M25 — FD30 and FD60 supply, installation, surveys, maintenance and replacement with compliance documentation on completion.
              </p>
              <p className="text-hero-muted/70 text-xs sm:text-sm mb-5 md:mb-6 max-w-xl">
                Only need 1-3 doors done? Get a{" "}
                <a href="/domestic/fire-door-replacement-flats-london" className="text-gold underline hover:no-underline">
                  fixed price from a photo
                </a>{" "}
                instead.
              </p>

              <div className="border border-gold/30 bg-primary/30 rounded-lg p-4 mb-5 md:mb-6">
                <p className="text-section-dark-foreground leading-relaxed text-sm md:text-base">
                  <strong>Compliance Warning:</strong> Under the Regulatory Reform Fire Safety Order 2005, landlords are legally required to ensure fire doors are compliant - non-compliance can result in unlimited fines.
                </p>
              </div>

              <ul className="grid gap-x-4 gap-y-2.5 mb-6 md:mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-hero-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-6 min-w-0">
              <div
                id="fire-door-enquiry-form"
                className="scroll-target w-full max-w-full min-w-0 lg:max-w-[800px] lg:ml-auto scroll-mt-28 md:scroll-mt-32 overflow-visible"
              >
                <h2 className="font-heading font-bold text-foreground text-xl sm:text-2xl mb-1">Get a Free Fire Door Quote</h2>
                <p className="text-muted-foreground text-sm mb-4">Tell us about your property and we will respond within hours.</p>

                <GhlFormEmbed
                  src="https://link.nobleleads.uk/widget/form/LsQfA3LgiKr1TIsl3JSq"
                  title="FR - Fire Doors"
                  iframeId="inline-LsQfA3LgiKr1TIsl3JSq"
                  formName="FR - Fire Doors"
                  formId="LsQfA3LgiKr1TIsl3JSq"
                  source="fire-door-installation-london"
                  iframeHeight="900px"
                />

                <p className="mt-1 text-center text-xs text-muted-foreground">
                  Or call us:{" "}
                  <a href={`tel:${LANDLINE_TEL}`} className="text-gold font-semibold hover:underline">
                    {LANDLINE_DISPLAY}
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-section-dark py-6 border-t border-b border-hero-foreground/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-gold font-heading font-extrabold text-2xl md:text-3xl">{stat.value}</p>
                <p className="text-hero-muted uppercase tracking-wider text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                Approved installers
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-3">
                Compliant Fire Doors for Landlords & Property Managers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                FD30 and FD60 supply, installation and certification — with documentation provided on completion for your compliance records.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-lg border border-border overflow-hidden shadow-md">
                <img
                  src="/images/service-firedoors.png"
                  alt="Fire door installation by Focus Refurbishment in London"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Proper Installation. Full Documentation. No Shortcuts.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {chooseCards.map((card) => (
              <ScrollReveal key={card.title}>
                <div className="bg-card rounded-lg border border-border border-t-4 border-t-gold p-6 h-full">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-4">
              What Landlords Are Legally Required to Do
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-10">
              Fire door compliance is not optional. If your property falls short, you can face serious legal and financial consequences.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-card border border-border border-l-4 border-l-red-500 rounded-lg p-6 h-full">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  The Risk of Non-Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Non-compliant doors can trigger enforcement action, prosecution, and unlimited fines. In many cases insurers can also refuse claims where fire safety obligations are not met.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-card border border-border border-l-4 border-l-green-600 rounded-lg p-6 h-full">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  What We Handle For You
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We manage supply, installation, surveys and remedial works. You get correctly fitted door sets with seals and hardware in place, plus documented evidence for your records — from one contractor rather than juggling separate trades.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-dark py-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground text-center mb-12">
              Simple Process. Fast Turnaround.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <ScrollReveal key={step.number}>
                <div className="text-center">
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full border-2 border-gold text-gold flex items-center justify-center font-heading font-extrabold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-section-dark-foreground text-lg font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-hero-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Our Fire Door Installations
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {workCards.map((card) => (
              <ScrollReveal key={card.title + card.note}>
                <div className="rounded-lg border border-border overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={900}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <p className={`font-heading font-semibold text-sm ${card.accent}`}>{card.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{card.note}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Trusted by Landlords, Homeowners & Property Managers
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 items-stretch">
            {testimonialCards.map((testimonial) => (
              <ScrollReveal key={testimonial.name + testimonial.role}>
                <div className="bg-card border border-border rounded-lg p-5 md:p-6 lg:p-8 h-full flex flex-col">
                  <Quote className="w-9 h-9 md:w-10 md:h-10 text-gold mb-3 md:mb-4 shrink-0" />
                  <p className="text-foreground italic leading-relaxed mb-4 md:mb-6 text-sm md:text-base flex-1">"{testimonial.quote}"</p>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-10">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-card rounded-lg border border-border px-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline gap-3 py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-accent py-20">
        <div className="container text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              Ready to Get Your Property Compliant?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Free site survey. Fixed quote. Compliance documentation on completion. A real person responds within hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#fire-door-enquiry-form">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={`tel:${CTA_TEL}`}>
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call {CTA_DISPLAY}
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gold/15 py-4 border-t border-gold/30">
        <div className="container text-center text-foreground font-heading font-semibold tracking-wide">
          Fire door installers — supply, installation & compliance — London & M25
        </div>
      </section>
      <section className="bg-background py-8">
        <div className="container text-center">
          <a href="/domestic/fire-door-replacement-flats-london" className="text-gold font-semibold hover:underline">
            Only need 1-3 doors done? Get a fixed price from a photo →
          </a>
          <span className="mx-3 text-muted-foreground">·</span>
          <a href="/fire-stopping-london" className="text-gold font-semibold hover:underline">
            Fire stopping &amp; compartmentation →
          </a>
          <span className="mx-3 text-muted-foreground">·</span>
          <a href="/building-maintenance-london" className="text-gold font-semibold hover:underline">
            Need ongoing property maintenance too? See our maintenance services →
          </a>
          <span className="mx-3 text-muted-foreground">·</span>
          <a href="/commercial-enquiries" className="text-gold font-semibold hover:underline">
            Commercial portfolio enquiry →
          </a>
        </div>
      </section>
    </div>
  );
};

export default FireDoorInstallationPage;
