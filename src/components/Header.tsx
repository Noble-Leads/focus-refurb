import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  commercialServices,
  domesticServices,
  isCommercialPath,
  isDomesticPath,
} from "@/lib/navigation";
import { navigateToHref } from "@/lib/scrollToAnchor";

const simpleNavLinks = [
  { label: "Home", path: "/" },
  { label: "Rubbish Removal", path: "/rubbish-removal" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const MOBILE_MENU_ID = "primary-menu-mobile";

type NavDropdownProps = {
  label: string;
  hubPath: string;
  hubLabel: string;
  ctaPath: string;
  ctaLabel: string;
  services: { label: string; path: string }[];
  isActive: boolean;
  onNavigate: () => void;
};

const NavDropdown = ({
  label,
  hubPath,
  hubLabel,
  ctaPath,
  ctaLabel,
  services,
  isActive,
  onNavigate,
}: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | undefined>(undefined);
  const menuId = `nav-menu-${label.toLowerCase()}`;

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setCoords({ top: rect.bottom, left: rect.left });
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current !== undefined) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = undefined;
    }
  }, []);

  const openMenu = useCallback(() => {
    cancelClose();
    updatePosition();
    setOpen(true);
  }, [cancelClose, updatePosition]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 150);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  useEffect(() => {
    if (!open) return;
    updatePosition();
    const onReposition = () => updatePosition();
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);
    return () => {
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    let removePointerDown: (() => void) | undefined;
    const timer = window.setTimeout(() => {
      const onPointerDown = (e: PointerEvent) => {
        const target = e.target as Node;
        if (buttonRef.current?.contains(target) || panelRef.current?.contains(target)) return;
        setOpen(false);
      };
      document.addEventListener("pointerdown", onPointerDown);
      removePointerDown = () => document.removeEventListener("pointerdown", onPointerDown);
    }, 0);

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      removePointerDown?.();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleNavigate = () => {
    setOpen(false);
    onNavigate();
  };

  const panel =
    open &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        ref={panelRef}
        id={menuId}
        role="menu"
        style={{ top: coords.top, left: coords.left }}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        className="fixed z-[200] w-[min(20rem,calc(100vw-2rem))] pt-3"
      >
        <div className="overflow-hidden rounded-lg border border-hero-foreground/15 bg-section-dark text-hero-foreground shadow-2xl ring-1 ring-black/40">
        <div className="border-b border-accent/40 bg-accent/10 px-4 py-3 space-y-1">
          <a
            href={hubPath}
            role="menuitem"
            onClick={handleNavigate}
            className="block text-sm font-semibold text-hero-foreground hover:text-gold transition-colors"
          >
            {hubLabel}
          </a>
          <a
            href={ctaPath}
            role="menuitem"
            onClick={(event) => {
              navigateToHref(event, ctaPath, handleNavigate);
            }}
            className="block text-sm text-hero-muted hover:text-gold transition-colors"
          >
            {ctaLabel}
          </a>
        </div>
        <div className="px-2 py-2 max-h-[min(50vh,18rem)] overflow-y-auto">
          <p className="px-2 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-widest text-hero-muted">Services</p>
          {services.map((service) => (
            <a
              key={service.label}
              href={service.path}
              role="menuitem"
              onClick={handleNavigate}
              className="block rounded-md px-3 py-2 text-sm text-hero-foreground/90 hover:bg-hero-foreground/8 hover:text-gold transition-colors"
            >
              {service.label}
            </a>
          ))}
        </div>
        </div>
      </div>,
      document.body
    );

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        onClick={() => {
          cancelClose();
          updatePosition();
          setOpen((current) => !current);
        }}
        className={`inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold ${
          isActive ? "text-gold" : "text-hero-foreground/80"
        }`}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {panel}
    </div>
  );
};

type MobileNavSectionProps = {
  label: string;
  hubPath: string;
  hubLabel: string;
  ctaPath: string;
  ctaLabel: string;
  services: { label: string; path: string }[];
  isActive: boolean;
  onNavigate: () => void;
};

