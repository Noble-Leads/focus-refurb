import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
{ icon: Phone, label: "Phone", values: ["020 4634 0020"], links: ["tel:02046340020"] },
{ icon: Mail, label: "Email", values: ["office@focusrefurbishmentltd.com"], links: ["mailto:office@focusrefurbishmentltd.com"] },
{ icon: MapPin, label: "Address", values: ["144 Hurst Road, Sidcup, Kent DA15 9AF"], links: [] },
{ icon: Clock, label: "Working Hours", values: ["Mon–Sat: 8am – 5pm", "24hr Emergency Callouts"], links: [] }];


const ContactPage = () => {
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
                <div className="bg-card border border-border rounded-lg p-8 min-h-[600px] px-0 py-0">
                  <iframe
                    src="https://link.nobleleads.uk/widget/form/MxMXNy7f1GiZCyhTuq2p"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px", minHeight: "500px" }}
                    id="inline-MxMXNy7f1GiZCyhTuq2p"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="FR- Website Contact Us"
                    data-height="undefined"
                    data-layout-iframe-id="inline-MxMXNy7f1GiZCyhTuq2p"
                    data-form-id="MxMXNy7f1GiZCyhTuq2p"
                    title="FR- Website Contact Us" />

                </div>
              </ScrollReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="space-y-8">
                  {contactInfo.map((item) =>
                  <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-1">{item.label}</h3>
                        {item.values.map((val, i) =>
                      <p key={val} className="text-muted-foreground text-sm">
                            {item.links[i] ?
                        <a href={item.links[i]} className="hover:text-gold transition-colors">{val}</a> :
                        val}
                          </p>
                      )}
                      </div>
                    </div>
                  )}

                  <div className="bg-section-dark rounded-lg p-8 mt-8">
                    <h3 className="font-heading font-bold text-section-dark-foreground mb-3">Prefer to Talk?</h3>
                    <p className="text-hero-muted text-sm mb-4">
                      Call us directly for an immediate conversation about your project.
                    </p>
                    <a href="tel:02046340020">
                      <Button variant="gold" size="lg" className="w-full">
                        <Phone className="w-4 h-4" /> Call 020 4634 0020
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default ContactPage;