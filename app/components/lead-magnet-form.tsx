"use client";

import { useState } from "react";
import { ArrowRight, Check, Download, Loader2 } from "lucide-react";
import posthog from "posthog-js";

const PDF_URL =
  "https://2hcvoadnhrt1cvd2.public.blob.vercel-storage.com/the-claude-content-system.pdf";

export function LeadMagnetForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Integrate with Brevo API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      posthog.identify(email, { name, email });
      posthog.capture("lead_form_submitted", { name, email, source: "lead_magnet_section" });
      setStatus("success");
      // Trigger PDF download
      const link = document.createElement("a");
      link.href = PDF_URL;
      link.download = "The-Claude-Content-System.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-green-900">
          Your download has started!
        </h3>
        <p className="text-green-700">
          The Claude Content System is downloading now.
        </p>
        <p className="mt-2 text-sm text-green-600">
          Didn&apos;t start?{" "}
          <a
            href={PDF_URL}
            download="The-Claude-Content-System.pdf"
            className="underline font-medium"
          >
            Click here to download
          </a>
        </p>
        <p className="mt-4 text-sm text-green-600">
          Join the free Skool community to get help using it
        </p>
        <a
          href="https://www.skool.com/aitomation-academy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white cursor-pointer hover:bg-green-700 transition-colors"
        >
          Join Free Community
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          First Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Marko"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="marko@example.com"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white cursor-pointer hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Download Free PDF
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-500">
        No spam. Unsubscribe anytime. We&apos;ll never share your info.
      </p>
    </form>
  );
}
