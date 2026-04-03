"use client";

import Image from "next/image";

const wins = [
  { src: "/images/creatives/wins/win1.png", alt: "Community win from member" },
  { src: "/images/creatives/wins/win2.png", alt: "Community win from member" },
  { src: "/images/creatives/wins/win3.png", alt: "Community win from member" },
  { src: "/images/creatives/wins/win4.png", alt: "Community win from member" },
];

export function CommunityWins() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Real Results from Real Members
          </h2>
          <p className="text-lg text-slate-600">
            These are actual wins shared in the community. No hype, no fabricated numbers.
            Just professionals using Claude in their real work.
          </p>
        </div>

        {/* Wins grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wins.map((win, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={win.src}
                alt={win.alt}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Want wins like these?{" "}
            <a href="#join" className="font-semibold text-orange-600 hover:text-orange-700">
              Get the free workflow starter →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
