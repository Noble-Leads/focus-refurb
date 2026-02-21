import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-section-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block border-b border-hero-foreground/10">
        <div className="container flex items-center justify-between py-2 text-sm text-hero-muted">
          <span>London & South East's Trusted Refurbishment Specialists</span>
          <div className="flex items-center gap-6">
            <a href="tel:02083090437" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              020 8309 0437
            </a>
            <a href="tel:07778737653" className="hover:text-gold transition-colors">
              07778 737653
            </a>
            <a href="mailto:office@focusrefurbishmentltd.com" className="hover:text-gold transition-colors">
              office@focusrefurbishmentltd.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Focus Refurbishment" className="h-10 w-auto" />
          <span className="text-xl font-heading font-extrabold text-hero-foreground tracking-tight">
            FOCUS<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-hero-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="gold" size="default">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:02083090437">
            <Button variant="gold" size="sm">
              <Phone className="w-4 h-4" />
              Call
            </Button>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-hero-foreground p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-section-dark border-t border-hero-foreground/10 overflow-hidden"
          >
            <nav className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 rounded-md text-sm font-medium uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? "text-gold bg-hero-foreground/5"
                      : "text-hero-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-2">
                <Button variant="gold" size="lg" className="w-full">
                  Get a Free Quote
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
