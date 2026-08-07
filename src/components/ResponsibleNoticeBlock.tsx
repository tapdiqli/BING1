import { WarningIcon } from "@/components/Icons";

const links = [
  { label: "BeGambleAware.org", href: "https://www.begambleaware.org/" },
  { label: "GamCare.org.uk", href: "https://www.gamcare.org.uk/" },
  { label: "GamStop.co.uk", href: "https://www.gamstop.co.uk/" },
];

export function ResponsibleNoticeBlock() {
  return (
    <section className="px-4 pb-16 pt-4">
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 text-accent">
            <WarningIcon className="h-5 w-5 text-amber-300" />
            <h3 className="font-display text-lg font-semibold">Responsible Gaming Notice</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-silver">
            Gambling is for adults aged 18+ and should be treated as entertainment — not income. If play ever feels out
            of control, pause and reach out for free, confidential support.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((link) => (
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
            bestcasinofinderuk.com is a free online resource funded by advertising. Compensation from featured companies
            may influence rankings and placement. Gambling is for entertainment only. Play responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}
