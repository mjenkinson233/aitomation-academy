"use client";

import { 
  FileText, 
  MessageSquare, 
  Lightbulb, 
  Clock, 
  Shield, 
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Research & Writing Workflows",
    description: "Turn messy notes and scattered thoughts into structured drafts. Claude helps you research faster and write clearer.",
  },
  {
    icon: MessageSquare,
    title: "Content Creation Systems",
    description: "Build repeatable workflows for ideation, scripting, and repurposing. Stop starting from scratch every time.",
  },
  {
    icon: Lightbulb,
    title: "Decision Support",
    description: "Use Claude to organize thinking, weigh options, and make better decisions faster.",
  },
  {
    icon: Clock,
    title: "Time-Saving Templates",
    description: "Copy-paste prompts and workflows that work immediately. No setup, no configuration, just results.",
  },
  {
    icon: Shield,
    title: "No Coding Required",
    description: "Everything is built for non-technical professionals. If you can use email, you can use these workflows.",
  },
  {
    icon: Sparkles,
    title: "Claude-First Approach",
    description: "Not generic AI tips. Everything is optimized specifically for Claude's strengths: writing, analysis, and nuanced work.",
  },
];

export function WhatYouGet() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            What You Get
          </h2>
          <p className="text-lg text-slate-600">
            A practical system for using Claude in your real work. Not theory. 
            Not hype. Just workflows that save time and improve output.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-orange-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 transition-colors group-hover:bg-orange-100">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-slate-600">
            Join 300+ professionals already using these workflows.
          </p>
          <a
            href="#join"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white hover:bg-slate-800 transition-all hover:shadow-lg"
          >
            Get Free Access
          </a>
        </div>
      </div>
    </section>
  );
}
