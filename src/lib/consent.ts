/**
 * GDPR / PECR cookie consent helpers.
 *
 * The site uses Google Consent Mode v2 (signals set in `Layout.astro`) and
 * stores the user's preferences in `localStorage` so that we can re-apply
 * them on subsequent visits without prompting again.
 *
 * Consent categories:
 *  - essential   : Always granted. Required for the site to function
 *                  (security, navigation, form submission). No tracking.
 *  - analytics   : Google Analytics 4 (G-5Y4789V5YK). Used to understand
 *                  aggregated site usage.
 *  - marketing   : Google Ads (AW-18087305153) and the LeadConnector chat
 *                  widget. Used for advertising measurement / conversions
 *                  and for the live chat feature.
 */

export const CONSENT_STORAGE_KEY = "focus-cookie-consent-v1";
export const CONSENT_EVENT = "focus:consentupdate";
export const CONSENT_VERSION = 1;

export type ConsentCategory = "essential" | "analytics" | "marketing";

export type ConsentState = {
  version: number;
  timestamp: string;
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export const DENY_ALL: ConsentState = {
  version: CONSENT_VERSION,
  timestamp: "",
  essential: true,
  analytics: false,
  marketing: false,
};

export const GRANT_ALL: Omit<ConsentState, "timestamp"> = {
  version: CONSENT_VERSION,
  essential: true,
  analytics: true,
  marketing: true,
};

declare global {
  interface WindowEventMap {
    "focus:consentupdate": CustomEvent<ConsentState>;
  }
}

const isBrowser = () => typeof window !== "undefined";

export function readConsent(): ConsentState | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState> | null;
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;
    return {
      version: CONSENT_VERSION,
      timestamp: typeof parsed.timestamp === "string" ? parsed.timestamp : "",
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

export function writeConsent(
  next: Omit<ConsentState, "timestamp" | "version" | "essential"> & {
    timestamp?: string;
  }
): ConsentState {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    timestamp: next.timestamp ?? new Date().toISOString(),
    essential: true,
    analytics: Boolean(next.analytics),
    marketing: Boolean(next.marketing),
  };

  if (isBrowser()) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage may be unavailable (private mode, quota exceeded). The
      // banner will simply re-appear on the next visit.
    }
    window.dispatchEvent(
      new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state })
    );
  }

  return state;
}

export function clearConsent(): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }
}
