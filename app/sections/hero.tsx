"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm px-4 py-1.5">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-sm font-medium text-slate-600">
              300+ professionals already learning
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Claude for{" "}
            <span className="text-orange-600">Real Work</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 md:text-xl leading-relaxed">
            Practical workflows for non-technical professionals who want to think better,
            create faster, and turn expertise into output. No coding. No hype. Just Claude
            systems that fit the work you already do.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#join"
              className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white cursor-pointer hover:bg-orange-600 transition-colors"
            >
              Get the Free Workflow Starter
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-700 cursor-pointer hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              See What You Get
            </Link>
          </div>

          {/* Trust signal */}
          <p className="mt-6 text-sm text-slate-500">
            Join 300+ members. No credit card required.
          </p>
        </div>

        {/* Workflow preview */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-2 shadow-2xl">
            <div className="rounded-xl bg-slate-900 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-slate-400">Claude Workflow</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-slate-500">1</span>
                  <span className="text-purple-400">Input:</span>
                  <span className="text-slate-300">Raw research notes + voice memo</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">2</span>
                  <span className="text-blue-400">Process:</span>
                  <span className="text-slate-300">Claude extracts key insights, structures argument</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">3</span>
                  <span className="text-green-400">Output:</span>
                  <span className="text-slate-300">Polished draft, ready to publish</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">4</span>
                  <span className="text-orange-400">Time saved:</span>
                  <span className="text-slate-300">~3 hours per piece</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
