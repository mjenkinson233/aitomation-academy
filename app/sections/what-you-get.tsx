"use client";

import { useRef, useState, useEffect } from "react";
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
    title: "You sit down to write and lose an hour figuring out where to start",
    description:
      "Use Claude to turn messy notes, ideas, voice memos, and half-finished thoughts into clear drafts you can actually work from.",
  },
  {
    icon: MessageSquare,
    title: "You know AI could help, but every prompt feels hit-or-miss",
    description:
      "Get practical workflows that give Claude structure, so you stop guessing and start getting useful output.",
  },
  {
    icon: Sparkles,
    title: "You keep creating content from scratch every single time",
    description:
      "Use Claude to brainstorm angles, write first drafts, and repurpose one idea into multiple posts without reinventing the wheel.",
  },
  {
    icon: Lightbulb,
    title: "You have too much in your head and no clear next step",
    description:
      "Use Claude to organize your thinking, compare options, and help you make decisions faster when everything feels messy.",
  },
  {
    icon: Shield,
    title: "You don't want another tool that takes a week to learn",
    description:
      "Everything is built for non-technical people. No coding. No setup rabbit hole. Just simple workflows you can use right away.",
  },
  {
    icon: Clock,
    title: "You already tried ChatGPT, but your work still feels manual",
    description:
      "This is built around Claude's actual strengths: writing, reasoning, nuance, and helping you think through complex work more clearly.",
  },
];

export function WhatYouGet() {
  const PrimaryIcon = features[0].icon;
  const SecondaryIcon = features[1].icon;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / features.length;
      setActiveIndex(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="features" className="relative py-28 overflow-x-hidden">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned for editorial feel */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-400" />
            <span className="text-sm font-medium tracking-wide text-orange-600 uppercase">
              Where Claude Actually Helps
            </span>
          </div>
          <h2 className="text-3xl font-display tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
            Where Claude actually helps
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Most people don't need "more AI." They need help with the work that keeps dragging, piling up, or staying stuck.
          </p>
        </div>

        {/* Mobile: swipeable carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto pb-2 flex gap-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="snap-start shrink-0 w-[78vw]">
                  <div className={`h-full rounded-2xl p-6 ${i === 0 ? "bg-slate-900" : "bg-white border border-slate-200"}`}>
                    <Icon className={`h-6 w-6 mb-4 ${i === 0 ? "text-orange-400" : "text-orange-600"}`} />
                    <h3 className={`text-base font-semibold mb-2 ${i === 0 ? "text-white" : "text-slate-900"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${i === 0 ? "text-slate-400" : "text-slate-500"}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* Peek spacer so last card isn't flush */}
            <div className="shrink-0 w-4" />
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / features.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-6 h-2 bg-orange-500"
                    : "w-2 h-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: asymmetric layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-5">
          {/* Primary feature — dark, large left */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-3xl bg-slate-900 p-10 sm:p-12 overflow-hidden">
              <div className="relative">
                <PrimaryIcon className="h-8 w-8 text-orange-400 mb-6" />
                <h3 className="text-2xl sm:text-3xl font-display text-white mb-4 leading-tight">
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

        {/* Bottom CTA */}
        <div className="mt-16 flex items-center justify-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            Join 400 professionals already learning →
          </a>
        </div>
      </div>
    </section>
  );
}
