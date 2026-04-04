"use client";

import {
  FileText,
  MessageSquare,
  Lightbulb,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FileText,
    title: "Research & Writing Workflows",
    description:
      "Turn messy notes and scattered thoughts into structured drafts. Claude helps you research faster and write clearer.",
  },
  {
    icon: MessageSquare,
    title: "Content Creation Systems",
    description:
      "Build repeatable workflows for ideation, scripting, and repurposing. Stop starting from scratch every time.",
  },
  {
    icon: Lightbulb,
    title: "Decision Support",
    description:
      "Use Claude to organize thinking, weigh options, and make better decisions faster.",
  },
  {
    icon: Clock,
    title: "Time-Saving Templates",
    description:
      "Copy-paste prompts and workflows that work immediately. No setup, no configuration, just results.",
  },
  {
    icon: Shield,
    title: "No Coding Required",
    description:
      "Everything is built for non-technical professionals. If you can use email, you can use these workflows.",
  },
  {
    icon: Sparkles,
    title: "Claude-First Approach",
    description:
      "Not generic AI tips. Everything is optimized specifically for Claude's strengths: writing, analysis, and nuanced work.",
  },
];

export function WhatYouGet() {
  const PrimaryIcon = features[0].icon;
  const SecondaryIcon = features[1].icon;

  return (
    <section id="features" className="relative py-28 overflow-hidden">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned for editorial feel */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-400" />
            <span className="text-sm font-medium tracking-wide text-orange-600 uppercase">
              What You Get
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
            A practical system for using Claude in your real work
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Not theory. Not hype. Just workflows that save time and improve
            output.
          </p>
        </div>

        {/* Asymmetric layout: two prominent + four compact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Primary feature — dark, large left */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-3xl bg-slate-900 p-10 sm:p-12 overflow-hidden">
              <div className="relative">
                <PrimaryIcon className="h-8 w-8 text-orange-400 mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {features[0].title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Secondary feature — bordered, large right */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-3xl border-2 border-slate-200 bg-white p-10 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-60" />
              <div className="relative">
                <SecondaryIcon className="h-8 w-8 text-orange-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {features[1].title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Four compact features */}
          {features.slice(2).map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="lg:col-span-3">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-orange-200">
                  <Icon className="h-6 w-6 text-orange-600 mb-4" />
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA — left-aligned to match header */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <a
            href="#join"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white cursor-pointer hover:bg-orange-600 transition-colors"
          >
            Get Free Access
          </a>
          <span className="text-sm text-slate-400">
            Join 300+ professionals already using these workflows.
          </span>
        </div>
      </div>
    </section>
  );
}
