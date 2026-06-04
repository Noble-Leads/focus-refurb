import { ArrowRight, CheckCircle2 } from "lucide-react";
import VimeoEmbed from "@/components/VimeoEmbed";
import { Button } from "@/components/ui/button";
import type { ProjectCaseStudy as ProjectCaseStudyType } from "@/lib/projectCaseStudies";

type ProjectCaseStudyProps = {
  study: ProjectCaseStudyType;
  /** Reverse column order on desktop (video right) */
  reverse?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

const ProjectCaseStudy = ({
  study,
  reverse = false,
  ctaHref = "/contact",
  ctaLabel = "Get a Free Quote",
}: ProjectCaseStudyProps) => {
  return (
    <article
      id={study.id}
      className={`grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start scroll-mt-24 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="w-full max-w-sm mx-auto md:max-w-none md:mx-0 rounded-lg overflow-hidden border border-border shadow-md [content-visibility:visible]">
        <VimeoEmbed videoId={study.vimeoVideoId} title={study.iframeTitle} />
      </div>

      <div>
        <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
          {study.label}
        </p>
        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">
          {study.title}
        </h3>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
          {study.intro}
        </p>
        {study.bulletsHeading && (
          <h4 className="font-heading font-bold text-foreground text-lg mb-4">
            {study.bulletsHeading}
          </h4>
        )}
        <ul className="space-y-3 mb-6">
          {study.bullets.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <span className="leading-relaxed text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
        {study.scopeNote && (
          <div className="bg-card border border-border rounded-lg p-5 mb-6">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {study.scopeNote}
            </p>
          </div>
        )}
        {study.quote && (
          <blockquote className="border-l-4 border-gold pl-5 mb-6">
            <p className="text-foreground italic leading-relaxed text-lg mb-3">
              &ldquo;{study.quote}&rdquo;
            </p>
            {study.quoteAttribution && (
              <footer className="text-muted-foreground text-sm font-heading font-semibold">
                — {study.quoteAttribution}
              </footer>
            )}
          </blockquote>
        )}
        <a href={ctaHref}>
          <Button variant="gold" size="xl" className="w-full sm:w-auto">
            {ctaLabel} <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;
