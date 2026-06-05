import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";

const LANDLINE_DISPLAY = "020 4634 0020";
const LANDLINE_TEL = "02046340020";

const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const tickingRef = useRef(false);
  const lastScrolledRef = useRef(false);

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

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-section-dark/95 shadow-lg" : "bg-section-dark/80 shadow-none"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center" aria-label="Focus Refurbishment">
          <img
            src="/images/logo.png"
            alt="Focus Refurbishment"
            width={200}
            height={48}
            loading="eager"
            decoding="async"
            className="h-10 w-auto"
          />
        </div>
        <a
          href={`tel:${LANDLINE_TEL}`}
          className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-section-dark hover:bg-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-section-dark"
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">{LANDLINE_DISPLAY}</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </header>
  );
};

export default LandingHeader;
