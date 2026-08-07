import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with bestcasinofinderuk.com for general questions, safer gambling queries or partnerships.",
};

const contacts = [
  {
    title: "General Enquiries",
    email: "hello@bestcasinofinderuk.com",
    note: "Questions about our reviews, listings or website content.",
  },
  {
    title: "Responsible Gambling",
    email: "care@bestcasinofinderuk.com",
    note: "Feedback on safer-gambling resources shown on this site.",
  },
  {
    title: "Advertising & Partnerships",
    email: "partners@bestcasinofinderuk.com",
    note: "Commercial enquiries from licensed operators and agencies.",
  },
];

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      intro="Have a question, a casino suggestion, or a press enquiry? We are happy to hear from you."
    >
      <div className="grid gap-4">
        {contacts.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="font-display text-lg font-semibold text-accent">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.note}</p>
            <a
              href={`mailto:${item.email}`}
              className="mt-3 inline-block font-medium text-accent-soft underline underline-offset-2"
            >
              {item.email}
            </a>
          </div>
        ))}
      </div>

      <p>
        We aim to reply within two business days. For urgent gambling-harm support, contact{" "}
        <a
          href="https://www.begambleaware.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2"
        >
          BeGambleAware
        </a>{" "}
        or call the National Gambling Helpline on{" "}
        <a href="tel:08088020133" className="text-accent underline underline-offset-2">
          0808 8020 133
        </a>{" "}
        (free, 24/7).
      </p>

      <p>
        Please note: we cannot resolve account, payment or bonus disputes with casino operators. Contact the brand’s
        own support team, or raise concerns with the{" "}
        <a
          href="https://www.gamblingcommission.gov.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2"
        >
          UK Gambling Commission
        </a>
        .
      </p>
    </LegalPage>
  );
}
