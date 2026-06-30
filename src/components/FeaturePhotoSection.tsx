import ScrollReveal from "@/components/ScrollReveal";
import OptimizedImage from "@/components/OptimizedImage";

type FeaturePhotoSectionProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  src: string;
  alt: string;
  reverse?: boolean;
  mobileOptimizations?: boolean;
  anchorId?: string;
};

const FeaturePhotoSection = ({
  eyebrow,
  heading,
  body,
  src,
  alt,
  reverse,
  mobileOptimizations,
  anchorId,
}: FeaturePhotoSectionProps) => (
  <section
    id={anchorId}
    className={`py-10 md:py-14 bg-background content-auto${anchorId ? " scroll-mt-32 md:scroll-mt-36" : ""}`}
  >
    <div className="container max-w-6xl">
      <div
        className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <ScrollReveal>
          {eyebrow && (
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
              {eyebrow}
            </p>
          )}
          <h2
            className={`font-heading font-extrabold text-foreground mb-3 ${
              mobileOptimizations ? "text-xl md:text-3xl" : "text-2xl md:text-3xl"
            }`}
          >
            {heading}
          </h2>
          {body && (
            <p
              className={`text-muted-foreground leading-relaxed ${
                mobileOptimizations ? "text-sm md:text-base" : "text-base"
              }`}
            >
              {body}
            </p>
          )}
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-lg border border-border overflow-hidden shadow-md">
            <OptimizedImage
              src={src}
              alt={alt}
              width={1200}
              height={800}
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
);

export default FeaturePhotoSection;
