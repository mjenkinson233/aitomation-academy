"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { siteConfig } from "@/lib/site";

export default function SkoolRedirect() {
  useEffect(() => {
    posthog.capture("skool_redirect_viewed");
    // Brief delay to let Google Ads and PostHog tags fire before redirecting
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
