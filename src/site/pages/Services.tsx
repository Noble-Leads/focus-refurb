import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";

const allServices = [
  { title: "Fire Door Installation", desc: "As approved fire door installers, we supply and fit fully compliant fire doors meeting current safety regulations, ensuring maximum protection and peace of mind.", image: "/images/service-firedoors.jpg", featured: true },
  { title: "Building Maintenance Contracts", desc: "Reliable 24/7 building maintenance to keep your property safe, functional and well-presented. We handle repairs, inspections and preventative upkeep.", image: "/images/service-maintenance.jpg" },
  { title: "Full Refurbishment & Restoration", desc: "Complete property transformations and restorations from planning through to flawless completion. We handle every aspect — structural work, plastering, flooring, electrics, plumbing and decorating.", image: "/images/service-refurbishment.jpg" },
  { title: "Extensions & New Builds", desc: "Expertly designed and built extensions and new builds managed from foundations to final finishes. Expert craftsmanship and meticulous attention to detail.", image: "/images/service-extensions.jpg" },
  { title: "Loft Conversions", desc: "Transform unused roof space into a stunning bedroom, office or living area. We handle planning, structural engineering, building regs and the complete build.", image: "/images/service-loft-new.png" },
  { title: "Roofing", desc: "Expert roofing services from repairs to complete installations. Durable, weather-resistant solutions built to protect your property for years to come.", image: "/images/service-roofing.jpg" },
  { title: "EWI & Render", desc: "Specialist External Wall Insulation with high-performance silicone render systems. Improving energy efficiency while delivering a durable, modern finish.", image: "/images/service-render.jpg" },
  { title: "Painting & Decorating", desc: "Flawless interior and exterior finishes that transform your space. Careful preparation and attention to detail for results that stand the test of time.", image: "/images/service-painting.jpg" },
  { title: "Bathrooms & Kitchens", desc: "Bespoke bathroom and kitchen installations from layout and plumbing to fixtures and finishing. Designed for comfort, functionality and style.", image: "/images/service-bathrooms.jpg" },
  { title: "Brickwork & Masonry", desc: "Professional brickwork cleaning, repointing and restoration. We remove dirt and stains, repair damage and apply durable finishes for a refreshed look.", image: "/images/service-brickwork.jpg" },
  { title: "Rubbish Removal", desc: "Fast, reliable site clearance and rubbish removal. We handle waste responsibly so your project stays clean and on schedule.", image: "/images/service-refurbishment.jpg" },
  { title: "Summer Houses & Garden Rooms", desc: "Bespoke summer houses designed and built in as little as 3 weeks. Perfect for home offices, leisure spaces, or adding value to your property.", image: "/images/service-extensions.jpg" },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-dark pt-36 pb-20">
        <div className="container">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-section-dark-foreground mb-4">
              Comprehensive Building Services
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl">
              From fire door installations to full refurbishments, we deliver the complete range of construction and maintenance services across London and the M25.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 60}>
                <div className="group flex flex-col sm:flex-row gap-6 bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="sm:w-48 sm:min-h-[200px] shrink-0 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {service.featured && (
                      <span className="absolute top-3 left-3 bg-gold text-section-dark font-heading font-bold text-xs uppercase tracking-wider px-3 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                    <a href={service.title === "Fire Door Installation" ? "/fire-door-installation-london" : "/contact"} className="inline-flex items-center text-gold text-sm font-semibold uppercase tracking-wider hover:gap-2 transition-all">
                      Get a Quote <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground mb-6">
              Need a Bespoke Solution?
            </h2>
            <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">
              Every project is unique. Contact us to discuss your specific requirements and get a tailored quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="tel:02046340020">
                <Button variant="hero-outline" size="xl">
                  <Phone className="w-5 h-5" /> Call Us
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
