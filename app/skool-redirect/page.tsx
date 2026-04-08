"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { siteConfig } from "@/lib/site";

export default function SkoolRedirect() {
  useEffect(() => {
    posthog.capture("skool_redirect_viewed");

    // Fire Google Ads conversion event
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "conversion", {
        send_to: "AW-18023480264/BYHDCLXt9pccEMj3oZJD",
      });
    }

    // Delay redirect to let tags fire
    setTimeout(() => {
      window.location.href = siteConfig.social.skool;
    }, 500);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </main>
  );
}
