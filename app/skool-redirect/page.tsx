"use client";

import { useEffect } from "react";

export default function SkoolRedirect() {
  useEffect(() => {
    window.location.href = "https://www.skool.com/claude-academy-5969";
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </main>
  );
}
