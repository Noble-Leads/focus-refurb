import HeroBackdrop from "@/components/HeroBackdrop";
import ScrollReveal from "@/components/ScrollReveal";
import { openCookiePreferences } from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";

const LAST_UPDATED = "7 May 2026";

const PrivacyPage = () => {
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
              Privacy Policy
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl">
              How Focus Refurbishment Ltd collects, uses and protects your
              personal data under the UK GDPR and the Data Protection Act 2018.
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
            <h2 className="!mt-0">1. Who we are</h2>
            <p>
              <strong>Focus Refurbishment Ltd</strong> (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a company registered in
              England and Wales under company number <strong>04010469</strong>.
              Our registered office is at 144 Hurst Road, Sidcup, Kent
              DA15&nbsp;9AF, United Kingdom.
            </p>
            <p>
              We are the &ldquo;data controller&rdquo; for personal data
              collected through this website (
              <a href="https://focusrefurbishmentltd.com">
                focusrefurbishmentltd.com
              </a>
              ) and in the course of providing our refurbishment, construction
              and maintenance services.
            </p>
            <p>
              You can contact our team about any data protection matter using
              the details below:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:office@focusrefurbishmentltd.com">
                  office@focusrefurbishmentltd.com
                </a>
              </li>
              <li>
                Telephone: <a href="tel:02046340020">020 4634 0020</a>
              </li>
              <li>Post: Focus Refurbishment Ltd, 144 Hurst Road, Sidcup, Kent DA15 9AF</li>
            </ul>

            <h2>2. Information we collect</h2>
            <p>We collect personal data in three main ways:</p>
            <h3>a. Information you give us</h3>
            <p>
              When you submit our contact / quote form, email us, call us or
              engage our live chat, you may share:
            </p>
            <ul>
              <li>name;</li>
              <li>email address and phone number;</li>
              <li>postcode or property address;</li>
              <li>
                details about your project (the type of work, timescales,
                photos or documents you choose to send).
              </li>
            </ul>
            <h3>b. Information collected automatically</h3>
            <p>
              When you browse the site we and our service providers may
              collect technical information such as IP address (truncated
              where possible), browser and device type, referring URL, pages
              viewed and approximate location (country / city level). This is
              done with cookies and similar technologies — see our{" "}
              <a href="/cookie-policy">Cookie Policy</a>.
            </p>
            <h3>c. Information from third parties</h3>
            <p>
              We may receive information from referral partners, our
              accountants, credit reference agencies (for commercial accounts)
              and publicly available sources such as Companies House.
            </p>

            <h2>3. How and why we use your data</h2>
            <p>
              We only process personal data where we have a lawful basis under
              Article 6 of the UK GDPR.
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Lawful basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Responding to enquiries, preparing quotes and arranging
                      surveys
                    </td>
                    <td>Steps to enter into a contract at your request</td>
                  </tr>
                  <tr>
                    <td>
                      Performing the work, invoicing and after-care for
                      projects
                    </td>
                    <td>Performance of our contract with you</td>
                  </tr>
                  <tr>
                    <td>
                      Keeping accounting, tax, health-and-safety and
                      fire-door compliance records
                    </td>
                    <td>Legal obligation</td>
                  </tr>
                  <tr>
                    <td>
                      Improving our website and services using anonymised
                      analytics
                    </td>
                    <td>Consent (you can withdraw it at any time)</td>
                  </tr>
                  <tr>
                    <td>
                      Measuring marketing campaign effectiveness (Google Ads
                      conversion tracking)
                    </td>
                    <td>Consent</td>
                  </tr>
                  <tr>
                    <td>Sending occasional service updates to existing customers</td>
                    <td>Legitimate interests (you can opt out at any time)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We do <strong>not</strong> use your data for automated
              decision-making or profiling, and we do <strong>not</strong>{" "}
              sell your data to third parties.
            </p>

            <h2>4. Who we share your data with</h2>
            <p>
              We share personal data only with trusted suppliers who help us
              run our business, and only where necessary:
            </p>
            <ul>
              <li>
                <strong>LeadConnector / GoHighLevel</strong> — hosts our
                website contact form and live chat. Servers in the United
                States, transfers protected by the UK Addendum to the EU
                Standard Contractual Clauses.
              </li>
              <li>
                <strong>Google LLC (Analytics &amp; Ads)</strong> —
                anonymised website analytics and conversion measurement. We
                use IP-anonymisation and Google Consent Mode v2.
              </li>
              <li>
                <strong>Microsoft 365</strong> — email and document storage
                for our team.
              </li>
              <li>
                <strong>Subcontractors</strong> — only where they are working
                on your project (for example a specialist tradesperson) and
                bound by confidentiality.
              </li>
              <li>
                <strong>Our accountants and insurers</strong> — for the
                limited purposes of bookkeeping, tax filings and insurance
                claims.
              </li>
              <li>
                <strong>Regulators or law enforcement</strong> — where we are
                legally required to do so.
              </li>
            </ul>

            <h2>5. International transfers</h2>
            <p>
              Some of our suppliers (for example Google) are based outside the
              UK. Where personal data is transferred outside the UK we rely on
              UK adequacy regulations or appropriate safeguards such as the
              International Data Transfer Agreement / UK Addendum to the EU
              Standard Contractual Clauses, and we apply additional
              safeguards (encryption in transit and at rest) where
              practicable.
            </p>

            <h2>6. How long we keep your data</h2>
            <ul>
              <li>
                <strong>Enquiries that do not become a project:</strong>{" "}
                deleted after <strong>24 months</strong> of inactivity.
              </li>
              <li>
                <strong>Customer project records:</strong> retained for{" "}
                <strong>7 years</strong> after project completion to meet
                HMRC, building-regulations and limitation-period requirements.
              </li>
              <li>
                <strong>Fire-door installation compliance packs:</strong>{" "}
                retained for the lifetime of the building or until ownership
                changes, whichever is shorter, in line with the Regulatory
                Reform (Fire Safety) Order 2005.
              </li>
              <li>
                <strong>Website analytics:</strong> retained at Google for up
                to 14 months in aggregated form.
              </li>
            </ul>

            <h2>7. How we keep your data safe</h2>
            <p>
              We use HTTPS/TLS for all traffic to and from this website, role-
              based access controls for our internal systems, multi-factor
              authentication for staff accounts, and encrypted backups. Where
              we share data with suppliers, we put written data-processing
              agreements in place.
            </p>

            <h2>8. Your rights</h2>
            <p>Under the UK GDPR you have the right to:</p>
            <ul>
              <li>be informed about how your data is used (this notice);</li>
              <li>access a copy of the personal data we hold about you;</li>
              <li>have inaccurate or incomplete data corrected;</li>
              <li>have your data erased in certain circumstances;</li>
              <li>restrict or object to certain processing;</li>
              <li>data portability for data you provided to us; and</li>
              <li>
                withdraw consent at any time, where consent is the lawful
                basis we relied on.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href="mailto:office@focusrefurbishmentltd.com">
                office@focusrefurbishmentltd.com
              </a>
              . We will respond within one calendar month. There is normally
              no fee.
            </p>
            <p>
              If you are not satisfied with our response you have the right to
              complain to the UK Information Commissioner&rsquo;s Office (ICO):
            </p>
            <ul>
              <li>
                Website:{" "}
                <a
                  href="https://ico.org.uk/make-a-complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ico.org.uk/make-a-complaint
                </a>
              </li>
              <li>Helpline: 0303 123 1113</li>
            </ul>

            <h2>9. Cookies and tracking</h2>
            <p>
              We use a small number of cookies and similar technologies. Non-
              essential cookies (analytics, advertising and the live chat
              widget) only run if you accept them in our consent banner. See
              the <a href="/cookie-policy">Cookie Policy</a> for the full
              list and how to change your settings.
            </p>
            <div className="not-prose mt-4">
              <Button
                variant="gold-outline"
                size="default"
                onClick={openCookiePreferences}
              >
                Manage cookie preferences
              </Button>
            </div>

            <h2>10. Children</h2>
            <p>
              Our services are aimed at adults. We do not knowingly collect
              personal data from anyone under 16. If you believe a child has
              provided us with personal data, please contact us and we will
              delete it.
            </p>

            <h2>11. Changes to this notice</h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &ldquo;last updated&rdquo; date at the top shows when it was
              last changed. Material changes will be highlighted on the site
              or notified to you directly where appropriate.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
