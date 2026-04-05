"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function CodeCopyEnhancer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const pres = container.querySelectorAll("pre");

    pres.forEach((pre) => {
      // Skip if already enhanced
      if (pre.querySelector(".copy-btn")) return;

      // Make pre relative for absolute button positioning
      pre.style.position = "relative";

      const btn = document.createElement("button");
      btn.className =
        "copy-btn absolute top-3 right-3 z-10 rounded-md bg-slate-700 hover:bg-slate-600 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors cursor-pointer";
      btn.textContent = "Copy";

      btn.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        const text = code ? code.textContent ?? "" : pre.textContent ?? "";
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied!";
        setTimeout(() => {
          btn.textContent = "Copy";
        }, 2000);
      });

      pre.appendChild(btn);
    });
  }, [children]);

  return <div ref={ref}>{children}</div>;
}
