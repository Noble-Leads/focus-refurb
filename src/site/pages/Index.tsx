import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GeometricDecor from "@/components/GeometricDecor";
import { Phone, Shield, Clock, Award, ChevronRight, Star, ArrowRight, Building2, Users, Briefcase, Home } from "lucide-react";

const services = [
  { title: "Fire Door Installation", desc: "Approved fire door installers ensuring full compliance with current safety regulations. Trusted by landlords, agents and facilities managers.", image: "/images/service-firedoors.jpg", featured: true },
  { title: "Building Maintenance Contracts", desc: "Reliable 24/7 building maintenance to keep your properties safe, functional and well-presented.", image: "/images/service-maintenance.jpg" },
  { title: "Full Refurbishment & Restoration", desc: "Complete property transformations and restorations — structural work, plastering, flooring, electrics, plumbing and decorating.", image: "/images/service-refurbishment.jpg" },
  { title: "Extensions & New Builds", desc: "Expertly designed and built extensions and new builds managed from foundations to final finishes.", image: "/images/service-extensions.jpg" },
  { title: "Loft Conversions", desc: "Transform unused roof space into stunning bedrooms, offices or living areas.", image: "/images/service-loft-new.png" },
  { title: "Roofing", desc: "Expert roofing services from repairs to complete installations. Durable, weather-resistant solutions.", image: "/images/service-roofing.jpg" },
  { title: "EWI & Render", desc: "Specialist External Wall Insulation with high-performance silicone render systems.", image: "/images/service-render-new.png" },
  { title: "Painting & Decorating", desc: "Flawless interior and exterior finishes with careful preparation and attention to detail.", image: "/images/service-painting.jpg" },
  { title: "Bathrooms & Kitchens", desc: "Bespoke bathroom and kitchen installations designed for comfort, functionality and style.", image: "/images/service-bathrooms.jpg" },
  { title: "Brickwork & Masonry", desc: "Professional brickwork cleaning, repointing and restoration for a refreshed, durable finish.", image: "/images/service-brickwork.jpg" },
  { title: "Rubbish Removal", desc: "Fast, reliable site clearance and rubbish removal to keep your project moving.", image: "/images/service-rubbish-removal-new.png" },
  { title: "Summer Houses/Annexes", desc: "Bespoke summer houses/annexes designed and built in as little as 3 weeks. Perfect for home offices, leisure spaces, or adding value to your property.", image: "/images/service-summer-house-new.png" },
];

const stats = [
  { value: "20+", label: "Years Trading", icon: Clock },
  { value: "500+", label: "Projects Completed", icon: Award },
  { value: "98%", label: "Client Retention", icon: Shield },
  { value: "24/7", label: "Emergency Response", icon: Phone },
];

const trustBar = [
  "Est. 2000",
  "Company No. 04010469",
  "Approved Fire Door Installers",
  "24hr Emergency Maintenance",
  "Fully Insured",
];

const projects = [
  { image: "/images/project-1.jpg", title: "Victorian Restoration", location: "South London" },
  { image: "/images/project-3.jpg", title: "Rear Extension", location: "Bromley" },
  { image: "/images/project-5.jpg", title: "Loft Conversion", location: "Greenwich" },
  { image: "/images/project-6.jpg", title: "Bathroom Refit", location: "Lewisham" },
];

const testimonials = [
  { name: "Daniel Whitmore", location: "Property Manager, South London", text: "Focus Group have handled maintenance across several of our managed properties for the past two years. Reliable, professional, and always responsive.", rating: 5 },
  { name: "Anita Patel", location: "Facilities Manager, Central London", text: "The fire door installation was completed on time and fully compliant. No issues with the inspection whatsoever.", rating: 5 },
  { name: "James Walker", location: "Landlord, SE London", text: "From quote to completion, the whole process was smooth. Good communication throughout.", rating: 5 },
];

