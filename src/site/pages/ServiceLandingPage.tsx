import type { LucideIcon } from "lucide-react";
import { AlertTriangle, ArrowRight, CheckCircle2, Phone, Quote, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CaseStudyBlock from "@/components/CaseStudyBlock";
import VimeoEmbed from "@/components/VimeoEmbed";
import type { CaseStudy } from "@/lib/caseStudies";
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
  problemClosing?: string;
  servicesSubheading?: string;
  servicesHeading?: string;
  servicesColumns?: 2 | 3 | 4;
  services: { icon: LucideIcon; title: string; subtitle?: string }[];
  dualVideos?: {
    heading: string;
    subheading: string;
    videos: { vimeoVideoId: string; iframeTitle: string; label: string }[];
  };
  caseStudies?: {
    eyebrow?: string;
    heading: string;
    subheading?: string;
    studies: CaseStudy[];
    ctaHref?: string;
    ctaLabel?: string;
    /** Section id for in-page anchor links (e.g. hero “See our work”) */
    anchorId?: string;
    /** Where to render in page flow — default is after services */
    placement?: "default" | "afterValueCards";
  };
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
    mobileIframeHeight?: string;
    mobileMinHeightClassName?: string;
    embedScriptSrc?: string;
    deferLoad?: boolean;
  };
  /** Shorter hero headline shown below the md breakpoint */
  heroHeadlineMobile?: string;
  mobileOptimizations?: boolean;
  finalCtaHideFormOnMobile?: boolean;
  processSteps: { number: string; title: string; desc: string }[];
  testimonials: { quote: string; name: string; role: string }[];
  faqs: { q: string; a: string }[];
  finalCtaHeading: string;
  finalCtaBullets: string[];
  finalCtaLabel: string;
  finalCtaShowForm?: boolean;
  finalCtaFormTitle?: string;
  finalCtaFormSubtitle?: string;
  finalCtaBulletsAsList?: boolean;
  bottomStrip?: string;
  showBottomStrip?: boolean;
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
    /** Where to render in page flow — default is after services */
    placement?: "default" | "afterValueCards";
  };
};

type ServiceLandingPageProps = {
  config: ServiceLandingConfig;
};

type CaseStudyConfig = NonNullable<ServiceLandingConfig["caseStudy"]>;
type CaseStudiesConfig = NonNullable<ServiceLandingConfig["caseStudies"]>;

const LANDING_SECTION = "py-12 md:py-20";

