import { useEffect, type ReactNode } from "react";
import { FileText, Phone } from "lucide-react";
import LandingHeader from "./LandingHeader";
import CookieConsent from "./CookieConsent";
import { scrollToHashOnLoad } from "@/lib/scrollToAnchor";

type LandingPageShellProps = {
  children: ReactNode;
  phoneDisplay: string;
  phoneTel: string;
  /** In-page anchor for the primary enquiry form. */
  ctaHref?: string;
  ctaLabel?: string;
};

/**
 * Stripped-down page wrapper for paid-traffic landers: no site navigation, no
 * footer link columns, logo not clickable. Only a phone number, an in-page
 * quote button and the legal links remain.
 */
export default function LandingPageShell({
  children,
  phoneDisplay,
  phoneTel,
  ctaHref,
  ctaLabel = "Get a quote",
}: LandingPageShellProps) {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative max-w-full">
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-[100] -translate-y-full rounded-b-md bg-gold px-4 py-3 text-sm font-semibold text-section-dark shadow-md outline-none ring-2 ring-section-dark ring-offset-2 ring-offset-background transition-transform focus:translate-y-0 focus-visible:translate-y-0"
      >
        Skip to main content
      </a>
      <LandingHeader phoneDisplay={phoneDisplay} phoneTel={phoneTel} ctaHref={ctaHref} ctaLabel={ctaLabel} />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 pb-20 md:pb-0 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-x-clip max-w-full min-w-0"
      >
        {children}
      </main>
      <footer className="section-dark border-t border-hero-foreground/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-hero-muted sm:flex-row">
          <p className="m-0">&copy; {new Date().getFullYear()} Focus Refurbishment Ltd</p>
          <p className="m-0">
            <a href="/privacy" target="_blank" rel="noopener" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <a href="/cookie-policy" target="_blank" rel="noopener" className="hover:text-gold transition-colors">
              Cookie Policy
            </a>
          </p>
        </div>
      </footer>
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 md:hidden"
        role="navigation"
        aria-label="Quick contact actions"
      >
        <div className="container py-3">
          <div className={`grid gap-3 ${ctaHref ? "grid-cols-2" : "grid-cols-1"}`}>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-section-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone className="mr-1.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Call now
            </a>
            {ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-md border border-gold px-4 py-2.5 text-sm font-semibold text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <FileText className="mr-1.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {ctaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
      <CookieConsent />
    </div>
  );
}
