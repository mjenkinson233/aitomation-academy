"use client";

import { useRef } from "react";
import posthog from "posthog-js";

export function NewsletterForm({ blogSlug }: { blogSlug?: string } = {}) {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    posthog.capture("newsletter_subscribe_clicked", { email, source: "blog_newsletter", blog_slug: blogSlug });
  };

  return (
    <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
      <h2 className="text-xl font-display text-slate-900 mb-2 normal-case">
        Get more articles like this
      </h2>
      <p className="text-slate-500 mb-6 text-sm">
        Practical Claude workflows, prompts, and strategies for non-technical
        professionals. No spam, no hype — just useful stuff.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          ref={emailRef}
          type="email"
          placeholder="Your email address"
          className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors shrink-0 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-slate-400 mt-3">
        Join 400+ professionals already subscribed.
      </p>
    </div>
  );
}
