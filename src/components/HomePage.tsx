import { CasinoCard } from "@/components/CasinoCard";
import {
  ChevronIcon,
  SpadeIcon,
  StarIcon,
  TrophyIcon,
  WarningIcon,
  criterionIcons,
} from "@/components/Icons";
import { casinos } from "@/data/casinos";
import {
  bonusTypes,
  deepFeatures,
  faqs,
  newsItems,
  ratingCriteria,
  whyChoose,
} from "@/data/content";

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-silver sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="w-full px-3 pb-3 pt-5 sm:px-4 sm:pb-8 sm:pt-14">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="animate-fade-up inline-flex max-w-full items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm sm:tracking-wide">
            <SpadeIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span className="truncate">Fresh picks on the strongest UK casino deals</span>
            <SpadeIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          </div>

          <h1 className="animate-fade-up-delay-1 mt-3 font-display text-2xl font-black tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl">
            Premium UK Casino Finder
          </h1>
          <p className="animate-fade-up-delay-2 mx-auto mt-2 hidden max-w-2xl text-base text-silver sm:mt-4 sm:block sm:text-lg">
            Connecting UK players with trusted, licensed platforms — clear bonuses, no fluff.
          </p>

          <div className="mt-4 hidden flex-wrap items-center justify-center gap-4 text-sm text-silver sm:mt-6 sm:flex">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-accent">🛡</span> UK Licensed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <StarIcon className="h-4 w-4 text-accent" /> Expert Reviewed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <TrophyIcon className="h-4 w-4 text-accent" /> Top Rated Offers
            </span>
          </div>
        </div>
      </section>

      {/* Casino list */}
      <section className="w-full px-2 pb-12 sm:px-4 sm:pb-16" id="top-casinos">
        <div className="mx-auto mb-3 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 sm:mb-6 sm:gap-3">
          <h2 className="flex items-center gap-1.5 font-display text-lg font-bold text-white sm:gap-2 sm:text-3xl">
            <TrophyIcon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            Top Rated Casinos
          </h2>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent sm:rounded-lg sm:px-3 sm:py-1 sm:text-xs sm:normal-case">
            ✦ New for August 2026
          </span>
        </div>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 overflow-x-clip py-1 sm:gap-4">
          {casinos.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} />
          ))}
        </div>
      </section>

      {/* How we rate */}
      <section className="px-4 py-16">
        <SectionHeading
          title="How We Rank the Best Sites"
          subtitle="Our independent process scores every casino across six core standards"
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ratingCriteria.map((item) => {
            const Icon = criterionIcons[item.icon as keyof typeof criterionIcons] ?? StarIcon;
            return (
              <div key={item.title} className="glass-card p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="progress-track flex-1">
                        <div className="progress-fill" style={{ width: `${item.score}%` }} />
                      </div>
                      <span className="text-xs font-semibold text-accent">{item.score}/100</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bonus types */}
      <section className="px-4 py-16">
        <SectionHeading
          title="Casino Bonus Types, Explained"
          subtitle="Knowing how offers work helps you choose wisely. Always read the full terms before claiming."
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bonusTypes.map((item) => {
            const Icon = criterionIcons[item.icon as keyof typeof criterionIcons] ?? StarIcon;
            return (
              <div key={item.title} className="glass-card p-5 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-full bg-accent/10 p-3 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-accent">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">{item.description}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-silver">
          18+ only. Bonus terms and conditions apply. Gamble responsibly.
        </p>
      </section>

      {/* News */}
      <section className="px-4 py-16">
        <SectionHeading
          title="Latest UK Betting Insights"
          subtitle="Regulatory updates, industry notes and safer-gambling resources"
        />
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="glass-card p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-md border border-accent/40 px-2 py-0.5 text-xs font-semibold text-accent">
                  {item.tag}
                </span>
                <span className="text-xs text-accent-muted">{item.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="px-4 py-16">
        <SectionHeading
          title="Why Choose bestcasinofinderuk.com?"
          subtitle="Everything you need to find trusted UK-licensed casinos"
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <div key={item.title} className="glass-card p-5">
              <h3 className="font-display text-lg font-semibold text-accent">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
          {deepFeatures.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl font-semibold text-accent">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <SectionHeading title="Frequently Asked Questions" subtitle="Common questions about UK online casinos" />
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map((item) => (
            <details key={item.q} className="faq-details glass-card group overflow-hidden">
              <summary className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="flex items-start gap-3 text-left">
                  <span className="font-display text-lg font-bold text-accent">Q</span>
                  <span className="font-medium text-accent-soft">{item.q}</span>
                </span>
                <ChevronIcon className="faq-chevron h-5 w-5 shrink-0 text-accent transition" />
              </summary>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-silver">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Responsible notice */}
      <section className="px-4 pb-20 pt-8">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 text-accent">
              <WarningIcon className="h-5 w-5 text-amber-300" />
              <h3 className="font-display text-lg font-semibold">Responsible Gaming Notice</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              Gambling is for adults aged 18+ and should be treated as entertainment — not income. If play ever feels
              out of control, pause and reach out for free, confidential support.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "BeGambleAware.org", href: "https://www.begambleaware.org/" },
                { label: "GamCare.org.uk", href: "https://www.gamcare.org.uk/" },
                { label: "GamStop.co.uk", href: "https://www.gamstop.co.uk/" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost rounded-full px-4 py-1.5 text-xs font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-display text-lg font-semibold text-accent">18+ Advertiser Disclosure</h3>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              bestcasinofinderuk.com is a free online resource funded by advertising. Compensation from featured
              companies may influence rankings and placement. Gambling is for entertainment only. Play responsibly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
