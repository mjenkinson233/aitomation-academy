"use client";

import { LeadMagnetForm } from "../components/lead-magnet-form";
import { FileText, Check } from "lucide-react";

const benefits = [
  "7 copy-paste Claude workflows",
  "Save 5+ hours per week",
  "No coding required",
  "Instant download",
];

export function LeadMagnetSection() {
  return (
    <section id="join" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Value prop */}
            <div className="text-white">
              <div className="mb-6 inline-flex items-center rounded-full bg-orange-500/20 px-4 py-1.5">
                <FileText className="mr-2 h-4 w-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">
                  Free Download
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Get the{" "}
                <span className="text-orange-400">Claude Workflow Starter</span>
              </h2>

              <p className="mb-8 text-lg text-slate-300 leading-relaxed">
                The same workflows I use to research faster, write clearer, and turn 
                messy ideas into polished output. Copy-paste ready. No setup required.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-slate-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Form */}
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Get instant access
              </h3>
              <p className="mb-6 text-slate-600">
                Enter your details below and I&apos;ll send the workflows to your inbox.
              </p>
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
