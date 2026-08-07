import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of bestcasinofinderuk.com.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="August 2026"
      intro='These Terms & Conditions ("Terms") govern access to and use of https://bestcasinofinderuk.com (the "Website"), operated as bestcasinofinderuk.com ("we", "us", "our"). By using the Website you confirm that you have read, understood and agree to these Terms.'
    >
      <LegalSection title="1. Eligibility">
        <p>You must be at least 18 years old to use this Website. By continuing, you confirm that:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You are 18 or older</li>
          <li>Online gambling is lawful in your jurisdiction</li>
          <li>You access the Website at your own risk and responsibility</li>
        </ul>
        <p>We may restrict or end access if these conditions are not met.</p>
      </LegalSection>

      <LegalSection title="2. Nature of the Website">
        <p>
          bestcasinofinderuk.com is an independent comparison and affiliate site. We publish informational content,
          reviews, comparisons and promotional materials. We do not operate casinos, accept bets or process player
          deposits. All gambling activity happens on third-party operator websites.
        </p>
      </LegalSection>

      <LegalSection title="3. Affiliate Disclosure">
        <p>
          The Website includes affiliate links. If you click through and register or deposit with a partner, we may earn
          a commission. Commercial relationships can influence ranking and placement. Any relationship you form with a
          third-party operator is solely between you and that operator.
        </p>
      </LegalSection>

      <LegalSection title="4. No Professional Advice">
        <p>
          Content is for general information and entertainment only. Nothing on the Website is legal, financial or
          gambling advice. You alone are responsible for your decisions and actions.
        </p>
      </LegalSection>

      <LegalSection title="5. Accuracy of Information">
        <p>
          We work to keep information current, but we do not guarantee completeness or accuracy. Bonuses, terms and
          promotions can change without notice at the operator’s discretion. Always verify details on the operator’s
          site before signing up.
        </p>
      </LegalSection>

      <LegalSection title="6. Third-Party Websites">
        <p>
          Links may send you to external sites we do not control. We are not responsible for their content, policies or
          practices. Review their terms and privacy notices before use.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <p>
          Text, graphics, logos and design on the Website are owned by or licensed to bestcasinofinderuk.com. You may
          view the site for personal, non-commercial use. Copying, redistributing or exploiting content without written
          permission is not allowed.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, bestcasinofinderuk.com is not liable for losses arising from use of
          the Website, gambling-related losses, technical issues, or the actions of third-party operators. Use of the
          Website is at your own risk.
        </p>
      </LegalSection>

      <LegalSection title="9. Indemnification">
        <p>
          You agree to indemnify and hold bestcasinofinderuk.com harmless from claims, damages, losses or expenses
          arising from your use of the Website, your breach of these Terms, or your dealings with third-party gambling
          operators.
        </p>
      </LegalSection>

      <LegalSection title="10. Responsible Gambling">
        <p>
          We promote safer play. If gambling stops feeling healthy, seek help from recognised organisations such as{" "}
          <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            BeGambleAware
          </a>
          ,{" "}
          <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            GamCare
          </a>{" "}
          or{" "}
          <a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            GamStop
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to the Terms">
        <p>
          We may update these Terms at any time. Changes take effect when published on this page with a new “Last
          updated” date. Continued use of the Website means you accept the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing Law">
        <p>
          These Terms are governed by the laws of England and Wales, without regard to conflict-of-law principles.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Information">
        <p>
          Email:{" "}
          <a href="mailto:hello@bestcasinofinderuk.com" className="text-accent underline underline-offset-2">
            hello@bestcasinofinderuk.com
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
