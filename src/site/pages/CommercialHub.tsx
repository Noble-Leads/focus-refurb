import {
  ArrowRight,
  Building2,
  Briefcase,
  Clock,
  HardHat,
  Home,
  Landmark,
  MapPin,
  Shield,
  Store,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/OptimizedImage";
import HeroBackdrop from "@/components/HeroBackdrop";
import BrandPattern from "@/components/BrandPattern";
import ScrollReveal from "@/components/ScrollReveal";
import { commercialAudiences, commercialServices } from "@/lib/navigation";

const PHONE = "02046340020";

const trustSignals = [
  { icon: Shield, title: "25+ Years Experience", desc: "Established in 2000. Family-run, professionally operated across London and the South East." },
  { icon: MapPin, title: "London & South East", desc: "Central London, South London, Kent and surrounding areas — with responsive callouts." },
  { icon: Clock, title: "Approved & Accredited", desc: "Approved fire door installers. Certification and guarantees on completed works." },
];

const audienceIcons = [Home, Building2, Landmark, HardHat, Briefcase, Store];

const CommercialHub = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/commercial/office-building.png"
            alt="Modern commercial office building in London"
            width={1024}
            height={682}
            sizes="100vw"
            loading="eager"
            decoding="async"
            pictureClassName="block w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <BrandPattern variant="dark" className="z-[1] opacity-50" />
        </div>
        <div className="container relative z-10 pt-below-header pb-16 md:pb-24 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-4">
              Commercial Contractors
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-hero-foreground mb-6">
              Commercial Building & Property Maintenance in London
            </h1>
            <p className="text-lg md:text-xl text-hero-muted mb-10 max-w-3xl mx-auto">
              From fire door compliance and planned maintenance to full refurbishments and site clearance — one multi-trade team for landlords, agents, councils, contractors and facilities managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/commercial-enquiries">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Make a Commercial Enquiry
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

      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Who We Work With</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Built for Professional Property Clients
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We work with organisations that need a reliable contractor — not just for one job, but across portfolios and programmes of work.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialAudiences.map((item, i) => {
              const Icon = audienceIcons[i] ?? Building2;
              return (
                <ScrollReveal key={item.label} delay={i * 0.08}>
                  <a href={item.path} className="block h-full group">
                    <Card className="h-full border-border/50 transition-shadow group-hover:shadow-lg group-hover:border-gold/30">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {item.label}
                        </h3>
                        <span className="inline-flex items-center text-sm font-semibold text-accent uppercase tracking-wider">
                          Enquire <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-background overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Commercial Services</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                What We Do for Commercial Clients
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {commercialServices.map((service, i) => (
              <ScrollReveal key={service.label} delay={i * 0.06}>
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
            <p className="text-center text-muted-foreground mt-8">
              Need site clearance?{" "}
              <a href="/rubbish-removal" className="text-accent font-semibold hover:underline">
                Rubbish removal is a separate service
              </a>{" "}
              with its own team and pricing.
            </p>
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
        <HeroBackdrop />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground mb-4">
              Ready to Discuss a Commercial Project?
            </h2>
            <p className="text-lg text-hero-muted mb-8">
              Tell us what you need — maintenance contract, refurbishment, fire doors or a one-off job. We typically respond within 24 hours.
            </p>
            <a href="/commercial-enquiries">
              <Button variant="gold" size="xl">
                Make a Commercial Enquiry
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CommercialHub;
