import { ArrowRight, CheckCircle2 } from "lucide-react";
import VimeoEmbed from "@/components/VimeoEmbed";
import { scrollToHref } from "@/lib/scrollToAnchor";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/caseStudies";

type CaseStudyBlockProps = {
  caseStudy: CaseStudy;
  /** Flip video/text on desktop for alternating layout */
  reverse?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  compactOnMobile?: boolean;
};

const CaseStudyBlock = ({
  caseStudy,
  reverse = false,
  ctaHref = "/contact",
  ctaLabel = "Get a Free Quote",
  compactOnMobile = false,
}: CaseStudyBlockProps) => {
  return (
    <article
      className={`grid md:grid-cols-2 items-start ${
        compactOnMobile ? "gap-4 sm:gap-6 md:gap-8 lg:gap-12" : "gap-6 md:gap-8 lg:gap-12"
      }`}
    >
      <div
        className={`w-full max-w-full sm:max-w-sm mx-auto md:max-w-none md:mx-0 rounded-lg overflow-hidden border border-border shadow-md [content-visibility:visible] ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <VimeoEmbed videoId={caseStudy.vimeoVideoId} title={caseStudy.iframeTitle} />
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
          {caseStudy.label}
        </p>
        <h2
          className={`font-heading font-extrabold text-foreground mb-2 ${
            compactOnMobile ? "text-xl sm:text-2xl md:text-3xl" : "text-2xl md:text-3xl"
          }`}
        >
          {caseStudy.title}
        </h2>
        {caseStudy.location && (
          <p className="text-muted-foreground text-sm mb-4">{caseStudy.location}</p>
        )}
        <p
          className={`text-muted-foreground leading-relaxed mb-6 ${
            compactOnMobile ? "text-sm sm:text-base md:text-lg" : "text-base md:text-lg"
          }`}
        >
          {caseStudy.intro}
        </p>
        {caseStudy.bulletsHeading && (
          <h3 className={`font-heading font-bold text-foreground mb-4 ${compactOnMobile ? "text-base md:text-lg" : "text-lg"}`}>
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
          <div
            className={`bg-card border border-border rounded-lg p-5 mb-6 ${
              compactOnMobile ? "hidden md:block" : ""
            }`}
          >
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {caseStudy.scopeNote}
            </p>
          </div>
        )}
        {caseStudy.quote && (
          <blockquote
            className={`border-l-4 border-gold pl-5 mb-6 ${
              compactOnMobile ? "hidden md:block" : ""
            }`}
          >
            <p className="text-foreground italic leading-relaxed text-lg mb-3">
              &ldquo;{caseStudy.quote}&rdquo;
            </p>
            {caseStudy.quoteAttribution && (
              <footer className="text-muted-foreground text-sm font-heading font-semibold">
                — {caseStudy.quoteAttribution}
              </footer>
            )}
          </blockquote>
        )}
        {ctaHref.startsWith("#") ? (
          <Button
            type="button"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollToHref(ctaHref)}
          >
            {ctaLabel} <ArrowRight className="w-5 h-5" />
          </Button>
        ) : (
          <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
            <a href={ctaHref}>
              {ctaLabel} <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        )}
      </div>
    </article>
  );
};

export default CaseStudyBlock;
