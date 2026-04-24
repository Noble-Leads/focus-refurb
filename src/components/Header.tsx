import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Rubbish Removal", path: "/rubbish-removal" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Commercial", path: "/commercial-enquiries" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const tickingRef = useRef(false);
  const lastScrolledRef = useRef(false);
  const [pathname, setPathname] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : ""
  );

  useEffect(() => {
    const updateScrolledState = () => {
      const nextScrolled = window.scrollY > 20;
      if (nextScrolled !== lastScrolledRef.current) {
        lastScrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(updateScrolledState);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-section-dark/95 shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <div className="hidden md:block border-b border-hero-foreground/10">
        <div className="container flex items-center justify-between py-2 text-sm text-hero-muted">
          <span>London & South East's Trusted Commercial Contractors</span>
          <div className="flex items-center gap-6">
            <a href="tel:02046340020" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              020 4634 0020
            </a>
            <a href="tel:07888863670" className="hover:text-gold transition-colors">
              07888 863670
            </a>
            <a href="mailto:office@focusrefurbishmentltd.com" className="hover:text-gold transition-colors">
              office@focusrefurbishmentltd.com
            </a>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src="/images/logo.png"
            alt="Focus Refurbishment"
            width={150}
            height={150}
            loading="eager"
            decoding="async"
            className="h-10 w-auto"
          />
          <span className="hidden sm:inline text-xl font-heading font-extrabold text-hero-foreground tracking-tight">Focus Group</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold ${
                pathname === link.path ? "text-gold" : "text-hero-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="/contact">
            <Button variant="gold" size="default">
              Get a Quote
            </Button>
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <a href="tel:02046340020">
            <Button variant="gold" size="sm">
              <Phone className="w-4 h-4" />
              Call
            </Button>
          </a>
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="text-hero-foreground p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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
                <a
                  key={link.path}
                  href={link.path}
                  className={`py-3 px-4 rounded-md text-sm font-medium uppercase tracking-wider transition-colors ${
                    pathname === link.path ? "text-gold bg-hero-foreground/5" : "text-hero-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="/contact" className="mt-2">
                <Button variant="gold" size="lg" className="w-full">
                  Get a Free Quote
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
