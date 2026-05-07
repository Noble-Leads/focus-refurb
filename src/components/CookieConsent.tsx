import { useEffect, useId, useRef, useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";

const OPEN_PREFERENCES_EVENT = "focus:open-cookie-preferences";

declare global {
  interface WindowEventMap {
    "focus:open-cookie-preferences": CustomEvent<void>;
  }
}

type View = "hidden" | "banner" | "preferences";

const CookieConsent = () => {
  const [view, setView] = useState<View>("hidden");
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const [marketingOn, setMarketingOn] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const descId = useId();

  useEffect(() => {
    const stored = readConsent();
    if (!stored) {
      setView("banner");
      return;
    }
    setAnalyticsOn(stored.analytics);
    setMarketingOn(stored.marketing);
  }, []);

  useEffect(() => {
    const onOpen = () => {
      const stored = readConsent();
      setAnalyticsOn(stored?.analytics ?? false);
      setMarketingOn(stored?.marketing ?? false);
      setView("preferences");
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (view !== "preferences") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setView((prev) => (prev === "preferences" ? "banner" : prev));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view]);

  useEffect(() => {
    if (view === "preferences") {
      const t = window.requestAnimationFrame(() => {
        const first =
          dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]") ??
          dialogRef.current?.querySelector<HTMLElement>("button, [href]");
        first?.focus();
      });
      return () => window.cancelAnimationFrame(t);
    }
  }, [view]);

  const persist = (next: { analytics: boolean; marketing: boolean }) => {
    writeConsent(next);
    setAnalyticsOn(next.analytics);
    setMarketingOn(next.marketing);
    setView("hidden");
  };

  const acceptAll = () => persist({ analytics: true, marketing: true });
  const rejectAll = () => persist({ analytics: false, marketing: false });
  const saveSelection = () =>
    persist({ analytics: analyticsOn, marketing: marketingOn });

  const rejectAndCustomise = () => {
    // Immediately reject so no analytics / marketing tags fire while the
    // user is still browsing the preferences modal. They can opt back in
    // selectively from there.
    writeConsent({ analytics: false, marketing: false });
    setAnalyticsOn(false);
    setMarketingOn(false);
    setView("preferences");
  };

  if (view === "hidden") return null;

  if (view === "preferences") {
    return (
      <div
        className="fixed inset-0 z-[200] flex items-end justify-center bg-section-dark/70 px-4 py-6 backdrop-blur-sm sm:items-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-describedby={descId}
      >
        <div
          ref={dialogRef}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-card p-6 shadow-2xl sm:p-8"
        >
          <button
            type="button"
            aria-label="Close cookie preferences"
            onClick={() => setView("banner")}
            className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
              <Settings2 className="h-5 w-5 text-gold" aria-hidden="true" />
            </div>
            <div>
              <h2
                id={headingId}
                className="font-heading text-xl font-extrabold text-foreground"
              >
                Cookie Preferences
              </h2>
              <p id={descId} className="mt-1 text-sm text-muted-foreground">
                Choose which cookies we may set on your device. You can change
                these settings any time from the link in our footer. Read our{" "}
                <a href="/cookie-policy" className="text-gold underline">
                  Cookie Policy
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-gold underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <CategoryRow
              title="Strictly necessary"
              description="Required for the site to work — page navigation, the contact form, and security. These cannot be turned off."
              checked
              disabled
            />
            <CategoryRow
              title="Analytics"
              description="Google Analytics 4 helps us understand how visitors use the site so we can improve it. Aggregated and anonymised."
              checked={analyticsOn}
              onChange={setAnalyticsOn}
              autoFocus
            />
            <CategoryRow
              title="Marketing"
              description="Google Ads conversion tracking and our LeadConnector live chat widget. Used to measure campaigns and offer chat support."
              checked={marketingOn}
              onChange={setMarketingOn}
            />
          </div>

          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
            <Button variant="outline" size="default" onClick={rejectAll}>
              Reject all
            </Button>
            <Button variant="gold-outline" size="default" onClick={saveSelection}>
              Save preferences
            </Button>
            <Button variant="gold" size="default" onClick={acceptAll}>
              Accept all
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[150] px-3 pb-3 md:bottom-4 md:px-4"
    >
      <div className="mx-auto max-w-5xl rounded-lg border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-3">
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 sm:flex">
              <Cookie className="h-5 w-5 text-gold" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-heading text-base font-bold text-foreground">
                We value your privacy
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We use strictly necessary cookies to make the site work and,
                with your permission, analytics and marketing cookies to
                understand visits and measure ad performance. See our{" "}
                <a href="/cookie-policy" className="text-gold underline">
                  Cookie Policy
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-gold underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:shrink-0">
            <Button
              variant="gold-outline"
              size="sm"
              onClick={rejectAndCustomise}
            >
              Reject all &amp; customise
            </Button>
            <Button variant="gold" size="sm" onClick={acceptAll}>
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

type CategoryRowProps = {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  autoFocus?: boolean;
};

const CategoryRow = ({
  title,
  description,
  checked,
  onChange,
  disabled,
  autoFocus,
}: CategoryRowProps) => {
  const id = useId();
  return (
    <div className="rounded-md border border-border bg-background/60 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <label
            htmlFor={id}
            className="font-heading text-sm font-bold text-foreground"
          >
            {title}
          </label>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <button
          id={id}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          data-autofocus={autoFocus ? "" : undefined}
          onClick={() => onChange?.(!checked)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 ${
            checked ? "bg-gold" : "bg-muted"
          }`}
        >
          <span
            aria-hidden="true"
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
              checked ? "translate-x-5" : "translate-x-1"
            }`}
          />
          <span className="sr-only">{checked ? "Enabled" : "Disabled"}</span>
        </button>
      </div>
    </div>
  );
};

export const openCookiePreferences = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
};

// Re-export so consumers can listen to consent updates without importing
// from `@/lib/consent` directly.
export { CONSENT_EVENT };
export type { ConsentState };

export default CookieConsent;
