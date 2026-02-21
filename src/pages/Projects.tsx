import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const projects = [
  { image: "/images/project-1.jpg", title: "Full Property Restoration", location: "South London", category: "Restoration" },
  { image: "/images/service-refurbishment.jpg", title: "Complete Home Refurbishment", location: "Bromley", category: "Refurbishment" },
  { image: "/images/project-3.jpg", title: "Rear Extension Build", location: "Lewisham", category: "Extension" },
  { image: "/images/project-4.jpg", title: "Maintenance & Repairs", location: "Greenwich", category: "Maintenance" },
  { image: "/images/project-5.jpg", title: "Loft Conversion", location: "Croydon", category: "Loft Conversion" },
  { image: "/images/project-6.jpg", title: "Luxury Bathroom Installation", location: "Dulwich", category: "Bathrooms" },
  { image: "/images/project-7.jpg", title: "Modern Kitchen Fit-Out", location: "Penge", category: "Kitchens" },
  { image: "/images/service-brickwork.jpg", title: "Brickwork Restoration", location: "Beckenham", category: "Brickwork" },
  { image: "/images/service-roofing.jpg", title: "Full Roof Replacement", location: "Sidcup", category: "Roofing" },
  { image: "/images/service-render.jpg", title: "EWI Render System", location: "Eltham", category: "Render" },
  { image: "/images/service-painting.jpg", title: "Interior Decoration", location: "Catford", category: "Decorating" },
  { image: "/images/service-firedoors.jpg", title: "Fire Door Installation", location: "Woolwich", category: "Fire Doors" },
];

const ProjectsPage = () => {
  return (
    <div>
      <section className="section-dark pt-36 pb-20">
        <div className="container">
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
                <div className="group relative rounded-lg overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="service-card-overlay absolute inset-0" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-accent-foreground text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-heading font-bold text-section-dark-foreground">{project.title}</h3>
                    <p className="text-hero-muted text-sm">{project.location}</p>
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
              Have a Project in Mind?
            </h2>
            <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can bring your vision to life. Get in touch for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">Get a Free Quote <ArrowRight className="w-5 h-5" /></Button>
              </Link>
              <a href="tel:02083090437">
                <Button variant="hero-outline" size="xl"><Phone className="w-5 h-5" /> 020 8309 0437</Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
