import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export type BeforeAfterPair = {
  label?: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  aspectClassName?: string;
  objectPosition?: string;
};

type BeforeAfterSectionProps = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  pairs: BeforeAfterPair[];
  mobileOptimizations?: boolean;
};

const BeforeAfterSection = ({
  eyebrow,
  heading,
  subheading,
  pairs,
  mobileOptimizations,
}: BeforeAfterSectionProps) => (
  <section className="py-10 md:py-14 bg-background">
    <div className="container max-w-4xl">
      <ScrollReveal>
        {eyebrow && (
          <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2 text-center md:text-left">
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-heading font-extrabold text-foreground text-center md:text-left mb-3 ${
            mobileOptimizations ? "text-xl md:text-3xl" : "text-2xl md:text-3xl"
          }`}
        >
          {heading}
        </h2>
        {subheading && (
          <p
            className={`text-muted-foreground mb-8 md:mb-10 max-w-2xl text-center md:text-left mx-auto md:mx-0 ${
              mobileOptimizations ? "text-sm md:text-base" : "text-base"
            }`}
          >
            {subheading}
          </p>
        )}
      </ScrollReveal>

      <div className="space-y-10 md:space-y-14">
        {pairs.map((pair) => (
          <div key={pair.label ?? pair.before.src}>
            {pair.label && (
              <p className="text-sm font-heading font-semibold text-foreground mb-4 text-center md:text-left">
                {pair.label}
              </p>
            )}
            <BeforeAfterSlider
              before={pair.before}
              after={pair.after}
              aspectClassName={pair.aspectClassName}
              objectPosition={pair.objectPosition}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
