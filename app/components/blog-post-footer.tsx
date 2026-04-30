"use client";

import Link from "next/link";
import { Mail, Users, ArrowRight } from "lucide-react";
import { LeadMagnetForm } from "./lead-magnet-form";

export function BlogPostFooter({ blogSlug }: { blogSlug?: string }) {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      {/* Community CTA */}
      <Link
        href="/skool-redirect"
        className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-orange-400 hover:shadow-lg transition-all"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
          <Users className="h-5 w-5 text-orange-600" />
        </div>
        <h3 className="mb-1 text-lg font-display normal-case text-slate-900">
          Join the free community
        </h3>
        <p className="mb-3 text-sm text-slate-500">
          400+ professionals learning Claude together. Free to join.
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:underline">
          Open community
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>

      {/* Lead magnet CTA */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
          <Mail className="h-5 w-5 text-orange-600" />
        </div>
        <h3 className="mb-1 text-lg font-display normal-case text-slate-900">
          Grab the playbook
        </h3>
        <p className="mb-4 text-sm text-slate-500">
          The Claude Content System — free PDF to your inbox.
        </p>
        <LeadMagnetForm
          variant="hero"
          source="website_lead_magnet_blog"
          postHogSource={`blog_footer:${blogSlug || "unknown"}`}
        />
      </div>
    </div>
  );
}
