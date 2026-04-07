"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Loader2, Check } from "lucide-react";
import posthog from "posthog-js";

const PDF_URL =
  "https://2hcvoadnhrt1cvd2.public.blob.vercel-storage.com/the-claude-content-system.pdf";

export function EntryPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const dismissed = localStorage.getItem("popup_dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      posthog.capture("popup_shown");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    posthog.capture("popup_dismissed");
    setIsVisible(false);
    localStorage.setItem("popup_dismissed", "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: wire up to Brevo
    await new Promise((resolve) => setTimeout(resolve, 1000));
    posthog.identify(email, { name, email, phone: phone || undefined });
    posthog.capture("popup_form_submitted", { name, email, source: "entry_popup" });
    setStatus("success");
    localStorage.setItem("popup_dismissed", "1");
    // Trigger PDF download
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "The-Claude-Content-System.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
        {/* Orange top bar */}
        <div className="h-1.5 w-full bg-orange-500" />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={handleDismiss}
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {status === "success" ? (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Check className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Downloading now!</h3>
              <p className="text-slate-500">Your Claude Content System PDF is downloading.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">Free PDF</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Get The Claude Content System
                </h2>
                <p className="text-sm text-slate-500">
                  The complete system to turn Claude into your content machine. Instant download.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white cursor-pointer hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Free Access
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
