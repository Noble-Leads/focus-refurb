import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import HeroBackdrop from "@/components/HeroBackdrop";
import { ArrowRight } from "lucide-react";

const projects = [
  { image: "/images/project-1.png", title: "Full Property Restoration", location: "South London", category: "Restoration", description: "Complete internal and external restoration of a period property in South London, including structural repairs, replastering and full redecoration throughout." },
  { image: "/images/service-refurbishment-new.png", title: "Complete Home Refurbishment", location: "Bromley", category: "Refurbishment", description: "End-to-end refurbishment of a family home in Bromley, with updated layouts, modern finishes and coordinated multi-trade delivery." },
  { image: "/images/project-3.png", title: "Rear Extension Build", location: "Lewisham", category: "Extension", description: "Single-storey rear extension in Lewisham with knock-through works, kitchen integration and final decorating ready for handover." },
  { image: "/images/project-maintenance-repairs-2.png", title: "Maintenance & Repairs", location: "Greenwich", category: "Maintenance", description: "Planned and reactive maintenance package delivered across a managed property in Greenwich, covering repairs, safety checks and finishing works." },
  { image: "/images/project-loft-conversion.png", title: "Loft Conversion", location: "Croydon", category: "Loft Conversion", description: "Loft conversion in Croydon creating an additional bedroom and shower room, including insulation upgrades and bespoke carpentry." },
  { image: "/images/project-bathroom-installation-2.png", title: "Luxury Bathroom Installation", location: "Dulwich", category: "Bathrooms", description: "High-spec bathroom renovation in Dulwich with full strip-out, new plumbing layouts, premium fittings and tiled feature walls." },
  { image: "/images/project-kitchen-fitout-2.png", title: "Modern Kitchen Fit-Out", location: "Penge", category: "Kitchens", description: "Modern kitchen fit-out in Penge including cabinetry installation, electrical updates, plumbing connections and final finish detailing." },
  { image: "/images/service-brickwork.png", title: "Brickwork Restoration", location: "Beckenham", category: "Brickwork", description: "Brickwork cleaning and repointing project in Beckenham to restore facade condition, improve weather resistance and preserve appearance." },
  { image: "/images/service-roofing.png", title: "Full Roof Replacement", location: "Sidcup", category: "Roofing", description: "Complete roof replacement in Sidcup with upgraded waterproofing, new tile system and associated guttering and flashing works." },
  { image: "/images/service-render-new.png", title: "EWI Render System", location: "Eltham", category: "Render", description: "External wall insulation and render system installed in Eltham to improve thermal performance and deliver a durable modern exterior." },
  { image: "/images/service-painting.png", title: "Interior Decoration", location: "Catford", category: "Decorating", description: "Interior redecoration in Catford across multiple rooms, including surface preparation, repairs and high-quality paint finishes." },
  { image: "/images/service-firedoors.png", title: "Fire Door Installation", location: "Woolwich", category: "Fire Doors", description: "Supply and installation of compliant fire doors in Woolwich with full certification documentation for landlord compliance records." },
];

const ProjectsPage = () => {
  return (
    <div>
      <section className="section-dark pt-36 pb-20 relative overflow-hidden">
        <HeroBackdrop />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Our Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-section-dark-foreground mb-4">
              Projects We're Proud Of
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl">
              Explore a selection of our recent work across London and the South East — from complete refurbishments to precision installations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group rounded-lg overflow-hidden border border-border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-accent-foreground text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.location}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground mb-6">
              Like what you see?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <Button variant="hero" size="xl">Get a Free Quote <ArrowRight className="w-5 h-5" /></Button>
              </a>
              <p className="text-hero-muted text-lg self-center">Or call us: 020 4634 0020</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
