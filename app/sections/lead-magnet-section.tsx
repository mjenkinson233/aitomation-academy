"use client";

import { LeadMagnetForm } from "../components/lead-magnet-form";
import { Check } from "lucide-react";

const benefits = [
  "7 production-ready prompts for SEO blog posts",
  "Step-by-step keyword research workflow using Semrush data",
  "A Claude Code skill that writes and publishes articles automatically",
  "The exact system behind every article on this site",
];

export function LeadMagnetSection() {
  return (
    <section id="join" data-section="lead_magnet" className="relative py-28 bg-slate-900">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side — Value prop */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-orange-400" />
                <span className="text-sm font-medium tracking-wide text-orange-400 uppercase">
                  Free Download
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-display tracking-tight sm:text-4xl lg:text-5xl leading-[1.1]">
                Get{" "}
                <span className="text-orange-400">The Claude Content System</span>
              </h2>

              <p className="mb-10 text-lg text-slate-400 leading-relaxed max-w-lg">
                Go from zero to publishing SEO-optimized blog posts with Claude
                in one afternoon. Prompts, skills, and the full workflow
                — ready to copy and use.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20">
                      <Check className="h-3 w-3 text-orange-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side — Form */}
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-2xl">
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Download the free PDF
              </h3>
              <p className="mb-6 text-slate-500">
                Enter your details below and download The Claude Content System
                instantly.
              </p>
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
