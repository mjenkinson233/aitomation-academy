"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { List, X } from "lucide-react";

type TocItem = { id: string; text: string };

const NAVBAR_HEIGHT = 80;

export function BlogPostLayout({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);
  const [headings, setHeadings] = useState<TocItem[] | null>(null);
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile TOC overlay is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Extract h2 headings from rendered content and assign IDs
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const h2s = el.querySelectorAll("h2");
    const items: TocItem[] = [];

    h2s.forEach((h2) => {
      const text = h2.textContent ?? "";
      const id =
        h2.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      h2.id = id;
      items.push({ id, text });
    });

    setHeadings(items);
    if (items.length > 0) setActiveId(items[0].id);
  }, [children]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${NAVBAR_HEIGHT + 20}px 0px -65% 0px`, threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);
    setMobileOpen(false);
    isClickScrolling.current = true;

    const top =
      el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT - 20;
    window.scrollTo({ top, behavior: "smooth" });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }, []);

  return (
    <>
      {/* Mobile TOC — floating button + fullscreen overlay */}
      {headings && headings.length > 0 && (
        <div className="lg:hidden">
          {/* Floating button */}
          {!mobileOpen && (
            <button
              onClick={() => setMobileOpen(true)}
              className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg cursor-pointer"
            >
              <List className="h-4 w-4" />
              Contents
            </button>
          )}

          {/* Fullscreen overlay */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 bg-white flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                  On this page
                </p>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="space-y-1">
                  {headings.map(({ id, text }, i) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollTo(id)}
                        className={`flex items-start gap-3 w-full text-left py-3 cursor-pointer normal-case ${
                          activeId === id
                            ? "text-orange-600"
                            : "text-slate-500"
                        }`}
                      >
                        <span className={`text-xs font-medium mt-0.5 shrink-0 w-5 ${
                          activeId === id ? "text-orange-400" : "text-slate-300"
                        }`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base">
                          {text}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      )}

      <div className="lg:grid lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] lg:gap-10 xl:gap-16">
        {/* TOC sidebar — desktop */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              On this page
            </p>
            {headings === null ? (
              <ul className="space-y-1">
                {[120, 90, 140, 100, 110].map((w, i) => (
                  <li key={i}>
                    <div
                      className="h-4 rounded bg-slate-200 animate-pulse ml-3 my-2"
                      style={{ width: w }}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-1">
                {headings.map(({ id, text }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-colors duration-200 cursor-pointer normal-case ${
                        activeId === id
                          ? "border-orange-500 text-orange-600"
                          : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </aside>

        {/* Content */}
        <div ref={contentRef} className="min-w-0">
          {children}
        </div>
      </div>
    </>
  );
}
