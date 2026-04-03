"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to use Claude for{" "}
            <span className="text-orange-400">real work</span>?
          </h2>
          <p className="mb-10 text-lg text-slate-300 max-w-2xl mx-auto">
            Join 300+ professionals who are already saving time with practical Claude workflows. 
            No coding. No hype. Just real work output.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#join"
              className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 transition-all hover:shadow-lg"
            >
              Get the Free Workflow Starter
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            No credit card required. Instant access.
          </p>
        </div>
      </div>
    </section>
  );
}
