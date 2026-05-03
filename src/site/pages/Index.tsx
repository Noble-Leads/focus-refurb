import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GeometricDecor from "@/components/GeometricDecor";
import { Phone, Shield, Clock, Award, ChevronRight, Star, ArrowRight, Building2, Users, Briefcase, Home } from "lucide-react";

const services = [
  { title: "Fire Door Installation", desc: "Approved fire door installers ensuring full compliance with current safety regulations. Trusted by landlords, agents and facilities managers.", image: "/images/service-firedoors.png", featured: true },
  { title: "Building Maintenance Contracts", desc: "Reliable 24/7 building maintenance to keep your properties safe, functional and well-presented.", image: "/images/service-maintenance.png" },
  { title: "Full Refurbishment & Restoration", desc: "Complete property transformations and restorations — structural work, plastering, flooring, electrics, plumbing and decorating.", image: "/images/service-refurbishment-new.png" },
  { title: "Extensions & New Builds", desc: "Expertly designed and built extensions and new builds managed from foundations to final finishes.", image: "/images/service-extensions.png" },
  { title: "Loft Conversions", desc: "Transform unused roof space into stunning bedrooms, offices or living areas.", image: "/images/service-loft-new.png" },
  { title: "Roofing", desc: "Expert roofing services from repairs to complete installations. Durable, weather-resistant solutions.", image: "/images/service-roofing.png" },
  { title: "EWI & Render", desc: "Specialist External Wall Insulation with high-performance silicone render systems.", image: "/images/service-render-new.png" },
  { title: "Painting & Decorating", desc: "Flawless interior and exterior finishes with careful preparation and attention to detail.", image: "/images/service-painting.png" },
  { title: "Bathrooms & Kitchens", desc: "Bespoke bathroom and kitchen installations designed for comfort, functionality and style.", image: "/images/service-bathrooms.png" },
  { title: "Brickwork & Masonry", desc: "Professional brickwork cleaning, repointing and restoration for a refreshed, durable finish.", image: "/images/service-brickwork.png" },
  { title: "Rubbish Removal", desc: "Fast, reliable site clearance and rubbish removal to keep your project moving.", image: "/images/service-rubbish-removal-new.png" },
  { title: "Summer Houses/Annexes", desc: "Bespoke summer houses/annexes designed and built in as little as 3 weeks. Perfect for home offices, leisure spaces, or adding value to your property.", image: "/images/service-summer-house-new.png" },
];

const stats = [
  { value: "25+", label: "Years Trading", icon: Clock },
  { value: "500+", label: "Projects Completed", icon: Award },
  { value: "98%", label: "Client Retention", icon: Shield },
  { value: "24/7", label: "Emergency Response", icon: Phone },
];

const GOOGLE_BUSINESS_PROFILE_URL = "https://share.google/v61ZDUjMnjwuyD1zi";

const trustBar = [
  "Est. 2000",
  "Company No. 04010469",
  "Approved Fire Door Installers",
  "24hr Emergency Maintenance",
  "Fully Insured",
];

const projects = [
  { image: "/images/project-1.png", title: "Victorian Restoration", location: "South London" },
  { image: "/images/project-3.png", title: "Rear Extension", location: "Bromley" },
  { image: "/images/project-loft-conversion.png", title: "Loft Conversion", location: "Greenwich" },
  { image: "/images/project-bathroom-refit.png", title: "Bathroom Refit", location: "Lewisham" },
];

const testimonials = [
  { name: "Daniel Whitmore", location: "Property Manager, South London", text: "Focus Group have handled maintenance across several of our managed properties for the past two years. Reliable, professional, and always responsive.", rating: 5 },
  { name: "Anita Patel", location: "Facilities Manager, Central London", text: "The fire door installation was completed on time and fully compliant. No issues with the inspection whatsoever.", rating: 5 },
  { name: "James Walker", location: "Landlord, SE London", text: "From quote to completion, the whole process was smooth. Good communication throughout.", rating: 5 },
  { name: "Bianca", location: "Local Guide · London", text: "Excellent work, fast and efficient, really helpful and polite guys with a can-do attitude. They helped me out in a pinch. I recommend!", rating: 5, source: "google" },
  {
    name: "Landlord",
    location: "London",
    text: "Had Craig and his team at Focus install fire doors for me. The work was spot on — they know what they're doing, kept tidy and got it all done without any hassle, which is rare from contractors in London. The relevant paperwork was provided too, which is great. Will be using them again. Highly recommend if you're a landlord needing an efficient and professional service.",
    rating: 5,
    source: "google",
  },
];

type TestimonialEntry = (typeof testimonials)[number];

function TestimonialCard({ t }: { t: TestimonialEntry }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-5 xl:p-6 flex flex-col h-full min-w-0 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-gold/30 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none">
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex gap-1 shrink-0">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>
        {t.source === "google" && (
          <a
            href={GOOGLE_BUSINESS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5 hover:bg-muted/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring shrink-0"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google review
          </a>
        )}
      </div>
      <p className="text-foreground text-sm leading-relaxed xl:text-[13px] xl:leading-snug flex-1 mb-4 md:mb-5">"{t.text}"</p>
      <div>
        <p className="font-heading font-bold text-foreground">— {t.name}</p>
        <p className="text-sm text-muted-foreground">{t.location}</p>
      </div>
    </div>
  );
}

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
      <section className="relative min-h-[86vh] md:min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fleet.png"
            alt="Focus Group fleet and team"
            width={1024}
            height={768}
            sizes="100vw"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container relative z-10 pt-28 md:pt-30 pb-14 md:pb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                Commercial Contractors — Trusted Since 2000
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-hero-foreground leading-tight mb-6">
                London's Trusted Commercial Contractors
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-hero-muted mb-6 md:mb-8 max-w-lg leading-relaxed">
                Fire door installation, building maintenance contracts, full refurbishments and more — delivered across London and the M25 by a multi-trade team with 25+ years of proven experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
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
                <p className="text-sm text-hero-muted">
                  We typically respond within 2 hours - Mon-Sat, 8am-5pm
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <div className="mt-5 w-full max-w-xl rounded-md bg-hero-foreground/10 border border-hero-foreground/20 px-4 py-2 text-xs text-hero-muted">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <a
                    href={GOOGLE_BUSINESS_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-foreground"
                  >
                    <span aria-hidden="true">⭐ </span>
                    5.0 Google rating
                  </a>
                  <span>
                    <span aria-hidden="true">🏆 </span>
                    500+ projects completed
                  </span>
                  <span>
                    <span aria-hidden="true">✅ </span>
                    Approved fire door installers
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="section-dark py-0">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 md:py-6 text-xs md:text-sm text-hero-muted">
            {trustBar.map((item, i) => (
              <span key={item} className={`flex items-center gap-2 ${i > 2 ? "hidden sm:inline-flex" : ""}`}>
                <Shield className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
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
                    width={800}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
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
                    <p className="hidden sm:block text-hero-muted text-sm leading-relaxed mb-3">{service.desc}</p>
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
                    width={900}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
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
      <section className="relative py-20 md:py-28 bg-background overflow-hidden" aria-labelledby="testimonials-heading">
        <GeometricDecor variant="dots" className="bottom-10 left-10 text-gold" />
        <GeometricDecor variant="corner" className="top-10 right-10 text-muted-foreground rotate-180" />
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</p>
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6 items-stretch">
            {testimonials.map((t, i) => (
              <ScrollReveal key={`${t.name}-${i}`} delay={i * 85}>
                <TestimonialCard t={t} />
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
