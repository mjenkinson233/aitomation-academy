"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = {
  product: [
    { label: "Free Content System PDF", href: "#join" },
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "/skool-redirect" },
    { label: "YouTube", href: siteConfig.social.youtube },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: `mailto:${siteConfig.email}` },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Support", href: "/support" },
  ],
};

export function Footer() {
  return (
    <footer data-section="footer" className="border-t border-slate-200">
      {/* Prominent community CTA — top of footer */}
      <div className="bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-xl font-display text-white normal-case sm:text-2xl">
                Join 400+ people learning Claude
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Free community. No credit card required.
              </p>
            </div>
            <Link
              href="/skool-redirect"
              className="group inline-flex shrink-0 items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Join Free Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/creatives/aitomation_logo.png"
                alt="AItomation Academy"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-slate-900">AiTomation Academy</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              Claude for real work. Practical workflows for non-technical professionals.
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} AiTomation Academy. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              AITOMATION LLC · Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