const clientTypes = [
  { icon: Home, title: "Landlords" },
  { icon: Users, title: "Estate Agents & Managing Agents" },
  { icon: Briefcase, title: "Facilities Managers" },
  { icon: Building2, title: "Commercial Property Owners" },
];

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fleet.jpg"
            alt="Focus Group fleet and team"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                Commercial Contractors — Trusted Since 2000
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-hero-foreground leading-tight mb-6">
                Reliable Contractors.{" "}
                <span className="text-gold-gradient">Commercial Results.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-hero-muted mb-8 max-w-lg leading-relaxed">
                Fire door installation, building maintenance contracts, full refurbishments and more — delivered across London and the M25 by a multi-trade team with 20+ years of proven experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a href="/contact">
                  <Button variant="hero" size="xl">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="/projects">
                  <Button variant="hero-outline" size="xl">
                    View Our Work
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="section-dark py-0">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-sm text-hero-muted">
            {trustBar.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <GeometricDecor variant="dots" className="top-10 right-10 text-gold" />
        <GeometricDecor variant="lines" className="bottom-0 left-0 text-muted-foreground" />
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
                Building Excellence, Every Time
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                From concept to completion, we deliver high-quality construction and refurbishment services tailored to your vision.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <a
                  href={service.title === "Fire Door Installation" ? "/fire-door-installation-london" : "/services"}
                  className="group block relative rounded-lg overflow-hidden aspect-[4/5] cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="service-card-overlay absolute inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {service.featured && (
                      <span className="inline-block bg-gold text-section-dark font-heading font-bold text-xs uppercase tracking-wider px-3 py-1 rounded mb-3">
                        Specialist
                      </span>
                    )}
                    <h3 className="text-xl font-heading font-bold text-section-dark-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-hero-muted text-sm leading-relaxed mb-3">{service.desc}</p>
                    <span className="inline-flex items-center text-gold text-sm font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <a href="/services">
                <Button variant="gold-outline" size="lg">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="relative section-dark py-20 md:py-28 overflow-hidden">
        <GeometricDecor variant="grid" className="top-10 left-10 text-hero-foreground" />
        <GeometricDecor variant="corner" className="bottom-10 right-10 text-gold" />
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Who We Work With</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground mb-4">
                Built for Commercial Clients
              </h2>
              <p className="text-hero-muted text-lg max-w-2xl mx-auto">
                We work primarily with commercial clients who need a contractor they can rely on — not just for one job, but long term.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, i) => (
              <ScrollReveal key={client.title} delay={i * 100}>
                <div className="bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg p-8 text-center hover:border-gold/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <client.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-section-dark-foreground">{client.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-background py-0">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="py-10 px-6 text-center">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Our Portfolio</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground">
                  Recent Projects
                </h2>
              </div>
              <a href="/projects">
                <Button variant="gold-outline" size="default">
                  View All Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <div className="group relative rounded-lg overflow-hidden aspect-[3/4]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="service-card-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-heading font-bold text-section-dark-foreground">{project.title}</h3>
                    <p className="text-hero-muted text-sm">{project.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <GeometricDecor variant="dots" className="bottom-10 left-10 text-gold" />
        <GeometricDecor variant="corner" className="top-10 right-10 text-muted-foreground rotate-180" />
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bg-card border border-border rounded-lg p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-heading font-bold text-foreground">— {t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-dark py-20 md:py-28 overflow-hidden">
        <GeometricDecor variant="lines" className="top-0 right-0 text-hero-foreground rotate-90" />
        <GeometricDecor variant="grid" className="bottom-0 left-0 text-gold" />
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-hero-muted text-lg mb-8 max-w-2xl mx-auto">
              Get in touch today for a free, no-obligation quote. Whether it's a full refurbishment or a simple repair, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="tel:02046340020">
                <Button variant="hero-outline" size="xl">
                  <Phone className="w-5 h-5" />
                  020 4634 0020
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
