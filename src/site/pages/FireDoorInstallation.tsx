import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardList,
  Home,
  Landmark,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import HeroBackdrop from "@/components/HeroBackdrop";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import OptimizedImage from "@/components/OptimizedImage";
import FireDoorAnatomy from "@/components/FireDoorAnatomy";
import FireDoorAudienceSwitch from "@/components/FireDoorAudienceSwitch";
import FireDoorPrequalifier from "@/components/FireDoorPrequalifier";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FIRE_DOOR_PHONE_DISPLAY, FIRE_DOOR_PHONE_TEL } from "@/lib/navigation";
import { FIRE_DOOR_PRICES, FIRE_DOOR_REPAIR_PRICES } from "@/lib/fireDoorPricing";

const FORM_ANCHOR = "#fire-door-enquiry-form";

const commercialForm = {
  src: "https://link.nobleleads.uk/widget/form/LsQfA3LgiKr1TIsl3JSq",
  title: "FR - Fire Doors",
  iframeId: "inline-LsQfA3LgiKr1TIsl3JSq",
  formName: "FR - Fire Doors",
  formId: "LsQfA3LgiKr1TIsl3JSq",
  source: "fire-door-installation-london",
  iframeHeight: "720px",
};

const trustStats = [
  { value: "Q-Mark", label: "BM TRADA" },
  { value: "25+", label: "Years Trading" },
  { value: "500+", label: "Projects" },
  { value: "Free", label: "Door Surveys" },
  { value: "M25", label: "Coverage" },
];

const audienceCards = [
  {
    icon: Building2,
    title: "Managing agents & block managers",
    desc: "Fire risk assessment actions across blocks, priced door by door so you can report back to freeholders and residents with confidence.",
  },
  {
    icon: Users,
    title: "Facilities managers",
    desc: "Offices, retail, schools and healthcare. We plan works around occupants, with out-of-hours working where the building can't be disrupted.",
  },
  {
    icon: Landmark,
    title: "Freeholders, RMCs & RTMs",
    desc: "Clear evidence of what was found, what was fixed and what was replaced, for the responsible person's records and insurer.",
  },
  {
    icon: Home,
    title: "HMO & portfolio landlords",
    desc: "Surveys and installations scheduled across multiple properties, with multi-door pricing and paperwork for each address.",
  },
];

const surveyIncludes = [
  "Every door inspected against the same checks shown above",
  "Door-by-door schedule with location, rating and pass or fail",
  "Photos of each defect so you can see what we saw",
  "Repair or replace recommendation for each door",
  "Fixed written quote, with no obligation to go ahead",
];

const sampleSchedule = [
  { door: "FD-01", location: "Flat 3 entrance", rating: "FD30S", pass: false, action: "Closer not latching. Adjust closer." },
  { door: "FD-02", location: "Stair core, level 1", rating: "FD30S", pass: true, action: "No action needed." },
  { door: "FD-03", location: "Bin store", rating: "FD60", pass: false, action: "Seals painted over. Replace seals." },
  { door: "FD-04", location: "Riser cupboard", rating: "FD30", pass: false, action: "No certification evidence. Replace doorset." },
];

const processSteps = [
  { number: "1", title: "Tell us about the building", desc: "Answer four quick questions and leave your details. A real person replies within hours." },
  { number: "2", title: "Free survey", desc: "We inspect every door, usually within the week, and send a door-by-door schedule." },
  { number: "3", title: "Fixed quote & installation", desc: "Agree the price, then we supply and fit FD30 or FD60 doorsets and carry out remedial works." },
  { number: "4", title: "Compliance pack", desc: "Installer certificates, product data and evidence for your fire risk assessment records." },
];

/** Highlight remediaries — full list lives in FAQ / anatomy */
const highlightRemedials = FIRE_DOOR_REPAIR_PRICES.filter((row) =>
  ["Door closer replaced", "Intumescent & smoke seals", "Fire-rated hinges", "Fire door signage"].includes(row.item),
);

