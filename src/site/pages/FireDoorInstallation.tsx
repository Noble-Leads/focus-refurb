import { AlertTriangle, ArrowRight, CheckCircle2, Phone, Quote, ShieldCheck, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const LANDLINE_DISPLAY = "020 4634 0020";
const LANDLINE_TEL = "02046340020";
const CTA_DISPLAY = LANDLINE_DISPLAY;
const CTA_TEL = LANDLINE_TEL;

const heroPoints = [
  "FD30 & FD60 supplied and fitted",
  "Full compliance documentation",
  "Approved certified installer",
  "Commercial and residential",
  "Fast turnaround survey within the week",
];

const trustStats = [
  { value: "20+", label: "Years Trading" },
  { value: "500+", label: "Projects" },
  { value: "FD30-FD60", label: "Rated Doors" },
  { value: "100%", label: "Certified" },
  { value: "M25", label: "Coverage" },
];

const chooseCards = [
  {
    title: "Approved & Certified",
    desc: "Our team installs compliant FD30 and FD60 fire doors to current standards. Every project is delivered by trained professionals who understand inspection requirements.",
  },
  {
    title: "Full Documentation",
    desc: "You receive a full compliance pack at completion so your records are audit-ready. We document each installed door and include supporting certification details.",
  },
  {
    title: "Real People Fast Response",
    desc: "A real member of our team handles your enquiry and arranges your survey quickly. If you have a deadline, we prioritize your programme where possible.",
  },
  {
    title: "London's Trusted Contractor",
    desc: "Landlords, agents and commercial clients rely on Focus for dependable workmanship. We keep communication clear from first survey through final sign-off.",
  },
];

const processSteps = [
  { number: "1", title: "Enquire", desc: "Call or submit the form and tell us what your property needs." },
  { number: "2", title: "Free Survey", desc: "We arrange a fast survey and confirm door specs and compliance requirements." },
  { number: "3", title: "Installation", desc: "Our certified team supplies and fits the required FD30 or FD60 doors." },
  { number: "4", title: "Certified", desc: "You get full paperwork and confirmation your installation is compliant." },
];

const faqs = [
  {
    q: "How quickly can you survey?",
    a: "In most cases we can get to you within the week. If you have an inspection coming up, tell us when you enquire and we'll prioritise.",
  },
  {
    q: "What's in the compliance documentation?",
    a: "A full certification pack: installer certificate, product specs, door schedule and photographic evidence of each installation.",
  },
  {
    q: "Do you work on HMOs and blocks of flats?",
    a: "Yes — we regularly handle HMOs, blocks of flats and commercial buildings, multiple doors in one visit with a single compliance pack.",
  },
  {
    q: "What areas do you cover?",
    a: "South East, South West and Central London within the M25. Call 020 4634 0020 to confirm your postcode.",
  },
  {
    q: "What's the minimum job size?",
    a: "Single door replacements up to full multi-property programmes. Minimum project value £300.",
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
    title: "After - FD30 Installed & Certified",
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
    title: "After - FD60 Installed & Certified",
    accent: "text-green-600",
    note: "FD60 upgraded compliant double doors",
    image: "/images/fd60-after.png",
    alt: "After FD60 installation and certification double doors",
  },
];

const FireDoorInstallationPage = () => {
  return (
    <div className="overflow-hidden">
      <section className="section-dark pt-36 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                Approved Fire Door Installers
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-section-dark-foreground mb-5 max-w-2xl">
                Fire Door Installation London - Certified, Compliant & Done Right
              </h1>
              <p className="text-hero-muted text-lg mb-8 max-w-xl">
                We support landlords, estate agents and commercial clients across London and the M25 with compliant FD30 and FD60 fire door installation.
              </p>

              <div className="border border-gold/30 bg-primary/30 rounded-lg p-5 mb-8">
                <p className="text-section-dark-foreground leading-relaxed text-sm md:text-base">
                  <strong>Compliance Warning:</strong> Under the Regulatory Reform Fire Safety Order 2005, landlords are legally required to ensure fire doors are compliant - non-compliance can result in unlimited fines.
                </p>
              </div>

              <ul className="space-y-3">
                {heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-hero-muted">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div id="fire-door-enquiry-form" className="bg-card text-card-foreground rounded-xl border border-border shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-1">Get a Free Fire Door Quote</h2>
                <p className="text-muted-foreground text-sm mb-6">Tell us about your property and we will respond within hours.</p>

                <div className="min-h-[640px] sm:min-h-[749px]">
                  <iframe
                    src="https://link.nobleleads.uk/widget/form/LsQfA3LgiKr1TIsl3JSq"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
                    id="inline-LsQfA3LgiKr1TIsl3JSq"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="FR - Fire Doors"
                    data-height="749"
                    data-layout-iframe-id="inline-LsQfA3LgiKr1TIsl3JSq"
                    data-form-id="LsQfA3LgiKr1TIsl3JSq"
                    title="FR - Fire Doors"
                  />
                </div>

                <p className="mt-4 text-center text-sm text-muted-foreground">
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

      <section className="bg-section-dark py-8 border-t border-b border-hero-foreground/10">
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
              Certified Installers. Full Documentation. No Shortcuts.
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
                  We manage the full process from survey and specification to installation and certification. You get compliant doors, documented evidence, and clear records for inspections.
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
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
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
        <div className="container max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Trusted by Landlords Across London
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonialCards.map((testimonial) => (
              <ScrollReveal key={testimonial.name + testimonial.role}>
                <div className="bg-card border border-border rounded-lg p-8 h-full">
                  <Quote className="w-10 h-10 text-gold mb-4" />
                  <p className="text-foreground italic leading-relaxed mb-6">"{testimonial.quote}"</p>
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
          <div className="space-y-4">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20">
        <div className="container text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              Ready to Get Your Property Compliant?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Free site survey. Fixed quote. Full certification on completion. A real person responds within hours.
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
          Approved fire door installer - London & M25 - Free quotes - Compliance certification included
        </div>
      </section>
    </div>
  );
};

export default FireDoorInstallationPage;
