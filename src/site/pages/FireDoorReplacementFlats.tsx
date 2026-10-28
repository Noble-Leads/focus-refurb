import { ArrowRight, Phone, Quote, ShieldCheck, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import HeroBackdrop from "@/components/HeroBackdrop";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import OptimizedImage from "@/components/OptimizedImage";
import FireDoorAudienceSwitch from "@/components/FireDoorAudienceSwitch";
import FireDoorDomesticPrequalifier from "@/components/FireDoorDomesticPrequalifier";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FIRE_DOOR_PHONE_DISPLAY, FIRE_DOOR_PHONE_TEL } from "@/lib/navigation";
import { FIRE_DOOR_PRICES, FIRE_DOOR_REPAIR_PRICES } from "@/lib/fireDoorPricing";

const FORM_ANCHOR = "#fire-door-quote-form";

const domesticForm = {
  src: "https://app.focusrefurbishmentltd.com/widget/form/P7ZjtR3PGqVPyPRTclIu",
  title: "Fire Doors - Domestic",
  iframeId: "inline-P7ZjtR3PGqVPyPRTclIu",
  formName: "Fire Doors - Domestic",
  formId: "P7ZjtR3PGqVPyPRTclIu",
  source: "fire-door-replacement-flats-london",
  iframeHeight: "720",
};

const trustStats = [
  { value: "25+", label: "Years Trading" },
  { value: "500+", label: "Projects" },
  { value: "Same-Day", label: "Quotes" },
  { value: "FD30", label: "Certified" },
  { value: "M25", label: "Coverage" },
];

const chooseCards = [
  {
    title: "No Site Visit Needed",
    desc: "Most fire door jobs, from full replacements to repairs and smaller parts, can be priced accurately from two clear photos. No waiting for a surveyor before you even know a price.",
  },
  {
    title: "Fixed Price, No Surprises",
    desc: "The price you accept is the price you pay. If we spot anything extra needed once we're on site, we agree it with you first. Nothing added without your say-so.",
  },
  {
    title: "FD30 Certified & Compliant",
    desc: "Every door supplied and fitted to FD30 standard with the correct intumescent strips, seals, closer and hardware, with compliance documentation on completion.",
  },
  {
    title: "Fast Turnaround",
    desc: "Same-day quotes and most jobs completed in a single visit, so you're not left without a compliant door for long.",
  },
];

export const fireDoorDomesticFaqs = [
  {
    q: "How much does a domestic fire door cost?",
    a: `A full FD30 door replacement starts from ${FIRE_DOOR_PRICES.domesticDoorset} per door, fully fitted and certified. So two doors start from £2,700 and three from £4,050. Repairs and smaller jobs start from ${FIRE_DOOR_PRICES.minimumCallout} (minimum call-out). Individual parts such as seals, hinges and closers are priced within that. Your exact fixed price comes back the same day from your photos.`,
  },
  {
    q: "What photos do you need to quote my fire door?",
    a: "Two photos: the front of your door and the back, both taken straight-on with the door closed, plus your postcode. That's normally all we need to give you a fixed price.",
  },
  {
    q: "Do you only quote full door replacements?",
    a: "No. We can also quote repairs and smaller jobs from your photos, like hinges, seals, closers and signage. Just tell us what you need when you get in touch.",
  },
  {
    q: "How quickly will I get my quote?",
    a: "In most cases the same day.",
  },
  {
    q: "Will the price change once you arrive?",
    a: "No. Once you've accepted your quote, that's the price. If we spot anything extra needed on the day, we'll always tell you and agree it with you first. Nothing added without your say-so.",
  },
  {
    q: "Is this for homeowners, leaseholders or landlords?",
    a: "All three. We work with homeowners, individual leaseholders and landlords with a single property. If you manage multiple properties, see our commercial fire door service instead.",
  },
  {
    q: "What's included in the price?",
    a: `For a full door replacement, from ${FIRE_DOOR_PRICES.domesticDoorset} per door: a fully fitted FD30 certified fire door set, correctly fitted with intumescent strips, seals, closer and hardware, plus compliance documentation on completion. Repairs and smaller jobs start from ${FIRE_DOOR_PRICES.minimumCallout} minimum call-out and are priced from your photos.`,
  },
  {
    q: "What documentation do I get?",
    a: "An installer certificate and product data sheet, suitable for your freeholder, managing agent or fire risk assessment records.",
  },
  {
    q: "Do you cover my area?",
    a: "London and the M25.",
  },
  {
    q: "What if my photos aren't clear enough to quote from?",
    a: "We'll get straight back in touch to ask for another angle rather than leave you waiting.",
  },
  {
    q: "What if I need more than 3 fire doors replaced?",
    a: "Our photo-quote service covers jobs of up to 3 doors. For 4 or more doors we offer a discounted rate, but need to arrange a quick survey rather than quoting from photos. Use our commercial fire door page and we'll sort it.",
  },
];

