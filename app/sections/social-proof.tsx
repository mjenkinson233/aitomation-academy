"use client";

export function SocialProof() {
  return (
    <section className="relative py-10">
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="rounded-2xl bg-slate-900 px-8 py-10">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
            <div className="text-center py-6 sm:py-0">
              <div className="text-5xl font-bold text-white tracking-tight">700+</div>
              <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">Community Members</div>
            </div>
            <div className="text-center py-6 sm:py-0">
              <div className="text-5xl font-bold text-orange-400 tracking-tight">5+</div>
              <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">Hours Saved Per Week</div>
            </div>
            <div className="text-center py-6 sm:py-0">
              <div className="text-5xl font-bold text-white tracking-tight">Zero</div>
              <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">Coding Required</div>
            </div>
          </div>

          {/* Audience */}
          <div className="mt-8 pt-7 border-t border-slate-700 text-center">
            <span className="text-sm text-slate-500 uppercase tracking-widest">Built for&nbsp;&nbsp;</span>
            <span className="text-sm font-medium text-slate-300">
              Consultants · Marketers · Creators · Founders · Agencies
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
