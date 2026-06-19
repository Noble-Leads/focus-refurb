import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { openCookiePreferences } from "./CookieConsent";

const serviceLinks = [
  { label: "Fire Door Installation", path: "/fire-door-installation-london" },
  { label: "Roof Repair & Replacement", path: "/roofing-london" },
  { label: "Full Refurbishment", path: "/refurbishment-london" },
  { label: "Painting & Decorating", path: "/painting-decorating-london" },
  { label: "Rubbish Removal", path: "/rubbish-removal" },
  { label: "All Services", path: "/services" },
];

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Projects", path: "/projects" },
  { label: "Commercial Enquiries", path: "/commercial-enquiries" },
  { label: "Contact Us", path: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Cookie Policy", path: "/cookie-policy" },
];

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container max-w-7xl py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-3" aria-label="Focus Refurbishment, home">
              <img
                src="/images/logo.png"
                alt=""
                width={200}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
              <span className="text-xl font-heading font-extrabold text-section-dark-foreground tracking-tight">
                Focus Refurbishment
              </span>
            </a>
            <p className="mt-4 text-hero-muted text-sm leading-relaxed max-w-xs">
              Commercial contractors serving London and the South East since 2000.
            </p>
            <p className="mt-3 text-hero-muted text-sm leading-relaxed">
              Focus Refurbishment Ltd · Company No. 04010469
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/focus_refurbishment_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Focus Refurbishment on Instagram"
                className="w-9 h-9 rounded-full border border-hero-foreground/20 flex items-center justify-center text-hero-muted hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/p/Focus-Refurbishment-LTD-100063782545076/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Focus Refurbishment on Facebook"
                className="w-9 h-9 rounded-full border border-hero-foreground/20 flex items-center justify-center text-hero-muted hover:text-gold hover:border-gold transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-hero-muted">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-hero-muted">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-section-dark-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-hero-muted">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:02046340020" className="block hover:text-gold transition-colors">
                    020 4634 0020
                  </a>
                  <a href="tel:07888863670" className="block hover:text-gold transition-colors">
                    07888 863670
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:office@focusrefurbishmentltd.com" className="hover:text-gold transition-colors break-all">
                  office@focusrefurbishmentltd.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>144 Hurst Road, Sidcup, Kent DA15 9AF</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Mon–Sat 8am–5pm · 24hr emergency callouts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-hero-foreground/10 flex flex-col gap-4 text-sm text-hero-muted">
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start"
          >
            {legalLinks.map((link) => (
              <a key={link.path} href={link.path} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-section-dark rounded"
            >
              Cookie Preferences
            </button>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Focus Refurbishment Ltd. All rights reserved.</p>
            <p>Company No. 04010469 · Established 2000</p>
          </div>
          <p className="text-center text-xs text-hero-muted/70">
            Powered by{" "}
            <a
              href="https://nobleleads.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hero-muted hover:text-gold transition-colors"
            >
              NobleLeads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