const MobileNavSection = ({
  label,
  hubPath,
  hubLabel,
  ctaPath,
  ctaLabel,
  services,
  isActive,
  onNavigate,
}: MobileNavSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-hero-foreground/10 last:border-0">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((o) => !o)}
        className={`flex w-full items-center justify-between py-3 px-4 text-sm font-medium uppercase tracking-wider ${
          isActive ? "text-gold" : "text-hero-foreground/80"
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-2 pl-4 pr-2 space-y-0.5">
              <a
                href={hubPath}
                onClick={onNavigate}
                className="block py-2 px-3 rounded-md text-sm font-semibold text-hero-foreground hover:text-gold"
              >
                {hubLabel}
              </a>
              <a
                href={ctaPath}
                onClick={(event) => {
                  navigateToHref(event, ctaPath, onNavigate);
                }}
                className="block py-2 px-3 rounded-md text-sm text-hero-muted hover:text-gold"
              >
                {ctaLabel}
              </a>
              <p className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-hero-muted">Services</p>
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.path}
                  onClick={onNavigate}
                  className="block py-2 px-3 rounded-md text-sm text-hero-foreground/80 hover:text-gold"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const tickingRef = useRef(false);
  const lastScrolledRef = useRef(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const [pathname, setPathname] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : ""
  );

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    queueMicrotask(() => menuButtonRef.current?.focus());
  }, []);

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

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMobileMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobileMenu]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const t = window.requestAnimationFrame(() => {
      const first = mobileMenuRef.current?.querySelector<HTMLElement>("a[href], button");
      first?.focus();
    });
    return () => {
      window.cancelAnimationFrame(t);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const commercialActive = isCommercialPath(pathname);
  const domesticActive = isDomesticPath(pathname);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-section-dark shadow-lg" : "bg-section-dark/90 lg:bg-section-dark/80"
      }`}
    >
      <div className="hidden md:block border-b border-hero-foreground/10">
        <div className="container flex items-center justify-between py-2 text-sm text-hero-muted">
          <p className="m-0">London & South East — Commercial & Domestic Contractors</p>
          <div className="flex items-center gap-6" role="group" aria-label="Office contact details">
            <a href="tel:02046340020" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
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

      <div className="container flex items-center justify-between gap-3 py-4 min-w-0">
        <a href="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 md:flex-initial" aria-label="Focus Refurbishment, home">
          <img
            src="/images/logo.png"
            alt=""
            width={200}
            height={48}
            loading="eager"
            decoding="async"
            className="h-10 w-auto shrink-0"
          />
          <span className="truncate text-sm sm:text-xl font-heading font-extrabold text-hero-foreground tracking-tight">
            Focus Refurbishment
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 overflow-visible" aria-label="Primary navigation">
          <a
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold ${
              pathname === "/" ? "text-gold" : "text-hero-foreground/80"
            }`}
          >
            Home
          </a>
          <NavDropdown
            label="Commercial"
            hubPath="/commercial"
            hubLabel="Commercial Overview"
            ctaPath="/commercial-enquiries"
            ctaLabel="Make a Commercial Enquiry"
            services={commercialServices}
            isActive={commercialActive}
            onNavigate={() => {}}
          />
          <NavDropdown
            label="Domestic"
            hubPath="/domestic"
            hubLabel="Domestic Overview"
            ctaPath="/domestic#book-quote-visit"
            ctaLabel="Get a Home Quote"
            services={domesticServices}
            isActive={domesticActive}
            onNavigate={() => {}}
          />
          {simpleNavLinks.slice(1).map((link) => (
            <a
              key={link.path}
              href={link.path}
              aria-current={pathname === link.path ? "page" : undefined}
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

        <div className="flex shrink-0 lg:hidden items-center gap-3">
          <button
            ref={menuButtonRef}
            type="button"
            id="mobile-menu-button"
            aria-expanded={mobileOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-md text-hero-foreground p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-section-dark"
          >
            {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-section-dark border-t border-hero-foreground/10 overflow-hidden max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            <nav
              ref={mobileMenuRef}
              id={MOBILE_MENU_ID}
              className="container flex flex-col py-4"
              aria-label="Primary navigation"
            >
              <a
                href="/"
                onClick={closeMobileMenu}
                aria-current={pathname === "/" ? "page" : undefined}
                className={`py-3 px-4 rounded-md text-sm font-medium uppercase tracking-wider transition-colors ${
                  pathname === "/" ? "text-gold bg-hero-foreground/5" : "text-hero-foreground/80 hover:text-gold"
                }`}
              >
                Home
              </a>
              <MobileNavSection
                label="Commercial"
                hubPath="/commercial"
                hubLabel="Commercial Overview"
                ctaPath="/commercial-enquiries"
                ctaLabel="Make a Commercial Enquiry"
                services={commercialServices}
                isActive={commercialActive}
                onNavigate={closeMobileMenu}
              />
              <MobileNavSection
                label="Domestic"
                hubPath="/domestic"
                hubLabel="Domestic Overview"
                ctaPath="/domestic#book-quote-visit"
                ctaLabel="Get a Home Quote"
                services={domesticServices}
                isActive={domesticActive}
                onNavigate={closeMobileMenu}
              />
              {simpleNavLinks.slice(1).map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={closeMobileMenu}
                  aria-current={pathname === link.path ? "page" : undefined}
                  className={`py-3 px-4 rounded-md text-sm font-medium uppercase tracking-wider transition-colors ${
                    pathname === link.path ? "text-gold bg-hero-foreground/5" : "text-hero-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="/contact" className="mt-2 px-4" onClick={closeMobileMenu}>
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
