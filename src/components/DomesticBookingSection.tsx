import { CalendarCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GhlBookingEmbed from "@/components/GhlBookingEmbed";
import { domesticBookingDefaults, domesticBookingEmbed } from "@/lib/domesticBookingEmbed";

type DomesticBookingSectionProps = {
  anchorId?: string;
  heading?: string;
  subheading?: string;
  mobileOptimizations?: boolean;
};

const DomesticBookingSection = ({
  anchorId = domesticBookingDefaults.anchorId,
  heading = domesticBookingDefaults.heading,
  subheading = domesticBookingDefaults.subheading,
  mobileOptimizations,
}: DomesticBookingSectionProps) => (
  <section
    id={anchorId}
    className="scroll-target py-10 md:py-14 bg-secondary scroll-mt-32 md:scroll-mt-36"
  >
    <div className="container max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 mb-4">
            <CalendarCheck className="w-6 h-6 text-gold" aria-hidden="true" />
          </div>
          <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
            Book straight in
          </p>
          <h2
            className={`font-heading font-extrabold text-foreground mb-3 ${
              mobileOptimizations ? "text-xl md:text-3xl" : "text-2xl md:text-3xl"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed ${
              mobileOptimizations ? "text-sm md:text-base" : "text-base"
            }`}
          >
            {subheading}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <GhlBookingEmbed src={`${domesticBookingEmbed.src}?utm_source=domestic-hub`} />
        <p className="text-center text-muted-foreground text-xs sm:text-sm mt-4">
          Prefer to call?{" "}
          <a href="tel:02046340020" className="text-gold font-semibold hover:underline">
            020 4634 0020
          </a>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default DomesticBookingSection;
