import { Phone, MessageCircle, Trash2, HardHat, TreePine, Axe, Sofa, Building2, ShieldCheck, CalendarCheck, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GeometricDecor from "@/components/GeometricDecor";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const services = [
  { icon: Trash2, title: "General Rubbish Clearance", desc: "Bags, boxes, household junk — any volume cleared fast." },
  { icon: HardHat, title: "Builder's Waste & Hardcore", desc: "Rubble, concrete, sand, hardcore. Heavy loads handled safely." },
  { icon: TreePine, title: "Garden Waste", desc: "Bushes, trees, green waste, soil — full garden clear-outs." },
  { icon: Axe, title: "Wood & Timber", desc: "Offcuts, old furniture, timber frames — sorted and disposed of correctly." },
  { icon: Sofa, title: "Bulky Item Removal", desc: "Sofas, fridges, white goods — single items or full house clearances." },
  { icon: Building2, title: "Commercial Site Clearance", desc: "End-of-project waste removal for builders, landlords and contractors." },
];

const pricing = [
  { type: "1 Tonne Full Load – General", price: "£325" },
  { type: "500kg Half Load – General", price: "£180" },
  { type: "Per 100kg – General", price: "£50" },
  { type: "Hardcore Only – 1 Tonne Load", price: "£200" },
  { type: "Wood Load Only", price: "£280" },
  { type: "Garden Waste (Bush & Trees)", price: "£200" },
  { type: "Sofa Removal", price: "£60 each" },
  { type: "Fridge / White Goods Removal", price: "£60 each" },
];

const trustPoints = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed waste carrier. Your waste is disposed of legally and responsibly." },
  { icon: CalendarCheck, title: "Same-Week Availability", desc: "We work across London and can often be with you within days." },
  { icon: Truck, title: "No Skips Required", desc: "We bring our own vehicle and do all the loading. You don't lift a thing." },
];

const PHONE = "07407847399";
const WHATSAPP_URL = "https://wa.me/447407847399";

const RubbishRemovalPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-dark pt-36 pb-20 relative overflow-hidden">
        <GeometricDecor variant="grid" className="top-20 right-0 text-gold opacity-40" />
        <GeometricDecor variant="dots" className="bottom-10 left-10 text-gold opacity-30" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
              Rubbish Removal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-section-dark-foreground mb-5 max-w-3xl">
              Rubbish Removal Across London – Fast, Affordable & Fully Licensed
            </h1>
            <p className="text-hero-muted text-lg md:text-xl mb-8 max-w-2xl">
              From a single sofa to a full site clearance — we load it, we clear it, we sort it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <a href={`tel:${PHONE}`}>
                  <Phone className="mr-2" size={20} /> Call Now: {PHONE}
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} /> WhatsApp Us
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background relative overflow-hidden">
        <GeometricDecor variant="corner" className="top-0 right-0 text-foreground" />
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">
              London's Go-To Rubbish Removal Team
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're clearing a property, finishing a renovation, or just need bulky items gone — Focus Refurbishment handles it quickly and professionally. We cover South East, South West and Central London, within the M25. No skips, no waiting. We come to you, we load it, we go.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <GeometricDecor variant="dots" className="top-10 left-10 text-foreground" />
        <GeometricDecor variant="lines" className="bottom-0 right-0 text-foreground" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-12 text-center">
              What We Remove
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <s.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background relative overflow-hidden">
        <GeometricDecor variant="grid" className="top-0 left-0 text-foreground opacity-50" />
        <div className="container max-w-3xl relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-3 text-center">
              Clear, Honest Pricing. No Hidden Fees.
            </h2>
            <p className="text-muted-foreground text-center mb-10 text-lg">
              All prices include loading, transport and legal disposal.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            {/* Desktop table */}
            <div className="hidden sm:block rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary">
                    <TableHead className="text-primary-foreground font-heading font-bold text-base">Load Type</TableHead>
                    <TableHead className="text-primary-foreground font-heading font-bold text-base text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricing.map((row, i) => (
                    <TableRow key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                      <TableCell className="font-medium text-foreground">{row.type}</TableCell>
                      <TableCell className="text-right font-heading font-bold text-gold text-lg">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* Mobile stacked cards */}
            <div className="sm:hidden space-y-3">
              {pricing.map((row, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-4 flex justify-between items-center">
                  <span className="text-foreground font-medium text-sm pr-3">{row.type}</span>
                  <span className="font-heading font-bold text-gold text-lg whitespace-nowrap">{row.price}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 text-sm">
              Not sure what you have? Call us and we'll give you a fast, no-obligation quote:{" "}
              <a href={`tel:${PHONE}`} className="text-gold font-semibold hover:underline">{PHONE}</a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-dark relative overflow-hidden">
        <GeometricDecor variant="dots" className="top-10 right-10 text-gold opacity-30" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground mb-12 text-center">
              Why Choose Us
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <t.icon className="text-gold" size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-section-dark-foreground mb-3">{t.title}</h3>
                  <p className="text-hero-muted text-sm">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-background relative overflow-hidden">
        <GeometricDecor variant="corner" className="bottom-0 left-0 text-foreground rotate-180" />
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6 text-center">
              We Cover London & Surrounding Areas
            </h2>
            <p className="text-muted-foreground text-lg text-center leading-relaxed">
              We operate across South East London, South West London, and Central London — all within the M25. Not sure if we cover your area? Just call and we'll confirm.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 section-dark relative overflow-hidden">
        <GeometricDecor variant="lines" className="top-0 left-0 text-gold opacity-20" />
        <GeometricDecor variant="grid" className="bottom-0 right-0 text-gold opacity-20" />
        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-section-dark-foreground mb-4">
              Ready to Clear? Get a Fast Quote Today.
            </h2>
            <p className="text-hero-muted text-lg mb-8">
              Call or WhatsApp — we'll give you a price in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href={`tel:${PHONE}`}>
                  <Phone className="mr-2" size={20} /> Call {PHONE}
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} /> WhatsApp Us
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default RubbishRemovalPage;
