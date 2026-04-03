"use client";

import { Users, Star, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "300+",
    label: "Community Members",
  },
  {
    icon: Zap,
    value: "5+",
    label: "Hours Saved Per Week",
  },
  {
    icon: Star,
    value: "0",
    label: "Coding Required",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <stat.icon className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust badges / logos could go here */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Built for professionals
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-50">
            <span className="text-lg font-semibold text-slate-700">Consultants</span>
            <span className="text-lg font-semibold text-slate-700">Marketers</span>
            <span className="text-lg font-semibold text-slate-700">Creators</span>
            <span className="text-lg font-semibold text-slate-700">Founders</span>
            <span className="text-lg font-semibold text-slate-700">Agencies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
