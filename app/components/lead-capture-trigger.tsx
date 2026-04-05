"use client";

import { useState } from "react";
import { X, ArrowRight, Loader2, Check } from "lucide-react";

export function LeadCaptureTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: wire up to Brevo
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
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
                Free Download
              </span>
              <h3 className="text-xl font-bold text-slate-900 normal-case">
                Get the Claude Workflow Starter
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                7 copy-paste workflows. No coding. Instant access.
              </p>
            </div>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <p className="font-semibold text-slate-900">Check your inbox!</p>
                <p className="text-sm text-slate-500 mt-1">Your workflows are on the way.</p>
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
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                      Get Free Access
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
