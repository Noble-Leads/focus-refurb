import { ArrowRight, CheckCircle2 } from "lucide-react";
import VimeoEmbed from "@/components/VimeoEmbed";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/caseStudies";

type CaseStudyBlockProps = {
  caseStudy: CaseStudy;
  /** Flip video/text on desktop for alternating layout */
  reverse?: boolean;
};

const CaseStudyBlock = ({ caseStudy, reverse = false }: CaseStudyBlockProps) => {
  return (
    <article className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
      <div
        className={`w-full max-w-sm mx-auto md:max-w-none md:mx-0 rounded-lg overflow-hidden border border-border shadow-md [content-visibility:visible] ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <VimeoEmbed videoId={caseStudy.vimeoVideoId} title={caseStudy.iframeTitle} />
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
          {caseStudy.label}
        </p>
        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-2">
          {caseStudy.title}
        </h2>
        {caseStudy.location && (
          <p className="text-muted-foreground text-sm mb-4">{caseStudy.location}</p>
        )}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
          {caseStudy.intro}
        </p>
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
          <div className="bg-card border border-border rounded-lg p-5 mb-6">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {caseStudy.scopeNote}
            </p>
          </div>
        )}
        {caseStudy.quote && (
          <blockquote className="border-l-4 border-gold pl-5 mb-6">
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
        <a href="/contact">
          <Button variant="gold" size="lg" className="w-full sm:w-auto">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </article>
  );
};

export default CaseStudyBlock;