export const fireDoorFaqs = [
  {
    q: "How much does a commercial fire door cost?",
    a: `A single FD30 or FD60 doorset starts from ${FIRE_DOOR_PRICES.commercialSingleDoorset} fully fitted, and a double doorset from ${FIRE_DOOR_PRICES.commercialDoubleDoorset}. Remedial work starts from ${FIRE_DOOR_PRICES.minimumCallout} minimum call-out. After your free survey you get a fixed written quote, and jobs with multiple doors are priced accordingly.`,
  },
  {
    q: "Is the fire door survey really free?",
    a: "Yes. We inspect each door and send you a door-by-door schedule with photos of any defects and a fixed quote. There's no obligation to go ahead.",
  },
  {
    q: "How quickly can you carry out a survey?",
    a: "We aim to carry out surveys within the week of your enquiry.",
  },
  {
    q: "Can you work in occupied buildings or out of hours?",
    a: "Yes. We regularly work in occupied blocks, offices and HMOs, and plan works around residents and tenants. Evening, weekend and night working is available where the building can't be disrupted during the day.",
  },
  {
    q: "What documentation do I receive after installation?",
    a: "You receive a compliance pack including installer certificates and product data sheets, suitable for your fire risk assessment, insurer and managing agent records.",
  },
  {
    q: "Do you offer fire door inspections?",
    a: "Yes. We inspect gaps, hinges, frames, closers, seals, glazing and signage, and carry out remedial works or replacements where needed. For residential buildings over 11 metres, the Fire Safety (England) Regulations 2022 require best-endeavours annual checks of flat entrance doors and quarterly checks of communal fire doors. We can carry out one-off surveys or scheduled programmes across portfolios.",
  },
  {
    q: "Do you install internal and external fire doors?",
    a: "Yes. We supply and fit internal fire doors (flat entrance, common-part and room doors) and external fire-rated doorsets, all to FD30 or FD60 standard with the correct intumescent strips, smoke seals, closers and frames.",
  },
  {
    q: "Do you provide fire stopping as well?",
    a: "Yes. Alongside fire doors we seal pipe, cable and duct penetrations and carry out compartmentation surveys, so most passive fire protection actions on a fire risk assessment can be handled under one contract.",
  },
  {
    q: "Do you work across multi-property portfolios?",
    a: "Yes. We work with landlords, managing agents and HMO operators managing multiple properties, and schedule surveys and installations across addresses efficiently.",
  },
  {
    q: "What areas do you cover?",
    a: "London and the South East, including all areas within the M25.",
  },
];

const testimonialCards = [
  {
    quote:
      "Had Craig and his team at Focus install fire doors for me. The work was spot on — they know what they're doing, kept tidy and got it all done without any hassle, which is rare from contractors in London. The relevant paperwork was provided too, which is great. Will be using them again. Highly recommend if you're a landlord needing an efficient and professional service.",
    name: "Landlord",
    role: "London · Google review",
  },
  {
    quote:
      "Had a great experience with Focus Refurbishment. Professional, reliable, and the quality of the work was excellent. Everything was completed to a high standard, and communication throughout was great. Would definitely recommend them!",
    name: "Chloe M.",
    role: "Google review",
  },
  {
    quote:
      "Excellent work, fast and efficient, really helpful and polite guys with a can-do attitude. They helped me out in a pinch. I recommend!",
    name: "Bianca",
    role: "Google review · Local Guide",
  },
];

const workCards = [
  {
    label: "FD30 single doorset",
    before: { src: "/images/fd30-before.png", alt: "Fire door before FD30 replacement" },
    after: { src: "/images/fd30-after.png", alt: "Compliant FD30 fire door after installation" },
  },
  {
    label: "FD60 double doorset",
    before: { src: "/images/fd60-before.png", alt: "Double fire doors before FD60 replacement" },
    after: { src: "/images/fd60-after.png", alt: "Compliant FD60 double fire doors after installation" },
  },
];

