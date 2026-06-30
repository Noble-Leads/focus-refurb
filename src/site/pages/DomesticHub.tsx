import { ArrowRight, Award, Clock, Home, KeyRound, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/OptimizedImage";
import BrandPattern from "@/components/BrandPattern";
import ScrollReveal from "@/components/ScrollReveal";
import DomesticBookingSection from "@/components/DomesticBookingSection";
import { domesticServices } from "@/lib/navigation";

const PHONE = "02046340020";

const trustSignals = [
  { icon: Shield, title: "Quality Guaranteed", desc: "Every project backed by our craftsmanship guarantee and professional certifications." },
  { icon: Award, title: "One Team, Start to Finish", desc: "Design, structural work, kitchens, bathrooms and decorating — managed under one roof." },
  { icon: Clock, title: "On Time, On Budget", desc: "Clear communication, honest pricing and realistic timelines you can plan around." },
];

const audienceDetails = [
  {
    icon: Home,
    title: "Homeowners",
    desc: "Extensions, loft conversions, full refurbishments and upgrades — managed from first visit to final handover.",
    path: "/contact?subject=Domestic%20enquiry",
  },
  {
    icon: KeyRound,
    title: "Residential Landlords",
    desc: "Void refurbishments, compliance works and property upgrades between tenancies — fast turnarounds when you need a property back on the market.",
    path: "/contact?subject=Residential%20landlord%20enquiry",
  },
];

const DomesticHub = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-[70vh] md:min-h-[78vh] lg:min-h-[82vh] flex items-center overflow-x-hidden overflow-y-visible">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/hero-home.png"
            alt="Focus Refurbishment team and branded van at a London apartment development"
            width={1024}
            height={571}
            sizes="100vw"
            loading="eager"
            decoding="async"
            pictureClassName="block w-full h-full"
            className="w-full h-full object-cover object-[center_62%] md:object-[center_78%] lg:object-[center_88%]"
          />
          <div className="hero-overlay absolute inset-0" />
          <BrandPattern variant="dark" className="z-[1] opacity-50" />
        </div>
        <div className="container relative z-10 pt-below-header pb-16 md:pb-24 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-4">
              Domestic Building Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-hero-foreground mb-6">
              Home Extensions, Refurbishments & Renovations in London
            </h1>
            <p className="text-lg md:text-xl text-hero-muted mb-10 max-w-3xl mx-auto">
              Whether you are transforming your family home or refurbishing a rental property between tenancies — extensions, loft conversions, kitchens, bathrooms and full renovations delivered by an experienced multi-trade team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book-quote-visit">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Book a Free Quote Visit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={`tel:${PHONE}`}>
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Call 020 4634 0020
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DomesticBookingSection />

      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Who We Work With</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Homeowners & Residential Landlords
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Two types of domestic client, one standard of workmanship — clear quotes, tidy sites and a single point of contact throughout.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {audienceDetails.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <a href={item.path} className="block h-full group">
                  <Card className="h-full border-border/50 transition-shadow group-hover:shadow-lg group-hover:border-gold/30">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                      <span className="inline-flex items-center text-sm font-semibold text-accent uppercase tracking-wider">
                        Get a quote <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Managing a commercial portfolio?{" "}
              <a href="/commercial" className="text-accent font-semibold hover:underline">
                Visit our commercial services
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 bg-background overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Domestic Services</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                What We Do for Homeowners & Landlords
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {domesticServices.map((service, i) => (
              <ScrollReveal key={service.label} delay={i * 0.05}>
                <a
                  href={service.path}
                  className="group flex flex-col rounded-lg border border-border bg-card p-5 hover:border-gold/40 hover:shadow-md transition-all h-full"
                >
                  <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                    {service.label}
                  </h3>
                  {service.description && (
                    <p className="text-sm text-muted-foreground flex-1">{service.description}</p>
                  )}
                  <span className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-accent">
                    Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <a href="/projects">
                <Button variant="gold-outline" size="lg">
                  View Our Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {trustSignals.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-section-dark">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 text-hero-muted text-sm mb-4">
              <MapPin className="w-4 h-4 text-gold" />
              Serving London, Kent and the South East
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-lg text-hero-muted mb-8">
              From a single bathroom refit to a full home transformation — book a visit online or get in touch for a clear, itemised quote.
            </p>
            <a href="#book-quote-visit">
              <Button variant="gold" size="xl">
                Book a Free Quote Visit
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DomesticHub;
