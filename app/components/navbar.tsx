"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header data-section="navbar" className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/creatives/aitomation_logo.png"
            alt="AItomation Academy"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden sm:inline text-lg font-semibold text-slate-900">AiTomation Academy</span>
        </Link>
        {/* Desktop nav — absolutely centered */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Blog
          </Link>
          <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            About
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-slate-500">
              400+ professionals already learning
            </span>
          </div>
          <Link
            href="/skool-redirect"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            Get Free Access
          </Link>
        </div>

        {/* Mobile — CTA only */}
        <div className="md:hidden">
          <Link
            href="/skool-redirect"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
          >
            Get Free Access
          </Link>
        </div>
      </div>
    </header>
  );
}
