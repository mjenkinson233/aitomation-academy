"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download the Workflows",
    titleHref: "#join",
    description:
      "Get 7 copy-paste Claude workflows instantly. Each one is designed for a specific job: research, writing, content creation, and decision-making.",
  },
  {
    number: "02",
    title: "Use Them in Your Work",
    titleHref: null,
    description:
      "No setup. No configuration. Just copy the prompt, paste it into Claude, and follow the workflow. Start saving time on day one.",
  },
  {
    number: "03",
    title: "Explore our community",
    titleHref: null,
    description:
      "Get access to the free Skool community. Share what you're building, get help when you're stuck, and see how others are using Claude.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-400" />
            <span className="text-sm font-medium tracking-wide text-orange-600 uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
            Three steps to start using Claude for real work
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Animated vertical line — extends through steps + terminal button */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-slate-200">
            <div
              className={`w-full bg-orange-400 transition-all duration-[1.5s] ease-out ${
                isVisible ? "h-full" : "h-0"
              }`}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex gap-8 sm:gap-12 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                } delay-${i}`}
              >
                {/* Dot */}
                <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border-2 border-orange-400 bg-white">
                  <span className="text-sm sm:text-base font-bold text-orange-600">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 sm:pt-3">
                  {step.titleHref ? (
                    <a
                      href={step.titleHref}
                      className="group inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-orange-500 hover:text-orange-600 cursor-pointer transition-colors mb-3"
                    >
                      {step.title}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                  )}
                  <p className="text-slate-500 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal button — centered on the line */}
          <div className={`relative mt-8 ${isVisible ? "animate-fade-up" : "opacity-0"} delay-2`}>
            <div className="absolute left-6 sm:left-8 top-0 -translate-x-1/2">
              <a
                href="https://www.skool.com/aitomation-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white cursor-pointer hover:bg-orange-600 transition-colors whitespace-nowrap"
              >
                Get Free Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            {/* spacer = button height so line ends under button */}
            <div className="h-11" />
          </div>
        </div>
      </div>
    </section>
  );
}