const CaseStudiesSection = ({
  caseStudies,
  formAnchorId,
  mobileOptimizations,
}: {
  caseStudies: CaseStudiesConfig;
  formAnchorId: string;
  mobileOptimizations: boolean;
}) => {
  const sectionId = caseStudies.anchorId ?? "recent-projects";

  return (
    <section
      id={sectionId}
      className={`${LANDING_SECTION} bg-secondary content-auto scroll-mt-32 md:scroll-mt-36`}
    >
      <div className="container max-w-6xl">
        <ScrollReveal>
          {caseStudies.eyebrow && (
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3 text-center md:text-left">
              {caseStudies.eyebrow}
            </p>
          )}
          <h2
            className={`font-heading font-extrabold text-foreground text-center md:text-left mb-4 ${
              mobileOptimizations ? "text-2xl md:text-4xl" : "text-3xl md:text-4xl"
            }`}
          >
            {caseStudies.heading}
          </h2>
          {caseStudies.subheading && (
            <p
              className={`text-muted-foreground mb-8 md:mb-14 max-w-3xl text-center md:text-left mx-auto md:mx-0 ${
                mobileOptimizations ? "text-base md:text-lg" : "text-lg"
              }`}
            >
              {caseStudies.subheading}
            </p>
          )}
        </ScrollReveal>
        <div className={mobileOptimizations ? "space-y-12 md:space-y-24" : "space-y-16 md:space-y-24"}>
          {caseStudies.studies.map((study, index) => (
            <ScrollReveal key={study.id}>
              <CaseStudyBlock
                caseStudy={study}
                reverse={index % 2 === 1}
                ctaHref={caseStudies.ctaHref ?? `#${formAnchorId}`}
                ctaLabel={caseStudies.ctaLabel ?? "Get a Free Quote"}
                compactOnMobile={mobileOptimizations}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudySection = ({
  caseStudy,
  formAnchorId,
}: {
  caseStudy: CaseStudyConfig;
  formAnchorId: string;
}) => {
  const caseStudyCtaTarget = caseStudy.ctaAnchorId ?? formAnchorId;

  return (
    <section
      id={caseStudy.anchorId}
      className={`${LANDING_SECTION} bg-secondary content-auto scroll-mt-32 md:scroll-mt-36`}
    >
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          <ScrollReveal instant>
            <div className="w-full max-w-full sm:max-w-sm mx-auto md:max-w-none md:mx-0 rounded-lg overflow-hidden border border-border shadow-md [content-visibility:visible]">
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
    heroHeadlineMobile,
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
    problemClosing,
    servicesSubheading,
    servicesHeading = "Our Services",
    servicesColumns,
    services,
    dualVideos,
    caseStudies,
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
    finalCtaShowForm = false,
    finalCtaHideFormOnMobile = false,
    finalCtaFormTitle,
    finalCtaFormSubtitle,
    finalCtaBulletsAsList = false,
    mobileOptimizations = false,
    bottomStrip,
    showBottomStrip = true,
    positiveProblemBullets = false,
    caseStudy,
  } = config;

  const servicesGridCols =
    servicesColumns === 4
      ? mobileOptimizations
        ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-4"
      : servicesColumns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";

  const heroCtaTarget = heroCtaAnchorId ?? formAnchorId;
  const caseStudiesAfterValueCards = caseStudies?.placement === "afterValueCards";
  const caseStudyAfterValueCards = caseStudy?.placement === "afterValueCards";

  return (
    <div className="overflow-x-hidden max-w-full min-w-0">
      <section
        className={`section-dark relative overflow-hidden ${
          mobileOptimizations ? "pt-28 md:pt-32 pb-10 md:pb-12" : "pt-24 md:pt-32 pb-8 md:pb-12"
        }`}
      >
        <HeroBackdrop />
        <div className="container relative z-10 min-w-0 max-w-full">
          <div
            className={`grid lg:grid-cols-12 items-start min-w-0 ${
              mobileOptimizations ? "gap-6 lg:gap-10" : "gap-8 lg:gap-10"
            }`}
          >
            <ScrollReveal instant className="lg:col-span-6 min-w-0 max-w-full">
              <p
                className={`text-gold font-heading font-semibold uppercase text-xs sm:text-sm mb-2 sm:mb-3 ${
                  mobileOptimizations ? "tracking-wide sm:tracking-widest" : "tracking-widest"
                }`}
              >
                {heroEyebrow}
              </p>
              <h1
                className={`font-heading font-extrabold text-section-dark-foreground mb-3 sm:mb-4 max-w-2xl break-words ${
                  mobileOptimizations
                    ? "text-[1.65rem] leading-[1.2] sm:text-3xl md:text-5xl lg:text-[3rem] lg:leading-tight"
                    : "text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] lg:leading-tight"
                }`}
              >
                {heroHeadlineMobile ? (
                  <>
                    <span className="md:hidden">{heroHeadlineMobile}</span>
                    <span className="hidden md:inline">{heroHeadline}</span>
                  </>
                ) : (
                  heroHeadline
                )}
              </h1>
              <p className="text-hero-muted text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 max-w-xl">
                {heroSubheading}
              </p>

              <div
                className={`border border-gold/30 bg-primary/30 rounded-lg mb-5 sm:mb-6 ${
                  mobileOptimizations ? "p-3 sm:p-4" : "p-4"
                }`}
              >
                <p className="text-section-dark-foreground leading-relaxed text-sm md:text-base">{alertBox}</p>
              </div>

              <ul
                className={`grid gap-x-4 gap-y-2 mb-6 sm:mb-8 ${
                  mobileOptimizations
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                }`}
              >
                {heroBullets.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-hero-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              <a href={`#${heroCtaTarget}`} className="block w-full max-w-full min-w-0">
                <Button
                  variant="gold"
                  size="xl"
                  className={`w-full max-w-full min-w-0 ${
                    mobileOptimizations
                      ? "h-auto min-h-14 whitespace-normal px-4 py-3 text-sm leading-snug sm:whitespace-nowrap sm:px-10 sm:text-lg"
                      : "sm:w-auto"
                  }`}
                >
                  {heroCtaLabel} <ArrowRight className="w-5 h-5 shrink-0" />
                </Button>
              </a>
            </ScrollReveal>

            <ScrollReveal instant className="lg:col-span-6 min-w-0 max-w-full">
              <div
                id={formAnchorId}
                className={`bg-card text-card-foreground rounded-xl border border-border shadow-xl p-4 md:p-5 w-full max-w-full min-w-0 lg:max-w-[800px] lg:ml-auto overflow-hidden ${
                  mobileOptimizations ? "scroll-mt-32 md:scroll-mt-28" : "scroll-mt-28"
                }`}
              >
                <h2
                  className={`font-heading font-bold text-foreground mb-1 break-words ${
                    mobileOptimizations ? "text-xl sm:text-2xl" : "text-2xl"
                  }`}
                >
                  {heroFormTitle}
                </h2>
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
                    mobileMinHeightClassName={formEmbed.mobileMinHeightClassName}
                    iframeHeight={formEmbed.iframeHeight ?? "502px"}
                    mobileIframeHeight={formEmbed.mobileIframeHeight}
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

      <section
        className={`bg-section-dark border-t border-b border-hero-foreground/10 ${
          mobileOptimizations ? "py-5 md:py-6" : "py-6"
        }`}
      >
        <div className="container">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 text-center ${
              mobileOptimizations ? "gap-4 md:gap-6" : "gap-6"
            }`}
          >
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p
                  className={`text-gold font-heading font-extrabold ${
                    mobileOptimizations ? "text-xl sm:text-2xl md:text-3xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`text-hero-muted uppercase mt-1 ${
                    mobileOptimizations
                      ? "text-[0.65rem] leading-tight sm:text-xs tracking-wide"
                      : "tracking-wider text-xs"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${LANDING_SECTION} bg-background content-auto`}>
        <div className="container">
          <div className={`grid md:grid-cols-2 ${mobileOptimizations ? "gap-4 md:gap-6" : "gap-6"}`}>
            {valueCards.map((card) => (
              <ScrollReveal key={card.title}>
                <div
                  className={`bg-card rounded-lg border border-border border-t-4 border-t-gold h-full ${
                    mobileOptimizations ? "p-4 md:p-6" : "p-6"
                  }`}
                >
                  <h3
                    className={`font-heading font-bold text-foreground mb-2 md:mb-3 ${
                      mobileOptimizations ? "text-lg md:text-xl" : "text-xl"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-muted-foreground leading-relaxed ${
                      mobileOptimizations ? "text-sm md:text-base" : ""
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {caseStudiesAfterValueCards && caseStudies && (
        <CaseStudiesSection
          caseStudies={caseStudies}
          formAnchorId={formAnchorId}
          mobileOptimizations={mobileOptimizations}
        />
      )}

      {caseStudyAfterValueCards && caseStudy && (
        <CaseStudySection caseStudy={caseStudy} formAnchorId={formAnchorId} />
      )}

      <section className={`${LANDING_SECTION} bg-secondary content-auto`}>
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2
              className={`font-heading font-extrabold text-foreground text-center mb-4 ${
                mobileOptimizations ? "text-2xl md:text-4xl" : "text-3xl md:text-4xl"
              }`}
            >
              {problemHeading}
            </h2>
            <p
              className={`text-muted-foreground text-center mb-8 md:mb-10 ${
                mobileOptimizations ? "text-base md:text-lg px-1" : "text-lg"
              }`}
            >
              {problemBody}
            </p>
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
          {problemClosing && (
            <ScrollReveal>
              <p className="text-muted-foreground text-center text-base md:text-lg mt-10 max-w-3xl mx-auto leading-relaxed">
                {problemClosing}
              </p>
            </ScrollReveal>
          )}
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
            <h2
              className={`font-heading font-extrabold text-foreground text-center ${
                mobileOptimizations ? "text-2xl md:text-4xl mb-8 md:mb-12" : "text-3xl md:text-4xl mb-12"
              }`}
            >
              {servicesHeading}
            </h2>
          </ScrollReveal>
          <div
            className={`grid ${servicesGridCols} max-w-6xl mx-auto ${
              mobileOptimizations ? "gap-3 sm:gap-4 md:gap-6" : "gap-6"
            }`}
          >
            {services.map((service) => (
              <ScrollReveal key={service.title}>
                <div
                  className={`bg-card rounded-lg border border-border h-full hover:shadow-lg transition-shadow ${
                    mobileOptimizations ? "p-3 sm:p-4 md:p-6" : "p-6"
                  }`}
                >
                  <div
                    className={`rounded-lg bg-gold/10 flex items-center justify-center ${
                      mobileOptimizations ? "w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 md:mb-4" : "w-12 h-12 mb-4"
                    }`}
                  >
                    <service.icon
                      className={`text-gold ${mobileOptimizations ? "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" : "w-6 h-6"}`}
                    />
                  </div>
                  <h3
                    className={`font-heading font-bold text-foreground mb-1 ${
                      mobileOptimizations ? "text-sm sm:text-base md:text-lg leading-snug" : "text-lg"
                    }`}
                  >
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.subtitle}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {caseStudy && !caseStudyAfterValueCards && (
        <CaseStudySection caseStudy={caseStudy} formAnchorId={formAnchorId} />
      )}

      {caseStudies && !caseStudiesAfterValueCards && (
        <CaseStudiesSection
          caseStudies={caseStudies}
          formAnchorId={formAnchorId}
          mobileOptimizations={mobileOptimizations}
        />
      )}

      {dualVideos && (
        <section className={`${LANDING_SECTION} bg-secondary content-auto`}>
          <div className="container max-w-6xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground text-center mb-4">
                {dualVideos.heading}
              </h2>
              <p className="text-muted-foreground text-center text-lg mb-8 max-w-3xl mx-auto">
                {dualVideos.subheading}
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {dualVideos.videos.map((video) => (
                <ScrollReveal key={video.label}>
                  <div>
                    <div className="rounded-lg overflow-hidden border border-border shadow-md max-w-sm mx-auto md:max-w-none">
                      <VimeoEmbed videoId={video.vimeoVideoId} title={video.iframeTitle} />
                    </div>
                    <p className="text-foreground font-heading font-semibold text-sm md:text-base text-center mt-4">
                      {video.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <h2
              className={`font-heading font-extrabold text-section-dark-foreground text-center ${
                mobileOptimizations ? "text-2xl md:text-4xl mb-8 md:mb-12" : "text-3xl md:text-4xl mb-12"
              }`}
            >
              Simple Process. Fast Turnaround.
            </h2>
          </ScrollReveal>
          <div
            className={`grid gap-6 ${
              mobileOptimizations ? "grid-cols-2 md:grid-cols-4 md:gap-8" : "md:grid-cols-4 gap-8"
            }`}
          >
            {processSteps.map((step) => (
              <ScrollReveal key={step.number}>
                <div className="text-center">
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full border-2 border-gold text-gold flex items-center justify-center font-heading font-extrabold text-xl">
                    {step.number}
                  </div>
                  <h3
                    className={`text-section-dark-foreground font-heading font-bold mb-2 ${
                      mobileOptimizations ? "text-sm sm:text-base md:text-lg leading-snug" : "text-lg"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-hero-muted leading-relaxed ${
                      mobileOptimizations ? "text-xs sm:text-sm" : "text-sm"
                    }`}
                  >
                    {step.desc}
                  </p>
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
            <Accordion
              type="single"
              collapsible
              className={`bg-card rounded-lg border border-border ${
                mobileOptimizations ? "px-4 md:px-6" : "px-6"
              }`}
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`} className="border-border">
                  <AccordionTrigger
                    className={`text-left font-heading font-bold text-foreground hover:no-underline gap-3 ${
                      mobileOptimizations ? "py-4 text-sm md:text-base md:py-5" : "py-5"
                    }`}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`text-muted-foreground leading-relaxed pb-4 md:pb-5 ${
                      mobileOptimizations ? "text-sm md:text-base" : ""
                    }`}
                  >
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
            {finalCtaBulletsAsList ? (
              <ul className="text-white/85 text-lg mb-8 max-w-2xl mx-auto space-y-2 text-left sm:text-center">
                {finalCtaBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start sm:items-center sm:justify-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 sm:mt-0 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
                {finalCtaBullets.join(" · ")}
              </p>
            )}

            {finalCtaShowForm && (
              <div
                id={`${formAnchorId}-bottom`}
                className={`bg-card text-card-foreground rounded-xl border border-border shadow-xl p-4 md:p-5 w-full max-w-full min-w-0 md:max-w-[800px] mx-auto mb-8 text-left scroll-mt-28 overflow-hidden ${
                  finalCtaHideFormOnMobile ? "hidden md:block" : ""
                }`}
              >
                <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                  {finalCtaFormTitle ?? heroFormTitle}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {finalCtaFormSubtitle ?? heroFormSubtitle}
                </p>

                {formEmbed ? (
                  <GhlFormEmbed
                    src={formEmbed.src}
                    title={formEmbed.title}
                    iframeId={`${formEmbed.iframeId}-bottom`}
                    formName={formEmbed.formName}
                    formId={formEmbed.formId}
                    phoneDisplay={LANDLINE_DISPLAY}
                    phoneHref={`tel:${LANDLINE_TEL}`}
                    minHeightClassName={formEmbed.minHeightClassName ?? "min-h-[470px]"}
                    mobileMinHeightClassName={formEmbed.mobileMinHeightClassName}
                    iframeHeight={formEmbed.iframeHeight ?? "502px"}
                    mobileIframeHeight={formEmbed.mobileIframeHeight}
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
            )}

            <div
              className={`flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 ${
                mobileOptimizations ? "px-1" : ""
              }`}
            >
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

      {showBottomStrip && bottomStrip && (
        <section className="bg-gold/15 py-4 border-t border-gold/30">
          <div className="container text-center text-foreground font-heading font-semibold tracking-wide">
            {bottomStrip}
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceLandingPage;
