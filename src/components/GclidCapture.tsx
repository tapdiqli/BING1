"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import {
  clearGclid,
  GCLID_COOKIE,
  getCookie,
  persistGclid,
  pickClickId,
} from "@/lib/gclid";

const COOKIE_CONSENT_KEY = "bcfuk-cookie-consent";

/**
 * Captures msclkid from the URL (Bing Ads) and persists it.
 * URL always wins over a previously stored cookie when a new id is present.
 */
export function GclidCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    let consent = "";
    try {
      consent = localStorage.getItem(COOKIE_CONSENT_KEY) ?? "";
    } catch {
      consent = "";
    }

    if (consent === "declined") {
      clearGclid();
      return;
    }

    const fromUrl = pickClickId(searchParams);
    if (fromUrl) {
      persistGclid(fromUrl);
      return;
    }

    const stored = getCookie(GCLID_COOKIE);
    if (stored) {
      persistGclid(stored);
    }
  }, [searchParams]);

  return null;
}
