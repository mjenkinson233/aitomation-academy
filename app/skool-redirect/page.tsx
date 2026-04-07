"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { siteConfig } from "@/lib/site";

export default function SkoolRedirect() {
  useEffect(() => {
    posthog.capture("skool_redirect_viewed");
    window.location.href = siteConfig.social.skool;
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </main>
  );
}
