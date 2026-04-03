"use client";

import { Search, MessageSquare, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Download the Workflows",
    description: "Get 7 copy-paste Claude workflows instantly. Each one is designed for a specific job: research, writing, content creation, and decision-making.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Use Them in Your Work",
    description: "No setup. No configuration. Just copy the prompt, paste it into Claude, and follow the workflow. Start saving time on day one.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Join the Community",
    description: "Get access to the free Skool community. Share what you're building, get help when you're stuck, and see how others are using Claude.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Three simple steps to start using Claude for real work.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                <step.icon className="h-8 w-8 text-orange-600" />
              </div>
              <div className="mb-3 text-sm font-bold text-orange-600">
                Step {step.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
