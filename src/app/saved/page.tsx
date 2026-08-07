"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CasinoCard } from "@/components/CasinoCard";
import { casinos } from "@/data/casinos";

const STORAGE_KEY = "bcfuk-saved-casinos";

export default function SavedPage() {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function readSaved() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        setIds(raw ? JSON.parse(raw) : []);
      } catch {
        setIds([]);
      }
    }

    readSaved();
    setReady(true);

    function onFocus() {
      readSaved();
    }

    window.addEventListener("storage", readSaved);
    window.addEventListener("focus", onFocus);
    window.addEventListener("bcfuk-saved-updated", readSaved);
    return () => {
      window.removeEventListener("storage", readSaved);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("bcfuk-saved-updated", readSaved);
    };
  }, []);

  const saved = casinos.filter((c) => ids.includes(c.id));

  return (
    <main className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">My Saved Casinos</h1>
          <p className="mt-3 text-silver">
            Keep a personal shortlist of UK casino brands you want to revisit. Tap the heart on any casino card to add
            or remove a site — your list is stored in this browser only.
          </p>
        </div>

        {!ready ? (
          <p className="mt-10 text-center text-muted">Loading your shortlist…</p>
        ) : saved.length === 0 ? (
          <div className="glass-card mt-10 space-y-4 p-8 text-center">
            <p className="text-silver">
              No saved casinos yet. Browse our top-rated list and tap the heart icon to build your shortlist.
            </p>
            <Link
              href="/#top-casinos"
              className="btn-primary inline-flex rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide"
            >
              View Top Casinos
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-8 text-center text-sm text-accent-muted">
              {saved.length} saved {saved.length === 1 ? "casino" : "casinos"}
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {saved.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted">
              Tip: clearing browser data will also clear this shortlist.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
