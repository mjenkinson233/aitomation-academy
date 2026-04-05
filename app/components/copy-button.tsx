"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 z-10 rounded-md bg-slate-700 hover:bg-slate-600 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors cursor-pointer"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
