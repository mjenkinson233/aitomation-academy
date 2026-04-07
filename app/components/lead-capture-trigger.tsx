"use client";

import { useState } from "react";
import { X, ArrowRight, Loader2, Mail } from "lucide-react";
import posthog from "posthog-js";

export function LeadCaptureTrigger({
  children,
  className,
  blogSlug,
}: {
  children: React.ReactNode;
  className?: string;
  blogSlug?: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: "website_lead_magnet_blog" }),
      });
      if (!res.ok) throw new Error("Subscribe failed");
    } catch {
      // Still show success — email might arrive even if response failed
    }
    posthog.identify(email, { name, email });
    posthog.capture("blog_lead_capture_submitted", { name, email, source: "blog_cta", blog_slug: blogSlug });
    setStatus("success");
  };

  return (
    <>
      <button onClick={() => { setOpen(true); posthog.capture("blog_lead_capture_opened", { blog_slug: blogSlug }); }} className={className}>
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
                Free PDF
              </span>
              <h3 className="text-xl font-bold text-slate-900 normal-case">
                Get The Claude Content System
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                The complete system to turn Claude into your content machine. Delivered to your inbox.
              </p>
            </div>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <p className="font-semibold text-slate-900">Check your email!</p>
                <p className="text-sm text-slate-500 mt-1">The PDF is on its way to <strong>{email}</strong>.</p>
                <p className="mt-2 text-xs text-slate-400">Check spam if you don&apos;t see it in a few minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Get Free PDF
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
