import { useEffect, useState, type ReactNode } from "react";
import { FileText, Phone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { scrollToHashOnLoad } from "@/lib/scrollToAnchor";

const Layout = ({ children }: { children: ReactNode }) => {
  const [pathname, setPathname] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : ""
  );

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    scrollToHashOnLoad();
  }, [pathname]);

  const isFormPage =
    pathname === "/contact" ||
    pathname === "/commercial-enquiries" ||
    pathname === "/fire-door-installation-london" ||
    pathname === "/roofing-london" ||
    pathname === "/domestic" ||
    pathname.startsWith("/domestic/") ||
    (pathname.startsWith("/commercial/") && pathname !== "/commercial") ||
    pathname === "/loft-conversions-london" ||
    pathname === "/bathrooms-kitchens-london" ||
    pathname === "/extensions-new-builds-london" ||
    pathname === "/summer-houses-annexes-london" ||
    pathname === "/brickwork-masonry-london" ||
    pathname === "/ewi-render-london" ||
    pathname === "/building-maintenance-london";

  return (
    <div className="min-h-screen flex flex-col relative max-w-full">
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-[100] -translate-y-full rounded-b-md bg-gold px-4 py-3 text-sm font-semibold text-section-dark shadow-md outline-none ring-2 ring-section-dark ring-offset-2 ring-offset-background transition-transform focus:translate-y-0 focus-visible:translate-y-0"
      >
        Skip to main content
      </a>
      <Header />
      <div className="flex flex-1 flex-col overflow-x-clip max-w-full min-w-0">
      <main
        id="main-content"
        tabIndex={-1}
        className={`flex-1 pb-20 md:pb-0 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background max-w-full min-w-0 ${
          isFormPage ? "overflow-x-clip overflow-y-visible" : "overflow-x-clip"
        }`}
      >
        {children}
      </main>
      <Footer />
      </div>
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 md:hidden"
        role="navigation"
        aria-label="Quick contact actions"
      >
        <div className="container py-3">
          <div className={`grid gap-3 ${isFormPage ? "grid-cols-1" : "grid-cols-2"}`}>
            <a
              href="tel:02046340020"
              className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-section-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone className="mr-1.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Call now
            </a>
            {!isFormPage && (
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gold px-4 py-2.5 text-sm font-semibold text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <FileText className="mr-1.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Get a quote
            </a>
            )}
          </div>
        </div>
      </div>
      <CookieConsent />
    </div>
  );
};

export default Layout;
