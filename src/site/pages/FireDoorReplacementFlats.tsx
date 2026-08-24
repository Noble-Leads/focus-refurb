import { ArrowDown, ArrowRight, Camera, CheckCircle2, Clock, PoundSterling, Phone, Quote, ShieldCheck, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import HeroBackdrop from "@/components/HeroBackdrop";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FIRE_DOOR_PHONE_DISPLAY, FIRE_DOOR_PHONE_TEL } from "@/lib/navigation";

const FIRE_DOOR_DISPLAY = FIRE_DOOR_PHONE_DISPLAY;
const FIRE_DOOR_TEL = FIRE_DOOR_PHONE_TEL;

const heroPoints = [
  "Send photos, no site visit needed",
  "Fixed price quote, same day",
  "Replacement, repairs & parts quoted",
  "FD30 certified & compliant work",
  "For homeowners, leaseholders & landlords",
  "London & M25 coverage",
];

const trustStats = [
  { value: "25+", label: "Years Trading" },
  { value: "500+", label: "Projects" },
  { value: "Same-Day", label: "Quotes" },
  { value: "FD30", label: "Certified" },
  { value: "M25", label: "Coverage" },
];

const quoteSteps = [
  {
    number: "1",
    icon: Camera,
    title: "Send Your Photos",
    desc: "Front and back of your door, closed, plus your postcode. No site visit needed. Covers jobs of up to 3 doors.",
  },
  {
    number: "2",
    icon: PoundSterling,
    title: "Get Your Fixed Price",
    desc: "We quote from your photos and get back to you the same day. If anything extra is needed, we tell you before you book. Never after.",
  },
  {
    number: "3",
    icon: Clock,
    title: "Book Your Day",
    desc: "Happy with the price? Accept the quote and we send you a booking link to pick a day. Most jobs are completed in a single visit.",
  },
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

const faqs = [
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
    a: "For a full door replacement: a fully fitted FD30 certified fire door set, correctly fitted with intumescent strips, seals, closer and hardware, plus compliance documentation on completion. Repairs and smaller jobs are priced individually based on what's needed.",
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
    a: "Our photo-quote service covers jobs of up to 3 doors. For 4 or more doors we offer a discounted rate, but need to arrange a quick survey rather than quoting from photos. Call us and we'll sort it.",
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
            <ScrollReveal className="lg:col-span-7 min-w-0">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
                Domestic Fire Doors, London
              </p>
              <h1 className="font-heading font-extrabold text-section-dark-foreground mb-4 max-w-2xl break-words text-[1.65rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Domestic Fire Door Quotes for Flats & Homes
              </h1>
              <p className="text-hero-muted text-sm sm:text-base md:text-lg mb-2 max-w-xl">
                Upload photos of your fire door and we'll come back with a fixed price the same day, no site visit needed. Replacement, repairs, seals, hinges and signage all covered, for houses and flats across London and the M25.
              </p>
              <p className="text-hero-muted/70 text-xs sm:text-sm mb-5 md:mb-6 max-w-xl">
                Managing multiple properties, or need 4 or more doors? See our{" "}
                <a href="/fire-door-installation-london" className="text-gold underline hover:no-underline">
                  commercial fire door service
                </a>{" "}
                instead.
              </p>

              <div className="border border-gold/30 bg-primary/30 rounded-lg p-4 mb-5 md:mb-6">
                <p className="text-section-dark-foreground leading-relaxed text-sm md:text-base">
                  <strong>Full door replacement from £1,350</strong>, fully fitted and FD30 certified. Repairs and smaller jobs like seals, hinges and signage are quoted individually from your photos. Covers jobs of up to 3 doors; 4 or more gets a discounted rate via a quick survey instead.
                </p>
              </div>

              <ul className="grid gap-x-4 gap-y-2.5 mb-6 md:mb-8 grid-cols-1 sm:grid-cols-2">
                {heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-hero-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#fire-door-quote-form">
                  <Button variant="gold" size="xl" className="w-full sm:w-auto">
                    Get My Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href={`tel:${FIRE_DOOR_TEL}`}>
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Call {FIRE_DOOR_DISPLAY}
                  </Button>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-5 min-w-0">
              <div className="rounded-lg border border-hero-foreground/10 overflow-hidden shadow-lg bg-white max-w-[280px] mx-auto lg:max-w-none lg:mx-0">
                <img
                  src="/images/fire-door-diagram.jpg"
                  alt="Diagram of a certified FD30 fire door showing the closer, hinges, seals, glazing, ironmongery and frame that make it compliant"
                  width={2048}
                  height={2048}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full aspect-square object-contain"
                  loading="eager"
                  decoding="async"
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

      <section className="py-20 bg-background">
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

      <section className="section-dark py-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground text-center mb-12">
              Why Homeowners & Landlords Choose Us
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

      <section className="py-12 md:py-16 bg-secondary">
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
                <img
                  src="/images/service-firedoors.png"
                  alt="Fire door replacement by Focus Refurbishment in London"
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

      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Trusted by Homeowners & Landlords
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

      <section id="fire-door-quote-form" className="scroll-target scroll-mt-28 md:scroll-mt-32 bg-accent py-20">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-3">
                Get Your Same-Day Quote
              </h2>
              <p className="text-white/85 text-lg">
                No survey, no waiting around. Just photos, a price, and a booking.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mb-10">
              {quoteSteps.map((step, index) => (
                <div key={step.number} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
                  <div className="flex flex-col items-center text-center w-44">
                    <div className="mx-auto mb-3 w-12 h-12 rounded-full border-2 border-gold text-white flex items-center justify-center bg-white/5">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <p className="text-white font-heading font-bold text-sm mb-1">
                      {step.number}. {step.title}
                    </p>
                    <p className="text-white/70 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {index < quoteSteps.length - 1 && (
                    <>
                      <ArrowDown className="w-5 h-5 text-gold/50 shrink-0 sm:hidden" aria-hidden="true" />
                      <ArrowRight className="w-5 h-5 text-gold/50 shrink-0 hidden sm:block" aria-hidden="true" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-background rounded-lg p-5 md:p-8 shadow-lg">
              <GhlFormEmbed
                src="https://app.focusrefurbishmentltd.com/widget/form/P7ZjtR3PGqVPyPRTclIu"
                title="Fire Doors - Domestic"
                iframeId="inline-P7ZjtR3PGqVPyPRTclIu"
                formName="Fire Doors - Domestic"
                formId="P7ZjtR3PGqVPyPRTclIu"
                source="fire-door-replacement-flats-london"
                iframeHeight="720"
              />

              <p className="mt-1 text-center text-xs text-muted-foreground">
                Or call us:{" "}
                <a href={`tel:${FIRE_DOOR_TEL}`} className="text-gold font-semibold hover:underline">
                  {FIRE_DOOR_DISPLAY}
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gold/15 py-4 border-t border-gold/30">
        <div className="container text-center text-foreground font-heading font-semibold tracking-wide">
          Fire door replacement, repairs & compliance work. Fixed price from a photo. London & M25.
        </div>
      </section>
      <section className="bg-background py-8">
        <div className="container text-center">
          <a href="/fire-door-installation-london" className="text-gold font-semibold hover:underline">
            Managing multiple properties or need a site survey instead? See our commercial fire door service →
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
