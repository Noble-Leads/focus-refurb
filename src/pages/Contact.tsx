import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", values: ["020 8309 0437", "07778 737653"], links: ["tel:02083090437", "tel:07778737653"] },
  { icon: Mail, label: "Email", values: ["office@focusrefurbishmentltd.com"], links: ["mailto:office@focusrefurbishmentltd.com"] },
  { icon: MapPin, label: "Service Areas", values: ["Central London, South London & the South East"], links: [] },
  { icon: Clock, label: "Working Hours", values: ["Mon–Sat: 7:00am – 6:00pm", "24/7 Emergency Maintenance"], links: [] },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent",
      description: "Thank you! We'll be in touch within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div>
      <section className="section-dark pt-36 pb-20">
        <div className="container">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-section-dark-foreground mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl">
              Tell us about your project and we'll get back to you within 24 hours with a detailed, no-obligation quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Request a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                        <Input
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                        <Input
                          required
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                        <Input
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Service Required</label>
                        <Input
                          placeholder="e.g. Loft Conversion"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Project Details *</label>
                      <Textarea
                        required
                        rows={5}
                        placeholder="Tell us about your project — location, scope, timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button variant="gold" size="lg" type="submit" className="w-full sm:w-auto">
                      Send Quote Request <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-1">{item.label}</h3>
                        {item.values.map((val, i) => (
                          <p key={val} className="text-muted-foreground text-sm">
                            {item.links[i] ? (
                              <a href={item.links[i]} className="hover:text-gold transition-colors">{val}</a>
                            ) : val}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="bg-section-dark rounded-lg p-8 mt-8">
                    <h3 className="font-heading font-bold text-section-dark-foreground mb-3">Prefer to Talk?</h3>
                    <p className="text-hero-muted text-sm mb-4">
                      Call us directly for an immediate conversation about your project.
                    </p>
                    <a href="tel:02083090437">
                      <Button variant="gold" size="lg" className="w-full">
                        <Phone className="w-4 h-4" /> Call 020 8309 0437
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
