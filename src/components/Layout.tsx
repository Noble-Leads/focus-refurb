import { useEffect, useState, type ReactNode } from "react";
import { FileText, Phone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const [pathname, setPathname] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : ""
  );

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isFormPage =
    pathname === "/contact" ||
    pathname === "/commercial-enquiries" ||
    pathname === "/fire-door-installation-london";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 md:hidden">
        <div className="container py-3">
          <div className={`grid gap-3 ${isFormPage ? "grid-cols-1" : "grid-cols-2"}`}>
            <a
              href="tel:02046340020"
              className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-section-dark"
            >
              <Phone className="mr-1.5 h-4 w-4" />
              Call Now
            </a>
            {!isFormPage && (
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gold px-4 py-2.5 text-sm font-semibold text-gold"
            >
              <FileText className="mr-1.5 h-4 w-4" />
              Get a Quote
            </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