const testimonialCards = [
  {
    quote:
      "Had Craig and his team at Focus install fire doors for me. The work was spot on — they know what they're doing, kept tidy and got it all done without any hassle, which is rare from contractors in London. The relevant paperwork was provided too, which is great. Will be using them again. Highly recommend if you're a landlord needing an efficient and professional service.",
    name: "Landlord",
    role: "London · Google Review",
  },
  {
    quote:
      "Had a great experience with Focus Refurbishment. Professional, reliable, and the quality of the work was excellent. Everything was completed to a high standard, and communication throughout was great. Would definitely recommend them!",
    name: "Chloe M.",
    role: "Google Review",
  },
  {
    quote:
      "Excellent work, fast and efficient, really helpful and polite guys with a can-do attitude. They helped me out in a pinch. I recommend!",
    name: "Bianca",
    role: "Google Review · Local Guide",
  },
];

const workCards = [
  {
    label: "FD30 single door",
    before: { src: "/images/fd30-before.png", alt: "Before fire door replacement" },
    after: { src: "/images/fd30-after.png", alt: "After fire door replacement and certification" },
  },
  {
    label: "FD60 double doors",
    before: { src: "/images/fd60-before.png", alt: "Before fire door replacement, double doors" },
    after: { src: "/images/fd60-after.png", alt: "After fire door replacement and certification, double doors" },
  },
];

const FireDoorReplacementFlatsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="section-dark pt-below-header pb-12 md:pb-14 relative overflow-x-hidden overflow-y-visible">
        <HeroBackdrop />
        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollReveal instant className="lg:col-span-7 min-w-0">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
                Domestic Fire Doors · London &amp; M25
              </p>
              <h1 className="font-heading font-extrabold text-section-dark-foreground mb-4 max-w-2xl break-words text-[1.65rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-tight">
                Fire Door Quotes for Flats &amp; Homes
              </h1>
              <p className="text-hero-muted text-sm sm:text-base md:text-lg mb-5 max-w-xl">
                Upload photos, get a fixed price the same day. No site visit. For homeowners, leaseholders and single-property landlords.
              </p>

              <p className="text-section-dark-foreground text-sm sm:text-base mb-6 max-w-xl">
                Full replacement from <strong>{FIRE_DOOR_PRICES.domesticDoorset} per door</strong> · Repairs from{" "}
                <strong>{FIRE_DOOR_PRICES.minimumCallout}</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href={FORM_ANCHOR}>
                  <Button variant="gold" size="xl" className="w-full sm:w-auto">
                    Get My Fixed Price <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href={`tel:${FIRE_DOOR_PHONE_TEL}`}>
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Call {FIRE_DOOR_PHONE_DISPLAY}
                  </Button>
                </a>
              </div>

              <p className="text-hero-muted/80 text-xs sm:text-sm">
                Block, portfolio or 4+ doors?{" "}
                <a href="/fire-door-installation-london" className="text-gold font-semibold underline hover:no-underline">
                  Free survey on our commercial page →
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal instant className="lg:col-span-5 min-w-0">
              <div className="rounded-lg border border-hero-foreground/10 overflow-hidden shadow-lg bg-white max-w-[280px] mx-auto lg:max-w-none lg:mx-0">
                <OptimizedImage
                  src="/images/fire-door-diagram.jpg"
                  alt="Diagram of a certified FD30 fire door showing the closer, hinges, seals, glazing, ironmongery and frame that make it compliant"
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
            <FireDoorAudienceSwitch current="domestic" variant="cards" />
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
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-3">
              Clear Starting Prices
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-10">
              Your exact fixed price comes back the same day from your photos.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-card border border-border rounded-lg p-5 md:p-6 shadow-sm">
              <div className="flex items-baseline justify-between gap-3 border-b border-border pb-4 mb-2">
                <p className="font-heading font-bold text-foreground">Full FD30 door replacement</p>
                <p className="font-heading font-extrabold text-foreground text-xl whitespace-nowrap text-right">
                  <span className="text-sm font-semibold text-muted-foreground">from </span>
                  {FIRE_DOOR_PRICES.domesticDoorset}
                  <span className="block text-xs font-semibold text-muted-foreground">per door</span>
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8">
                {FIRE_DOOR_REPAIR_PRICES.map((row) => (
                  <li key={row.item} className="flex items-baseline justify-between gap-3 border-b border-border py-2.5 text-sm">
                    <span className="text-muted-foreground">
                      {row.item}
                      {row.note && <span className="block text-xs text-muted-foreground/80">{row.note}</span>}
                    </span>
                    <span className="text-foreground font-semibold whitespace-nowrap">from {row.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-xs mt-3">
                Repair jobs start from {FIRE_DOOR_PRICES.minimumCallout} minimum call-out. Glazing is quoted after inspection. Doors with moisture damage usually need replacing. Covers jobs of up to 3 doors.
              </p>
            </div>
          </ScrollReveal>
          <div className="text-center mt-8">
            <a href={FORM_ANCHOR}>
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                Get My Fixed Price <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground text-center mb-12">
              Why Homeowners &amp; Landlords Choose Us
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

      <section id="fire-door-quote-form" className="scroll-target scroll-mt-28 md:scroll-mt-32 bg-accent py-16 md:py-20">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-3">
                Get Your Same-Day Quote
              </h2>
              <p className="text-white/85 text-lg">
                Three quick questions, then photos. Fixed price, no site visit.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FireDoorDomesticPrequalifier
              form={domesticForm}
              phoneDisplay={FIRE_DOOR_PHONE_DISPLAY}
              phoneTel={FIRE_DOOR_PHONE_TEL}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                Compliance, handled
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-3 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
                FD30 Certified, Documented, Done
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Under the Regulatory Reform (Fire Safety) Order 2005, fire doors need to be kept in proper working order. Every door we fit is FD30 certified and correctly sealed, with installer certificates and product data provided on completion, ready for your freeholder, managing agent or fire risk assessment.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-lg border border-border overflow-hidden shadow-md">
                <OptimizedImage
                  src="/images/service-firedoors.png"
                  alt="Fire door replacement by Focus Refurbishment in London"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Trusted by Homeowners &amp; Landlords
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
              {fireDoorDomesticFaqs.map((faq, index) => (
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
              Ready for Your Fixed Price?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Three quick questions, send your photos, same-day quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={FORM_ANCHOR}>
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Get My Price <ArrowRight className="w-5 h-5" />
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
          Fire door replacement, repairs &amp; compliance. Fixed price from a photo. London &amp; M25.
        </div>
      </section>
      <section className="bg-background py-8">
        <div className="container text-center">
          <a href="/fire-door-installation-london" className="text-gold font-semibold hover:underline">
            Block, portfolio or 4+ doors? Free survey on our commercial page →
          </a>
          <span className="mx-3 text-muted-foreground">·</span>
          <a href="/building-maintenance-london" className="text-gold font-semibold hover:underline">
            Need ongoing property maintenance too? →
          </a>
        </div>
      </section>
    </div>
  );
};

export default FireDoorReplacementFlatsPage;
