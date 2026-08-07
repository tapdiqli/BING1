import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsible Gambling",
  description:
    "Safer gambling guidance, warning signs, player tools and support organisations for UK players on bestcasinofinderuk.com.",
};

const warningSigns = [
  "Spending more than you can comfortably afford to lose",
  "Chasing losses or increasing stakes to recover money",
  "Borrowing funds specifically to gamble",
  "Play affecting relationships, work, sleep or mood",
  "Hiding the amount of time or money spent gambling",
];

const controlTools = [
  {
    title: "Deposit limits",
    description: "Set daily, weekly or monthly caps on how much you can add to an account.",
  },
  {
    title: "Reality checks",
    description: "Timed reminders that help you keep track of how long you have been playing.",
  },
  {
    title: "Self-exclusion",
    description: "Block access to gambling accounts for a chosen period when you need a hard stop.",
  },
  {
    title: "Cool-off periods",
    description: "Take a short break from an account without a long-term self-exclusion.",
  },
];

const helpOrgs = [
  {
    name: "GamStop",
    blurb: "Free national self-exclusion scheme for UK online gambling.",
    href: "https://www.gamstop.co.uk/",
    display: "www.gamstop.co.uk",
  },
  {
    name: "BeGambleAware",
    blurb: "Advice and the National Gambling Helpline: 0808 8020 133 (free, 24/7).",
    href: "https://www.begambleaware.org/",
    display: "www.begambleaware.org",
  },
  {
    name: "GamCare",
    blurb: "Support, information and counselling for anyone affected by gambling.",
    href: "https://www.gamcare.org.uk/",
    display: "www.gamcare.org.uk",
  },
  {
    name: "Gambling Therapy",
    blurb: "Free global support for people impacted by gambling harm.",
    href: "https://www.gamblingtherapy.org/",
    display: "www.gamblingtherapy.org",
  },
];

export default function ResponsibleGamblingPage() {
  return (
    <main className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Responsible Gambling</h1>
          <p className="mt-5 text-base leading-relaxed text-silver">
            Gambling should stay entertaining. If it stops feeling fun, pause and get support.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-silver sm:text-base">
            At bestcasinofinderuk.com we only feature casinos licensed by the UK Gambling Commission and encourage use
            of national tools such as GamStop. Safer play is part of every recommendation we make.
          </p>
        </div>

        <section className="glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-accent">Signs of Problem Gambling</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-silver sm:text-base">
            {warningSigns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-accent">Tools to Stay in Control</h2>
          <p className="mt-3 text-sm text-silver sm:text-base">
            UKGC-licensed operators must offer player-protection tools. Look for these inside your account settings:
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {controlTools.map((tool) => (
              <div key={tool.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm text-muted">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-accent">Get Help</h2>
          <div className="mt-5 grid gap-4">
            {helpOrgs.map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-accent/25 bg-accent/5 p-5 transition hover:border-accent/50"
              >
                <h3 className="font-display text-lg font-semibold text-accent">{org.name}</h3>
                <p className="mt-2 text-sm text-silver">{org.blurb}</p>
                <p className="mt-2 text-sm font-medium text-accent-soft underline underline-offset-2">{org.display}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="glass-card p-6 text-center sm:p-8">
          <h2 className="font-display text-xl font-semibold text-accent">18+ Only</h2>
          <p className="mt-3 text-sm text-silver sm:text-base">
            This website is intended for adults aged 18 and over. Underage gambling is illegal in the United Kingdom.
          </p>
          <p className="mt-4 text-sm text-muted">
            Prefer to browse safer-play content later? Return to our{" "}
            <Link href="/" className="text-accent underline underline-offset-2">
              homepage
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
