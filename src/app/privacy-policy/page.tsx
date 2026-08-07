import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How bestcasinofinderuk.com collects, uses and protects personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 2026"
      intro='This Privacy Policy explains how bestcasinofinderuk.com ("we", "us", "our") collects, uses, stores and protects personal data when you visit https://bestcasinofinderuk.com (the "Website"). It covers visitors, users and the tools available on the site.'
    >
      <LegalSection title="1. Who We Are (Data Controller)">
        <p>
          Website: https://bestcasinofinderuk.com
          <br />
          Website name: bestcasinofinderuk.com
          <br />
          Business model: Gambling comparison, reviews and affiliate marketing
        </p>
        <p>bestcasinofinderuk.com acts as the Data Controller for personal data processed through this Website.</p>
        <p>
          Privacy contact:{" "}
          <a href="mailto:privacy@bestcasinofinderuk.com" className="text-accent underline underline-offset-2">
            privacy@bestcasinofinderuk.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="2. Age Restriction (18+ Only)">
        <p>
          This Website is intended solely for people aged 18 or older. We do not knowingly collect personal data from
          anyone under 18. If we learn that a minor’s data has been collected, we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection title="3. Legal Bases for Processing Personal Data">
        <p>We process personal data only where UK GDPR (and, where relevant, EU GDPR) allows, including:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Consent</strong> — for example optional newsletters or non-essential cookies
          </li>
          <li>
            <strong className="text-white">Performance of a contract</strong> — to respond to enquiries you send us
          </li>
          <li>
            <strong className="text-white">Legitimate interests</strong> — to run, secure, analyse and improve the Website
          </li>
          <li>
            <strong className="text-white">Legal obligations</strong> — where the law requires us to keep or disclose data
          </li>
          <li>
            <strong className="text-white">Fraud prevention &amp; security</strong> — to protect users, partners and the
            integrity of our services
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Information We Collect">
        <p className="font-semibold text-white">4.1 Information you provide voluntarily</p>
        <p>
          You may share details when emailing us or using contact forms — for example your name, email address and the
          message content you choose to send.
        </p>
        <p className="font-semibold text-white">4.2 Information collected automatically</p>
        <p>When you browse the Website we may collect:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>IP address</li>
          <li>Device and browser information</li>
          <li>Operating system and language settings</li>
          <li>Pages visited, time on site and referral URLs</li>
          <li>Approximate location (country or region)</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Cookies and Tracking Technologies">
        <p>
          We use cookies and similar technologies for core site functions, traffic analysis and affiliate measurement.
          You can manage or disable cookies in your browser settings. See our{" "}
          <a href="/cookies-policy" className="text-accent underline underline-offset-2">
            Cookies Policy
          </a>{" "}
          for more detail.
        </p>
      </LegalSection>

      <LegalSection title="6. Affiliate Links &amp; Third-Party Operators">
        <p>
          bestcasinofinderuk.com is an affiliate website. When you follow a partner link you leave our site. Any data
          you then provide is collected by that operator under its own privacy policy. We do not control third-party
          sites or their data practices.
        </p>
      </LegalSection>

      <LegalSection title="7. Sharing of Personal Data">
        <p>
          We share personal data only when needed — for example with analytics providers, affiliate tracking partners,
          hosting/IT suppliers, or authorities where the law requires it. We do not sell personal data.
        </p>
      </LegalSection>

      <LegalSection title="8. Data Retention">
        <p>
          We keep personal data only as long as needed for the purposes in this policy, or as required by applicable
          law.
        </p>
      </LegalSection>

      <LegalSection title="9. Your Rights">
        <p>Depending on your location, you may have rights to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access, correct or delete personal data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a href="mailto:privacy@bestcasinofinderuk.com" className="text-accent underline underline-offset-2">
            privacy@bestcasinofinderuk.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="10. Data Security">
        <p>
          We use appropriate technical and organisational measures to protect personal data from unauthorised access,
          loss or misuse. No online system can be guaranteed completely secure.
        </p>
      </LegalSection>

      <LegalSection title="11. International Data Transfers">
        <p>
          Data may be processed outside your country of residence. Where that happens, we take steps to apply suitable
          safeguards under applicable data-protection law.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to This Privacy Policy">
        <p>
          We may update this policy from time to time. Changes will appear on this page with a revised “Last updated”
          date. Continued use of the Website after changes means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Us">
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
