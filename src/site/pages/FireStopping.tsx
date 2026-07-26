import { AlertTriangle, ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import HeroBackdrop from "@/components/HeroBackdrop";
import { commercialFormEmbed } from "@/lib/commercialFormEmbed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LANDLINE_DISPLAY = "020 4634 0020";
const LANDLINE_TEL = "02046340020";

const heroPoints = [
  "Penetration sealing — pipes, cables & ducts",
  "Fire batts, intumescent & acoustic sealant",
  "Fire collars & wraps to plastic pipework",
  "Compartmentation surveys & FRA remedial works",
  "Documentation on completion",
  "Landlords, agents, FMs & main contractors",
];

const trustStats = [
  { value: "25+", label: "Years Trading" },
  { value: "500+", label: "Projects" },
  { value: "Walls & Floors", label: "Sealed to Spec" },
  { value: "Docs", label: "On Completion" },
  { value: "M25", label: "Coverage" },
];

const serviceCards = [
  {
    title: "Penetration Sealing",
    desc: "Sealing around pipes, cables, trays and duct penetrations through fire-rated walls and floors. Every breach is made good with the correct tested system for the substrate and service type, restoring the compartment line.",
  },
  {
    title: "Fire Batts & Sealant",
    desc: "Fire batt installation to larger openings and service risers, with intumescent and acoustic sealant to linear gaps and joints — installed to manufacturer specification and recorded for your compliance file.",
  },
  {
    title: "Fire Collars & Wraps",
    desc: "Intumescent collars and wraps fitted to plastic pipes and ducts that would otherwise soften and breach the compartment in a fire — matched to pipe diameter, material and wall or floor build-up.",
  },
  {
    title: "Compartmentation Surveys & FRA Remedials",
    desc: "Surveys of walls, floors, risers and voids to identify breaches — plus remedial works packages that close out actions raised in your fire risk assessment, with before-and-after evidence for your records.",
  },
];

const processSteps = [
  { number: "1", title: "Enquire", desc: "Call or submit the form and tell us about the building and what's been flagged." },
  { number: "2", title: "Survey", desc: "We survey the compartmentation and document every breach that needs attention." },
  { number: "3", title: "Remedial Works", desc: "Our team seals penetrations, gaps and openings with the correct tested systems." },
  { number: "4", title: "Documentation", desc: "You receive records of works completed — evidence for your FRA and compliance file." },
];

const clientTypes = [
  {
    title: "Landlords & HMO Operators",
    desc: "Close out fire risk assessment actions on flats, HMOs and converted properties — alongside fire door work where needed, from one contractor.",
  },
  {
    title: "Housing Associations & Councils",
    desc: "Compartmentation surveys and planned remedial programmes across blocks and portfolios, with the documentation your compliance team needs.",
  },
  {
    title: "Facilities & Property Managers",
    desc: "Reactive and planned fire stopping across commercial buildings — risers, ceiling voids, plant rooms and service routes.",
  },
  {
    title: "Main Contractors & Fit-Out Teams",
    desc: "Fire stopping packages on refurbishments and fit-outs — penetrations sealed as services go in, not patched up after handover.",
  },
];

const faqs = [
  {
    q: "What is fire stopping?",
    a: "Fire stopping is the sealing of gaps, joints and service penetrations in fire-rated walls and floors so a building's compartmentation works as designed. When pipes, cables or ducts pass through a compartment wall, the hole around them must be sealed with a tested fire stopping system — otherwise smoke and fire can spread between compartments long before the wall itself fails.",
  },
  {
    q: "What is passive fire protection?",
    a: "Passive fire protection is the built-in fabric of a building that contains fire without any moving parts or activation — compartment walls and floors, fire doors, fire stopping and dampers. It works alongside active measures like alarms and sprinklers. Fire stopping and fire doors are the two passive measures most commonly flagged in fire risk assessments, and we carry out both.",
  },
  {
    q: "Do you carry out compartmentation surveys?",
    a: "Yes. We survey walls, floors, risers, ceiling voids and service routes to identify breaches in compartmentation, and provide a documented schedule of what needs sealing. We can survey a single property or run programmes across blocks and portfolios.",
  },
  {
    q: "Can you carry out the remedial works from our fire risk assessment?",
    a: "Yes — FRA remedial works are a core part of what we do. Send us the relevant actions from your fire risk assessment and we'll quote for closing them out, including penetration sealing, fire batts, collars and associated fire door works if flagged.",
  },
  {
    q: "What do you seal?",
    a: "Typical works include pipe and cable penetrations, cable tray routes, duct penetrations, gaps around steelwork, linear joints, service riser openings and holes left by removed services — in fire-rated walls, floors and ceilings. Every seal uses a tested system appropriate to the substrate, the service and the fire rating required.",
  },
  {
    q: "Do you also install fire doors?",
    a: "Yes — fire door installation, surveys and remedial works are one of our core services. Fire doors and fire stopping together cover most of the passive fire protection actions raised in a fire risk assessment, and we can handle both under one contract. See our fire door installation page for details.",
  },
  {
    q: "What documentation do I receive?",
    a: "You receive records of the works completed — what was sealed, where, and with what system — suitable as evidence for your fire risk assessment, compliance file and building safety records.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover London and the South East, including all areas within the M25.",
  },
  {
    q: "Is there a minimum job size?",
    a: "Our minimum call-out is £300. For surveys and multi-property programmes, we'll agree scope and pricing up front.",
  },
];

const FireStoppingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="section-dark pt-below-header pb-12 md:pb-14 relative overflow-x-hidden overflow-y-visible">
        <HeroBackdrop />
        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollReveal className="lg:col-span-6 min-w-0">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
                Fire Stopping London
              </p>
              <h1 className="font-heading font-extrabold text-section-dark-foreground mb-4 max-w-2xl break-words text-[1.65rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Fire Stopping London — Passive Fire Protection &amp; Compartmentation
              </h1>
              <p className="text-hero-muted text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-xl">
                Penetration sealing, fire batts, collars and compartmentation surveys for landlords, housing associations, facilities managers and main contractors across London and the M25 — with documentation on completion.
              </p>

              <div className="border border-gold/30 bg-primary/30 rounded-lg p-4 mb-5 md:mb-6">
                <p className="text-section-dark-foreground leading-relaxed text-sm md:text-base">
                  <strong>Compliance Warning:</strong> Under the Regulatory Reform Fire Safety Order 2005, responsible persons must maintain a building's fire safety measures — and unsealed service penetrations are one of the most common breaches flagged in fire risk assessments.
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
                id="fire-stopping-enquiry-form"
                className="scroll-target w-full max-w-full min-w-0 lg:max-w-[800px] lg:ml-auto scroll-mt-28 md:scroll-mt-32 overflow-visible"
              >
                <h2 className="font-heading font-bold text-foreground text-xl sm:text-2xl mb-1">Get a Free Fire Stopping Quote</h2>
                <p className="text-muted-foreground text-sm mb-4">Tell us about the building and we will respond within hours.</p>

                <GhlFormEmbed
                  {...commercialFormEmbed}
                  iframeId="inline-e6NuUzUMAfN2MKNTqFnI"
                  source="fire-stopping-london"
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

      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Fire Stopping Services — Sealed to Spec, Documented on Completion
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCards.map((card) => (
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
              Why Compartmentation Matters
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-10">
              A building's fire strategy assumes every compartment wall and floor actually holds. One unsealed penetration can undermine the lot.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-card border border-border border-l-4 border-l-red-500 rounded-lg p-6 h-full">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  The Risk of Unsealed Breaches
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every unsealed pipe run, cable route or riser opening lets smoke and fire bypass the compartment line. These breaches are routinely flagged in fire risk assessments — and leaving FRA actions open can lead to enforcement action against the responsible person.
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
                  We survey, seal and document — penetrations, gaps, batts, collars and linear joints, using tested systems installed to manufacturer specification. Combined with our fire door work, most passive fire protection actions on an FRA can be closed out by one contractor.
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
              Simple Process. Clear Records.
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
              Who We Work With
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client) => (
              <ScrollReveal key={client.title}>
                <div className="bg-card rounded-lg border border-border p-6 h-full">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-3">{client.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{client.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
              Fire doors + fire stopping
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-3">
              One Contractor for Your Passive Fire Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Fire doors and fire stopping are the two passive fire measures most often flagged in fire risk assessments. We carry out both — surveys, installation and remedial works under one contract, with documentation on completion.
            </p>
            <a href="/fire-door-installation-london" className="text-gold font-semibold hover:underline">
              See our fire door installation service →
            </a>
          </ScrollReveal>
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
              Got Open Actions on Your Fire Risk Assessment?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Free survey. Fixed quote. Documentation on completion. A real person responds within hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#fire-stopping-enquiry-form">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={`tel:${LANDLINE_TEL}`}>
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call {LANDLINE_DISPLAY}
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gold/15 py-4 border-t border-gold/30">
        <div className="container text-center text-foreground font-heading font-semibold tracking-wide">
          Fire stopping &amp; compartmentation — surveys, sealing &amp; documentation — London &amp; M25
        </div>
      </section>
      <section className="bg-background py-8">
        <div className="container text-center">
          <a href="/fire-door-installation-london" className="text-gold font-semibold hover:underline">
            Fire door installation &amp; surveys →
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

export default FireStoppingPage;
