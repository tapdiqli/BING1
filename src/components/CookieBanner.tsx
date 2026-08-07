"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "bcfuk-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#071018]/95 px-4 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm leading-relaxed text-silver">
          🍪 We use cookies to improve browsing, personalise content and understand traffic. By choosing
          &quot;Accept All&quot;, you agree to our cookie use.{" "}
          <Link href="/cookies-policy" className="text-accent underline underline-offset-2">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => choose("declined")} className="btn-ghost rounded-xl px-5 py-2.5 text-sm font-semibold">
            Decline
          </button>
          <button type="button" onClick={() => choose("accepted")} className="btn-primary rounded-xl px-5 py-2.5 text-sm">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
