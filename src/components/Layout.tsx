import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-sm md:hidden">
        <div className="container py-3">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:02046340020"
              className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-section-dark"
            >
              📞 Call Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gold px-4 py-2.5 text-sm font-semibold text-gold"
            >
              ✉ Get a Quote
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
