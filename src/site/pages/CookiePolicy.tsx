import HeroBackdrop from "@/components/HeroBackdrop";
import ScrollReveal from "@/components/ScrollReveal";
import { openCookiePreferences } from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";

const LAST_UPDATED = "7 May 2026";

type CookieRow = {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  category: "Strictly necessary" | "Analytics" | "Marketing";
};

const cookies: CookieRow[] = [
  {
    name: "focus-cookie-consent-v1",
    provider: "focusrefurbishmentltd.com",
    purpose:
      "Stores your cookie consent choices so we don't ask you again on every visit.",
    expiry: "12 months (localStorage)",
    category: "Strictly necessary",
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    purpose:
      "Distinguishes unique users and sessions to produce aggregated, anonymised usage statistics.",
    expiry: "Up to 13 months",
    category: "Analytics",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    purpose: "Distinguishes users for 24 hours.",
    expiry: "24 hours",
    category: "Analytics",
  },
  {
    name: "_gcl_au",
    provider: "Google Ads",
    purpose:
      "Used by Google Ads conversion linker to attribute conversions to ad clicks.",
    expiry: "90 days",
    category: "Marketing",
  },
  {
    name: "LeadConnector chat session cookies",
    provider: "leadconnectorhq.com",
    purpose:
      "Maintains your live chat session and remembers chat preferences while you browse.",
    expiry: "Session / up to 12 months",
    category: "Marketing",
  },
];

const categoryStyles: Record<CookieRow["category"], string> = {
  "Strictly necessary": "bg-emerald-100 text-emerald-900",
  Analytics: "bg-sky-100 text-sky-900",
  Marketing: "bg-amber-100 text-amber-900",
};

const CookiePolicyPage = () => {
  return (
    <div>
      <section className="section-dark pt-36 pb-20 relative overflow-hidden">
        <HeroBackdrop />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-section-dark-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl">
              The cookies and similar technologies we use on
              focusrefurbishmentltd.com, what they do, and how to control them.
            </p>
            <p className="text-hero-muted/80 text-sm mt-4">
              Last updated: {LAST_UPDATED}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl">
          <article className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:underline">
            <h2 className="!mt-0">1. What is a cookie?</h2>
            <p>
              A cookie is a small text file stored on your device when you
              visit a website. Cookies let the site remember your actions and
              preferences (such as login state, language or consent choices)
              over a period of time, so you don&rsquo;t have to keep
              re-entering them. Similar technologies — such as the browser&rsquo;s
              localStorage, web beacons and pixels — work in the same way and
              are covered by this policy.
            </p>

            <h2>2. How we use cookies</h2>
            <p>
              We split cookies into three categories. <strong>Strictly
              necessary</strong> cookies are always on. Everything else only
              runs once you accept it through our consent banner. We use
              Google Consent Mode v2 so that, if you decline, no Google
              advertising or analytics cookies are written to your device.
            </p>
            <div className="not-prose my-6 flex flex-wrap gap-3">
              <Button
                variant="gold"
                size="default"
                onClick={openCookiePreferences}
              >
                Manage cookie preferences
              </Button>
              <a href="/privacy">
                <Button variant="gold-outline" size="default">
                  Read our Privacy Policy
                </Button>
              </a>
            </div>

            <h2>3. The cookies we set</h2>
            <p>
              The table below lists the cookies and similar technologies you
              may encounter on this site. Third-party providers may update
              their own cookies from time to time; we review this list at
              least once a year.
            </p>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-muted text-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left font-heading font-bold">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-heading font-bold">
                      Provider
                    </th>
                    <th className="px-4 py-3 text-left font-heading font-bold">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left font-heading font-bold">
                      Expiry
                    </th>
                    <th className="px-4 py-3 text-left font-heading font-bold">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c) => (
                    <tr
                      key={c.name}
                      className="border-t border-border align-top text-muted-foreground"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-foreground">
                        {c.name}
                      </td>
                      <td className="px-4 py-3">{c.provider}</td>
                      <td className="px-4 py-3">{c.purpose}</td>
                      <td className="px-4 py-3">{c.expiry}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${categoryStyles[c.category]}`}
                        >
                          {c.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>4. Managing your choices</h2>
            <p>
              You can change or withdraw your consent at any time by clicking{" "}
              <em>Cookie preferences</em> in the site footer or by using the
              button above.
            </p>
            <p>
              Most browsers also let you block or delete cookies through
              their settings. The links below take you to instructions for
              the most common browsers:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-gb/microsoft-edge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Please note that if you block strictly-necessary cookies parts
              of the site (such as the contact form) may not work correctly.
            </p>

            <h2>5. Do Not Track</h2>
            <p>
              We honour your in-page consent choices, which take precedence
              over the older &ldquo;Do Not Track&rdquo; browser signal.
            </p>

            <h2>6. Changes to this policy</h2>
            <p>
              We may update this Cookie Policy when we add or remove
              services. The &ldquo;last updated&rdquo; date at the top of
              this page shows when it was last changed.
            </p>

            <h2>7. Contact</h2>
            <p>
              If you have a question about cookies or your privacy, please
              email{" "}
              <a href="mailto:office@focusrefurbishmentltd.com">
                office@focusrefurbishmentltd.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
