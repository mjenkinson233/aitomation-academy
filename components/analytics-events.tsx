"use client";

import { useEffect } from "react";

export function AnalyticsEvents() {
  useEffect(() => {
    const cleanupFns: Array<() => void> = [];
    let observer: IntersectionObserver | null = null;

    const load = async () => {
      try {
        const { default: posthog } = await import("posthog-js");

        const tracked = new Set<number>();
        const marks = [25, 50, 75, 100];

        const onScroll = () => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

          marks.forEach((mark) => {
            if (pct >= mark && !tracked.has(mark)) {
              tracked.add(mark);
              posthog.capture("scroll_depth", { percent: mark });
            }
          });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        cleanupFns.push(() => window.removeEventListener("scroll", onScroll));

        document.querySelectorAll("a[href='/skool-redirect'], button[type='submit']").forEach((el) => {
          const onClick = () => {
            posthog.capture("cta_click", {
              text: (el.textContent || "").trim(),
            });
          };

          el.addEventListener("click", onClick);
          cleanupFns.push(() => el.removeEventListener("click", onClick));
        });

        const emailInput = document.getElementById("email");
        if (emailInput) {
          const onBlur = () => {
            const value = (emailInput as HTMLInputElement).value;
            if (value.length > 0) {
              posthog.capture("lead_form_started");
            }
          };

          emailInput.addEventListener("blur", onBlur);
          cleanupFns.push(() => emailInput.removeEventListener("blur", onBlur));
        }

        const form = document.querySelector("form");
        if (form) {
          const onSubmit = () => {
            posthog.capture("lead_form_submit_attempt");
          };

          form.addEventListener("submit", onSubmit);
          cleanupFns.push(() => form.removeEventListener("submit", onSubmit));
        }

        const joinSection = document.getElementById("join");
        if (joinSection) {
          let hasCapturedJoinView = false;

          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasCapturedJoinView) {
                  hasCapturedJoinView = true;
                  posthog.capture("lead_form_section_viewed");
                }
              });
            },
            { threshold: 0.5 }
          );

          observer.observe(joinSection);
        }
      } catch {
        return;
      }
    };

    load();

    return () => {
      cleanupFns.forEach((fn) => fn());
      observer?.disconnect();
    };
  }, []);

  return null;
}
