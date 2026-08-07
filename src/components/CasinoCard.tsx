"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Casino } from "@/data/casinos";
import { HeartIcon, SpadeIcon, StarIcon } from "./Icons";

const STORAGE_KEY = "bcfuk-saved-casinos";

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating / 2);
  return (
    <div className="flex items-center justify-center gap-0.5 text-accent" aria-label={`${rating} out of 10`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${i < filled ? "opacity-100" : "opacity-25"}`} />
      ))}
    </div>
  );
}

export function CasinoCard({ casino }: { casino: Casino }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const ids: string[] = raw ? JSON.parse(raw) : [];
      setSaved(ids.includes(casino.id));
    } catch {
      setSaved(false);
    }
  }, [casino.id]);

  function toggleSaved(e: React.MouseEvent | React.KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const ids: string[] = raw ? JSON.parse(raw) : [];
      const next = saved ? ids.filter((id) => id !== casino.id) : [...ids, casino.id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaved(!saved);
      window.dispatchEvent(new Event("bcfuk-saved-updated"));
    } catch {
      /* ignore */
    }
  }

  return (
    <a
      href={casino.href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${casino.name} — Claim bonus`}
      className={`glass-card group relative grid w-full grid-cols-[72px_minmax(0,1fr)_auto] items-start gap-x-2.5 gap-y-2 overflow-hidden p-3 transition-transform duration-300 ease-out will-change-transform hover:z-10 hover:scale-[1.02] sm:grid-cols-[110px_minmax(0,1fr)_auto] sm:gap-x-4 sm:gap-y-3 sm:p-5 sm:hover:scale-[1.03] ${
        casino.featured ? "featured-glow" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
        <SpadeIcon className="absolute -right-2 top-3 h-14 w-14 rotate-12 text-accent" />
        <SpadeIcon className="absolute -left-2 bottom-6 h-12 w-12 -rotate-12 text-accent" />
      </div>

      {/* Logo */}
      <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-lg bg-black/50 p-1.5 transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-[110px] sm:rounded-xl">
        <Image
          src={casino.logo}
          alt={`${casino.name} logo`}
          width={96}
          height={48}
          className="max-h-10 w-auto object-contain sm:max-h-14"
          unoptimized
        />
      </div>

      {/* Name + offer */}
      <div className="relative z-10 min-w-0 self-center">
        <h3 className="truncate font-display text-base font-semibold text-accent sm:text-xl">{casino.name}</h3>
        <p className="mt-0.5 text-[13px] font-semibold leading-snug text-white sm:mt-1 sm:text-base">{casino.offer}</p>
      </div>

      {/* Rating */}
      <div className="relative z-10 shrink-0 self-center text-center">
        <div className="font-display text-[1.75rem] font-bold leading-none text-accent sm:text-4xl">
          {casino.rating.toFixed(1)}
        </div>
        <Stars rating={casino.rating} />
        <div className="mt-0.5 flex justify-center gap-0.5 text-accent/50 sm:hidden">
          <SpadeIcon className="h-2 w-2" />
          <SpadeIcon className="h-2 w-2" />
          <SpadeIcon className="h-2 w-2" />
        </div>
      </div>

      {/* Heart under logo — does not navigate */}
      <span
        role="button"
        tabIndex={0}
        onClick={toggleSaved}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleSaved(e);
        }}
        aria-label={saved ? "Remove from saved" : "Save casino"}
        className={`relative z-20 mx-auto flex h-9 w-9 items-center justify-center rounded-lg border transition sm:h-11 sm:w-11 sm:rounded-xl ${
          saved
            ? "border-emerald/60 bg-emerald/15 text-emerald"
            : "border-accent/35 text-accent hover:bg-accent/10"
        }`}
      >
        <HeartIcon className="h-4 w-4 sm:h-5 sm:w-5" filled={saved} />
      </span>

      {/* CTA styled span (card itself is the link) */}
      <span className="btn-primary relative z-10 col-span-2 flex h-10 items-center justify-center gap-1.5 rounded-lg text-xs font-bold tracking-wide uppercase transition group-hover:brightness-110 sm:h-11 sm:rounded-xl sm:text-base">
        Claim Bonus <span aria-hidden>›</span>
      </span>
    </a>
  );
}
