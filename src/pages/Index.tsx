import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Shield, Clock, Award, ChevronRight, Star, ArrowRight } from "lucide-react";

const services = [
  { title: "Full Refurbishment", desc: "Complete property transformations from top to bottom, delivering modern, functional spaces.", image: "/images/service-refurbishment.jpg", slug: "refurbishment" },
  { title: "Extensions", desc: "Expertly designed and built extensions that seamlessly expand your living space.", image: "/images/service-extensions.jpg", slug: "extensions" },
  { title: "Loft Conversions", desc: "Unlock hidden potential with stylish, functional loft conversions that add real value.", image: "/images/service-loft.jpg", slug: "loft-conversions" },
  { title: "Kitchens & Bathrooms", desc: "Bespoke kitchen and bathroom installations designed for comfort, efficiency and style.", image: "/images/service-bathrooms.jpg", slug: "kitchens-bathrooms" },
  { title: "Roofing & Brickwork", desc: "Expert roofing repairs and brickwork cleaning, repointing and restoration services.", image: "/images/service-roofing.jpg", slug: "roofing" },
  { title: "Fire Door Installation", desc: "Approved fire door installers ensuring full compliance with current safety regulations.", image: "/images/service-firedoors.jpg", slug: "fire-doors" },
];

const stats = [
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Projects Completed", icon: Award },
  { value: "100%", label: "Satisfaction Guarantee", icon: Shield },
  { value: "24/7", label: "Maintenance Service", icon: Phone },
];

const projects = [
  { image: "/images/project-1.jpg", title: "Victorian Restoration", location: "South London" },
  { image: "/images/project-3.jpg", title: "Rear Extension", location: "Bromley" },
  { image: "/images/project-5.jpg", title: "Loft Conversion", location: "Greenwich" },
  { image: "/images/project-6.jpg", title: "Bathroom Refit", location: "Lewisham" },
];

const testimonials = [
  { name: "Sarah M.", location: "Bromley", text: "Focus Refurbishment transformed our dated Victorian terrace into a modern family home. Craig and his team were professional, punctual and the quality of work was outstanding.", rating: 5 },
  { name: "James T.", location: "Greenwich", text: "We had a loft conversion and rear extension done. The team managed the entire project brilliantly — on time and within budget. Highly recommend.", rating: 5 },
  { name: "David & Lisa R.", location: "Lewisham", text: "From start to finish, the communication was excellent. Our full refurbishment exceeded expectations. You can tell they take real pride in their work.", rating: 5 },
];

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fleet.jpg"
            alt="Focus Refurbishment fleet and team"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                London's Trusted Builders Since 2000
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-hero-foreground leading-tight mb-6">
                Exceptional Builds.{" "}
                <span className="text-gold-gradient">Lasting Quality.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-hero-muted mb-8 max-w-lg leading-relaxed">
                Full refurbishments, extensions, loft conversions and more — delivered by a family-run team with over 25 years of craftsmanship across London and the South East.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="hero-outline" size="xl">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="section-dark py-0">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-hero-foreground/10">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="py-10 px-6 text-center">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-heading font-extrabold text-hero-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-hero-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-background">
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
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 80}>
                <Link to="/services" className="group block relative rounded-lg overflow-hidden aspect-[4/5] cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="service-card-overlay absolute inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-heading font-bold text-section-dark-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-hero-muted text-sm leading-relaxed mb-3">{service.desc}</p>
                    <span className="inline-flex items-center text-gold text-sm font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/services">
                <Button variant="gold-outline" size="lg">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
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
              <Link to="/projects">
                <Button variant="gold-outline" size="default">
                  View All Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
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
      <section className="py-20 md:py-28 bg-background">
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
                    <p className="font-heading font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-hero-muted text-lg mb-8 max-w-2xl mx-auto">
              Get in touch today for a free, no-obligation quote. Whether it's a full refurbishment or a simple repair, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:02083090437">
                <Button variant="hero-outline" size="xl">
                  <Phone className="w-5 h-5" />
                  020 8309 0437
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
