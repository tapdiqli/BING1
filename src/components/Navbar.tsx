"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, HeartIcon, MenuIcon, SpadeIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/responsible-gambling", label: "Responsible Gambling" },
  { href: "/contact", label: "Contact" },
  { href: "/saved", label: "Saved" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#050a14]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
        <Link
          href="/"
          className="flex max-w-[85%] items-center gap-1.5 rounded-lg border border-accent/40 bg-white/5 px-2.5 py-1 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-1.5"
        >
          <SpadeIcon className="h-3.5 w-3.5 shrink-0 text-accent sm:h-4 sm:w-4" />
          <span className="truncate font-display text-xs font-semibold tracking-tight text-accent-soft sm:text-base">
            bestcasinofinderuk<span className="text-silver">.com</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium text-silver transition hover:text-accent"
            >
              {link.label === "Saved" && <HeartIcon className="h-4 w-4" />}
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/15 p-2 text-silver md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0b1220] px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-silver hover:bg-white/5 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label === "Saved" && <HeartIcon className="h-4 w-4" />}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
