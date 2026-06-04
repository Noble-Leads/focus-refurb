import type { LucideIcon } from "lucide-react";
import { AlertTriangle, ArrowRight, CheckCircle2, Phone, Quote, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import VimeoEmbed from "@/components/VimeoEmbed";
import { Button } from "@/components/ui/button";
import HeroBackdrop from "@/components/HeroBackdrop";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LANDLINE_DISPLAY = "020 4634 0020";
const LANDLINE_TEL = "02046340020";

export type ServiceLandingConfig = {
  formAnchorId: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheading: string;
  alertBox: string;
  heroBullets: string[];
  heroCtaLabel: string;
  /** Scroll target for the hero CTA; defaults to the enquiry form */
  heroCtaAnchorId?: string;
  heroFormTitle: string;
  heroFormSubtitle: string;
  trustStats: { value: string; label: string }[];
  valueCards: { title: string; desc: string }[];
  problemHeading: string;
  problemBody: string;
  problemBullets: string[];
  servicesSubheading?: string;
  services: { icon: LucideIcon; title: string; subtitle?: string }[];
  videoHeading?: string;
  videoCaption?: string;
  showVideoSection?: boolean;
  formEmbed?: {
    src: string;
    title: string;
    iframeId: string;
    formName: string;
    formId: string;
    iframeHeight?: string;
    minHeightClassName?: string;
    embedScriptSrc?: string;
    deferLoad?: boolean;
  };
  processSteps: { number: string; title: string; desc: string }[];
  testimonials: { quote: string; name: string; role: string }[];
  faqs: { q: string; a: string }[];
  finalCtaHeading: string;
  finalCtaBullets: string[];
  finalCtaLabel: string;
  bottomStrip: string;
  positiveProblemBullets?: boolean;
  caseStudy?: {
    label: string;
    title: string;
    intro?: string;
    bulletsHeading?: string;
    bullets: string[];
    scopeNote?: string;
    quote: string;
    quoteAttribution: string;
    ctaLabel: string;
    ctaAnchorId?: string;
    vimeoVideoId: string;
    iframeTitle: string;
    /** Section id for in-page links (e.g. hero “See our work”) */
    anchorId?: string;
  };
};

type ServiceLandingPageProps = {
  config: ServiceLandingConfig;
};

type CaseStudyConfig = NonNullable<ServiceLandingConfig["caseStudy"]>;

const LANDING_SECTION = "py-12 md:py-20";

const CaseStudySection = ({
  caseStudy,
  formAnchorId,
}: {
  caseStudy: CaseStudyConfig;
  formAnchorId: string;
}) => {
  const caseStudyCtaTarget = caseStudy.ctaAnchorId ?? formAnchorId;
  const videoAnchorId = caseStudy.anchorId;

  return (
    <section className={`${LANDING_SECTION} bg-secondary`}>
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          <ScrollReveal instant>
            <div
              id={videoAnchorId}
              className={`w-full max-w-sm mx-auto md:max-w-none md:mx-0 rounded-lg overflow-hidden border border-border shadow-md [content-visibility:visible] ${
                videoAnchorId ? "scroll-mt-24" : ""
              }`.trim()}
            >
              <VimeoEmbed videoId={caseStudy.vimeoVideoId} title={caseStudy.iframeTitle} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                {caseStudy.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
                {caseStudy.title}
              </h2>
              {caseStudy.intro && (
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  {caseStudy.intro}
                </p>
              )}
              {caseStudy.bulletsHeading && (
                <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                  {caseStudy.bulletsHeading}
                </h3>
              )}
              <ul className="space-y-3 mb-6">
                {caseStudy.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              {caseStudy.scopeNote && (
                <div className="bg-card border border-border rounded-lg p-5 mb-8">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {caseStudy.scopeNote}
                  </p>
                </div>
              )}
              <blockquote className="border-l-4 border-gold pl-5 mb-8">
                <p className="text-foreground italic leading-relaxed text-lg mb-3">
                  &ldquo;{caseStudy.quote}&rdquo;
                </p>
                <footer className="text-muted-foreground text-sm font-heading font-semibold">
                  — {caseStudy.quoteAttribution}
                </footer>
              </blockquote>
              <a href={`#${caseStudyCtaTarget}`}>
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  {caseStudy.ctaLabel} <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const ServiceLandingPage = ({ config }: ServiceLandingPageProps) => {
  const {
    formAnchorId,
    heroEyebrow,
    heroHeadline,
    heroSubheading,
    alertBox,
    heroBullets,
    heroCtaLabel,
    heroCtaAnchorId,
    heroFormTitle,
    heroFormSubtitle,
    trustStats,
    valueCards,
    problemHeading,
    problemBody,
    problemBullets,
    servicesSubheading,
    services,
    videoHeading,
    videoCaption,
    showVideoSection = true,
    formEmbed,
    processSteps,
    testimonials,
    faqs,
    finalCtaHeading,
    finalCtaBullets,
    finalCtaLabel,
    bottomStrip,
    positiveProblemBullets = false,
    caseStudy,
  } = config;

  const heroCtaTarget = heroCtaAnchorId ?? formAnchorId;

  return (
    <div className="overflow-hidden">
      <section className="section-dark pt-24 md:pt-32 pb-8 md:pb-12 relative overflow-hidden">
        <HeroBackdrop />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <ScrollReveal instant className="lg:col-span-6">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                {heroEyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] lg:leading-tight font-heading font-extrabold text-section-dark-foreground mb-4 max-w-2xl">
                {heroHeadline}
              </h1>
              <p className="text-hero-muted text-base md:text-lg mb-5 md:mb-6 max-w-xl">{heroSubheading}</p>

              <div className="border border-gold/30 bg-primary/30 rounded-lg p-4 mb-6">
                <p className="text-section-dark-foreground leading-relaxed text-sm md:text-base">{alertBox}</p>
              </div>

              <ul className="grid gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mb-8">
                {heroBullets.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-hero-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              <a href={`#${heroCtaTarget}`}>
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  {heroCtaLabel} <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </ScrollReveal>

            <ScrollReveal instant className="lg:col-span-6">
              <div
                id={formAnchorId}
                className="bg-card text-card-foreground rounded-xl border border-border shadow-xl p-4 md:p-5 max-w-[800px] lg:ml-auto scroll-mt-28"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-1">{heroFormTitle}</h2>
                <p className="text-muted-foreground text-sm mb-3">{heroFormSubtitle}</p>

                {formEmbed ? (
                  <GhlFormEmbed
                    src={formEmbed.src}
                    title={formEmbed.title}
                    iframeId={formEmbed.iframeId}
                    formName={formEmbed.formName}
                    formId={formEmbed.formId}
                    phoneDisplay={LANDLINE_DISPLAY}
                    phoneHref={`tel:${LANDLINE_TEL}`}
                    minHeightClassName={formEmbed.minHeightClassName ?? "min-h-[470px]"}
                    iframeHeight={formEmbed.iframeHeight ?? "502px"}
                    embedScriptSrc={formEmbed.embedScriptSrc}
                    deferLoad={formEmbed.deferLoad}
                  />
                ) : (
                  <>
                    {/* GHL FORM EMBED HERE */}
                    <div className="min-h-[470px]" aria-hidden="true" />
                  </>
                )}

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-gold font-heading font-extrabold text-2xl md:text-3xl">{stat.value}</p>
                <p className="text-hero-muted uppercase tracking-wider text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${LANDING_SECTION} bg-background content-auto`}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {valueCards.map((card) => (
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

      <section className={`${LANDING_SECTION} bg-secondary content-auto`}>
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-4">
              {problemHeading}
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-10">{problemBody}</p>
          </ScrollReveal>
          <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {problemBullets.map((bullet) => (
              <ScrollReveal key={bullet}>
                <li className="flex items-start gap-2.5 bg-card border border-border rounded-lg p-4 list-none">
                  {positiveProblemBullets ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <span className="text-muted-foreground leading-relaxed text-sm">{bullet}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${LANDING_SECTION} bg-background content-auto`}>
        <div className="container">
          <ScrollReveal>
            {servicesSubheading && (
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3 text-center">
                {servicesSubheading}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Our Services
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <ScrollReveal key={service.title}>
                <div className="bg-card rounded-lg border border-border p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <service.icon className="text-gold w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">{service.title}</h3>
                  {service.subtitle && (
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.subtitle}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {caseStudy && <CaseStudySection caseStudy={caseStudy} formAnchorId={formAnchorId} />}

      {showVideoSection && videoHeading && (
      <section className={`${LANDING_SECTION} bg-secondary content-auto`}>
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-4">
              {videoHeading}
            </h2>
            {videoCaption && (
              <p className="text-muted-foreground text-center text-lg mb-8">{videoCaption}</p>
            )}
          </ScrollReveal>
          <ScrollReveal>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
              {/* VIDEO EMBED HERE */}
              <p className="text-muted-foreground font-heading font-semibold">Video coming soon</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      )}

      <section className={`section-dark ${LANDING_SECTION} content-auto`}>
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

      <section className={`${LANDING_SECTION} bg-secondary content-auto`}>
        <div className="container max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-12">
              Trusted by Landlords Across London
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 items-stretch">
            {testimonials.map((testimonial) => (
              <ScrollReveal key={testimonial.name + testimonial.role}>
                <div className="bg-card border border-border rounded-lg p-5 md:p-6 lg:p-8 h-full flex flex-col">
                  <Quote className="w-9 h-9 md:w-10 md:h-10 text-gold mb-3 md:mb-4 shrink-0" />
                  <p className="text-foreground italic leading-relaxed mb-4 md:mb-6 text-sm md:text-base flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
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

      <section className={`${LANDING_SECTION} bg-background content-auto`}>
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
                  <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline py-5">
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

      <section className={`bg-accent ${LANDING_SECTION} content-auto`}>
        <div className="container text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              {finalCtaHeading}
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              {finalCtaBullets.join(" · ")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`#${formAnchorId}`} className="w-full sm:w-auto">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  {finalCtaLabel} <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={`tel:${LANDLINE_TEL}`} className="w-full sm:w-auto">
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
          {bottomStrip}
        </div>
      </section>
    </div>
  );
};

export default ServiceLandingPage;
