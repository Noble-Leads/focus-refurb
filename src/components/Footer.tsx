import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-heading font-extrabold text-section-dark-foreground tracking-tight">
              FOCUS<span className="text-gold">.</span>
            </Link>
            <p className="mt-4 text-hero-muted text-sm leading-relaxed">
              Transforming properties across London and the South East since 2000. Family-run, quality-driven, and built on trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-hero-muted">
              {["Full Refurbishment", "Extensions", "Loft Conversions", "Kitchens & Bathrooms", "Roofing & Brickwork", "Fire Door Installation"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-gold transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-hero-muted">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Projects", path: "/projects" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-hero-muted">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <div>
                  <a href="tel:02083090437" className="hover:text-gold transition-colors block">020 8309 0437</a>
                  <a href="tel:07778737653" className="hover:text-gold transition-colors block">07778 737653</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:office@focusrefurbishmentltd.com" className="hover:text-gold transition-colors">
                  office@focusrefurbishmentltd.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>London & South East</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-hero-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-hero-muted">
          <p>&copy; {new Date().getFullYear()} Focus Refurbishment Ltd. All rights reserved.</p>
          <p>Established 2000 · Family-Run Business</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
