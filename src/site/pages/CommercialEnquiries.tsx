import { Shield, Clock, MapPin, Building2, Home, Landmark, HardHat, Briefcase, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GeometricDecor from "@/components/GeometricDecor";
import HeroBackdrop from "@/components/HeroBackdrop";
import ScrollReveal from "@/components/ScrollReveal";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const PHONE = "02046340020";
const EMAIL = "office@focusrefurbishmentltd.com";

const scrollToForm = () => {
  document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
};

const whoWeWorkWith = [
  { icon: Home, title: "Landlords & Property Investors", desc: "Refurbishments, maintenance, void clears and fire compliance between tenancies." },
  { icon: Building2, title: "Estate & Letting Agents", desc: "Fast turnarounds on properties that need work before going back to market." },
  { icon: Landmark, title: "Housing Associations & Councils", desc: "Planned and reactive maintenance, fire door programmes, and large-scale refurbishment contracts." },
  { icon: HardHat, title: "Main Contractors & Developers", desc: "Reliable subbies for refurbishment, groundworks, roofing, rendering and fit-out." },
  { icon: Briefcase, title: "Facilities Management Companies", desc: "Ongoing maintenance contracts and responsive callout services." },
  { icon: Store, title: "Commercial Businesses", desc: "Office fit-outs, strip-outs, waste removal and building upkeep." },
];

const servicesLeft = [
  "Full Refurbishment & Restoration",
  "Extensions & Loft Conversions",
  "New Builds",
  "Roofing",
];

const servicesRight = [
  "Fire Door Supply & Installation",
  "EWI & Render",
  "Planned & Reactive Maintenance",
  "Commercial Waste & Rubbish Removal",
];

const trustSignals = [
  { icon: Shield, title: "25+ Years Experience", desc: "Established in 2000. Family-run, professionally operated." },
  { icon: MapPin, title: "London & South East Coverage", desc: "Central London, South London, South East and surrounding areas." },
  { icon: Clock, title: "Approved & Accredited", desc: "Approved fire door installers. Guarantees and certification provided on completed works." },
];

const CommercialEnquiries = () => {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-section-dark py-24 md:py-32">
        <HeroBackdrop />
        <GeometricDecor variant="dots" />
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-hero-foreground mb-6">
              Commercial Enquiries — Built for Business
            </h1>
            <p className="text-lg md:text-xl text-hero-muted mb-10 max-w-3xl mx-auto">
              Whether you need a full refurbishment, ongoing maintenance, fire door installation, or site clearance — we work with landlords, agents, councils, contractors and property managers across London and the South East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" onClick={scrollToForm}>
                Make an Enquiry
              </Button>
              <a href={`tel:${PHONE}`}>
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Call Us: 020 4634 0020
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
              Who We Work With
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeWorkWith.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 bg-background">
        <GeometricDecor variant="corner" />
        <div className="container relative z-10 max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
              What We Can Help With
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
              <ul className="space-y-3">
                {servicesLeft.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {servicesRight.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-center text-muted-foreground italic">
              Not sure if we cover what you need? Just ask — if we can't help, we'll tell you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-14 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {trustSignals.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
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

      {/* ENQUIRY FORM */}
      <section id="enquiry-form" className="py-12 bg-muted">
        <div className="container max-w-[980px] mx-auto">
          <ScrollReveal>
            <div className="bg-card rounded-xl border border-border p-6 md:p-10 min-h-[600px]">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent text-center mb-3">
                Make a Commercial Enquiry
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                Fill in the form below and we'll come back to you within 24 hours.
              </p>
              <GhlFormEmbed
                src="https://link.nobleleads.uk/widget/form/e6NuUzUMAfN2MKNTqFnI"
                title="FR Site- Commercial"
                iframeId="inline-e6NuUzUMAfN2MKNTqFnI"
                formName="FR Site- Commercial"
                formId="e6NuUzUMAfN2MKNTqFnI"
                phoneDisplay="020 4634 0020"
                phoneHref={`tel:${PHONE}`}
                iframeHeight="800px"
              />
            </div>

            <p className="text-center text-muted-foreground mt-8">
              Prefer to speak to someone? Call us on{" "}
              <a href={`tel:${PHONE}`} className="text-accent font-semibold hover:underline">
                020 4634 0020
              </a>{" "}
              or email{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent font-semibold hover:underline">
                {EMAIL}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-20 bg-section-dark">
        <GeometricDecor variant="lines" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground mb-4">
              Ready to Talk? Let's Get Started.
            </h2>
            <p className="text-lg text-hero-muted mb-8">
              Fast response. No obligation. Serving London and the South East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" onClick={scrollToForm}>
                Make an Enquiry
              </Button>
              <a href={`tel:${PHONE}`}>
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Call 020 4634 0020
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CommercialEnquiries;
