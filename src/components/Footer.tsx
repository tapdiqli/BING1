import Image from "next/image";
import Link from "next/link";
import { footerLogos } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#040810]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-xl border border-accent/25 bg-white/[0.03] px-5 py-4 text-center text-sm leading-relaxed text-muted">
          <p className="mb-1 font-semibold text-accent">18+ Advertiser Disclosure</p>
          <p>
            This site is a free comparison resource. We receive advertising compensation from featured companies,
            which may influence brand placement and rankings. Listing a brand does not mean endorsement. Gambling is
            entertainment — play within your means.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">UK Casino Finder</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Independent reviews of UK-licensed online casinos. For entertainment purposes only.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-silver">
              <li>
                <Link href="/about" className="hover:text-accent">
                  Information
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling" className="hover:text-accent">
                  Safer Gambling
                </Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="hover:text-accent">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Safe Gambling</h3>
            <ul className="mt-3 space-y-2 text-sm text-silver">
              <li>
                <Link href="/responsible-gambling" className="hover:text-accent">
                  Responsible Gambling
                </Link>
              </li>
              <li>
                <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  BeGambleAware
                </a>
              </li>
              <li>
                <a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  GamStop
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
            Licensed &amp; Committed to Responsible Gambling
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {footerLogos.map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 transition hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-muted">
          <p>18+ · Gambling involves risk. Please only gamble with money you can afford to lose.</p>
          <p>
            All casinos listed are licensed by the UK Gambling Commission. Affiliate disclosure: we may earn a
            commission if you sign up through our links.
          </p>
          <p>© {new Date().getFullYear()} bestcasinofinderuk.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
