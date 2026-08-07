import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "How bestcasinofinderuk.com uses cookies and similar technologies.",
};

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      title="Cookies Policy"
      updated="August 2026"
      intro='This Cookies Policy explains how bestcasinofinderuk.com ("we", "us", "our") uses cookies and similar technologies on https://bestcasinofinderuk.com (the "Website"). Read it alongside our Privacy Policy.'
    >
      <LegalSection title="1. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help sites work properly,
          improve usability, measure traffic and support advertising or affiliate tracking.
        </p>
      </LegalSection>

      <LegalSection title="2. Types of Cookies We Use">
        <p className="font-semibold text-white">2.1 Strictly necessary cookies</p>
        <p>
          Required for basic functions such as navigation, security and remembering cookie choices. These cannot be
          switched off through our systems.
        </p>
        <p className="font-semibold text-white">2.2 Analytics cookies</p>
        <p>Help us understand how people use the Website, including:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Pages visited</li>
          <li>Time spent on the site</li>
          <li>Traffic sources</li>
          <li>General interaction patterns</li>
        </ul>
        <p>This information is typically used in aggregated form to improve content and performance.</p>
        <p className="font-semibold text-white">2.3 Advertising &amp; affiliate cookies</p>
        <p>These may be used to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Track referrals to third-party gambling operators</li>
          <li>Measure affiliate performance and commissions</li>
          <li>Understand marketing effectiveness</li>
        </ul>
        <p className="font-semibold text-white">2.4 Functional cookies</p>
        <p>
          Remember preferences such as saved casino shortlists or previous consent choices to make return visits smoother.
        </p>
      </LegalSection>

      <LegalSection title="3. Third-Party Cookies">
        <p>
          Trusted providers — for example analytics, affiliate networks or hosting partners — may set cookies on the
          Website. Those parties are responsible for their own cookies under their privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="4. How You Can Control Cookies">
        <p>You can control cookies at any time by:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Adjusting browser settings to block or delete cookies</li>
          <li>Using our cookie banner to accept or decline non-essential cookies</li>
          <li>Opting out of certain advertising cookies via browser or device settings</li>
        </ul>
        <p>Disabling some cookies may affect how parts of the Website work.</p>
      </LegalSection>

      <LegalSection title="5. Consent">
        <p>
          Where required by law, we show a cookie banner so you can accept or decline non-essential cookies. Essential
          cookies may still be used for core functionality.
        </p>
      </LegalSection>

      <LegalSection title="6. Updates to This Cookies Policy">
        <p>
          We may revise this policy to reflect technology, legal or operational changes. Updates will be posted here
          with a new “Last updated” date.
        </p>
      </LegalSection>

      <LegalSection title="7. Contact Us">
        <p>
          Email:{" "}
          <a href="mailto:privacy@bestcasinofinderuk.com" className="text-accent underline underline-offset-2">
            privacy@bestcasinofinderuk.com
          </a>
          <br />
          Website:{" "}
          <a href="https://bestcasinofinderuk.com" className="text-accent underline underline-offset-2">
            https://bestcasinofinderuk.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