const FireDoorInstallationPage = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="section-dark pt-below-header pb-12 md:pb-14 relative overflow-x-hidden overflow-y-visible">
        <HeroBackdrop />
        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollReveal instant className="lg:col-span-7 min-w-0">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
                Commercial Fire Doors · London &amp; M25
              </p>
              <h1 className="font-heading font-extrabold text-section-dark-foreground mb-4 max-w-2xl break-words text-[1.65rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-tight">
                FD30 &amp; FD60 Fire Doors — Surveyed, Fitted &amp; Documented
              </h1>
              <p className="text-hero-muted text-sm sm:text-base md:text-lg mb-5 max-w-xl">
                Free door-by-door survey for managing agents, facilities managers and landlords. Fixed quote. Compliance pack on completion.
              </p>

              <p className="text-section-dark-foreground text-sm sm:text-base mb-6 max-w-xl">
                From <strong>{FIRE_DOOR_PRICES.commercialSingleDoorset}</strong> single ·{" "}
                <strong>{FIRE_DOOR_PRICES.commercialDoubleDoorset}</strong> double · Fully fitted
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href={FORM_ANCHOR}>
                  <Button variant="gold" size="xl" className="w-full sm:w-auto">
                    Book a Free Survey <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href={`tel:${FIRE_DOOR_PHONE_TEL}`}>
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Call {FIRE_DOOR_PHONE_DISPLAY}
                  </Button>
                </a>
              </div>

              <p className="text-hero-muted/80 text-xs sm:text-sm mb-3">
                Home or flat with 1–3 doors?{" "}
                <a href="/domestic/fire-door-replacement-flats-london" className="text-gold font-semibold underline hover:no-underline">
                  Get a fixed price from photos →
                </a>
              </p>

              <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-hero-muted">
                <BadgeCheck className="w-4 h-4 text-gold shrink-0" />
                BM TRADA Q-Mark — installation, inspection &amp; fire stopping
              </p>
            </ScrollReveal>

            <ScrollReveal instant className="lg:col-span-5 min-w-0">
              <div className="rounded-lg border border-hero-foreground/10 overflow-hidden shadow-lg bg-white max-w-[280px] mx-auto lg:max-w-none lg:mx-0">
                <OptimizedImage
                  src="/images/fire-door-diagram.jpg"
                  alt="Diagram of a certified fire door showing closer, hinges, seals, glazing and frame"
                  width={900}
                  height={900}
                  sizes="(max-width: 1024px) 280px, 40vw"
                  className="w-full aspect-square object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
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

      <section className="py-10 md:py-12 bg-secondary border-b border-border">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-center text-sm mb-5">
              Not sure which service you need?
            </p>
            <FireDoorAudienceSwitch current="commercial" variant="cards" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-3">
              Who We Work With
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-10 max-w-2xl mx-auto">
              Whoever holds responsibility for the building, we give you work you can evidence.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {audienceCards.map((card) => (
              <ScrollReveal key={card.title}>
                <div className="bg-card rounded-lg border border-border border-t-4 border-t-gold p-6 h-full">
                  <card.icon className="w-6 h-6 text-gold mb-3" />
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-6xl">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3 text-center">
              Inside a compliant fire door
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-3">
              What We Check on Every Fire Door
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-6 md:mb-10 max-w-2xl mx-auto">
              Tap a number to see what inspectors look for, why doors fail, and what it costs to put right.
            </p>
          </ScrollReveal>
          <FireDoorAnatomy ctaHref={FORM_ANCHOR} />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Free survey</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
                What You Get From Your Survey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A survey you can act on, whether or not you use us for the work.
              </p>
              <ul className="space-y-3">
                {surveyIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <BadgeCheck className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
                  <ClipboardList className="w-4 h-4 text-gold" />
                  <p className="font-heading font-bold text-foreground text-sm">Example survey schedule</p>
                </div>
                <ul className="divide-y divide-border">
                  {sampleSchedule.map((row) => (
                    <li key={row.door} className="px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm text-foreground">
                          <span className="font-heading font-bold">{row.door}</span>
                          <span className="text-muted-foreground"> · {row.location} · {row.rating}</span>
                        </p>
                        <span
                          className={`shrink-0 rounded px-2 py-0.5 text-xs font-heading font-bold uppercase ${
                            row.pass ? "bg-green-600/10 text-green-700" : "bg-red-500/10 text-red-600"
                          }`}
                        >
                          {row.pass ? "Pass" : "Fail"}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{row.action}</p>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                  Illustrative example. Your schedule covers every door surveyed.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-20">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground text-center mb-3">
              Starting Prices
            </h2>
            <p className="text-hero-muted text-center text-base mb-10 max-w-xl mx-auto">
              Confirmed in a fixed written quote after your free survey.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "Single doorset", sub: "FD30 / FD60, supplied & fitted", price: FIRE_DOOR_PRICES.commercialSingleDoorset },
              { label: "Double doorset", sub: "FD30 / FD60, supplied & fitted", price: FIRE_DOOR_PRICES.commercialDoubleDoorset },
            ].map((item) => (
              <ScrollReveal key={item.label}>
                <div className="rounded-lg border border-gold/40 bg-primary/20 p-6 text-center h-full">
                  <p className="text-section-dark-foreground font-heading font-bold text-lg">{item.label}</p>
                  <p className="text-hero-muted text-sm mt-1">{item.sub}</p>
                  <p className="text-section-dark-foreground font-heading font-extrabold text-3xl mt-3">
                    <span className="text-base font-semibold text-hero-muted">from </span>
                    {item.price}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="rounded-lg border border-hero-foreground/15 px-5 py-4">
              <p className="text-section-dark-foreground font-heading font-semibold text-sm mb-3 text-center sm:text-left">
                Common remedial works
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {highlightRemedials.map((row) => (
                  <li key={row.item} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-hero-muted">{row.item}</span>
                    <span className="text-section-dark-foreground font-semibold whitespace-nowrap">from {row.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-hero-muted/80 text-xs mt-3 text-center sm:text-left">
                Minimum call-out {FIRE_DOOR_PRICES.minimumCallout}. Full list in the door check above.
              </p>
            </div>
          </ScrollReveal>

          <div className="text-center mt-8">
            <a href={FORM_ANCHOR}>
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                Book a Free Survey <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Compliance, handled</p>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-3 flex items-center gap-2">
                <BadgeCheck className="w-6 h-6 text-gold shrink-0" />
                BM TRADA Q-Mark
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Independently certified under the BM TRADA Q-Mark scheme for fire door installation, fire door inspection and fire stopping. Third-party audited work so the evidence you hand to your assessor, insurer or freeholder stands up.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-lg border border-border overflow-hidden shadow-md">
                <OptimizedImage
                  src="/images/service-firedoors.png"
                  alt="Fire door installation by Focus Refurbishment in London"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-card border border-border border-l-4 border-l-red-500 rounded-lg p-6 h-full">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Your legal duty
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Under the Regulatory Reform (Fire Safety) Order 2005, the responsible person must keep fire doors in efficient working order. Non-compliance can lead to enforcement action, unlimited fines, and insurers questioning claims.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-card border border-border border-l-4 border-l-green-600 rounded-lg p-6 h-full">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  What we handle for you
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Surveys, supply, installation, remedial works and fire stopping from one contractor, with documented evidence for your records rather than juggling separate trades.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground text-center mb-12">
              How It Works
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
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

      <section id="fire-door-enquiry-form" className="scroll-target scroll-mt-28 md:scroll-mt-32 bg-accent py-16 md:py-20">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-3">
                Book Your Free Fire Door Survey
              </h2>
              <p className="text-white/85 text-lg">
                Four quick questions, then your details. A real person responds within hours.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FireDoorPrequalifier
              form={commercialForm}
              phoneDisplay={FIRE_DOOR_PHONE_DISPLAY}
              phoneTel={FIRE_DOOR_PHONE_TEL}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Recent Fire Door Work
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workCards.map((card) => (
              <ScrollReveal key={card.label}>
                <BeforeAfterSlider before={card.before} after={card.after} aspectClassName="aspect-[3/4]" fullWidth />
                <p className="text-center text-sm font-heading font-semibold text-foreground mt-2">{card.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              What Our Clients Say
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

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-10">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-card rounded-lg border border-border px-6">
              {fireDoorFaqs.map((faq, index) => (
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

      <section className="bg-accent py-16 md:py-20">
        <div className="container text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              Get a Clear Picture of Your Fire Doors
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Free door-by-door survey, a fixed written quote, and no obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={FORM_ANCHOR}>
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Book a Free Survey <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={`tel:${FIRE_DOOR_PHONE_TEL}`}>
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call {FIRE_DOOR_PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gold/15 py-4 border-t border-gold/30">
        <div className="container text-center text-foreground font-heading font-semibold tracking-wide">
          Fire door surveys, installation &amp; remedial works — London &amp; M25
        </div>
      </section>
      <section className="bg-background py-8">
        <div className="container text-center">
          <a href="/domestic/fire-door-replacement-flats-london" className="text-gold font-semibold hover:underline">
            Home, flat or 1–3 doors? Fixed price from a photo →
          </a>
          <span className="mx-3 text-muted-foreground">·</span>
          <a href="/fire-stopping-london" className="text-gold font-semibold hover:underline">
            Fire stopping &amp; compartmentation →
          </a>
          <span className="mx-3 text-muted-foreground">·</span>
          <a href="/building-maintenance-london" className="text-gold font-semibold hover:underline">
            Need ongoing property maintenance too? →
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
