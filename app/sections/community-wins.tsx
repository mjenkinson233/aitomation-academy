"use client";

import Image from "next/image";

const wins = [
  { src: "/images/creatives/wins/win1.png", alt: "Community win from member" },
  { src: "/images/creatives/wins/win2.png", alt: "Community win from member" },
  { src: "/images/creatives/wins/win3.png", alt: "Community win from member" },
  { src: "/images/creatives/wins/win4.png", alt: "Community win from member" },
  { src: "/images/creatives/wins/win5.png", alt: "Community win from member" },
];

// Duplicate for seamless loop
const loopedWins = [...wins, ...wins];

export function CommunityWins() {
  return (
    <section data-section="community_wins" className="relative py-28 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-400" />
              <span className="text-sm font-medium tracking-wide text-orange-600 uppercase">
                Community Wins
              </span>
            </div>
            <h2 className="text-3xl font-display tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
              Real Results from Real Members
            </h2>
            <p className="mt-5 text-lg text-slate-500">
              These are actual wins shared in the community. No hype, no fabricated
              numbers. Just professionals using Claude in their real work.
            </p>
            <p className="mt-10 text-slate-600">
              Want wins like these?{" "}
              <a
                href="/skool-redirect"
                className="font-semibold text-orange-500 hover:text-orange-600 cursor-pointer transition-colors"
              >
                Get The Claude Content System free →
              </a>
            </p>
          </div>

          {/* Right — auto-scrolling carousel */}
          <div className="relative h-[480px] overflow-hidden rounded-2xl">
            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-100 to-transparent z-10 pointer-events-none" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-100 to-transparent z-10 pointer-events-none" />

            <div className="animate-scroll-up">
              {loopedWins.map((win, i) => (
                <div
                  key={i}
                  className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <Image
                    src={win.src}
                    alt={win.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
