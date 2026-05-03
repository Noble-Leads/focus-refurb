import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import HeroBackdrop from "@/components/HeroBackdrop";
import { ArrowRight, Shield, Users, Award, Clock, CheckCircle, Star } from "lucide-react";

const values = [
  { icon: Shield, title: "Quality Guaranteed", desc: "Every project backed by our craftsmanship guarantee and professional certifications." },
  { icon: Users, title: "Family-Run", desc: "A close-knit, dedicated team that treats every project as if it were our own home." },
  { icon: Award, title: "Fully Qualified", desc: "Skilled tradespeople with qualifications in carpentry, fire doors, gas and electrics." },
  { icon: Clock, title: "On Time, On Budget", desc: "Clear communication, honest pricing and reliable project timelines you can count on." },
];

const testimonials = [
  {
    text: "Focus Group have handled maintenance across several of our managed properties. Reliable, professional, and always responsive.",
    name: "Daniel Whitmore",
    role: "Property Manager",
  },
  {
    text: "The fire door installation was completed on time and fully compliant. The paperwork was ready same day.",
    name: "Anita Patel",
    role: "Facilities Manager",
  },
];

const AboutPage = () => {
  return (
    <div>
      <section className="section-dark pt-36 pb-20 relative overflow-hidden">
        <HeroBackdrop />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-section-dark-foreground mb-4">
              Building Trust Since 2000
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl">
              A family-run business delivering exceptional refurbishment and construction services across London and the South East for over 20 years.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/team-vans.png"
                    alt="Focus Refurbishment vans"
                    width={1200}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">
                  A Family Business Built on Craftsmanship
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Focus Refurbishment Ltd was established in 2000 by Craig Hilder with a simple mission: to deliver honest, high-quality building work that homeowners can trust. What started as a small family operation has grown into one of London's most respected refurbishment and construction companies.
                  </p>
                  <p>
                    Under Craig's leadership as CEO, alongside Company Director Paula Hilder, the business has completed hundreds of successful projects — from complete property transformations to precision fire door installations. Our reputation is built on clear communication, expert craftsmanship and results that exceed expectations.
                  </p>
                  <p>
                    We believe that great build quality makes all the difference. Every member of our team shares a commitment to precision, reliability and the kind of finish you'll be proud to call home.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Carpentry & Joinery", "Gas & Electrics", "Fire Door Certified", "Full Project Management"].map((q) => (
                    <div key={q} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                      {q}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-20">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground">
                What Sets Us Apart
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-section-dark-foreground mb-2">{v.title}</h3>
                  <p className="text-hero-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Our Leadership</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
                The People Behind Focus Group
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-lg p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-gold/20">
                    <img
                      src="/images/craig-headshot.png"
                      alt="Craig Hilder"
                      width={512}
                      height={512}
                      sizes="128px"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Craig Hilder</h3>
                    <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">Chief Executive Officer</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Craig leads Focus Refurbishment with hands-on expertise in construction, renovation and project management. His commitment to quality and customer satisfaction drives every project the company undertakes.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div><strong className="text-foreground">Paula Hilder</strong> — Company Director</div>
                  <div><strong className="text-foreground">Amber Hilder</strong> — Office & Administration</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 100}>
                <div className="bg-card border border-border rounded-lg p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed flex-1 mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-heading font-bold text-foreground">— {testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">
              Ready to start your project? Get in touch with our team for a free consultation and quote.
            </p>
            <a href="/contact">
              <Button variant="hero" size="xl">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
